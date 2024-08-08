import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  java,
  quantum,
  python,
  opencv,
  meta,
  level2,
  alabama,
  temple,
  wsc,
  warwick_ai,
  physics_olympiad,
  warwick,
  odu,
  starbucks,
  tesla,
  shopify,
  carrent,
  kanye,
  drone,
  finance,
  convolutional_image,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Web Development",
    icon: web,
  },
  {
    title: "Theoretical Physics",
    icon: mobile,
  },
  {
    title: "Machine Learning",
    icon: backend,
  },
  {
    title: "Quantum Computing",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Qiskit",
    icon: nodejs,
  },
  {
    name: "Java",
    icon: java,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Python",
    icon: python,
  },
];

const experiences = [
  {
    title: "Nuclear Physics Research Intern",
    company_name: "Temple University",
    icon: temple,
    iconBg: "#383E56",
    date: "Jun 2024 - Present",
    points: [
      "Investigated hadron structures using lattice QCD for numerical simulations, focusing on analyzing data to determine the energy spectrum of momentum-boosted states of the pion.",
    ],
  },
  {
    title: "Quantitative Research Intern",
    company_name: "Level2",
    icon: level2,
    iconBg: "#E6DEDD",
    date: "Jun 2024 - Present",
    points: [
      "Completed practical training in quantitative trading, technical analysis, strategy research, and intraday trading of US equities.",
      "Developed and deployed automated trading strategies and competed in virtual trading challenges.",
    ],
  },
  
  {
    title: "Visiting Scholar",
    company_name: "Hauser Research Group, University of Alabama",
    icon: alabama,
    iconBg: "#383E56",
    date: "Sep 2022 - Present",
    points: [
      "Work with the Hauser Research Group on the design of low entropy alloys for atomically ordered complex materials, using computationial density functional theory via Quantum Espresso to study the crystalline and electronic structure of novel Heusler compounds.",
    ],
  },
  {
    title: "Head of Programming",
    company_name: "Warwick Student Cinema",
    icon: wsc,
    iconBg: "#E6DEDD",
    date: "Mar 2022 - Present",
    points: [
      "Responsible for booking all films, maintaining professional relationships with over 40 film distributors & training new projectionists.",
      "Created an award-nominated programme that increased attendance by 150% resulting in the cinema's most financially successful year since 2016.",
    ],
  },
  {
    title: "Grader",
    company_name: "Online Physics Olympiad",
    icon: physics_olympiad,
    iconBg: "#E6DEDD",
    date: "Aug 2023 - Present",
    points: [
      "Developed solutions for and graded the final paper of the Physics Olympiad covering Astrodynamics, Complex Analysis and General Relativity.",
    ]
  },
  {
    title: "Physics Student Ambassador",
    company_name: "University of Warwick",
    icon: warwick,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jun 2024",
    points: [
      "Represented the Physics Department at open days by liaising with prospective students, and directing tours of campus.",
    ],
  },
  {
    title: "Head of Talks",
    company_name: "Warwick Artificial Intelligence",
    icon: warwick_ai,
    iconBg: "#E6DEDD",
    date: "Oct 2021 - Dec 2022",
    points: [
      "Organized and hosted talks and interviews from leading AI researchers.",
      "Taught a course on Python and wrote articles about Quantum Machine Learning and the use of Generative AI to prove theorems in mathematics.",
    ],
  },
  {
    title: "Undergraduate Research Intern",
    company_name: "Old Dominion University",
    icon: odu,
    iconBg: "#E6DEDD",
    date: "Oct 2022 - Jun 2024",
    points: [
      "Investigated and authored a research paper on utilizing machine learning algorithms to classify nucelear physics optics patterns from spectrometers at Jefferson Laboratory.",
    ],
  },


];

const testimonials = [
  {
    title: "University",
    second_testimonial: " with a Bachelor of Science (with Honours) in Mathematics and Physics.",
    testimonial:
      "I graduated from the ",
    name: "University of Warwick",
    societies: "Activities and Societies: Warwick AI, Warwick Robotics, Warwick Student Cinema, Warwick Calisthenics.",
    awards: "Awards and Achievements: Awarded Warwick Global Excellence Scholarship (£39000), Elected Head of Programming at Warwick Student Cinema (22-23 and 23-24), Elected Head of Talks at Warwick Artificial Intelligence (21-22 and 22-23).",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    title: "High School",
    second_testimonial: " receiving A*A*A*A in Further Mathematics, Mathematics, Chemistry and Physics.",
    testimonial:
      "I completed Cambridge International A Levels at ",
    name: "St John's College",
    societies: "Activities and Societies: Wind Band, Saxophone quartet, Classic Film Club, Library Monitor, Current Affairs Club. ",
    awards: "Awards and Achievements: Awarded Cambridge Academic Honours, Invited to participate in the ABRSM Global High Scorer Concert, Elected Head of Music for my House, Ranked 5th out of 50 students, Received silver certificate in English Olympiad 2020, Top in Biology 2018. ",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    title: "Miscellaneous",
    second_testimonial: " , achieving  a final grade of 96%.",
    fourth_testimonial: " focusing on quantum simulations using noisy intermediate-scale quantum hardware.",

    fifth_testimonial: "I competed in the ", 
    sixth_testimonial: " and earned an Intermediate Badge for completing 4/5 of the quantum programming challenges.",

    testimonial:
      "I completed the 2021 ",
    third_testimonial: "I completed the 2022 ",
    name: "Qiskit Global Summer School on Quantum Machine Learning",
    second_name: "Qiskit Global Summer School on Quantum Simulations",
    third_name: "IBM Quantum Challenge",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];


const projects = [
  {
    name: "Convolutional Neural Networks for Nuclear Physics Research",
    description:
      "Used Neural Networks to classify spectrometer optics patterns.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },

    ],
    image: convolutional_image,
    source_code_link: "https://github.com/becauseimz/ODU-REYES-Research",
  },
  {
    name: "Gesture Controlled Drone",
    description:
      "Used Pose-Estimation to control the movement of a drone.",
    tags: [
      {
        name: "TensorFlow",
        color: "blue-text-gradient",
      },
      {
        name: "OpenCV",
        color: "green-text-gradient",
      },

    ],
    image: drone,
    source_code_link: "https://github.com/becauseimz/drone",
  },
  {
    name: "Machine Learning for Financial Sentiment Analysis",
    description:
      "Used NLP to interpret & classify financial statements.",
    tags: [
      {
        name: "Perceiver IO",
        color: "blue-text-gradient",
      },

    ],
    image: finance,
    source_code_link: "https://github.com/Becauseimz",
  },
  {
    name: "KanyAI West",
    description:
      "I am currently coding a program that raps and sounds similar to Kanye West.",
    tags: [
      {
        name: "PyTorch",
        color: "blue-text-gradient",
      },
    ],
    image: kanye,
    source_code_link: "https://github.com/Becauseimz",
  },
];

export { services, technologies, experiences, testimonials, projects };