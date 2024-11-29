import sololearn from "../../assets/sololearn.svg";
import zuri from "../../assets/zuri.svg";
import jm from "../../assets/jm.svg";
import { BsPuzzle } from "react-icons/bs";
import { TbWritingSign, TbBrandGithubFilled } from "react-icons/tb";
import { SiFrontendmentor } from "react-icons/si";
import {
  FaXTwitter,
  FaMedium,
  FaDev,
  FaLinkedinIn,
  FaGithub,
  FaReact,
  FaShopify,
  FaWordpressSimple,
  FaRankingStar,
  FaCss3,


} from "react-icons/fa6";
import {
  TbBrandGithub,
  TbBrandX,
  TbExchange,
  TbHome,
  TbNewSection,
  TbTerminal2,
} from "react-icons/tb";

import { SiTailwindcss, SiNextdotjs, SiReact, SiTypescript, SiBootstrap, SiFirebase, SiMongodb, SiPython, SiJavascript, SiPhp, SiRadstudio, SiHtml5, SiVite, SiNpm, SiGit, SiVisualstudiocode, SiSqlite, SiWordpress, SiUpwork } from "react-icons/si";
// import { IconHome, IconMessage, IconUser } from "@tabler/icons-react";
const public_key = import.meta.env.VITE_APP_MAIL_PUBLIC_KEY;
const template_id = import.meta.env.VITE_APP_MAIL_TEMPLATE_ID;
const mail_service_id = import.meta.env.VITE_APP_MAIL_SERVICE_ID;
const reCAPTCHA_site_key = import.meta.env.VITE_APP_RECAPTCHA_SITE_KEY;

export const secret_key = {
  mail_public_key: public_key,
  mail_template_id: template_id,
  mail_service_id: mail_service_id,
  reCAPTCHA: reCAPTCHA_site_key,
};
export const navItems = [
  {
    name: "Home",
    link: "/",
    // icon: <IconHome className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "About",
    link: "#about",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Services",
    link: "#service",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },
  {
    name: "Project",
    link: "#project",
    // icon: <IconUser className="h-4 w-4 text-neutral-500 dark:text-white" />,
  },

];
export const socials = [
  {
    name: "LinkedIn",
    icon: <FaLinkedinIn className="text-[#00749C] dark:text-white " />,
    link: "https://linkedin.com/in/bieefilled",
  },
  {
    name: "Twitter",
    icon: <FaXTwitter className="dark:white" />,
    link: "https://twitter.com/bieefilled",
  },
  {
    name: "Github",
    icon: <FaGithub className=" dark:text-white" />,
    link: "https://github.com/petsamuel",
  },
  {
    name: "Medium",
    icon: <FaMedium className=" dark:text-white" />,
    link: "https://medium.com/bieefilled",
  },
  {
    name: "Dev To",
    icon: <FaDev className="dark:text-white " />,
    link: "https://devto.com/bieefilled",
  },
  {
    name: "UpWork",
    icon: <SiUpwork className="dark:text-white " />,
    link: "https://www.upwork.com/freelancers/~01d16db2f02d0b5e0d?mp_source=share",
  },
];
export const certification = [
  {
    name: "React + Redux Certification",
    svg: `${sololearn}`,
    year: "2023",
    link: "https://www.sololearn.com/certificates/course/en/18019527/1097/landscape/png",
  },
  {
    name: "Developing SQL Databases",
    svg: `${sololearn}`,
    year: "2023",
    link: "https://www.sololearn.com/certificates/course/en/18019527/1060/landscape/png",
  },
  {
    name: "Django Fullstack Development",
    svg: `${zuri}`,
    year: "2022",
    link: "https://drive.google.com/file/d/1GYca4gIT4f-12RL4VOjAtfGfnN3Kfk7Z/view?usp=drivesdk",
  },
  {
    name: "JobberMan SoftSkill",
    svg: `${jm}`,
    year: "2021",
    link: "https://drive.google.com/file/d/1Qw3LOt0-6eU7a_YVW4urPu9HnKckHG_H/view?usp=drivesdk",
  },
  {
    name: "Responsive Web Design ",
    svg: `${sololearn}`,
    year: "2022",
    link: "https://drive.google.com/file/d/1Qw3LOt0-6eU7a_YVW4urPu9HnKckHG_H/view?usp=drivesdk",
  },
];
export const Experiences = [

  {
    institution: "H. PIERSON ASSOCIATES LIMITED ",
    date: "Jul 2022 - Jul 2023",
    title: "Fullstack Developer",
    skills: "Collaboration · Website Development · Maintenance",
    description:
      "Build and maintain various Websites",
  },
  {
    institution: "HNG Internship · Internship",
    date: "Oct-2020 - Dec-2022",
    title: "Frontend Developer",
    skills: "Collaboration  · Analytical Skills · FrontEnd Development",
    description:
      "I developed web applications using javascript framework (REACT), collaborated with other developers to improve web application performance, and gained valuable experience in web development and teamwork.",
  },

  {
    institution: "Zuri Team, Inc. · Internship",
    date: "May 2022 - Aug 2022",
    title: " Full-stack Django Developer ",
    skills: "Collaboration · Python · Mysqli · CMS · FullStack Development",
    description:
      "I developed web applications using Django framework, collaborated with other developers to improve web application performance, and gained valuable experience in web development and teamwork.",
  },
  {
    institution: "Bingreach Digitals",
    date: "Aug-2021 - jan-2022",
    title: "Jnr Wordpress Developer",
    skills: "Systems Design · Analytical Skills · User Interface Design",
    description:
      " I worked as a Junior WordPress Developer and developed over 20 pages including a dashboard, charts, kanban board, calendar, and pre-order e-commerce and marketing pages. I gained valuable experience and worked collaboratively with other developers and teams.",
  },
  {
    institution: "Yaba College Of Technology",
    date: "Sept-2019 - May-2022",
    title: "Computer Science Deploma",
    skills: "Systems Design · Analytical Skills · User Interface Design",
    description:
      " I gained a solid understanding of programming, algorithms, data structures, and computer systems. I also worked on various projects including developing software applications, creating websites, and designing databases.",
  },
  {
    institution: "Green Nobel Technologies",
    date: "Jan 2018 - Jul 2022",
    title: "Frontend Developer",
    skills: "HTML, CSS, JavaScript",
    description:
      "I worked as a Frontend Developer."
  },
];
export const Review = [

  {
    image:
      "https://lopwin.com.ng/wp-content/uploads/2023/11/Enoch-Afolabi-Host-Winning-2024.jpeg",
    name: "Enoch Afolabi",
    date: "November 30 2023",
    title: `Growth Manager at Moringa School | Business Development | Growth Management | Partnerships Management`,
    reviews: `Samuel Peter is a great web developer who delivers exceptional results. Really skilled, and his creative approach has resulted in websites that exceed expectations. 
      He is truly professional, responsive to feedback, and it was a pleasure to work with.
      I highly recommend Samuel Peter for any web development project.`,
    link: "https://www.linkedin.com/in/enochafolabi/",
  },
  {


    image:
      "https://media.licdn.com/dms/image/v2/D4D03AQHR0I9x1lawJQ/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1719329471618?e=1738195200&v=beta&t=6_Z4bU8ksYbwoUeqG1LKJ5QDfG2nrMb0M1BhrW0qKdc",
    name: "Michael Peters",
    date: "April 18 2022",
    title: "Head Automation and Innovation, Wema Bank",
    reviews:
      "Samuel is brilliant website designer. He demonstrates brilliance and customer focused approach in delivering powerful Web presence and SEO for businesses. I have watched him grow over the years into a goto person for website and design delivery and he is still learning.",
    link: "https://www.linkedin.com/in/michael-peters-2a497353/",
  },

  {
    image:
      "https://media.licdn.com/dms/image/v2/C4D03AQEzId2tDzz7Qw/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1661952121356?e=1738195200&v=beta&t=Um4yaHQk0RPJ_TfwmdyO6eNLgRMwDgPeR4BP5X_Ux3I",
    name: "Stanley Obayagbo",
    date: "November 30 2023",
    title: `Programs & Grants Operations | Risk & Quality Management| Data Analyst| Program Coordinator| Agile-Scrum`,
    reviews: `Samuel is one of the most innovative IT personnel I've worked with. highly skilled in both backend and front end development, his creativity stood out during our time together at H.Pierson.`,
    link: "https://www.linkedin.com/in/stanley-obayagbo-058ab497",
  },
];


import p1 from "../../assets/p1.png"
import p2 from "../../assets/p2.png"
import p3 from "../../assets/p3.png"
import p4 from "../../assets/p4.png"
import p5 from "../../assets/p5.png"
import p6 from "../../assets/p6.png"
import p7 from "../../assets/p7.jpeg"
export const projects = [
  // status- completed:true;  on-going:false; stopped:null;
  {
    image: p1,
    name: "League of Professionals",
    year: "Nov-2023",
    link: "https://lopwin.com.ng",
    institution: "business",
    description: "professional platform hosting events, webinars, and masterclasses,related to growth strategies, marketing, and professional development. landing page built with WordPress CMS...",
    stack: ["Wordpress CMS", "Php", "ConvertKit"],
    status: false,
    ctaText: "visit",

  },
  {
    image: p3,
    name: "Koinfund",
    year: "Mar 2023 - Present",
    link: "https://koin-funds-git-fork-petsamuel-main-ayeolakenny.vercel.app/",
    institution: "Open Source",
    description: "Koin Funds is an emerging Web3 project focused on Decentralized crowdfunding  ...",
    stack: ["React.JS", "Ether.Js", "Solidity", "Tailwindcss"],
    status: false,
    ctaText: "visit",
  },
  {
    image: p4,
    name: "Gruvly Music",
    year: "Jan 2022 - October 2023",
    link: "github.com/Petsamuel",
    institution: "Private",
    description:
      "Gruvly Music: Platform designed for forward-looking music musical talents...",
    stack: ["Wordpress CMS", "PHP", "SQL", "API"],
    status: false,
  },
  {
    image: p2,
    name: "V-arena",
    year: "Oct-2020 - Dec-2022",
    link: "",
    institution: "private",
    description:
      "A Play-To-Earn NFT fighting game built with 2D physics Engine...",
    stack: ["React.JS", "Matter.js", "Kia Wallet", "Node.js"],
    status: false,
    ctaText: "visit",
  },
  {
    image: p5,
    name: "Hpierson Brochure",
    year: "Nov-2023",
    link: "https://Hpierson.com/Brochure",
    institution: "private",
    description: "A  downloadable brochures Landingdetailing their consulting services....",
    stack: ["Wordpress CMS", "PHP"],
    status: false,
    ctaText: "visit",
  },
  {
    image: p7,
    name: "KewnuAi",
    year: "Ongoing",
    link: "https://Kwenuai.com.ng",
    institution: "private",
    description: "KwenuAI is an innovative platform providing AI-driven solutions tailored to enhance business processes and decision-making. The website focuses on leveraging artificial intelligence to optimize operations, automate tasks, and deliver data-driven insights. Built with HTML, CSS, react, Flutterwave, TailwindCss ...",
    stack: ["ReactJs, TailwindCss", "FlutterWave"],
    status: true,
    ctaText: "visit",
  },
  {
    image: p6,
    name: "Xpenzes",
    year: "Ongoing",
    link: "https://xpenzes.vercel.app/",
    institution: "private",
    description: "Xpenzes is a financial management platform designed to simplify expense tracking and budgeting. The site likely focuses on providing tools for users to organize and categorize their spending, offering a streamlined solution for personal or business financial planning. built with React, Node.js, FireBase, Stripe...",
    stack: ["ReactJs, TailwindCss", "Stripe"],
    status: true,
    ctaText: "visit",
  },
];

export const contactMethods = [
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
        />
      </svg>
    ),
    contact: "bieefilled.Vercel.app",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
        />
      </svg>
    ),
    contact: "+234 701 155-0818",
  },
  {
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="w-6 h-6"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
        />
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
        />
      </svg>
    ),
    contact: "Lagos Nigeria",
  },
];

export const tools = [
  {
    name: "React", svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg",
    icon: <SiReact className="text-neutral-600" />
  },
  {
    name: "Python",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
    icon: <SiPython />
  },
  {
    name: "JavaScript",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
    icon: <SiJavascript />
  },
  {
    name: "TypeScript",
    svg: "https://raw.githubusercontent.com/wappalyzer/wappalyzer/master/src/drivers/webextension/images/icons/TypeScript.svg",
    icon: <SiTypescript />
  },
  {
    name: "PHP", svg: "https://www.vectorlogo.zone/logos/php/php-icon.svg",
    icon: <SiPhp />
  },
  {
    name: "HTML",
    svg: "https://raw.githubusercontent.com/uiwjs/file-icons/master/icon/html.svg",
    icon: <SiHtml5 />
  },
  {
    name: "CSS",
    svg: "https://raw.githubusercontent.com/manuelbieh/logo-file-icons/master/icons/css.svg",
    icon: <FaCss3 />
  },

  {
    name: "Bootstrap",
    svg: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/bootstrap.svg",
    icon: <SiBootstrap />
  },
  {
    name: "Vite",
    svg: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/vitejs.svg",
    icon: <SiVite />
  },
  {
    name: "Git",
    svg: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_git2.svg",
    icon: <SiGit />
  },
  {
    name: "NPM",
    svg: "https://raw.githubusercontent.com/leungwensen/svg-icon/master/dist/svg/logos/npm.svg",
    icon: <SiNpm />
  },
  {
    name: "VsCode",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiVisualstudiocode />
  },
  {
    name: "RAD",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiRadstudio />
  }, {
    name: "TailwindCss",
    svg: "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/tailwindcss.dark.svg",
    icon: <SiTailwindcss />
  },
  {
    name: "Next Js",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiNextdotjs />
  },
  {
    name: "FireBase",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiFirebase />
  },
  {
    name: "Mongo Db",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiMongodb />
  },
  {
    name: "SQL",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiSqlite />
  },
  {
    name: "WordPress",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
    icon: <SiWordpress />
  },
];

export const About = [{
  about: `I am Peter Samuel, a seasoned Software Engineer with a diverse technical background that cut across web development, SEO, and database management. My expertise spans multiple programming languages, including JavaScript, TypeScript, PHP, and Python. I'm current with the latest development frameworks and tools, ensuring I can deliver cutting-edge solutions.`,

  more: `My technical proficiency covers a wide range of areas, allowing me to tackle complex projects effectively. I excel in web development, have a strong understanding of SEO principles, and am skilled in database management.
  
  Beyond my technical abilities, I possess strong interpersonal skills and excel at communicating effectively with diverse stakeholders. This combination allows me to bridge the gap between complex technical concepts and business objectives.

  I have extensive experience collaborating with people from diverse cultural backgrounds, which has honed my ability to tailor solutions to meet specific client requirements.

  I thrive in fast-paced environments that demand creativity and innovative problem-solving. I am always willing to go the extra mile to ensure the success of any project.`

}, {
  extra: `One of my proudest accomplishments to date has been developing a custom multilingual application for a specific e-commerce client, where I spearheaded the design and implementation process of the software. This project showcases my ability to lead complex initiatives and deliver tailored solutions that meet unique business needs.

  My technical skills, interpersonal abilities, and passion for innovation and problem-solving make me a valuable asset to any team. I am eager to constantly learn and grow, and I look forward to continuing to provide exceptional results for my clients.`}];

export const Stack = [
  {
    name: "Software Engineering",
    icon: <BsPuzzle color="#57518b" />,
  },

  {
    name: "Web Development",
    icon: [<FaReact color="#da9797" />],
  },
  {
    name: "E-commerce",
    icon: <FaShopify color="#ffb170" />,
  },
  {
    name: "WordPress",
    icon: <FaWordpressSimple color="#00749C" />
  },
  {
    name: "SEO Expert",
    icon: <FaRankingStar color="#445445" />
  },

  {
    name: "Technical Writing",
    icon: <TbWritingSign color="#679d7f" />,
  },
  {
    name: "Mentorship",
    icon: <SiFrontendmentor className="text-black dark:text-[#da9797]" />
  }


];
