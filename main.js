import routes from "./routes.js";
import assignments from "./assignments.js";

const content = document.getElementById("content");
const navButtons = document.querySelectorAll(".nav-btn");
const now = new Date();

// Format the current time and date
const time = now.toLocaleTimeString("en-US", { hour: "2-digit", minute: "2-digit" });
const date = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(now);

window.time = time;
window.date = date;

let currentRoute = "dashboard";

// Main navigation function
function navigateTo(route, subject = null) {
  currentRoute = route;
  setActiveNavButton(route);
  renderRoute(route, subject);
}

// Render the current route
function renderRoute(route, subject = null) {
  if (!routes || !routes[route]) {
    console.error(`Route "${route}" is not defined.`);
    return;
  }

  // Render the appropriate route content
  content.innerHTML = typeof routes[route] === "function" ? routes[route](subject) : routes[route];
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Additional route-specific logic
  if (route === "assignments") {
    loadAssignments(subject);
  }

  if (route === "dashboard") {
    attachDashboardListeners();
  }

  // Re-render MathJax for dynamically added LaTeX content
  renderMathJax();
}

// Render MathJax formulas only if LaTeX content is detected
function renderMathJax(content) {
  // Regex pattern to detect LaTeX delimiters like ... or ...
  const latexPattern = /\\(.*?)\\|\\(.*?)\\|\\frac|\\sqrt|\\begin{.*?}|\\end{.*?}/;

  if (latexPattern.test(content)) {
    if (window.MathJax && MathJax.typesetPromise) {
      MathJax.typesetPromise()
        .then(() => console.log("MathJax rendering complete"))
        .catch((err) => console.error("MathJax rendering error:", err));
    }
  } else {
    console.log("No LaTeX content detected.");
  }

  return content;
}
// Load assignments dynamically
function loadAssignments(subject = null) {
  const container = document.getElementById("assignmentsContainer");
  if (!container) {
    console.error("Assignments container not found.");
    return;
  }

  const filteredAssignments = subject
    ? assignments[subject.toLowerCase()] || []
    : [...assignments.physics, ...assignments.chemistry];

  container.innerHTML = filteredAssignments.length
    ? filteredAssignments
        .map(
          (item) => `
          <div class="bg-gray-800 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300">
            <h3 class="text-xl font-semibold text-white mb-2">${item.title}</h3>
            <p class="text-gray-300 text-sm">Subject: <span class="font-medium">${item.subject}</span></p>
            <p class="text-sm text-gray-400">Due: <span class="font-medium">${item.dueDate}</span></p>
            <div class="mt-4 bg-gray-700 p-4 rounded-lg shadow-inner">
              <p class="text-lg font-semibold text-gray-100">Question:</p>
              <p class="text-gray-200 text-base mt-2">${renderMathJax(item.question)}</p>
            </div>
            <div class="mt-4 bg-gray-700 p-4 rounded-lg shadow-inner">
              <p class="text-lg font-semibold text-gray-100">Hint:</p>
              <p class="text-gray-200 text-base mt-2 italic">${renderMathJax(item.hint)}</p>
            </div>
            <div class="mt-4 flex items-center justify-end">
              <button class="bg-indigo-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500">
                View Details
              </button>
            </div>
          </div>`
        )
        .join("")
    : `<div class="flex flex-col items-center justify-center p-6 text-center text-gray-400">
         <svg class="w-12 h-12 mb-4 text-gray-500" fill="none" stroke="currentColor" stroke-width="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
           <path stroke-linecap="round" stroke-linejoin="round" d="M9 13h6m2 8H7a4 4 0 01-4-4V7a4 4 0 014-4h10a4 4 0 014 4v10a4 4 0 01-4 4z"></path>
         </svg>
         <h2 class="text-lg font-semibold text-gray-500">No Assignments Found</h2>
         <p class="mt-2 text-sm text-gray-400">
           We couldn't find any assignments for <span class="font-semibold text-gray-300">"${subject || "all subjects"}"</span>.
         </p>
         <p class="mt-1 text-sm text-gray-500">
           Please check back later or select a different subject.
         </p>
       </div>`;

  // Re-render MathJax for dynamically added LaTeX content
  renderMathJax(container.innerHTML);
}

// Attach event listeners for the dashboard
function attachDashboardListeners() {
  document.querySelectorAll(".stat-card").forEach((card) => {
    card.addEventListener("click", () => navigateTo("analytics"));
  });
}

// Event listener for navigating to assignments
function navigateToAssignments(subject) {
  navigateTo("assignments", subject);
}
window.navigateToAssignments = navigateToAssignments;

function setActiveNavButton(activeRoute) {
  navButtons.forEach((button) => {
    const route = button.dataset.route;
    const icon = button.querySelector("ion-icon");

    if (route === activeRoute) {
      button.classList.add("text-blue-500");
      button.classList.remove("text-gray-500");

      const iconName = icon.getAttribute("name").replace("-outline", "");
      icon.setAttribute("name", iconName);
    } else {
      button.classList.remove("text-blue-500");
      button.classList.add("text-gray-500");

      const iconName = icon.getAttribute("name");
      if (!iconName.endsWith("-outline")) {
        icon.setAttribute("name", `${iconName}-outline`);
      }
    }
  });
}

// Attach event listeners for navigation buttons
navButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const route = button.dataset.route;
    navigateTo(route);
  });
});

// Initialize the application
setActiveNavButton("dashboard");
renderRoute(currentRoute);

export default renderMathJax;