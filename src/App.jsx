import React , { useState , useEffect } from 'react'
import './index.css'
import Card from './components/card'
import { FaGithub, FaLinkedin } from "react-icons/fa";
import Aurora from './components/Aurora';
import apuLogo from './assets/images/APU-Logo_Final_Vertical_V1_HR1-copy-1024x966.png';
import smkLogo from './assets/images/smkbbsp_logo-removebg-preview.png';
import profilePic from './assets/images/profile pic.jpg';

const App = () => {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    }

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen text-slate-950 font-sans selection:bg-stone-200 relative">
      <div className="fixed top-0 left-0 w-full h-full -z-10">
        <Aurora
          colorStops={["#568ed7","#f0e4b7","#65d5d7"]}
          amplitude={1}
          blend={0.5}
        />
      </div>

      {/* ASCII Tracker */}
      <div 
        className="fixed pointer-events-none font-mono text-[10px] opacity-40 z-50 transition-all duration-75 ease-out"
        style={{ left: mousePos.x + 15, top: mousePos.y + 15 }}
      >
        {`{ x: ${mousePos.x}, y: ${mousePos.y} }`}
        <br />
        {`[ HOLA_kAMIGO ]`}
      </div>

      {/* Hero*/}
      <nav className="p-10 flex justify-between items-center font-mono text-lg tracking-widest">
        <span>SAM KIAN SHENG</span>
        <div className="space-x-10">          
          <a href="#about" className="hover:underline underline-offset-8">ABOUT</a>
          <a href="skills" className="hover:underline underline-offset-8">SKILLS</a>
          <a href="#projects" className="hover:underline underline-offset-8">WORK</a>
        </div>
      </nav>

    <main>
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center px-8 lg:px-20 overflow-hidden">
        {/* Decorative Blobs */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-2xl opacity-30 animate-pulse"></div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center z-10 w-full max-w-7xl">
          {/* Text Content */}
          <div className="space-y-6 text-left">
             <h1 className="text-6xl lg:text-7xl font-black text-slate-950 leading-tight font-poppins">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-600">Sheng.</span>
             </h1>
             <h2 className="text-2xl text-slate-800 font-medium max-w-lg">
                Computer Science Student & <br/> specializing in Artificial Intelligence.
             </h2>
             <p className="text-lg text-slate-800 leading-relaxed max-w-xl">
                I am a passionate and detail-oriented individual with a strong foundation in computer science and a keen interest in software development. I enjoy solving complex problems and building collaborative solutions.
             </p>
             
             {/* Buttons & Socials */}
             <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="px-8 py-3 bg-slate-950 text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                   View Work
                </a>
                <a href="#contact" className="px-8 py-3 border-2 border-slate-950 text-slate-950 font-semibold rounded-lg hover:bg-slate-950 hover:text-white transition-all">
                   Contact Me
                </a>
             </div>

             <div className="flex gap-6 pt-4 text-slate-950">
                {/* GitHub Icon */}
                <a href="https://github.com/sheng61888" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <FaGithub className="w-8 h-8" />
                </a>
                {/* LinkedIn Icon */}
                <a href="https://linkedin.com/in/sam-kian-sheng-6b70a2355" target="_blank" rel="noopener noreferrer" className="hover:text-blue-600 transition-colors">
                    <FaLinkedin className="w-8 h-8" />
                </a>
             </div>
          </div>

          {/* Graphical/Visual Side */}
          <div className="relative hidden lg:block">
              {/* ID Card Visual */}
              <div className="relative bg-white/50 backdrop-blur-lg border border-white/50 p-8 rounded-2xl shadow-xl transform rotate-5 hover:rotate-0 transition-all duration-500 flex items-center gap-6">
                  {/* Code Snippet (Left) */}
                  <div className="flex-1 space-y-3 font-mono text-sm">
                      <div className="flex gap-2 mb-4">
                          <div className="w-3 h-3 rounded-full bg-red-400"></div>
                          <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                          <div className="w-3 h-3 rounded-full bg-green-400"></div>
                      </div>
                      <div className="text-pink-600">const developer = {"{"}</div>
                      <div className="pl-4 text-slate-950">name: <span className="text-green-600">'Sheng'</span>,</div>
                      <div className="pl-4 text-slate-950">role: <span className="text-green-600">'Software Engineer'</span>,</div>
                      <div className="pl-4 text-slate-950">skills:<br /> [<span className="text-green-600">'React'</span>, <span className="text-green-600">'Java'</span>, <span className="text-green-600">'Python'</span>, <span className="text-green-600">'C++'</span>],<br />
                      [<span className= "text-red-600">'SQL'</span>,<span className= "text-red-600">'Javascript'</span>,<span className= "text-red-600">'HTML'</span>,<span className= "text-red-600">'CSS'</span>],<br />
                      [<span className="text-blue-600">'Photoshop'</span>, <span className="text-blue-600">'Lightroom'</span>, <span className="text-blue-600">'Davinci Resolve'</span>]</div>
                      <div className="pl-4 text-slate-950">hardWorker: <span className="text-blue-600">true</span>,</div>
                      <div className="pl-4 text-slate-950">quickLearner: <span className="text-blue-600">true</span></div>
                      <div className="text-pink-600">{"}"};</div>
                  </div>

                  {/* Profile Picture (Right) */}
                  <div className="flex-shrink-0">
                    <div className="w-32 h-40 lg:w-40 lg:h-48 rounded-xl overflow-hidden shadow-md border-2 border-white/50 bg-gray-200">
                      <img 
                        src={profilePic} 
                        alt="Profile" 
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-8 lg:px-20">
        <h1 className="text-5xl font-bold text-slate-950 mb-12 text-center lg:text-left">
          Skills & Proficiencies
        </h1>
        
        
      </section>

      <section id="education" className="px-8 lg:px-20">
        <h1 className="text-5xl font-bold text-slate-950 mb-12 text-center lg:text-left">
          Education
        </h1>
        
        <div className="space-y-8">
            {/* APU */}
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl hover:bg-white/80 transition-all duration-300">
                <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-slate-950 mb-4">Asia Pacific University of Technology & Innovation (APU)</h3>
                    <ul className="space-y-2 text-slate-800 text-lg">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Foundation Programme in Computing & Technology (2022-2023) <span className="font-semibold">(CGPA: 3.59/4.00)</span></span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Bachelor of Computer Science (Hons) (Artificial Intelligence) (2024 – 2026) <span className="font-semibold">(CGPA: 3.26/4.00)</span></span>
                        </li>
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Currently pursuing – Year 2, Semester 2</span>
                        </li>
                    </ul>
                  </div>
                  <div className="flex-shrink-0">
                    <img src={apuLogo} alt="APU Logo" className="w-32 lg:w-40 h-auto object-contain" />
                  </div>
                </div>
            </div>

            {/* SMK */}
            <div className="bg-white/20 backdrop-blur-lg border border-white/30 rounded-3xl p-8 shadow-xl hover:bg-white/80 transition-all duration-300">
                 <div className="flex flex-col lg:flex-row justify-between items-center gap-8">
                   <div className="flex-1">
                     <h3 className="text-2xl font-bold text-slate-950 mb-4">SMK Bandar Baru Seri Petaling</h3>
                     <ul className="space-y-2 text-slate-800 text-lg">
                        <li className="flex items-start">
                            <span className="mr-2">•</span>
                            <span>Sijil Pelajaran Malaysia (SPM) (2021) – <span className="font-semibold">8A’s</span></span>
                        </li>
                     </ul>
                   </div>
                   <div className="flex-shrink-0">
                      <img src={smkLogo} alt="SMK Logo" className="w-32 lg:w-40 h-auto object-contain" />
                   </div>
                 </div>
            </div>
        </div>
      </section>

      <section id="projects" className="py-20 px-8 lg:px-20">
        <h1 className="text-5xl font-bold text-slate-950 mb-12 text-center lg:text-left">
          Featured Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent">
          <Card 
            title="Automated Purchase Order System" 
            description="A comprehensive system for managing purchase requisitions. Features role-based dashboards, automated approval workflows, and real-time inventory updates using file handling."
            tags={['Java Swing', 'OOP', 'File I/0']}
          />
          <Card 
            title="KiraKira Learning App" 
            description="An engaging gamified learning platform designed for SPM students. Includes progress tracking dashboards, multi-user management, and interactive quizzes."
            tags={['C#', '.NET', 'Web Application', 'MySQL']}
          />
          <Card 
            title="Portfolio Website" 
            description="My personal digital garden. Built to showcase my skills and projects with a premium, responsive design and smooth animations."
            tags={['React', 'Tailwind', 'Vite']}
          />
        </div>
      </section>     
    </main>
    </div>
  );
}

export default App