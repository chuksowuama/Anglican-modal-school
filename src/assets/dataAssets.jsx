import carouImg1 from "../assets/campus/Artstudio.webp"
import carouImg2 from "../assets/campus/CampuHospital.webp"
import carouImg3 from "../assets/campus/Campusdinning.webp"
import carouImg4 from "../assets/campus/CampusHostel.webp"
import carouImg5 from "../assets/campus/CampusLibrary.webp"
import carouImg6 from "../assets/campus/campusTechnologyLab.webp"
import carouImg7 from "../assets/campus/HomeeconomisAccessment.webp"

import Avatar1 from "../assets/avatar3.png";
import Avatar2 from "../assets/avatar6.png";



export const sideMenu = [
  {
    id: 1,
    label: "Home",
    to: "/",
  },
  {
    id: 2,
    label: "About Us",
    to: "/about-us",
      children: [
        { label: "History", to: "/about-us?section=history" },
        { label: "Mission & Vision", to: "/about-us?section=mission" },
        { label: "Leadership", to: "/about-us?section=leadership" },
        { label: "Accreditations & Awards", to: "/about-us?section=accreditation" },
        { label: "Campus", to: "/about-us?section=campus" },
      ]
  },
  {
    id: 3,
    label: "Academics",
    to: "/academics",
    children: [
      { label: "Overview", to: "/academics?section=overview" },
      { label: "Curriculum Details", to: "/academics?section=Curriculum" },
      { label: "Advanced Programs", to: "/academics?section=AdvancedPrograms" },
      { label: "Support Services", to: "/academics?section=SupportServices" },
      { label: "Assessment Methods", to: "/academics?section=AssessmentMethods" },
    ],
  },
  {
    id: 4,
    label: "Admissions",
    to: "/Admission",
  },
  {
    id: 5,
    label: " Events",
    to: "/Events",
    children: [
      { label: "Upcoming Events", to: "/Events?section=UpcomingEvents" },
      { label: "Past Events Archive", to: "/Events?section=PastEvents" },
    ],
  },
  {
    id: 6,
    label: "Gallery",
    to: "/Gallery",
  },
  {
    id: 7,
    label: "ContactUs",
    to: "/ContactUs",
  },
];

export const Carouseldata = [
  { id: 1, image: carouImg1, carouText: "event1" },
  { id: 2, image: carouImg2, carouText: "event2" },
  { id: 3, image: carouImg3, carouText: "event3" },
  { id: 4, image: carouImg4, carouText: "event4" },
];

export const historyTimeline = [
  {
    year: '[Year]',
    title: 'Founding',
    description: "AnglicanModal School was established as a modest faith-based initiative by the Anglican Mission to provide holistic Christian education, grounded in christian faith.starting with a handfull of students and a single classroom, the school quickly became a beacon of learning in the community, known for nuturing both excellence and moral character"
  },
  {
    year: '[+5 years]',
    title: 'Early Growth',
    description: 'In its early years, the school focused on foundational literacy and numeracy, blending standard curriculum with spiritual development. As enrollment grew,the school expanded in infrastructure and student body, new classrooms were built, extracurricular programs were introduced, and the school began to attract passionate educators dedicated to its mission. '
  },
  {
    year: '[+10 years]',
    title: 'Alumni Success & Recognition',
    description: 'By its first decade, AnglicanModal had expanded to include both primary and secondary levels, with its students sitting for major national examinations like WAEC and NECO. The school earned recognition for its exceptional results and well-rounded graduates. Soon after, notable alumni began making strides in various professional fields—from medicine and engineering to arts and public service.'
  },
  {
    year: '[+15 years]',
    title: 'Modernization',
    description: 'The school has celebrated many defining moments: the inauguration of annual cultural festivals, first inter-school sports competitions, and science fairs that fostered innovation and teamwork. As the digital age emerged, AnglicanModal embraced educational technology—introducing computer labs, smart classrooms, and e-learning platforms to equip students with 21st-century skills.'
  },
  {
    year: 'Today',
    title: 'A Flourishing Institution',
    description: 'Over the decades, the school has grown from humble beginnings into a state-of-the-art campus, featuring libraries, science labs, creative studios, and serene green spaces. Yet, it has never strayed from its founding values of faith, service, discipline, and integrity.'
  }
];

export const leadershipTeam = [
  {
    name: "Dr. Amelia Rhodes",
    title: "Principal",
    photo: Avatar2,
  },
  {
    name: "Mr. Jamal Carter",
    title: "Vice Principal – Academics",
    photo: Avatar1,
  },
  {
    name: "Mrs. Linh Tran",
    title: "Vice Principal – Student Affairs",
    photo:Avatar2 ,
  },
  {
    name: "Ms. Zoe Marshall",
    title: "Director of Curriculum",
    photo:Avatar2,
  },
  {
    name: "Mr. David Osei",
    title: "Head of Science Department",
    photo:Avatar1,
  },
  {
    name: "Mrs. Priya Mehra",
    title: "Head of Humanities",
    photo: Avatar2,
  },
  {
    name: "Mr. Santiago Ruiz",
    title: "Director of Operations",
    photo: Avatar1,
  },
  {
    name: "Ms. Fatima Bello",
    title: "Admissions Officer",
    photo:Avatar2,
  },
  {
    name: "Mr. Kenji Yamamoto",
    title: "IT Coordinator",
    photo:Avatar1,
  },
  {
    name: "Mrs. Grace Ndlovu",
    title: "Head of EaAvatar2vatar2",
    photo:Avatar2,
  },
  {
    name: "Dr. Marcus Levine",
    title: "Counseling & Wellness Lead",
    photo:Avatar2,
  },
  {
    name: "Ms. Natalie Brooks",
    title: "Art & Creative Director",
    photo: Avatar2
  },
 
];

export const studentLeadership = [
  {
    name: "Emily Johnson",
    title: "Head Girl",
    photo:Avatar2
  },
  {
    name: "Aiden Kim",
    title: "Head Boy",
    photo:Avatar1
  },
  {
    name: "Zara Ahmed",
    title: "Student Council President",
    photo:Avatar2
  },
  {
    name: "Noah Chen",
    title: "Events Coordinator",
    photo:Avatar1
  },
  {
    name: "Sophia Mensah",
    title: "Prefect – Academics",
    photo: Avatar2
  },
  {
    name: "Lucas Pereira",
    title: "Prefect – Sports",
    photo:Avatar1
  },
  {
    name: "Amara Okeke",
    title: "Prefect – Community Service",
    photo:Avatar2
  },
  {
    name: "Elijah Thompson",
    title: "Tech & Innovation Lead",
    photo: Avatar1
  },
]

import acredimg1 from "../assets/32301-removebg-preview.png"
import acredimg2 from "../assets/britishCouncil-removebg-preview.png"
import acredimg3 from "../assets/Federal-Ministry-of-Education-removebg-preview.png"
import acredimg4 from "../assets/cambridegeassessment-removebg-preview.png"
import acredimg5 from "../assets/waecLogo-removebg-preview.png"

export const accreditationAndAwards = {
  accreditations: [
    {
      id: 1,
      name: "National Ministry of Education",
      logo: acredimg3, // placeholder path
      description: "Officially recognized by the National Ministry of Education as a certified institution.",
    },
    {
      id: 2,
      name: "West African Examination Council (WAEC)",
      logo: acredimg5,
      description: "Accredited center for WAEC examinations and curriculum.",
    },
    {
      id: 3,
      name: "Cambridge Assessment International Education",
      logo: acredimg4,
      description: "Authorized to offer Cambridge International curriculum and exams.",
    },
    {
      id: 4,
      name: "British Council Nigeria",
      logo: acredimg2,
      description: "Partners with British Council for language proficiency and global programs.",
    },
  ],

  awards: [
    {
      id: 1,
      title: "Best Secondary School in Science & Innovation",
      year: 2023,
      organization: "National Education Excellence Awards",
      image: acredimg1,
      description: "Awarded for outstanding student performance in national science competitions.",
    },
    {
      id: 2,
      title: "Most Disciplined School",
      year: 2022,
      organization: "State Educational Board",
      image: acredimg1,
      description: "Recognized for maintaining exceptional student discipline and ethics.",
    },
    {
      id: 3,
      title: "Excellence in Leadership Development",
      year: 2021,
      organization: "Youth Empowerment Forum",
      image:acredimg1,
      description: "For implementing programs that nurture young leaders within the school system.",
    },
    {
      id: 4,
      title: "100% WAEC Pass Rate",
      year: 2023,
      organization: "WAEC Nigeria",
      image: acredimg1,
      description: "Achieved a perfect pass rate among graduating students in WAEC examinations.",
    },
  ],
};
export const CampusCarouseldata = [
  { id: 1, image: carouImg1},
  { id: 2, image: carouImg2},
  { id: 3, image: carouImg3},
  { id: 4, image: carouImg4},
  { id: 5, image: carouImg5},
  { id: 6, image: carouImg6},
  { id: 7, image: carouImg7},
];

export const curriculumData = {
  coreSubjects: [
    {
      title: "English Language & Literature",
      description: "Develops communication, comprehension, creative writing, and critical analysis skills."
    },
    {
      title: "Mathematics",
      description: "Covers arithmetic, algebra, geometry, and problem-solving for logical thinking."
    },
    {
      title: "Science (Biology, Chemistry, Physics)",
      description: "Encourages inquiry and discovery across life, physical, and chemical sciences."
    },
    {
      title: "Social Studies",
      description: "Teaches history, geography, civics, and cultural awareness to understand the world."
    },
    {
      title: "Religious & Moral Education",
      description: "Promotes values, ethics, and character development through faith-based teachings."
    }
  ],
  enrichmentPrograms: [
    {
      title: "ICT & Digital Literacy",
      description: "Equips students with essential tech skills for the digital age."
    },
    {
      title: "Visual & Performing Arts",
      description: "Encourages creativity through art, drama, and music programs."
    },
    {
      title: "Physical Education",
      description: "Focuses on fitness, teamwork, and sportsmanship through regular PE."
    },
    {
      title: "Clubs & Electives",
      description: "Offers options like debate, coding, gardening, or language clubs."
    },
    {
      title: "Environmental Studies",
      description: "Engages students with sustainability, nature, and conservation activities."
    }
  ],
  assessmentApproach: [
    {
      title: "Continuous Assessment",
      description: "Ongoing evaluations through quizzes, projects, and participation."
    },
    {
      title: "Project-Based Learning",
      description: "Students explore real-world challenges through collaborative tasks."
    },
    {
      title: "Formal Examinations",
      description: "Periodic tests to assess comprehension and retention."
    },
    {
      title: "Progress Reports",
      description: "Termly updates on academic, behavioral, and emotional progress."
    },
    {
      title: "Exam Prep Workshops",
      description: "Structured sessions to boost readiness for high-stakes assessments."
    }
  ],
  stages: [
    { id:0,
      title: "Early Years Curriculum",
      description: "Focuses on foundational literacy, numeracy, play-based learning, social-emotional development, and fine motor skills."
    },
    { id:1,
      title: "Middle School Curriculum",
      description: "Emphasizes subject integration, critical thinking, problem-solving, and interactive learning in preparation for senior-level academics."
    },
    { id:2,
      title: "Senior/Secondary Curriculum",
      description: "Offers specialization in core and elective subjects. Prepares students for standardized exams, leadership roles, and university readiness."
    }
  ]
};

export const advancedProgramsData =[
  {  
    icon:"🔬",
    title: "STEM Enrichment Track",
    description:
      "A hands-on program focusing on advanced science, technology, engineering, and mathematics. Includes robotics, coding, lab experimentation, and interdisciplinary challenges."
  },
  { 
    icon:"🔬",
    title: "Creative Arts Excellence",
    description:
      "Designed for students passionate about visual arts, music, theater, and design. Includes portfolio development, exhibitions, and mentorship from local artists."
  },
  { 
    icon: "🎭",
    title: "Leadership & Public Speaking",
    description:
      "Equips students with communication, debate, and organizational skills through student council, Model UN, and leadership retreats."
  },
  { 
    icon:"🎤",
    title: "Language & Global Studies",
    description:
      "Offers intensive language learning (e.g., French, Spanish) and global issues research. Includes exchange programs and global citizenship projects."
  },
  { 
    icon: "🌍",
    title: "Innovation & Entrepreneurship",
    description:
      "Encourages problem-solving and business-minded thinking. Students build real-world projects, pitch ideas, and engage with local entrepreneurs."
  }
]

export const Steps = [
  {
    title: "Regular Curriculum",
    description: "Core academic foundation in subjects like English, Math, Science, and Social Studies.",
    icon: "🧒",
  },
  {
    title: "Enrichment Opportunities",
    description: "Participation in clubs, special workshops, competitions, and hands-on activities.",
    icon: "📈",
  },
  {
    title: "Advanced Program Entry",
    description: "Apply or be recommended by teachers for specialized academic tracks.",
    icon: "🎯",
  },
  {
    title: "Outcomes & Achievements",
    description: "Leadership roles, science fairs, national contests, and academic certificates.",
    icon: "🏅",
  },
];

export const achievers = [
  {
    name: "Sarah Okon",
    program: "STEM Honors Track",
    award: "National Science Olympiad Winner",
  },
  {
    name: "David Eze",
    program: "Humanities Enrichment",
    award: "Regional Essay Champion",
  },
  {
    name: "Maria Adeyemi",
    program: "Arts & Design Program",
    award: "State Art Expo Winner",
  },
  {
    name: "Joseph Musa",
    program: "Senior Academic Track",
    award: "Valedictorian",
  },
];

export const servicesData = [
  {
    icon: "🧠",
    title: "Counseling & Guidance",
    description: "Emotional support, mentorship, and career advice for all students.",
    details: {
      overview: "We provide personalized emotional and academic support...",
      access: "Students can walk in or book appointments via the portal...",
      hours: "Mon–Fri | 8:00 AM – 3:30 PM",
      staff: "Ms. Olufunke Adebayo – funke.adebayo@anglicanmoodal.sch.ng",
      testimonial: "Ms. Funke helped me find clarity and balance...",
    }
  },
  {
    icon: "🏥",
    title: "Health & Wellness",
    description: "On-campus nurse, health checks, and hygiene awareness programs.",
    details: {
      overview: "We provide basic medical attention, first aid, and health checks for all students.",
      access: "Visit the school clinic during operating hours.",
      hours: "Mon–Fri: 8am–2pm",
      staff: "Nurse Folake (School Nurse)",
      testimonial: "‘They helped me when I had a fever during exams. Very caring!’ – Bola, Year 9"
    }
  },
  {
    icon: "📘",
    title: "Academic Tutoring",
    description: "Remedial sessions, peer tutoring, and after-school academic help.",
    details: {
      overview: "Our tutoring program provides help in key subjects such as Math, English, and Science through peer and teacher-led sessions.",
      access: "Students can sign up via their class teacher or the Academic Office.",
      hours: "Mon–Thu: 3pm–5pm",
      staff: "Mr. Ade (Academic Coordinator)",
      testimonial: "‘Thanks to the tutoring, I improved two grades in just a term!’ – Ayo, Year 10"
    }
  },
  {
    icon: "🤝",
    title: "Peer Mentorship",
    description: "Buddy system and student ambassador programs for easier adjustment.",
    details: {
      overview: "Senior students mentor younger peers to help them navigate school life, study techniques, and social challenges.",
      access: "Sign-up through the Student Affairs office or during orientation week.",
      hours: "Varies by availability – usually after school or during breaks.",
      staff: "Miss Ada (Student Affairs Coordinator)",
      testimonial: "‘My mentor helped me adjust and even taught me how to organize my study schedule.’ – Femi, Year 7"
    }
  },
  {
    icon: "🧑‍🏫",
    title: "Special Needs Support",
    description: "Inclusive education plans and individualized academic resources.",
    details: {
      overview: "We offer Individualized Education Plans (IEPs), speech therapy, and classroom accommodations for students with learning or developmental challenges.",
      access: "Schedule a consultation with our Inclusion Coordinator via the Admin Office.",
      hours: "Mon–Fri: 8am–4pm (Appointments recommended)",
      staff: "Mrs. Ife (Inclusion & Support Specialist)",
      testimonial: "‘They helped my son thrive in class with a learning plan that really worked.’ – Parent, Year 5"
    }
  },
  {
    icon: "🛠️",
    title: "Library & Tech Help",
    description: "Help with devices, digital platforms, and academic resources.",
    details: {
      overview: "Our library offers print and digital resources, while tech assistants help with research tools and accessing the e-library.",
      access: "Visit the library desk or use the student portal to access digital materials.",
      hours: "Library: Mon–Fri 7:30am–5pm | Tech Help: Mon–Fri 9am–3pm",
      staff: "Mrs. Grace (Librarian), Mr. Kay (Tech Assistant)",
      testimonial: "‘I learned how to properly cite sources and use research tools. Super helpful!’ – Ruth, Year 11"
    }
  },
];


export const assessmentData = {
  intro: "At Anglican Moodal, we believe assessments are not just a measure of academic performance...",
  methods: [
    {
      title: "Continuous Assessment",
      icon: "📝",
      description: "Frequent quizzes, assignments, and teacher feedback throughout the term."
    },
    {
      title: "Project-Based Learning",
      icon: "💼",
      description: "Real-world projects and collaborative tasks to apply learning."
    },
    {
      title: "Formal Exams & Feedback",
      icon: "📊",
      description: "Structured term-end exams with in-depth analysis and personalized feedback."
    }
  ],
  tools: [
    "Rubrics with clear grading criteria",
    "Peer & self-assessment reflections",
    "Portfolio reviews",
    "Digital tools for quizzes (e.g., Google Forms)"
  ],
  testimonial: {
    quote: "I used to fear tests, but now I see them as a way to grow...",
    author: "Tolu, Year 8"
  }
};


// ----------------------------------Event pages data-------------------------------------------

export const upcomingEvents = [
  { 
    image: stem,
    title: "Inter-School Science Exhibition",
    date: "May 18, 2025",
    time: "10:00 AM",
    location: "Main Auditorium",
    description: "An exciting showcase of student innovation and scientific curiosity.",
    action: "RSVP Now"
  },
  { 
    image: stem,
    title: "Annual Art & Culture Fair",
    date: "June 1, 2025",
    time: "12:00 PM",
    location: "School Grounds",
    description: "Experience the colors, crafts, and culture of Anglican Moodal.",
    action: "More Details"
  },
  {  
    image: stem,
    title: "Parent-Teacher Conference",
    date: "June 15, 2025",
    time: "9:00 AM",
    location: "Classroom Blocks",
    description: "Strengthening our partnership in every child’s academic journey.",
    action: "Book Slot"
  }
]


import sportimg from  "../assets/interhouseSport.webp"
import Christmassimg from  "../assets/christmass.webp"
import stem from "../assets/StemFest.webp"

export const pastEvents = [
  {
    title: "STEM Discovery Day",
    date: "March 22, 2025",
    location: "Innovation Lab & Auditorium",
    summary: "A full-day event showcasing student projects in science, technology, engineering, and mathematics through exhibitions and interactive sessions.",
    highlights: [
      "Robotics showcase and coding demos",
      "Guest talk from a NASA engineer",
      "Science fair with awards for innovation"
    ],
    image: stem
  },
  {
    title: "Sports Day 2025",
    date: "February 10, 2025",
    location: "Sports Field",
    summary: "A full day of friendly athletic competition and school spirit.",
    highlights: [
      "Track and field events",
      "Tug-of-war and sack race",
      "Parents vs. Teachers football match"
    ],
    image: sportimg
  },
  {
    title: "Christmas Concert & Fair",
    date: "December 15, 2024",
    location: "Main Hall & Grounds",
    summary: "An evening of music, drama, and festive community fun.",
    highlights: [
      "Student orchestra performance",
      "Drama club nativity play",
      "Charity food & gift stalls"
    ],
    image: Christmassimg
  }
]
export const contactform = [
  { id: 1, icon:"fa-solid fa-location-dot" ,info:"olusola oriokuta agric ikorodu lagos"},
  { id: 2, icon:"fa-solid fa-envelope",info:"Goldstarz845@gmail.com"},
  { id: 3, icon:"fa-solid fa-phone",info:"+"+2349022542838},
];


import galleryimg1 from "../assets/violinPlayers.webp"
import galleryimg2 from "../assets/STEAM-FEST-7-480x298.webp"
import galleryimg3 from "../assets/STEAM-FEST-17-480x298.webp"
import galleryimg4 from "../assets/STEAM-FEST-19-480x298.webp"
import galleryimg5 from "../assets/sport.webp"
export const galleryImages = [
  {
    src: galleryimg1,
    alt: "Cultural Day Event",
    caption: "Celebrating diversity on Cultural Day",
  },
  {
    src:galleryimg2,
    alt: "Science Fair",
    caption: "Innovative projects during our annual Science Fair",
  },
  {
    src:galleryimg5,
    alt: "Sports Day",
    caption: "Energy and team spirit at the Inter-house Sports",
  },
  {
    src:galleryimg3,
    alt: "Learning Environment",
    caption: "Engaging and student-centered learning spaces",
  },
  {
    src:galleryimg4 ,
    alt: "Learning Environment",
    caption: "Engaging and student-centered learning spaces",
  },
  
]