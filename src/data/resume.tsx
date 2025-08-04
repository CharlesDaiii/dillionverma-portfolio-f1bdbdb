import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Ruiyang Dai",
  initials: "RD",
  url: "https://www.linkedin.com/in/ruiyang-dai-cmu/",
  location: "Pittsburgh, PA",
  locationLink: "https://www.google.com/maps/place/pittsburgh",
  description:
    "Software Engineer turned Entrepreneur. I love building things and helping people.",
  summary:
    "I’m Ruiyang Dai, a Software Developer passionate about building intelligent, scalable applications that solve real-world problems. With a strong foundation in Computer Science from UIUC and current graduate studies in ECE at Carnegie Mellon, I bridge deep technical expertise with hands-on development across iOS, distributed systems, and immersive technologies. From launching a production-grade iOS app with cloud sync and CI/CD, to optimizing real-time XR rendering pipelines and architecting custom network protocols, I thrive on designing systems that are performant, user-focused, and maintainable. My work is driven by curiosity, structured thinking, and a commitment to quality engineering.",
  avatarUrl: "/me.png",
  skills: [
    "Python",
    "C++",
    "React",
    "Next.js",
    "Typescript",
    "Node.js",
    "Go",
    "Postgres",
    "Docker",
    "Kubernetes",
    "Swift",
    "SQL",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "dairuiyang3@gmail.com",
    tel: "+1 2173778671",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/CharlesDaiii",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/ruiyang-dai-cmu/",
        icon: Icons.linkedin,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:dairuiyang3@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "WiseLab - Carnegie Mellon University",
      href: "https://wise.ece.cmu.edu/",
      badges: [],
      location: "Remote",
      title: "XR Researcher",
      logoUrl: "/wise.png",
      start: "Nov 2023",
      end: "Jan 2025",
      description:
      `
      •	Improved Render Fusion (Remote Renderer Pipeline) real-time translational performance by reducing latency during camera transitions, leading to a 30% increase in responsiveness and efficiency in dynamic 3D object rendering.
      •	Transitioned the remote rendering-streaming process from WebGL to OpenGL, utilizing FFmpeg with NVENC for encoding, creating a native application that enables smoother, lower-latency video streams for server encoding and client decoding.
      •	Developed a native VR Renderer using OpenXR that supports loading 3D objects into a combination of meshes, textures and lightings, ensuring seamless integration and enhanced performance for XR applications..
      •	Designed a Recorder class that enables frame capture and stores files in a separate thread, ensuring consistent frame rates and minimizing performance bottlenecks.
      •	Created an Animator class to read metadata from configuration files, effectively controlling animation speed and camera orientation to enhance user experience and application flexibility.
      `,
    },
    {
      company: "JD.com",
      badges: [],
      href: "https://www.jd.com/",
      location: "Remote",
      title: "Python Development Engineer",
      logoUrl: "/jd.png",
      start: "Jun 2021",
      end: "Aug 2021",
      description:
      `
•	Developed and containerized demo for 1-to-N and 1-to-1 facial recognition using JingDong’s AI Facial Recognition API and Docker.
•	Enhanced application reliability and user experience by implementing multi-threading, fault tolerance mechanisms, and developing argument inputs for better User Interfaces.
•	Configured RabbitMQ, Redis, and MySQL on Kubernetes by authoring pod YAML files, ensuring inter-service port accessibility, and establishing independent configuration file paths for seamless backup and updates.
•	Setup a Cloud Monitoring Platform using Grafana, configuring Prometheus as a Grafana data source, monitoring performance metrics of multiple middleware services (RabbitMQ, Redis, MySQL), and setting up usage alerts to ensure system reliability and proactive issue resolution.
•	Deployed KubeSphere on Kubernetes, setting up CI/CD pipelines to automate application deployment and streamline workflows.
      `,
    },
    {
      company: "LianHuiChuangYuan Tech",
      badges: [],
      href: "",
      location: "Beijing, China",
      title: "Development & Test Engineer",
      logoUrl: "/L.png",
      start: "Dec 2020",
      end: "Mar 2021",
      description:
      `
•	Designed and implemented a GitHub Actions-based CI/CD pipeline for automated testing of embedded systems.
•	Deployed BertSum in Python for Extractive Summarization, achieving a 25% increase in data throughput.
•	Developed Java-based RESTful microservices with Spring Boot framework to process and analyze text data, resulting in 15% faster response times for document summarization requests.
•	Implemented comprehensive unit testing using JUnit 5, achieving 90% code coverage and reducing production defects.
      `,
    },
  ],
  education: [
    {
      school: "Carnegie Mellon University",
      href: "https://www.cmu.edu/",
      degree: "Master's Degree of Electrical and Computer Engineering",
      logoUrl: "/cmu.png",
      start: "2023",
      end: "2024",
    },
    {
      school: "University of Illinois at Urbana-Champaign",
      href: "https://illinois.edu/",
      degree: "Bachelor's Degree of Computer Science (B.S.)",
      logoUrl: "/uiuc.png",
      start: "2019",
      end: "2023",
    }
  ],
  projects: [
    {
      title: "EatMeFirst - iOS App",
      href: "https://apps.apple.com/us/app/eatmefirst/id6743724982",
      dates: "Mar 2025 - On going",
      active: true,
      description:
      `
EatMeFirst is a smart refrigerator management app that empowers users to take control of what’s inside their fridge. It tracks expiration dates, recommends what to eat first, suggests recipes based on available ingredients, and helps you build smarter shopping habits — all from your phone.
      `,
      technologies: [
        "Swift",
        "SwiftUI",
        "SwiftData",
        "SwiftUI",
        'Firebase',
        'ChatGPT',
        'Google Imagen'
      ],
      links: [
        {
          type: "App Store",
          href: "https://apps.apple.com/us/app/eatmefirst/id6743724982",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/EetMeFirst.jpg",
      video:
        "",
    }, 
    {
      title: "Part Select - AI Chatbot",
      href: "https://partselect-agent.vercel.app/",
      dates: "Mar 2025 - April 2025",
      active: true,
      description:
      `
Part Select Agent is an AI-powered chatbot that helps users select the right parts for their refrigerator.
It uses a combination of fuction calls and polymorphism to handle different user queries and provide accurate recommendations, based on Embeddings and RAG.
      `,
      technologies: [
        'Django',
        'RESTful API',
        'SQLite',
        'DeepSeek API',
        'OpenAI Embeddings',
        'React',
        'Crawler',
        'Python',
        'CI/CD',
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CharlesDaiii/partselect-agent",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://partselect-agent.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/partselect.jpg",
      video:
        "",
    },
    {
      title: "Render Fusion - XR Renderer",
      href: "https://edwardlu2018.github.io/renderfusion-playground/",
      dates: "Nov 2023 - Jan 2025",
      active: true,
      description:
      `
  Render Fusion is a real-time remote rendering pipeline that allows users to render 3D objects in a web browser. 
  It offloads rendering to a nearby machine and streams the results to a web browser.
  I was part of the team that developed the renderer, including the implementation of the rendering pipeline, the integration of the renderer with the web application, and the optimization of the renderer for real-time performance.
      `,
      technologies: [
        'WebGL',
        'OpenGL',
        'FFmpeg',
        'OpenXR',
        'WebRTC',
        'C++',
        'CI/CD',
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/arenaxr/arena-renderfusion",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Website",
          href: "https://edwardlu2018.github.io/renderfusion-playground/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/renderfusion.jpg",
      video:
        "",
    },
    {
      title: "Face Mask Detection - Computer Vision",
      href: "https://github.com/CharlesDaiii/CS-445-FA21-Final-Project/tree/main",
      dates: "Oct 2021 - Nov 2021",
      active: true,
      description:
      `
In the era of COVID-19, although with vaccines, the primary line of defense still lies upon face masks. In many countries, we have seen that there are manual people checking whether or not people are wearing masks properly. Therefore, the idea of creating a mask detector sparks our interest. In this project, we aim to apply computational photography, computer vision, and machine learning to create a face mask detector. During this process, we hope to apply what we have learned during the class and challenge ourselves with essential techniques in Computer Vision that can potentially improve our world.
      `,
      technologies: [
        'OpenCV',
        'Python',
        'Computer Vision',
        'Machine Learning',
        'Computer Graphics',
        'ResNet 34',
        'CNN',
        'Pytorch'
      ],
      links: [
        {
          type: "GitHub",
          href: "https://github.com/CharlesDaiii/CS-445-FA21-Final-Project/tree/main",
          icon: <Icons.globe className="size-3" />,
        }
      ],
      image: "/face-mask-detection.gif",
      video:
        "",
    }
  ],
} as const;
