import sololearn from "../../assets/sololearn.svg";
import zuri from "../../assets/zuri.svg";
import jm from "../../assets/jm.svg";

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

export const certification = [
  {
    name: "REACT + REDUX Certification",
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
    name: "Django Development",
    svg: `${zuri}`,
    year: "2022",
    link: "https://drive.google.com/file/d/1GYca4gIT4f-12RL4VOjAtfGfnN3Kfk7Z/view?usp=drivesdk",
  },
  {
    name: " JobberMan SoftSkill",
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
    institution: "HNG Internship · Internship",
    date: "Oct-2020 - Dec-2022",
    title: "Frontend Engineer",
    skills: "Systems Design · Analytical Skills · User Interface Design",
    description:
      "I developed web applications using javascript framework (REACT), collaborated with other developers to improve web application performance, and gained valuable experience in web development and teamwork.",
  },

  {
    institution: "Zuri Team, Inc. · Internship",
    date: "May 2022 - Aug 2022",
    title: " Full-stack Django Developer ",
    skills: "Systems Design · Analytical Skills · User Interface Design",
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
    title: "Computer Science",
    skills: "Systems Design · Analytical Skills · User Interface Design",
    description:
      " I gained a solid understanding of programming, algorithms, data structures, and computer systems. I also worked on various projects including developing software applications, creating websites, and designing databases.",
  },
];
export const Review = [
  {
    image:
      "https://media.licdn.com/dms/image/D4D03AQGcGZbBNKyvaA/profile-displayphoto-shrink_100_100/0/1684077068929?e=1691625600&v=beta&t=OsxUVlknNpkFq7oYHCZNhzRnhyz6IOL4qTnzyP1vu3o",
    name: "Michael Peters",
    date: "Apiril 18 2022",
    title: "Head Automation and Innovation",
    reviews:
      "Samuel is brilliant website designer. He demonstrates brilliance and customer focused approach in delivering powerful Web presence and SEO for businesses. I have watched him grow over the years into a goto person for website and design delivery and he is still learning.",
    link: "https://www.linkedin.com/in/michael-peters-2a497353/",
  },
  {
    image:
      "https://media.licdn.com/dms/image/C4D03AQHEApS2e4_0pw/profile-displayphoto-shrink_100_100/0/1651503985110?e=1686787200&v=beta&t=8Ii2mDJswhMr4Cwi9U61i73BtRgmDpNP_Nxa02e3mJU",
    name: "Benjamin Ikechi",
    date: "October 6 2021",
    title: "Senior WebDeveloper Bingreach Digitals",
    reviews:
      "Samuel has been working with me for the past 4 years now, i happy to say he thought me everything i know. And i strongly reccommend you to work with him. 5 stars to him.",
    link: "https://www.linkedin.com/in/benjamin-ikechi/",
  },
];

export const projects = [
  // status- completed:true;  on-going:false; stopped:null;
  {
    image:
      "https://drive.google.com/uc?export=view&id=14BI93_0YOKHZC1lH4fUb8iLpGXsTRIRo",
    name: "Koinfund",
    year: "Mar 2023 - Present",
    link: "https://koin-funds-git-fork-petsamuel-main-ayeolakenny.vercel.app/",
    institution: "Open Source",
    description: "KoinFunds: Is a Decentralized crowdfunding platform ...",
    stack: ["React", "Ether.js", "Solidity", "Tailwindcss"],
    status: false,
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=1MWklGmZ-YPZ0HUAsmpqFTMVxcU8HTBig",
    name: "Gruvly Music",
    year: "Jan 2022 - Present",
    link: "http://gruvlymusic.com/",
    institution: "Private",
    description:
      "Gruvly Music: Platform designed for forward-looking music musical talents...",
    stack: ["Wordpress", "Php", "Sql", "Api"],
    status: true,
  },
  {
    image:
      "https://drive.google.com/uc?export=view&id=1cVzwlSy6WDAB3HxMEhZdxnkgL2vkTKtU",
    name: "V-arena",
    year: "Oct-2020 - Dec-2022",
    link: "http://varena.app/",
    institution: "Private",
    description:
      "A Play-To-Earn NFT fighting game built with 2D physics Engine...",
    stack: ["React", "Matter.js", "Kia Wallet", "Node.js"],
    status: null,
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
    contact: "bieefilled.netlify.app",
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
  { name: "React", svg: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  {
    name: "Python",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg",
  },
  {
    name: "JavaScript",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg",
  },
  {
    name: "TypeScript",
    svg: "https://raw.githubusercontent.com/wappalyzer/wappalyzer/master/src/drivers/webextension/images/icons/TypeScript.svg",
  },
  { name: "PHP", svg: "https://www.vectorlogo.zone/logos/php/php-icon.svg" },
  {
    name: "HTML",
    svg: "https://raw.githubusercontent.com/uiwjs/file-icons/master/icon/html.svg",
  },
  {
    name: "CSS",
    svg: "https://raw.githubusercontent.com/manuelbieh/logo-file-icons/master/icons/css.svg",
  },
  {
    name: "TailwindCss",
    svg: "https://raw.githubusercontent.com/bestofjs/bestofjs-webui/master/public/logos/tailwindcss.dark.svg",
  },
  {
    name: "Bootstrap",
    svg: "https://raw.githubusercontent.com/get-icon/geticon/master/icons/bootstrap.svg",
  },
  {
    name: "Vite",
    svg: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/vitejs.svg",
  },
  {
    name: "Git",
    svg: "https://raw.githubusercontent.com/vscode-icons/vscode-icons/master/icons/file_type_git2.svg",
  },
  {
    name: "NPM",
    svg: "https://raw.githubusercontent.com/leungwensen/svg-icon/master/dist/svg/logos/npm.svg",
  },
  {
    name: "VsCode",
    svg: "https://raw.githubusercontent.com/devicons/devicon/master/icons/vscode/vscode-original.svg",
  },
];
