import type { JSX } from "react";
import PlaywrightIcon from "./PlaywrightIcon.tsx";
import { BiCheckCircle } from "react-icons/bi";
import { MdTimeline, MdDesignServices, MdSupportAgent, MdLanguage, MdOutlineSecurity, MdOutlineManageAccounts, MdOutlineDraw, MdOutlineAnalytics, MdOutlineDashboard } from "react-icons/md";
import { TbBrandReactNative } from "react-icons/tb";
import { 
  FaPython, FaReact, FaHtml5, FaCss3Alt, FaServer, FaUserCog, FaProjectDiagram, FaLaptopCode, FaClipboardList, FaHeadset, FaPenNib, FaUsers, FaBug, FaDatabase, FaGlobe, FaSearch, FaTools, FaLightbulb, FaChartLine, FaEnvelopeOpenText, FaCloud, FaWrench, FaCogs, FaNetworkWired, FaFlask 
} from "react-icons/fa";
import { 
  SiHtml5, SiCss3, SiJavascript, SiTypescript, SiReact, SiVuedotjs, SiNextdotjs, SiRedux, SiFirebase, SiGraphql, SiCanva, SiFigma, SiTailwindcss, SiBootstrap, SiStyledcomponents, SiWebpack, SiGit, SiJest, SiPostman, SiVite, SiNodedotjs, SiExpress, SiMongodb, SiCloudinary, SiExpo, SiGooglecloud, SiHubspot, SiYoutube, SiJquery, SiFlask, SiAxios, SiJsonwebtokens, SiDotenv, SiSwagger, SiPhp, SiAdobephotoshop, SiAdobepremierepro, SiJira, SiSlack, SiGithub, SiWordpress, SiMysql, SiPython as SiPythonIcon 
} from "react-icons/si";

export interface SkillItem {
  name: string;
  icon: JSX.Element;
}

export const SkillsLibrary: Record<string, SkillItem> = {
  // --- Core Web ---
  HTML: { name: "HTML", icon: <SiHtml5 className="text-orange-500" /> },
  CSS: { name: "CSS", icon: <SiCss3 className="text-blue-500" /> },
  "CSS/SCSS": { name: "CSS/SCSS", icon: <SiCss3 className="text-blue-500" /> },
  JavaScript: { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
  TypeScript: { name: "TypeScript", icon: <SiTypescript className="text-blue-600" /> },

  // --- Frameworks ---
  React: { name: "React", icon: <SiReact className="text-cyan-500" /> },
  "React Native": { name: "React Native", icon: <TbBrandReactNative className="text-cyan-600" /> },
  Vue: { name: "Vue", icon: <SiVuedotjs className="text-green-500" /> },
  "Next.js": { name: "Next.js", icon: <SiNextdotjs className="text-gray-900" /> },
  Flask: { name: "Flask", icon: <SiFlask className="text-gray-800" /> },

  // --- Styling ---
  "Tailwind CSS": { name: "Tailwind CSS", icon: <SiTailwindcss className="text-teal-400" /> },
  Bootstrap: { name: "Bootstrap", icon: <SiBootstrap className="text-purple-600" /> },
  "Styled Components": { name: "Styled Components", icon: <SiStyledcomponents className="text-pink-600" /> },

  // --- Backend / Infra ---
  Node: { name: "Node", icon: <SiNodedotjs className="text-green-600" /> },
  "Node.js": { name: "Node.js", icon: <SiNodedotjs className="text-green-600" /> },
  Express: { name: "Express", icon: <SiExpress className="text-gray-700" /> },
  MongoDB: { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
  Firebase: { name: "Firebase", icon: <SiFirebase className="text-yellow-500" /> },
  GraphQL: { name: "GraphQL", icon: <SiGraphql className="text-pink-500" /> },
  Cloudinary: { name: "Cloudinary", icon: <SiCloudinary className="text-sky-400" /> },
  PHP: { name: "PHP", icon: <SiPhp className="text-indigo-500" /> },

  // --- Dev Tools ---
  Git: { name: "Git", icon: <SiGit className="text-red-500" /> },
  Webpack: { name: "Webpack", icon: <SiWebpack className="text-blue-700" /> },
  Jest: { name: "Jest", icon: <SiJest className="text-red-600" /> },
  Postman: { name: "Postman", icon: <SiPostman className="text-orange-500" /> },
  Playwright: { name: "Playwright", icon: <PlaywrightIcon className="text-purple-500" /> },
  Redux: { name: "Redux", icon: <SiRedux className="text-purple-600" /> },
  Vite: { name: "Vite", icon: <SiVite className="text-yellow-400" /> },
  Axios: { name: "Axios", icon: <SiAxios className="text-blue-500" /> },
  Jsonwebtoken: { name: "Jsonwebtoken", icon: <SiJsonwebtokens className="text-yellow-500" /> },
  Dotenv: { name: "Dotenv", icon: <SiDotenv className="text-gray-700" /> },
  Moment: { name: "Moment.js", icon: <MdTimeline className="text-emerald-500" /> },
  Yup: { name: "Yup", icon: <BiCheckCircle className="text-green-500" /> },

  // --- APIs / Integrations ---
  "HubSpot APIs": { name: "HubSpot APIs", icon: <SiHubspot className="text-red-500" /> },
  "YouTube integration": { name: "YouTube integration", icon: <SiYoutube className="text-red-500" /> },
  "Outlook integration": { name: "Outlook integration", icon: <FaClipboardList className="text-blue-600" /> },
  "Google integration": { name: "Google integration", icon: <SiGooglecloud className="text-blue-400" /> },
  "Bassin integration": { name: "Bassin integration", icon: <SiGooglecloud className="text-gray-400" /> },

  // --- Design Tools ---
  Canva: { name: "Canva", icon: <SiCanva className="text-blue-500" /> },
  Figma: { name: "Figma", icon: <SiFigma className="text-pink-500" /> },
  "Adobe Photoshop": { name: "Adobe Photoshop", icon: <SiAdobephotoshop className="text-blue-700" /> },
  "Adobe Premiere Pro": { name: "Adobe Premiere Pro", icon: <SiAdobepremierepro className="text-purple-600" /> },

  // --- Mobile ---
  Expo: { name: "Expo", icon: <SiExpo className="text-black" /> },

  // --- Other / Misc ---
  Python: { name: "Python", icon: <FaPython className="text-yellow-500" /> },
  JQuery: { name: "JQuery", icon: <SiJquery className="text-blue-500" /> },
  JSON: { name: "JSON", icon: <SiJsonwebtokens className="text-yellow-500" /> },
  "p5.js": { name: "p5.js", icon: <SiJavascript className="text-yellow-500" /> },
  AJAX: { name: "AJAX", icon: <SiJavascript className="text-yellow-500" /> },

  // --- Core IT / Business Skills ---
  "Technical Support": { name: "Technical Support", icon: <FaUserCog className="text-blue-500" /> },
  "Hardware Support": { name: "Hardware Support", icon: <MdSupportAgent className="text-blue-500" /> },
  "Software Troubleshooting": { name: "Software Troubleshooting", icon: <FaBug className="text-red-500" /> },
  "System Administration": { name: "System Administration", icon: <FaServer className="text-gray-600" /> },
  "IT Infrastructure": { name: "IT Infrastructure", icon: <MdOutlineManageAccounts className="text-gray-700" /> },
  Networking: { name: "Networking", icon: <FaNetworkWired className="text-cyan-500" /> },
  Cybersecurity: { name: "Cybersecurity", icon: <MdOutlineSecurity className="text-red-600" /> },
  "Database Management": { name: "Database Management", icon: <FaDatabase className="text-green-600" /> },
  "Cloud Computing": { name: "Cloud Computing", icon: <FaCloud className="text-sky-400" /> },
  Automation: { name: "Automation", icon: <FaCogs className="text-gray-600" /> },
  "API Integration": { name: "API Integration", icon: <FaLaptopCode className="text-blue-600" /> },
  "IT Deployment": { name: "IT Deployment", icon: <FaWrench className="text-gray-700" /> },
  Documentation: { name: "Documentation", icon: <FaClipboardList className="text-blue-600" /> },

  // --- Frontend / Development Skills (CV) ---
  GitHub: { name: "GitHub", icon: <SiGithub className="text-gray-800" /> },
  WordPress: { name: "WordPress", icon: <SiWordpress className="text-blue-700" /> },
  MySQL: { name: "MySQL", icon: <SiMysql className="text-blue-600" /> },
  "Web Development": { name: "Web Development", icon: <FaLaptopCode className="text-blue-600" /> },
  "React Swipable": { name: "React Swipable", icon: <SiReact className="text-cyan-500" /> },
  Formik: { name: "Formik", icon: <SiReact className="text-cyan-500" /> },
  Zustand: { name: "Zustand", icon: <SiReact className="text-cyan-500" /> },
  Bcrypt: { name: "Bcrypt", icon: <SiNodedotjs className="text-green-600" /> },
  Bcryptjs: { name: "Bcryptjs", icon: <SiNodedotjs className="text-green-600" /> },

  // --- Design / Business CV Skills ---
  "UI/UX Design": { name: "UI/UX Design", icon: <MdDesignServices className="text-purple-500" /> },
  "Graphic Design": { name: "Graphic Design", icon: <MdOutlineDraw className="text-pink-500" /> },
  "Content Creation": { name: "Content Creation", icon: <FaPenNib className="text-indigo-500" /> },
  "Video Editing": { name: "Video Editing", icon: <SiAdobepremierepro className="text-purple-600" /> },
  "Copywriting": { name: "Copywriting", icon: <FaPenNib className="text-indigo-500" /> },
  Branding: { name: "Branding", icon: <FaGlobe className="text-green-500" /> },
  "Translation": { name: "Translation", icon: <MdLanguage className="text-teal-500" /> },

  // --- Management / Business ---
  "Project Management": { name: "Project Management", icon: <FaProjectDiagram className="text-purple-500" /> },
  "Team Leadership": { name: "Team Leadership", icon: <FaUsers className="text-blue-500" /> },
  "Client Relations": { name: "Client Relations", icon: <FaClipboardList className="text-blue-600" /> },
  "Customer Service": { name: "Customer Service", icon: <FaHeadset className="text-teal-500" /> },
  "Stakeholder Communication": { name: "Stakeholder Communication", icon: <FaClipboardList className="text-blue-600" /> },
  "Business Strategy": { name: "Business Strategy", icon: <MdOutlineDashboard className="text-purple-600" /> },
  "Marketing Strategy": { name: "Marketing Strategy", icon: <FaChartLine className="text-orange-500" /> },
  "Data Analysis": { name: "Data Analysis", icon: <MdOutlineAnalytics className="text-emerald-500" /> },
  "Process Improvement": { name: "Process Improvement", icon: <FaTools className="text-gray-600" /> },
  "Problem Solving": { name: "Problem Solving", icon: <FaLightbulb className="text-yellow-500" /> },
  Adaptability: { name: "Adaptability", icon: <FaLightbulb className="text-yellow-500" /> },
  "Organisational Skills": { name: "Organisational Skills", icon: <FaClipboardList className="text-blue-600" /> },
  Communication: { name: "Communication", icon: <FaEnvelopeOpenText className="text-blue-500" /> },
  Research: { name: "Research", icon: <MdOutlineAnalytics className="text-emerald-500" /> },
  "Scientific Analysis": { name: "Scientific Analysis", icon: <MdOutlineAnalytics className="text-emerald-500" /> },
  "Laboratory Techniques": { name: "Laboratory Techniques", icon: <FaFlask className="text-gray-600" /> },
  "Data Interpretation": { name: "Data Interpretation", icon: <MdOutlineAnalytics className="text-emerald-500" /> },
  "Critical Thinking": { name: "Critical Thinking", icon: <FaLightbulb className="text-yellow-500" /> },
  "Language Skills": { name: "Language Skills", icon: <MdLanguage className="text-teal-500" /> },
  "Attention to Detail": { name: "Attention to Detail", icon: <FaSearch className="text-blue-500" /> },
  "HR Systems": { name: "HR Systems", icon: <FaClipboardList className="text-blue-600" /> },
  Training: { name: "Training", icon: <FaUsers className="text-blue-500" /> },
  "Training & Development": { name: "Training & Development", icon: <FaUsers className="text-blue-500" /> },
  "Event Planning": { name: "Event Planning", icon: <MdDesignServices className="text-purple-500" /> },
  "Administrative Support": { name: "Administrative Support", icon: <FaClipboardList className="text-blue-600" /> },
  Organisation: { name: "Organisation", icon: <FaClipboardList className="text-blue-600" /> },
  "Customer Success Management": { name: "Customer Success Management", icon: <FaHeadset className="text-teal-500" /> },

  // --- Communication & Languages ---
  Languages: { name: "Languages", icon: <MdLanguage className="text-teal-500" /> },
  "SEO Optimization": { name: "SEO Optimization", icon: <FaSearch className="text-blue-500" /> },
  "Email Marketing": { name: "Email Marketing", icon: <FaEnvelopeOpenText className="text-blue-500" /> },
  "Social Media Marketing": { name: "Social Media Marketing", icon: <FaGlobe className="text-green-500" /> },
  "Public Speaking": { name: "Public Speaking", icon: <FaUsers className="text-blue-500" /> },
  Collaboration: { name: "Collaboration", icon: <SiSlack className="text-purple-500" /> },
  "Training & Mentorship": { name: "Training & Mentorship", icon: <FaUsers className="text-blue-500" /> },

  // --- Productivity & Tools ---
  Jira: { name: "Jira", icon: <SiJira className="text-blue-700" /> },
  Slack: { name: "Slack", icon: <SiSlack className="text-purple-500" /> },
  "Google Workspace": { name: "Google Workspace", icon: <FaGlobe className="text-blue-500" /> },
  "Microsoft Office": { name: "Microsoft Office", icon: <FaClipboardList className="text-blue-600" /> },
  "Time Management": { name: "Time Management", icon: <FaClipboardList className="text-blue-600" /> },
  ZenDesk: { name: "ZenDesk", icon: <MdSupportAgent className="text-blue-500" /> },
};
