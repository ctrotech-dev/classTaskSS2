import renderMathJax from './main.js';

const assignments = {
  physics: [
    { 
      title: "Basic Physics Concepts", 
      subject: "Physics", 
      dueDate: "2025-01-20", 
      question: "1. What did you understand by the word <b>physics</b>.",
      hint: "Think about what physics tries to explain about the universe, focusing on the interactions of matter and energy."
    },
    { 
      title: "Basics Physics Concepts", 
      subject: "Physics", 
      dueDate: "2025-01-20", 
      question: "2. Distinguish between scalar and vector quantities with examples.",
      hint: "One involves only magnitude, while the other includes direction. Consider examples like speed vs velocity."
    },
    { 
      title: "Fundanental and Derived Quantities", 
      subject: "Physics", 
      dueDate: "2025-01-20", 
      question: "3. List the seven fundanental quantities in the SI system along with their units.",
      hint: "Start with the most basic measurements we use, such as length, time, and mass."
    },
    { 
      title: "Fundanental and Derived Quantities", 
      subject: "Physics", 
      dueDate: "2025-02-20", 
      question: "4. Explain why speed is considered a derived quantity.",
      hint: "Speed is calculated using two fundamental quantities —what are they?."
    },
    { 
      title: "Speed, Velocity, and Acceleration", 
      subject: "Physics", 
      dueDate: "2025-02-10", 
      question: "5. A car travels 120 km north in 2 hours and 60 km south in the next hour. Calculate: <li>Total distance traveled</li> <li>Average speed</li> <li>Displacement</li> <li>Average velocity</li>",
      hint: "For each calculation, think of distance as the total traveled path and displacement as the shortest straight line. Use the formulas for average speed and velocity."
    },
    { 
      title: "Speed, Velocity, and Acceleration", 
      subject: "Physics", 
      dueDate: "2025-02-20", 
      question: "6. A body starting from rest accelerates uniformly at 5 m/s² for 8 seconds. Find the final velocity and the distance covered.",
      hint: "Use the equations of motion: v = u + at and s = ut + 1<small>/</small>2at<sup>2</sup>. Remember, the body starts from rest (u = 0).."
    },
    { 
      title: "Fundanental and Derived Quantities", 
      subject: "Physics", 
      dueDate: "2025-02-20", 
      question: "7. The density of a substance is 500kg/m³. Identify its SI unit and write it in terms of fundamental units.",
      hint: "Break down the unit kg/m³ into the basic quantities of mass and length."
    },
    { 
      title: "Speed, Velocity, and Acceleration", 
      subject: "Physics", 
      dueDate: "2025-02-20", 
      question: "8. Differentiate between speed and velocity with suitable examples.",
      hint: "Speed is how fast, while velocity tells how fast and in which direction."
    },
    { 
      title: "Speed, Velocity, and Acceleration", 
      subject: "Physics", 
      dueDate: "2025-02-20", 
      question: "9. A particle moves along a straight line with a velocity given by v(t), where v is in m/s and t in seconds. Find the acceleration at t = 4s.",
      hint: "Differentiate v(t) to get a(t). Substitute t = 4s into the derived formula."
    },
    { 
      title: "Units and Measurement", 
      subject: "Physics", 
      dueDate: "2025-02-20", 
      question: "10. Identify the dimensions of force and express them in terms of mass (M), length (L), and time (T).",
      hint: "Force depends on mass and acceleration. Write out the formula and find their dimensions."
    },
  ],
  chemistry: [
    { 
      title: "Basics of Chemistry", 
      subject: "Chemistry", 
      dueDate: "2025-01-20", 
      question: "1. How can you differentiate between physical and chemical change?",
      hint: "No hint."
    },
    { 
      title: "Matter and Its States", 
      subject: "Chemistry", 
      dueDate: "2025-01-20", 
      question: "2. What are the three main states of matter? And how do they differ in terms of shape, volume and particle movement.",
      hint: "Consider how the particles are arranged and how they move in their state."
    },
    { 
      title: "Matter and Its Properties", 
      subject: "Chemistry", 
      dueDate: "2025-02-20", 
      question: "3. What is the difference between physical and chemical properties?",
      hint: "No hint."
    },
    { 
      title: "Elements, Compounds, and Mixtures", 
      subject: "Chemistry", 
      dueDate: "2025-02-20", 
      question: "4. Define elements, compounds, and mixtures. Provide one example for each.",
      hint: "Give a definition for eacg and give their examples respectively."
    },
    { 
      title: "Matter and Its Properties", 
      subject: "Chemistry", 
      dueDate: "2025-02-20", 
      question: "5. Identify whether the following are physical or chemical changes: <li>Melting of ice</li> <li>Burning of wood</li> <li>Dissolving sugar in water</li> <li>Rusting of iron</li>",
      hint: "No hint."
    },
    { 
      title: "Separation Techniques", 
      subject: "Chemistry", 
      dueDate: "2025-02-20", 
      question: "6. Explain how the process of evaporation can be used to separate a solute from a solvent.",
      hint: "Think about what happens when a solvent evaporates, leaving the solute behind."
    },
    { 
      title: "Separation Techniques", 
      subject: "Chemistry", 
      dueDate: "2025-02-20", 
      question: "7. How does filtration work, and when is it used?",
      hint: "Consider what happens when you pour a mixture through a filter, and what the filter is meant to separate."
    },
    { 
      title: "Separation Techniques", 
      subject: "Chemistry", 
      dueDate: "2025-02-20", 
      question: "8. List and describe at least three methods for separating mixtures.",
      hint: "Think about how different techniques work for separating solid-liquid mixtures, liquids with different boiling points, or components based on size."
    },
    { 
      title: "Elements, Compounds, and Mixtures", 
      subject: "Chemistry", 
      dueDate: "2025-02-20", 
      question: "9. What is the difference between a homogeneous and heterogeneous mixture? Provide examples.",
      hint: "No hint."
    },
    { 
      title: "Matter", 
      subject: "Chemistry", 
      dueDate: "2025-02-20", 
      question: "10. What is the difference between mass and weight?",
      hint: "No Hint."
    },
  ],
};

export default assignments;