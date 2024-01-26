import { meta, shopify, starbucks, tesla } from "../assets/images";
import {
    car,
    contact,
    css,
    estate,
    express,
    git,
    github,
    html,
    javascript,
    linkedin,
    mongodb,
    motion,
    mui,
    nextjs,
    nodejs,
    pricewise,
    react,
    redux,
    sass,
    snapgram,
    summiz,
    tailwindcss,
    threads,
    typescript,
    bootstrap,
    dotnet,
    csharp,
    cpp,
    sql,
    angular,
    leetcode,
    gfg,
    output,
    exposys
} from "../assets/icons";

export const skills = [
    {
        imageUrl: css,
        name: "CSS",
        type: "Frontend",
    },
    {
        imageUrl: express,
        name: "Express",
        type: "Backend",
    },
    {
        imageUrl: git,
        name: "Git",
        type: "Version Control",
    },
    {
        imageUrl: github,
        name: "GitHub",
        type: "Version Control",
    },
    {
        imageUrl: html,
        name: "HTML",
        type: "Frontend",
    },
    {
        imageUrl: javascript,
        name: "JavaScript",
        type: "Frontend",
    },
    {
        imageUrl: mongodb,
        name: "MongoDB",
        type: "Database",
    },
    {
        imageUrl: sql,
        name: "Microsoft SQL Server",
        type: "Database",
    },
    {
        imageUrl: bootstrap,
        name: "Bootstrap",
        type: "Frontend-Design",
    },
    {
        imageUrl: mui,
        name: "Material-UI",
        type: "Frontend",
    },
    {
        imageUrl: nextjs,
        name: "Next.js",
        type: "Frontend",
    },
    {
        imageUrl: nodejs,
        name: "Node.js",
        type: "Backend",
    },
    {
        imageUrl: angular,
        name: "Angular",
        type: "Frontend",
    },
    {
        imageUrl: react,
        name: "React",
        type: "Frontend",
    },
    {
        imageUrl: redux,
        name: "Redux",
        type: "State Management",
    },
    {
        imageUrl: sass,
        name: "Sass",
        type: "Frontend",
    },
    {
        imageUrl: tailwindcss,
        name: "Tailwind CSS",
        type: "Frontend",
    },
    {
        imageUrl: typescript,
        name: "TypeScript",
        type: "Frontend",
    },
    {
        imageUrl: dotnet,
        name: "TypeScript",
        type: "Backend",
    },
    {
        imageUrl: csharp,
        name: "MongoDB",
        type: "Programming",
    },
    {
        imageUrl: cpp,
        name: "MongoDB",
        type: "Programming",
    }
];

export const experiences = [
    {
        title: "Associate Software Developer",
        company_name: "Nagarro",
        icon: output,
        iconBg: "#accbe1",
        date: "March 2023 - Present",
        points: [
            "Developed and maintained software applications using .NET technologies, ensuring high levels of performance, security, and scalability.",
            "Collaborated with team members to design, implement, and test new features, enhancements, and bug fixes in both .NET and Angular frameworks.",
            "Participated in code reviews, providing constructive feedback and ensuring adherence to coding standards.",
            "Participating in code reviews and providing constructive feedback to other developers.",
        ],
    },
    {
        title: "Front-end Developer",
        company_name: "Exposys Data Labs",
        icon: exposys,
        iconBg: "#fbc3bc",
        date: "Jan 2021 - Feb 2022",
        points: [
            "Utilized HTML and CSS to design and implement the frontend of the video chat application. Ensured a user-friendly and visually appealing interface that aligns with modern design standards.",
            "Implemented the Agora SDK to enable real-time communication features, including video streaming, voice communication, and interactive collaboration.",
            "Created comprehensive documentation for the developed application, including technical specifications, API documentation, and user guides.",
        ],
    },
   
];

export const socialLinks = [
    {
        name: 'Contact',
        iconUrl: contact,
        link: '/contacts',
    },
    {
        name: 'GitHub',
        iconUrl: github,
        link: import.meta.env.VITE_APP_GITHUB_LINK
        // link: 'https://github.com/vinay301',
    },
    {
        name: 'LinkedIn',
        iconUrl: linkedin,
        link: import.meta.env.VITE_APP_LINKEDIN_LINK
    },
    {
        name: 'Leetcode',
        iconUrl: leetcode,
        link: import.meta.env.VITE_APP_LEETCODE_LINK
    },
    {
        name: 'GeeksForGeeks',
        iconUrl: gfg,
        link: import.meta.env.VITE_APP_GFG_LINK
       
    }
];

export const projects = [
    {
        iconUrl: pricewise,
        theme: 'btn-back-red',
        name: 'Realtime Grocery Store',
        description: 'This open-source project is a Realtime Grocery Store Web Application built using Node.js, Express.js, MongoDB, Socket.IO for realtime integration, Passport for authentication, and Stripe as the payment gateway.',
        link: 'https://github.com/vinay301/Realtime-Grocery-App',
    },
    {
        iconUrl: threads,
        theme: 'btn-back-green',
        name: 'Baithak - Realtime Chat App',
        description: '"Baithak", A Realtime ChatApp Created for smooth interaction between multiple users, This WebApp is created by using Angular and DotNet (SignalR).',
        link: 'https://github.com/vinay301/Baithak---Realtime-ChatApp-Using-Angular-.Net',
    },
    {
        iconUrl: car,
        theme: 'btn-back-blue',
        name: 'Authentication System using Angular & .NET',
        description: 'Secure Web Applications with Angular and .NET Core Authentication This project focuses on building robust and secure web applications by implementing a seamless authentication system using Angular on the frontend and .NET Core on the backend.',
        link: 'https://github.com/vinay301/Authentication-Using-Angular-.NET-Core',
    },
    {
        iconUrl: estate,
        theme: 'btn-back-black',
        name: 'Real-Estate Application',
        description: 'Developed a web application for real estate listings, facilitating property searches and connecting buyers with sellers using ASP.NET CORE WEB API and Angular.',
        link: 'https://github.com/vinay301/PropertyListingWebApp',
    },
   
];