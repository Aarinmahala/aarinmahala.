import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { MongoDB } from "@/components/ui/svgs/mongodb";
import { TailwindCSS } from "@/components/ui/svgs/tailwindcss";
import { GitHub } from "@/components/ui/svgs/github";
import { Cpp } from "@/components/ui/svgs/cpp";
import { Python } from "@/components/ui/svgs/python";
import { Java } from "@/components/ui/svgs/java";

export const DATA = {
  name: "Aarin Mahala",
  initials: "AM",
  url: "https://aarinmahala.vercel.app",
  location: "Jaipur, Rajasthan, India",
  locationLink: "https://www.google.com/maps/place/Jaipur,+Rajasthan",
  description:
    "Founder & Developer @ stationerywala.shop • Computer Science (AI & ML) student from Jaipur, Rajasthan, India. I build modern web experiences, e-commerce products and tools that help students and businesses.",
  summary:
    "I’m **Aarin Mahala**, a Computer Science (AI & ML) student and the founder of [stationerywala.shop](https://www.stationerywala.shop/) — an online stationery e‑commerce startup from Rajasthan, India. I focus on building fast, accessible web applications, especially e‑commerce and education products.\n\nAs a young entrepreneur and developer, I enjoy working with **React, Next.js, Node.js, TypeScript, MongoDB, HTML, CSS and JavaScript**. My experience includes launching and growing stationerywala.shop, building college and business websites, and shipping real-world projects that people actually use.\n\nI’m particularly interested in **artificial intelligence, machine learning, data analysis and modern web development**. I’m looking for opportunities where I can contribute as a developer, learn from experienced teams and continue growing stationerywala.shop.\n\n**Certifications**\n- C Programming the Basics\n- Complete Python 2024 For Absolute Beginners\n- Accenture Nordics - Software Engineering Job Simulation\n- Deloitte Australia - Data Analytics Job Simulation\n- Practical HTML, CSS, JS: 10 Real-World Projects for Practice",
  // Used for the profile avatar (falls back to `initials` if empty)
  avatarUrl:
    "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771501911/WhatsApp_Image_2026-02-19_at_5.18.15_PM_sodlgm.jpg",
  skills: [
    
    { name: "Python", icon: Python },
    { name: "JavaScript", icon: ReactLight },
    { name: "Java", icon: Java },
    { name: "CSS", icon: TailwindCSS },
    { name: "React", icon: ReactLight },
    { name: "Node.js", icon: Nodejs },
    { name: "TypeScript", icon: Typescript },
    { name: "MongoDB", icon: MongoDB },
    { name: "C++", icon: Cpp },
    { name: "Tailwind CSS", icon: TailwindCSS },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Git & GitHub", icon: GitHub },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "aarinmahala@gmail.com",
    tel: "+91 9057191730",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/aarinmahala",
        icon: Icons.github,
        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aarin-mahala-a48724274",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/aarinmahala",
        icon: Icons.x,
        navbar: false,
      },
      Instagram: {
        name: "Instagram",
        url: "https://instagram.com/aarinmahala",
        icon: Icons.instagram,
        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:aarinmahala@gmail.com",
        icon: Icons.email,
        navbar: true,
      },
      WhatsApp: {
        name: "WhatsApp",
        url: "https://wa.me/919057191730",
        icon: Icons.whatsapp,
        navbar: true,
      },
    },
  },

  work: [
    {
      company: "stationerywala.shop",
      href: "https://stationerywala.shop",
      badges: ["Founder"],
      location: "Jaipur, Rajasthan, India",
      title: "Founder & Developer",
      logoUrl: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771499459/WhatsApp_Image_2026-01-08_at_11.28.15_AM_bnjtwy.jpg",
      start: "Jan 2026",
      end: "Present",
      description:"Launched an affordable stationery e-commerce platform. Responsible for product design, front-end (Next.js), backend (Node.js + MongoDB), payments and deployment. Iterating fast on customer feedback and conversion optimization.",
    },
    {
      company: "Vijay Kiran and Company",
      href: "#",
      badges: [],
      location: "Jaipur, Rajasthan, India",
      title: "Graphic Design Specialist / Account Handler",
      logoUrl: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771498223/1713383627775_aaschw.jpg",
      start: "Jan 2024",
      end: "Present",
      description:
        "Specializing in product photography and notebook cover design, enhancing e-commerce presence with high-quality visuals. Also handle Amazon and social media accounts, focused on digital strategy and brand growth.",
    },
    {
      company: "Freelance",
      href: "#",
      badges: [],
      location: "Jaipur, Rajasthan, India",
      title: "Web Developer",
      logoUrl: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771499724/gpt-image-1.5-high-fidelity_a_make_a_logo_for_free_voyjmf.png",
      start: "Jan 2024",
      end: "Present",
      description:
        "Developed and deployed business websites, portfolios, and e-commerce platforms. Implemented SEO and performance optimization to improve visibility and load speed. Delivered end-to-end solutions including requirement analysis, deployment, and maintenance.",
    },
    {
      company: "Unified Mentor Private Limited",
      href: "#",
      badges: ["Internship"],
      location: "Remote",
      title: "Full Stack Developer Intern",
      logoUrl: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771499304/Logo2-B4rOk6Ys_x6hnbk.png",
      start: "Jun 2025",
      end: "Jul 2025",
      description:
        "Worked as a Full Stack Developer intern on two projects end-to-end. Built a responsive portfolio website (HTML/CSS/JS + React) with Vercel deployment, and a calculator app (React) with Node.js + MongoDB to store user history. Collaborated with mentors and used Git/GitHub for version control.",
    },
    {
      company: "Training and Placement Cell - Government Engineering College Barmer",
      href: "#",
      badges: ["Volunteer"],
      location: "Barmer, Rajasthan, India",
      title: "Volunteer",
      logoUrl: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771498845/images_oyg8xy.jpg",
      start: "Sep 2024",
      end: "Present",
      description: "Training and Placement Cell volunteer at Government Engineering College, Barmer.",
    },
  ],

  education: [
    {
      school: "Govt. Engineering College Barmer",
      href: "https://gecbarmer.ac.in/",
      degree: "Bachelor of Engineering ,Computer Science  {AI & ML}  (M.B.M. University)",
      logoUrl: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771498225/images_oyg8xy.jpg",
      start: "Sep 2023",
      end: "Oct 2027",
    },
  ],

  projects: [
    {
      title: "StationeryWala",
      href: "https://www.stationerywala.shop/",
      dates: "Completed",
      active: true,
      description:
        "A modern e-commerce platform for stationery products featuring a responsive design, product categorization, secure checkout, user accounts, order tracking, and wishlist functionality. Optimized for both desktop and mobile shopping experiences.",
      technologies: ["React", "Node.js", "Tailwind CSS", "MongoDB"],
      links: [
        { type: "Website", href: "https://www.stationerywala.shop/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771500080/Screenshot_2026-02-19_164955_gqsjic.png",
      video: "",
    },
    {
      title: "GEC Barmer Website",
      href: "https://college-website-pd4czgj4p-aarin-mahalas-projects.vercel.app/",
      dates: "Completed",
      active: true,
      description:
        "A modern, responsive website for Government Engineering College Barmer. Features event galleries, department information, faculty profiles, and interactive campus resources—all designed to provide a seamless experience for students and visitors.",
      technologies: ["React.js", "Node.js", "MongoDB", "CSS3"],
      links: [
        { type: "Source", href: "https://github.com/Aarinmahala/gec-barmer-website", icon: <Icons.github className="size-3" /> },
        { type: "Website", href: "https://college-website-pd4czgj4p-aarin-mahalas-projects.vercel.app/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771500081/Screenshot_2026-02-19_164847_hvxyhk.png",
     
      video: "",
    },
    {
      title: "GYM Management System",
      href: "https://gym-management-system-phi.vercel.app/",
      dates: "Completed",
      active: true,
      description:
        "A modern frontend-only Gym Management System with role-based dashboards (Admin/Member/User), member & billing management, reports, supplements, and nutrition flows.",
      technologies: ["HTML", "CSS", "JavaScript"],
      links: [
        {
          type: "Website",
          href: "https://gym-management-system-phi.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aarinmahala/GYM-Management-System",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771500080/Screenshot_2026-02-19_153601_k6h2ku.png",
      video: "",
    },
    {
      title: "Flashcard Engine",
      href: "https://flashcard-engine-bay.vercel.app/",
      dates: "Completed",
      active: true,
      description:
        "A powerful spaced repetition learning tool designed to help students remember more while studying less. Features multiple learning modes, organization tools, a built-in Pomodoro timer, and detailed progress tracking.",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Vite"],
      links: [
        { type: "Source", href: "https://github.com/Aarinmahala/Flashcard-Engine", icon: <Icons.github className="size-3" /> },
        { type: "Website", href: "https://flashcard-engine-bay.vercel.app/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771500080/Screenshot_2026-02-19_164810_stj5vt.png",
      video: "",
    },
    {
      title: "Rajasthan Virtual Shiksha",
      href: "https://rajasthan-virtual-shiksha.vercel.app/",
      dates: "Completed",
      active: true,
      description:
        "An offline-capable education platform concept focused on improving access to quality learning in remote areas, with PWA-style offline support and interactive learning workflows.",
      technologies: ["HTML", "CSS", "JavaScript", "PWA"],
      links: [
        {
          type: "Website",
          href: "https://rajasthan-virtual-shiksha.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Aarinmahala/Rajasthan-Virtual-Shiksha",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771500080/Screenshot_2026-02-19_153838_e0o59o.png",
      video: "",
    },
    {
      title: "MAD Duck Game",
      href: "https://madduck.vercel.app/",
      dates: "Ongoing",
      active: true,
      description:
        "An interactive browser-based game built with JavaScript and Canvas API where players help a duck cross obstacles. Features include collision detection, increasing difficulty levels, and score tracking.",
      technologies: ["JavaScript", "HTML5", "CSS3"],
      links: [
        { type: "Source", href: "https://github.com/Aarinmahala/Madduck", icon: <Icons.github className="size-3" /> },
        { type: "Website", href: "https://madduck.vercel.app/", icon: <Icons.globe className="size-3" /> },
      ],
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771500080/Screenshot_2026-02-19_165036_wzj0sf.png",
      video: "",
    },
  ],

  hackathons: [
    {
      title: "Inter College Hackathon 2024",
      dates: "2024",
      location: "India",
      description: "Led a team to victory by developing a unique solution that impressed judges.",
      icon: "public",
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771498845/images_oyg8xy.jpg",
      win: "Winner",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/aarinmahala",
        },
      ],
    },
    {
      title: "Smart India Hackathon 2024",
      dates: "March 2024",
      location: "India",
      description: "Participated in the prestigious nationwide hackathon focused on solving real-world problems.",
      icon: "public",
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771500940/smart-india-hackathon-smart-india-hackathon_djua6h.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/aarinmahala",
        },
      ],
    },
    {
      title: "GeeksforGeeks Hackathon 2025",
      dates: "2025",
      location: "Online",
      description: "Developed innovative solutions for technical challenges in this competitive coding event.",
      icon: "public",
      image: "https://res.cloudinary.com/dzd29tlsf/image/upload/v1771500929/channels4_profile_ub3yp7.jpg",
      links: [
        {
          title: "GitHub",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/aarinmahala",
        },
      ],
    },
  ],
} as const;
