import { SkillsLibrary } from "./components/SkillsLibrary"
import { FaTools } from "react-icons/fa";
import './App.css';
import './index.css';

function App() {
  // Convert the SkillsLibrary object into an array

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">All Skills</h1>
    <ul className="flex flex-wrap items-center justify-center gap-3 mt-4">
  {Object.entries(SkillsLibrary).map(([, skill], i) => (
    <li
      key={i}
      className="font-[Neucha] font-extralight flex items-center gap-1 rounded-lg bg-teal-200 text-sm text-black px-3 py-1 shadow-sm transition hover:bg-indigo-100"
    >
      
      <span className="">{skill.icon || <FaTools className="" />}</span>
      <span>{skill.name}</span>
    </li>
    
  ))}
</ul>

    </div>
  );
}

export default App;
