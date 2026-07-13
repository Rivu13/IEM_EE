import { imageRange } from "../utils/imageRange";

export const workshops = [
  {
    id: "matlab-power-systems",
    title: "Workshop on Modeling and Analysis of Power Systems in MATLAB",
    date: "10th - 11th January, 2026",
    organizer: "IET-IEM",
    expert: "Dr. Mala De",
    images: imageRange("work", 1, 5, "jpeg"),
    paragraphs: [
      "A two days workshop on “Modeling and Analysis of Power Systems in MATLAB” was successfully organized on 10th and 11th January, 2026, from 10:00 AM to 12:00 PM, by IET-IEM On Campus in collaboration with the Department of Electrical Engineering (EE) and the Department of Electrical & Electronics Engineering (EEE). The workshop aimed to strengthen the conceptual understanding of power systems and to introduce students to modern computational tools for analysis and simulation using MATLAB. The workshop sessions were conducted by Dr. Mala De, Associate Professor, Department of Electrical Engineering, NIT Patna, who shared her extensive academic and research experience with the participants. The topics covered during the workshop included the fundamentals of power systems, modeling of power generation systems, such as three-phase sources and DC sources, transmission line modeling, classification and modeling of different types of electrical loads, and load flow analysis techniques. Each topic was explained in a structured manner, starting from basic principles and gradually progressing to practical implementation.",
    ],
  },
  {
    id: "future-mobility",
    title:
      "Workshop on Future Mobility: EV Power Train, ADAS and Grid Interaction",
    date: "8th - 10th  September, 2025",
    organizer: "IEI-IEM Students’ Chapter and IEEE IAS SBC",
    images: imageRange("work", 6, 2, "jpeg"),
    paragraphs: [
      "The Department of Electrical Engineering successfully conducted a 3-Day hands-on Workshop on Future Mobility: EV Powertrain, ADAS & Grid Interaction from 8th-10th September, 2025 in MATLAB-SIMULATION platform in association with IET-IEM on Campus & IEEE IAS SBC.",
    ],
    topics: [
      "EV Powertrain Models",
      "⁠Battery Management System",
      "⁠ADAS Modules - Lane Departure, AEB, ACC",
      "Grid-forming based EV power control",
    ],
  },
  // {
  //   id: 'v2g-charging',
  //   title: 'Workshop on Designing EV Smart Charging Scheduling Based on V2G Control Mode',
  //   date: '',
  //   organizer: '',
  //   images: imageRange('work', 8, 2, 'jpeg'),
  //   paragraphs: ['Add workshop details here.'],
  // },
  // ...Array.from({ length: 10 }, (_, i) => {
  //   const n = i + 4
  //   return {
  //     id: `workshop-${n}`,
  //     title: `Workshop ${n}`,
  //     date: '',
  //     organizer: '',
  //     images: imageRange('work', 10 + i * 3, 3, 'jpeg'),
  //     paragraphs: ['Add workshop details here.'],
  //   }
  // }),
  {
    id: "v2g-charging",
    title:
      "Workshop on Designing EV Smart Charging Scheduling Based on V2G Control Mode",
    date: "29th - 30th January, 2025",
    organizer:
      "IEEE IAS SBC and technically co-sponsored by Joint IEEE-CSS IMS",
    expert: "Mr. Jagendra Agrahari, Mr. Aditya Tiwari",
    images: imageRange("work", 8, 5, "jpeg"),
    paragraphs: [
      "The Department of Electrical Engineering, in collaboration with IEEE IAS SBC and technically co-sponsored by Joint IEEE-CSS IMS, successfully conducted a two-day workshop on ‘Designing EV Smart Charging Scheduling Based on V2G Control Mode Using MATLAB/Simulink’ from 29.03.2025 to 30.03.2025. The event featured expert sessions by Mr. Aditya Tiwari and Mr. Jagendra Agrahari, two Industry person from EV Industry, offering participants valuable insights into electric vehicle modeling and smart charging strategies.",
    ],
  },

  {
    id: "workshop-4",
    title: "LIVE MATLAB Workshop",
    date: "15th January, 2025",
    organizer: "IEI-IEM Students’ Chapter (Electrical Division)",
    expert: " Mr. Pickon Majumdar",
    images: imageRange("work", 13, 2, "jpeg"),
    paragraphs: [
      "The MATLAB workshop, organized by the IEI-IEM Students’ Chapter (Electrical division), took place on 15th January 2025. This event aimed to provide students with hands-on experience in MATLAB, focusing on its applications in machine learning, camera control, linear regression, and other advanced topics. Mr. Pickon Majumdar is a Software Application Engineer at Mathworks with a master’s degree in electrical engineering from Jadavpur University. His research experience includes real-time data acquisition using sensors and microcontrollers, cancer prediction, and drone modelling. His expertise lies in IoT, Machine Learning, Digital Image Processing, Data Analytics, AI, and Robotics.",
    ],
  },

  {
    id: "workshop-5",
    title:
      "Short Term Training Program on Grid Integration of Inverter-based Resources",
    date: "27 th - 31 st December, 2024",
    organizer: "IEI-IEM Students’ Chapter (Electrical Division)",
    speaker:
      "Mr. Imran Khan, PMRF, IIT Bombay, Senior Power Systems Engineer, Tesla",
    images: imageRange("work", 15, 3, "jpeg"),
    paragraphs: [
      `The Short Term Training Program on "Grid Integration of Inverter-based Resources" was organized by the IEI-IEM Students’ Chapter (Electrical Division) and held from the 27th to the 31st of December, 2024. This program was aimed at equipping participants with an in-depth understanding of integrating inverter-based resources into modern electrical grids. The sessions combined theoretical insights with practical applications to foster a robust learning environment.`,
    ],
  },

  {
    id: "workshop-6",
    title: "IEM-UEM Aeromodelling Workshop and Drone Exhibition",
    date: "13th October, 2023",
    organizer: "IEM Aeromodelling Club",
    images: imageRange("work", 18, 2, "jpeg"),
    paragraphs: [
      `IEM Aeromodelling Club in collaboration with Department of CSE(AIML), EE, ME and BSH along with UEM Kolkata jointly organized IEM-UEM Aeromodelling Workshop and Drone Exhibition on 13.10.2023 at Institute of Engineering & Management, Kolkata. The program is inaugurated by Mr. Bebeto Ally at CII Auditorium. The Aeromodelling workshop is organized by students Nirban Roy (Student of CSE(IoTCSBT) Dept., 2022 Batch) and Soumanka Sarkar (Student of EE Dept., 2020 Batch). 
      
      The workshop is attended by approx. 100 students. The workshop was a comprehensive learning experience for participants. We began by delving into the world of drones, covering their types, history, and real-world applications. As we progressed, participants were introduced to the various components of a drone, from the frame to the flight controller, gaining a deep understanding of the role of each part. The workshop also highlighted key technical terms like motor KV rating and LiPo battery C rating, making it easier for attendees to navigate the drone landscape. The hands-on assembly session allowed participants to put their newfound knowledge into practice, giving them a tangible sense of the assembly process. Furthermore, the introduction to Mission Planner and its calibration process provided an insight into the software side of drone operation.`,
    ],
  },

  {
    id: "workshop-7",
    title:
      "2 Day Workshop on MATLAB based Modern Control and Signal Processing Applications",
    date: "26th-27th of August, 2023",
    organizer:
      "Department of Electrical Engineering, IEM in association with IET IEM Student’s Chapter",
    speaker:
      "Prof. (Dr.) Jayati Dey, Associate Professor, Department of Electrical Engineering, NIT Durgapur",
    images: imageRange("work", 20, 2, "jpeg"),
    paragraphs: [
      "The event, held online via Zoom Meeting, aimed to provide participants with a comprehensive understanding of the practical applications of control systems and signal processing using MATLAB as well as analysing the response signal of a system such as electrical and electronic circuits, mechanical systems etc. The workshop commenced with an overview of control systems' diverse applications, highlighting their relevance in shaping various aspects of modern life. Dr. Jayati Dey emphasized that control systems play a pivotal role in industries such as manufacturing, robotics, aerospace, and more. Two specific examples were discussed in detail: liquid level control systems and traffic control systems. As the workshop centred around MATLAB-based applications, participants were introduced to the MATLAB Control System Toolbox. Dr. Dey guided them through its functionalities, demonstrating how it can be utilized to analyse, design, and simulate control systems effectively. This practical session enabled attendees to gain hands-on experience and confidence in utilizing MATLAB for control system tasks. Participants learnt to write differential equations depicting the dynamics of physical systems, realise the system with block diagram representation, simulate the clock diagram to observe the output responses and represent a system in transfer function and verify the step responses.",
    ],
  },

  {
    id: "workshop-8",
    title: "2 days Workshop on Machine & Deep Learning",
    date: "22nd-23rd October, 2022",
    organizer:
      "Department of Electrical Engineering, IEM in association with IET IEM Student’s Chapter",
    speaker:
      "Sabyasachi Mukhopadhyay (Google Developer Expert in Machine Learning Research scholar at IIT Kharagpur Assistant Professor at BIMS Kolkata)",
    images: imageRange("work", 22, 4, "jpeg"),
    paragraphs: [
      "The session commenced with the speaker talked about how AI is shaping modern-age technology by solving real-world problems. He explained some real-world applications of AI in sectors such as shopping, healthcare, finance, smart technology, social media, security, etc. In the 2nd session, he discussed about the random Number Generator in R where the user can generate random numbers for various applications such as representation of an event taking various values, or samples with random numbers, facilitated by functions such as runif() and set.seed() in R programming that enable the user to generate random numbers and control the generation process. Day 2, 1st Half commenced with the Principal Component Analysis to analyse Iris dataset. ggfortify package was installed to interpret PCA objects of inbuilt iris dataset in R.  In day 2, 2nd Half KNN Algorithm was discussed  where k nearest neighbors is a simple algorithm that stores all available cases and classifies new cases by a majority vote of its k neighbors. With this, the hands-on session on Machine & Deep Learning came to an end. Approximately, 50 students from IEM had participated in the event. ",
    ],
  },

  {
    id: "workshop-9",
    title:
      "2 days Workshop on Introduction to MATLAB Application in Engineering",
    date: "October 15 & 16, 2022",
    organizer:
      "Department of Electrical Engineering, IEM in association with IEI IEM Student’s Chapter",
    speaker:
      "Mr. Pickon Majumdar, Software Application Engineer, ELMAX Systems and Solutions, Kolkata, India",
    images: imageRange("work", 26, 4, "jpeg"),
    paragraphs: [
      "IEI-IEM Students’ Chapter (Electrical Engineering Department) organized a technical workshop on Introduction to MATLAB Application in Engineering on 15 & 16 October, 2022. A total of 55 Students participated even though the workshop was organized on a weekend. We were pleased to have Mr. Pickon Majumdar as our workshop guide to educate us on the topic. Mr. Majumdar is a Software Application Engineer, ELMAX Systems and Solutions, Kolkata, India. Business Partner of MathWorks, 3DExperience, Solidworks, Rohde & Schwarz. Besides, Mr. Majumdar is also a visiting faculty of the Govt College of Engineering & Ceramic Technology, Kolkata, India. Students personally gained so much from the lectures as they were not only listening but also seeing everything in practical. Mr. Majumdar was so cooperative and student-friendly. FAQs were arranged after the sessions were over which too helped in clearing all the necessary doubts. After the event a feedback form was also shared to get the valuable input from the participants on how to improve in future.",
    ],
  },

  {
    id: "workshop-10",
    title: "2 Days Workshop on SENSORS BASED IOT",
    date: "March 6th-7th, 2021",
    organizer:
      "Department of Electrical Engineering, IEM in association with IET IEM Student’s Chapter",
    speaker:
      "Dr.Tapan Kumar Jain, Professor, Head of the Department in ELECTRONICS AND COMMUNICATION ENGINEERING at Indian Institute of Information technology, Nagpur",
    images: imageRange("work", 30, 3, "jpeg"),
    paragraphs: [
      "The topic of the workshop included realizing the application of sensors in hands on projects, incorporating the knowledge of Microcontroller and its interfacing between microcontroller and circuit, understanding the importance of programming and executing the output through sensors Gaining hands on knowledge on Smart sensors and its working. The workshop started with words from in house professors and dignitaries from IET. It was followed by a session on definition, importance, scope of IoT by the invited speaker. The second session of the same day was a hands-on session where the students were made aware of usage of Arduino Uno board and some sensors like Temperature sensor & Soil sensor. The session ended with some questions & answers. On the next day i.e., 7th March 2021, started with the 3rd session of the workshop. It was an informative & interesting session about the smart cities. The fourth season was a hands-on session where the students were made aware of usage and connectivity in node MCU and BLYNK APP. The workshop ended with a valedictory session and words from the faculty coordinators. The brain of loT, Analog and Digital Sensor World, Hands-on Arduino IDE, Hands-on Node MCU and BLNYK app was explained and demonstrated to the students throughout the two days of the workshop. About 55 students had attended the workshop, where 49 of them were IET members and rest were non IET.",
    ],
  },

  {
    id: "workshop-11",
    title:
      "Workshop on Design and Development of OCR (Optical Character Recognition) Android App",
    date: "28th August to 30th August, 2020",
    organizer: "Online Mode",
    images: imageRange("work", 33, 1, "jpeg"),
    paragraphs: [
      `Throughout modern economic history it has been seen that entrepreneurial endeavors are playing a very crucial role and App development is one of the most necessary components of a successful startup or a startup idea itself. So, considering its importance, IEI-IEM Students’ Chapter of Electrical Engineering Department in collaboration with applex.in, a startup by students of IEM which provides Business Solutions and Technical Support has organized a 3 Day workshop on "Designing and Development of OCR (Optical Character Recognition) Android App from 28th to 30th of August, 2020 from 5:00pm to 8:00pm on YouTube live with intermediate doubt clearing sessions on Google Meet.

The workshop began with a welcome address from Prof. Dr. Tapas Kumar Datta, Head of the Department, Electrical Engineering and was presided over by Prof. Debashis Jana, Faculty Advisor, IEI-IEM Students’ Chapter, Electrical Engineering Department.

Internship opportunities were also provided to top 6 participants who performed exceptionally well throughout the span of the workshop.

DAY 1

● Introduction to Android and getting Started with android studio discussed -Ms. Ankita De

● Idea and intro about layout designing -Mr. Saikat Choudhury

DAY 2

● Introduction to OCR, it's application and constructing the layout for our OCR app - Ms. Madhurima Mukherjee

● Working with App Permissions and working with images from gallery and Cropping Image - Mr. Prajata Samanta

DAY 3

● Diving Deeper into Android. Implementation of Google Vision API - Ms. Sarbari Choudhury

● Finishing the app and giving an overview of other applications and future prospects- Mr. Sourajit Basu`,
    ],
  },

  {
    id: "workshop-12",
    title: "WORKSHOP ON ELECTRICAL DRAWING IN AUTOCAD",
    date: "3rd August, 2019",
    organizer: "Management House, IEM Kolkata",
    images: imageRange("work", 34, 1, "jpeg"),
    paragraphs: [
      "A workshop was organized by EE department in association with CADD Centre, Laketown. Students of EE and EEE department attended the workshop. The training included the basics of AutoCAD along with a briefing of its usabilities, minute details about the AutoCAD Electrical toolbar, Handling 2D models, creation of circuit diagrams, working conditions and specifications on symbols. There was a focussed design oriented talk over the session. With a firm grip over 2D drawing, the discussion shifted over to the introduction of more sophisticated 3D modelling structures such as transformers.",
    ],
  },
];


/*
1. Add speaker field
2. Add venue field
3. Spacing between the paragraph
4. Check the bullet point
*/
