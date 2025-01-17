
const routes = {
  // Dashboard (Home)
  dashboard: () => `
    <div class="space-y-6">
      <!-- Welcome Section -->
      <header class="flex flex-col gap-10 text-white font-semibold">
      <!-- Hero section with background image -->
      <div class="h-64 w-full rounded-lg bg-cover bg-center" 
           style="background-image: url('hero-background.png');">
        <div class="flex h-full flex-col items-center justify-between p-4">
          <!-- Glassmorphism card with event info -->
          <h2 class="glassmorphism max-w-[273px] rounded py-2 px-2 w-full text-center text-xl font-semibold">
            Welcome back!
          </h2>
          <!-- Time and date display -->
          <div class="flex flex-col gap-2">
            <h1 class="text-4xl font-extrabold lg:text-7xl">${time}</h1>
            <p class="text-lg font-medium text-sky-1 lg:text-2xl">${date}</p>
          </div>
        </div>
      </div>
    </header>
  
    <header class="bg-blue-800 text-white py-6">
    <div class="container mx-auto text-center">
      <h1 class="text-4xl font-bold">Assignment Submission Instructions</h1>
      <p class="text-lg mt-2">Follow these guidelines carefully to ensure successful submission.</p>
    </div>
  </header>

  <main class="container mx-auto my-10 p-6 bg-gray-900 shadow-lg rounded-lg">
    <!-- Submission Process -->
    <section>
      <h2 class="text-2xl font-bold text-blue-500 mb-4">Submission Process</h2>
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold text-gray-500">1. Digital Submission:</h3>
          <ul class="list-disc list-inside text-lg mt-2">
            <li>Email your PDF file to: <strong>[Insert Email Address]</strong>.</li>
            <li>
              Use the subject line: <strong>[Your Name] - [Assignment Title]</strong>.
            </li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-gray-500">2. Physical Submission (if required):</h3>
          <ul class="list-disc list-inside text-lg mt-2">
            <li>
              Print the assignment and submit it to my office before <strong>5:00 PM</strong> on the due date.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Rules to Follow -->
    <section class="mt-8">
      <h2 class="text-2xl font-bold text-blue-500 mb-4">Rules to Follow</h2>
      <div class="space-y-6">
        <div>
          <h3 class="text-xl font-semibold text-gray-500">1. Originality:</h3>
          <ul class="list-disc list-inside text-lg mt-2">
            <li>Plagiarism is strictly prohibited. Any copied content (including from classmates or online sources) will result in a <strong>zero score</strong>.</li>
            <li>Cite all references properly using <strong>APA</strong> or <strong>MLA</strong> format.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-gray-500">2. Discipline:</h3>
          <ul class="list-disc list-inside text-lg mt-2">
            <li>Maintain professional language and tone throughout your work.</li>
            <li>Avoid unnecessary illustrations or decorations unless requested.</li>
          </ul>
        </div>
        <div>
          <h3 class="text-xl font-semibold text-gray-500">3. Responsibility:</h3>
          <ul class="list-disc list-inside text-lg mt-2">
            <li>Double-check your work for errors (spelling, grammar, or formatting) before submission.</li>
            <li>
              Ensure the file is properly named as: <strong>[Your Name]_[Assignment Title].pdf</strong>.
            </li>
          </ul>
        </div>
      </div>
    </section>

    <!-- Important Notes -->
    <section class="mt-8">
      <h2 class="text-2xl font-bold text-blue-800 mb-4">Important Notes</h2>
      <p class="text-lg leading-relaxed">
        Failure to submit on time will lead to <strong>automatic disqualification</strong> unless you have valid proof of an emergency.
      </p>
      <p class="text-lg leading-relaxed mt-4">
        Seek clarification well in advance if you have any doubts or need help. <strong>Last-minute excuses will not be entertained.</strong>
      </p>
    </section>
  </main>
  
      <!-- Physics and Chemistry Cards -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <!-- Physics Card -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300" onclick="navigateToAssignments('physics')">
          <div class="flex items-center justify-between mb-4">
            <img src="profile.png" alt="Teacher Profile" class="rounded-full w-24 object-cover mr-4">
            <div>
              <h3 class="text-xl font-semibold text-white">Mr. Odejobi Abiola</h3>
              <p class="text-gray-400">Physics Teacher</p>
            </div>
          </div>
          <img src="physics.jpg" alt="Physics Image" class="w-full rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-white">Physics: The Foundation of the Universe</h3>
          <p class="text-gray-300 mb-4">Unveiling the mysteries of matter, energy, space, and time.</p>
          <div class="mb-4" id="physics-description">
             <section>
      <h2 class="text-2xl font-bold text-blue-800 mb-4">Overview</h2>
      <p class="text-sm text-gray-300 leading-relaxed">
        Physics is the branch of science that seeks to understand the fundamental principles governing the universe. It explores the behavior of matter, energy, space, and time, unveiling the intricate workings of the natural world. Rooted in observation, experimentation, and mathematical modeling, physics provides the tools to decipher phenomena ranging from the smallest subatomic particles to the vast expanses of the cosmos.
      </p>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold text-blue-500 mb-4">Branches of Physics</h2>
      <ul class="list-disc list-inside text-sm text-gray-300 leading-relaxed space-y-2">
        <li>
          <strong>Classical Mechanics:</strong> Studies the motion of objects under the influence of forces, introducing concepts like velocity, acceleration, and energy.
        </li>
        <li>
          <strong>Electromagnetism:</strong> Examines the relationship between electric and magnetic forces, leading to groundbreaking technologies like telecommunications and computing.
        </li>
        <li>
          <strong>Thermodynamics:</strong> Deals with heat, work, and energy transfer, introducing principles like conservation of energy and entropy.
        </li>
        <li>
          <strong>Quantum Mechanics:</strong> Delves into the peculiar behavior of particles at the atomic level, fueling advancements in semiconductors and quantum computing.
        </li>
        <li>
          <strong>Relativity:</strong> Redefines our understanding of space, time, and gravity, explaining phenomena such as time dilation and black holes.
        </li>
        <li>
          <strong>Nuclear and Particle Physics:</strong> Investigates atomic nuclei and fundamental particles, leading to discoveries like the Higgs boson.
        </li>
        <li>
          <strong>Astrophysics and Cosmology:</strong> Explores celestial bodies and the universe's origins, addressing topics like dark matter and the Big Bang.
        </li>
      </ul>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold text-blue-500 mb-4">Applications of Physics</h2>
      <p class="text-sm  text-gray-300 leading-relaxed">
        Physics is a powerful tool for innovation. Its principles have enabled transformative advancements in:
      </p>
      <ul class="list-disc list-inside text-sm text-gray-300 leading-relaxed space-y-3">
        <li><strong>Transportation:</strong> From automobiles to spacecraft.</li>
        <li><strong>Energy Generation:</strong> Solar panels, wind turbines, and nuclear reactors.</li>
        <li><strong>Medical Advances:</strong> MRI machines, X-rays, and radiation therapy.</li>
        <li><strong>Communication Systems:</strong> Fiber optics, satellites, and wireless networks.</li>
      </ul>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold text-blue-500 mb-4">Conclusion</h2>
      <p class="text-sm leading-relaxed">
        Physics is the language of nature, bridging theory and application. Whether explaining the rainbow’s spectrum, designing sustainable technologies, or probing the universe's mysteries, physics stands as a testament to human curiosity and ingenuity. For anyone seeking to unravel the secrets of existence or shape the future, physics is an indispensable guide.
      </p>
    </section>
          </div>
          <button class="text-blue-500 text-sm" onclick="toggleDescription('physics')">More/Less</button>
        </div>

        <!-- Chemistry Card -->
        <div class="bg-gray-800 p-6 rounded-lg shadow-lg cursor-pointer hover:shadow-xl transition duration-300" onclick="navigateToAssignments('chemistry')">
          <div class="flex items-center justify-between mb-4">
            <img src="profile.png" alt="Teacher Profile" class="rounded-full w-24 object-cover mr-4">
            <div>
              <h3 class="text-xl font-semibold text-white">Mr. Odejobi Abiola</h3>
              <p class="text-gray-400">Chemistry Teacher</p>
            </div>
          </div>
          <img src="chemistry.jpg" alt="Chemistry Image" class="w-full rounded-lg mb-4">
          <h3 class="text-xl font-semibold text-white">Chemistry: The Science of Matter and Transformation</h3>
          <p class="text-gray-300 mb-4">An introduction to chemical reactions in organic compounds.</p>
          <div class="text-gray-300 text-sm mb-4 overflow-hidden" id="chemistry-description">
            <section>
      <h2 class="text-2xl font-bold text-green-500 mb-4">Overview</h2>
      <p class="text-sm text-gray-300 leading-relaxed">
        Chemistry is the branch of science that studies the composition, properties, and behavior of matter. Often referred to as the "central science," chemistry bridges the gap between physics and biology, providing a deeper understanding of the materials and substances that make up the world around us. It explores how atoms and molecules interact, combine, and change, revealing the intricate processes that underpin both natural and synthetic phenomena.
      </p>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold text-green-500 mb-4">Branches of Chemistry</h2>
      <ul class="list-disc list-inside text-sm text-gray-300 leading-relaxed space-y-3">
        <li>
          <strong>Analytical Chemistry:</strong> Identifies the composition of substances, both qualitatively and quantitatively, using techniques like spectroscopy and chromatography.
        </li>
        <li>
          <strong>Organic Chemistry:</strong> Explores the structure, properties, and reactions of carbon-containing compounds, underpinning fields like pharmaceuticals and materials science.
        </li>
        <li>
          <strong>Inorganic Chemistry:</strong> Focuses on non-carbon compounds, such as metals, minerals, and ceramics, essential for materials science and catalysis.
        </li>
        <li>
          <strong>Physical Chemistry:</strong> Combines principles of physics and chemistry to study the behavior of matter at the atomic and molecular levels, including thermodynamics and kinetics.
        </li>
        <li>
          <strong>Biochemistry:</strong> Investigates the chemical processes within living organisms, essential for understanding health, disease, and biotechnology.
        </li>
        <li>
          <strong>Environmental Chemistry:</strong> Addresses chemical processes in the environment, tackling issues like pollution, climate change, and sustainability.
        </li>
        <li>
          <strong>Industrial Chemistry:</strong> Focuses on large-scale production of chemicals, such as plastics, fertilizers, and pharmaceuticals.
        </li>
      </ul>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold text-green-500 mb-4">Applications of Chemistry</h2>
      <p class="text-sm text-gray-300 leading-relaxed">
        Chemistry is an indispensable tool for innovation, driving advancements in:
      </p>
      <ul class="list-disc list-inside text-sm text-gray-30 leading-relaxed space-y-3">
        <li><strong>Medicine:</strong> Development of life-saving drugs, vaccines, and diagnostic tools.</li>
        <li><strong>Agriculture:</strong> Creation of fertilizers, pesticides, and genetically modified crops to enhance food production.</li>
        <li><strong>Energy:</strong> Advancements in battery technology, renewable fuels, and energy storage systems.</li>
        <li><strong>Materials Science:</strong> Design of polymers, alloys, and nanomaterials for cutting-edge technologies.</li>
        <li><strong>Environmental Solutions:</strong> Innovations in waste management, water purification, and carbon capture.</li>
      </ul>
    </section>

    <section class="mt-8">
      <h2 class="text-2xl font-bold text-green-500 mb-4">Conclusion</h2>
      <p class="text-sm text-gray-300 leading-relaxed">
        Chemistry reveals the secrets of the natural world and fuels innovation across industries. Whether it’s unlocking the molecular mechanisms of life, designing sustainable technologies, or understanding the building blocks of the universe, chemistry stands as a cornerstone of science and progress.
      </p>
    </section
          </div>
          <button class="text-green-500 text-sm" onclick="toggleDescription('chemistry')">More/Less</button>
        </div>
      </div>

      <div class="bg-gray-800 pt-6 rounded-lg shadow-lg overflow-hidden">
  <h3 class="text-xl font-semibold mb-4 ml-6 text-white" id="future-features-title">Future Features</h3>
  <ul class="text-gray-300 grid grid-cols-1 md:grid-cols-3 gap-3" id="future-features-list">
    <li class="flex items-center gap-3 hover:bg-gray-700 p-5 rounded-lg transition duration-300 ease-in-out" id="feature-1">
      <ion-icon name="aperture-outline" class="flex-shrink-0 text-blue-500 text-2xl"></ion-icon>
      <span>Interactive quizzes to test knowledge on assignments</span>
    </li>
    <li class="flex items-center gap-3 hover:bg-gray-700 p-5 rounded-lg transition duration-300 ease-in-out" id="feature-2">
      <ion-icon name="notifications-outline" class="flex-shrink-0 text-blue-500 text-2xl"></ion-icon>
      <span>Push notifications for upcoming assignment deadlines</span>
    </li>
    <li class="flex items-center gap-3 hover:bg-gray-700 p-5 rounded-lg transition duration-300 ease-in-out" id="feature-3">
      <ion-icon name="people-outline" class="flex-shrink-0 text-blue-500 text-2xl"></ion-icon>
      <span>Integrated study groups with live chat</span>
    </li>
    <li class="flex items-center gap-3 hover:bg-gray-700 p-5 rounded-lg transition duration-300 ease-in-out" id="feature-4">
      <ion-icon name="bar-chart-outline" class="flex-shrink-0 text-blue-500 text-2xl"></ion-icon>
      <span>Progress tracking and achievement badges</span>
    </li>
    <li class="flex items-center gap-3 hover:bg-gray-700 p-5 rounded-lg transition duration-300 ease-in-out" id="feature-5">
      <ion-icon name="mic-outline" class="flex-shrink-0 text-blue-500 text-2xl"></ion-icon>
      <span>Voice-based assistant to answer quick assignment questions</span>
    </li>
  </ul>
</div>


      <div class="bg-gray-800 pt-6 px-5 rounded-lg shadow-lg">
  <h3 class="text-xl font-semibold mb-6 text-white text-center">Statistics</h3>
  <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
    
    <!-- Total Assignments -->
    <div onclick="navigateTo('analytics')" class="stat-card flex flex-col items-center p-6 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 rounded-lg shadow-xl transition transform hover:scale-105 ease-in-out duration-300">
      <ion-icon name="book-outline" class="text-white text-4xl mb-4"></ion-icon>
      <p class="text-3xl font-semibold text-white" id="total-assignments">0</p>
      <p class="text-sm text-gray-200">Total Assignments</p>
    </div>
    
    <!-- Completed Assignments -->
    <div onclick="navigateTo('analytics')" class="stat-card flex flex-col items-center p-6 bg-gradient-to-r from-green-500 to-teal-500 rounded-lg shadow-xl transition transform hover:scale-105 ease-in-out duration-300">
      <ion-icon name="checkmark-circle-outline" class="text-white text-4xl mb-4"></ion-icon>
      <p class="text-3xl font-semibold text-white" id="completed-assignments">0</p>
      <p class="text-sm text-gray-200">Completed Assignments</p>
    </div>
    
    <!-- Upcoming Assignments -->
    <div onclick="navigateTo('analytics')" class="stat-card flex flex-col items-center p-6 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg shadow-xl transition transform hover:scale-105 ease-in-out duration-300">
      <ion-icon name="alarm-outline" class="text-white text-4xl mb-4"></ion-icon>
      <p class="text-3xl font-semibold text-white" id="upcoming-assignments">0</p>
      <p class="text-sm text-gray-200">Upcoming Assignments</p>
    </div>
    
  </div>
</div> 
 <footer class="bg-blue-900 text-white py-4 mt-10">
    <div class="container mx-auto text-center">
      <p class="text-sm">© 2025 ctrotech tutor Insights. All Rights Reserved.</p>
    </div>
      </footer>
  `,

assignments: (subject = null) => {
    if (subject) {
      return `
        <div class="space-y-6">
          <h2 class="text-2xl text-center font-semibold mb-4">Assignments for ${subject.charAt(0).toUpperCase() + subject.slice(1)}</h2>
          <div id="assignmentsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
        </div>
       <footer class="bg-blue-900 text-white py-4 mt-10">
    <div class="container mx-auto text-center">
      <p class="text-sm">© 2025 ctrotech tutor Insights. All Rights Reserved.</p>
    </div>
      </footer>
      `;
    } else {
      return `
        <div class="space-y-6">
          <h2 class="text-2xl font-semibold text-center mb-4">Assignments (Physics and Chemistry)</h2>
          <div id="assignmentsContainer" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4"></div>
        </div>
       <footer class="bg-blue-900 text-white py-4 mt-10">
    <div class="container mx-auto text-center">
      <p class="text-sm">© 2025 ctrotech tutor. All Rights Reserved.</p>
    </div>
      </footer>
      `;
    }
  },
  
  // Profile
  profile: () => `
    <div class="text-center">
      <h2 class="text-2xl font-semibold mb-4">Your Profile</h2>
      <p>Upcoming feature</p>
    </div>
   <footer class="bg-blue-900 text-white py-4 mt-10">
    <div class="container mx-auto text-center">
      <p class="text-sm">© 2025 ctrotech tutor. All Rights Reserved.</p>
    </div>
      </footer>
  `,
  
  // analytics
  analytics: () => `
    <div class="text-center">
      <h2 class="text-2xl font-semibold mb-4">Your Analytics</h2>
      <p>Uocoming feature</p>
    </div>
   <footer class="bg-blue-900 text-white py-4 mt-10">
    <div class="container mx-auto text-center">
      <p class="text-sm">© 2025 ctrotech tutor. All Rights Reserved.</p>
    </div>
      </footer>
  `,
};

export default routes;
