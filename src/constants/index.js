import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    //typescript,
    html,
    css,
    reactjs,
    python,
    ai,
    pytorch,
    //redux,
    //tailwind,
    //nodejs,
    mongodb,
    git,
    figma,
    docker,
    aws,
    //meta,
    //starbucks,
    //tesla,
    //shopify,
    job,
    carrent,
    jobit,
    agning,
  spotifyetl,
  gptproject,
    tripguide,
    //threejs,
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
      title: "Artificial Intelligence",
      icon: web,
    },
    {
      title: "Data Science",
      icon: mobile,
    },
    {
      title: "Web/App Development",
      icon: backend,
    },
    {
      title: "Cloud",
      icon: creator,
    },
  ];
  
  const technologies = [

    {
      name : "python",
      icon: python
    },
    {
      name : "AI",
      icon: ai 
    },
    {
      name : "PyTorch",
      icon : pytorch
    },
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
      name: "React JS",
      icon: reactjs,
    },
   
   // {
  //    name: "Tailwind CSS",
   //   icon: tailwind,
    //},
    //{
    //  name: "Node JS",
      //icon: nodejs,
   // },
    {
      name: "MongoDB",
      icon: mongodb,
    },
  
    {
      name: "git",
      icon: git,
    },
    {
      name : "AWS",
      icon : aws
    },
    {
      name: "figma",
      icon: figma,
    },
    {
      name: "docker",
      icon: docker,
    },
  ];
  
  const experiences = [
   
    {
      title: "Machine Learning Intern",
      company_name: "Verzeo",
      icon: job,
      iconBg: "#E6DEDD",
      date: "APRIL 2021 - MAY 2021",
      points: [
        " Developed an end-to-end machine learning application for zebo.ai to detect signs of aging in images.",
        "Trained TensorFlow models, categorizing images with high accuracy.",
        
      ],
    },
    {
      title: "Cyber Security Intern",
      company_name: "GPCSSI",
      icon: job,
      iconBg: "#383E56",
      date: "JUNE 2021 - JULY 2021",
      points: [
        "Learned DFIR, cryptography, blockchain, cloud security, web-app pentesting, and malware analysis.",
        "Studied the impact of poor cyber hygiene and cyber laws",
        
      ],
    },
   
    {
      title: "Data Science Intern",
      company_name: "APSSDC",
      icon: job,
      iconBg: "#E6DEDD",
      date: "MARCH 2022 - AUGUST 2022",
      points: [
        "Developed and deployed machine learning models using Python, achieving top accuracy.",
        "Built end-to-end data pipelines for ETL, data wrangling, statistical analysis, and visualization using Pandas.",
        "Deployed models on cloud platforms, integrating with GitHub for version control.",

       
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
      name: "Sara Lee",
      designation: "CFO",
      company: "Acme Co",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "I've never met a web developer who truly cares about their clients' success like Rick does.",
      name: "Chris Brown",
      designation: "COO",
      company: "DEF Corp",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
      name: "Lisa Wang",
      designation: "CTO",
      company: "456 Enterprises",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "University RAG Chatbot",
      description:
        "UCM GPT is a personal assistant designed specifically for students. It helps students with course information, campus services, and general inquiries by providing quick and accurate assistance.",
      tags: [
        {
          name: "GenAI",
          color: "blue-text-gradient",
        },
        {
          name: "NLP",
          color: "green-text-gradient",
        },

      ],
      image: gptproject,
      source_code_link: "https://github.com/aadiaditya/University-GPT-Project",
    },
    {
      name: "spotify data extraction",
      description:
        "This project aims to extract data from Spotify playlists using the Spotify API, transform it, and load it into an S3 bucket. The project is built using AWS Lambda, Spotify API, and the boto3 library for S3 interactions.",
      tags: [
        {
          name: "AWS",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "ETL",
          color: "pink-text-gradient",
        },
      ],
      image: spotifyetl,
      source_code_link: "https://github.com/aadiaditya/spotify_data_extraction",
    },
    {
      name: "Ageing Sign Detection",
      description:
        "This project uses deep learning with the EfficientNetB0 architecture to detect aging signs like dark circles, puffiness, and wrinkles in facial images, including facial landmark visualization for puffiness detection.",
      tags: [
        {
          name: "Deep learning",
          color: "blue-text-gradient",
        },
        {
          name: "TensorFlow",
          color: "green-text-gradient",
        },
      ],
      image: agning,
      source_code_link: "https://github.com/aadiaditya/verzeo_internship",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };