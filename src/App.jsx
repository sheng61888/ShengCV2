import React , { useState , useEffect } from 'react'
import './index.css'
import Card from './components/card'
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Aurora from './components/Aurora';
import apuLogo from './assets/images/APU-Logo_Final_Vertical_V1_HR1-copy-1024x966.png';
import smkLogo from './assets/images/smkbbsp_logo-removebg-preview.png';
import profilePic from './assets/images/profile pic.jpg';
import ScrollStack, { ScrollStackItem } from './components/ScrollStack'
import ProjectCard from './components/ProjectCard';

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
        {`[ HOLA_AMIGO ]`}
      </div>

      {/* Hero*/}
      <nav className="p-10 flex justify-between items-center font-mono text-lg tracking-widest">
        <span>SAM KIAN SHENG</span>
        <div className="space-x-10">          
          <a href="#about" className="hover:underline underline-offset-8">About</a>
          <a href="#projects" className="hover:underline underline-offset-8">Projects</a>
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
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-yellow-600">Sheng.</span>
             </h1>
             <h2 className="text-2xl text-slate-800 font-medium max-w-lg">
                Computer Science Student<br/>specializing in Artificial Intelligence.
             </h2>
             <p className="text-lg text-slate-800 leading-relaxed max-w-xl">
                I am a passionate and detail-oriented individual with a strong foundation in computer science and a keen interest in software development. I enjoy solving complex problems and building collaborative solutions.
             </p>
             
             {/* Buttons & Socials */}
             <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="px-8 py-3 bg-slate-950 text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                   View Work
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
                <a href="mailto:samkiansheng2@gmail.com" className="flex items-center gap-2 hover:text-blue-600 transition-colors">
                  {/* {Email Icon} */}
                  <FaEnvelope className="w-8 h-8" />
                  <span className="text-lg font-medium">samkiansheng2@gmail.com</span>
                </a>
             </div>
          </div>

          {/* Graphical/Visual Side */}
          <div className="relative flex justify-center lg:block">
              {/* ID Card Visual */}
              <div className="relative bg-white/50 backdrop-blur-lg border border-white/50 p-6 sm:p-8 rounded-2xl shadow-xl transform lg:rotate-5 hover:rotate-0 transition-all duration-500 flex flex-col sm:flex-row items-center gap-6 max-w-md sm:max-w-none">
                  {/* Code Snippet (Left) */}
                  <div className="flex-1 space-y-3 font-mono text-sm w-full">
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

      <section id="projects" className="py-20 px-8 lg:px-20">
        <h1 className="text-5xl font-bold text-slate-950 mb-12 text-center lg:text-left">
          Featured Projects
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 bg-transparent">
          <ProjectCard 
            title="KiraKira Mathematics Learning Website" 
            description="An engaging gamified learning platform designed for SPM students. Includes progress tracking dashboards, multi-user management, and interactive quizzes."
            tags={['C#', '.NET', 'Web Application', 'MySQL']}
            link="https://github.com/sheng61888/KiraKira5"
          />
          <ProjectCard 
            title="Lumi's Adventure - Platformer Game" 
            description="A 2D platformer game built with Pygame. Features smooth character movement, enemy AI, and multiple levels. Apply special effects such as parallax background, screen shake, and particle effects."
            tags={['Pygame', 'Python', '2D Game']}
            link="https://github.com/sheng61888/lumi-s_adventure"
          />
          <ProjectCard 
            title="Automated Purchase Order System" 
            description="A comprehensive system for managing purchase requisitions. Features role-based dashboards, automated approval workflows, and real-time inventory updates using file handling."
            tags={['Java Swing', 'OOP', 'File I/0']}
            link=" "
          />
          <ProjectCard 
            title="CarCare Management System" 
            description="An enterprise-grade desktop solution built with C# to streamline workshop workflows. It features a robust database for automated billing, service history tracking, and intelligent inventory management across four distinct user roles."
            tags={['C#', 'SQL', 'Desktop Application']}
            link=" "
          />
          
        </div>
      </section> 

      {/* <Certifications> */}
      <section id="certifications" className="py-20">
        <h1 className="text-5xl font-bold text-slate-950 mb-12 text-center lg:text-left ml-8 lg:ml-20">
          Certifications
        </h1>
        <ScrollStack
          itemDistance={50}
          itemStackDistance={20}
          baseScale={0.9}
          useWindowScroll={true}
        >
          <ScrollStackItem itemClassName="bg-gradient-to-br from-blue-300 via-blue-200 to-indigo-300 text-white border-none opacity-80">
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-lg font-mono text-slate-950 uppercase tracking-widest">Oct 2024</span>
                <h2 className="text-3xl poppins-bold mt-2 leading-tight text-slate-950">BAT X APU Cyber Traditions Battle 2024</h2>
              </div>
              <div className="flex justify-between items-end">
                <div className="w-12 h-12 bg-slate-950/20 rounded-lg backdrop-blur-sm flex items-center justify-center">
                   <div className="w-6 h-6 border-2 border-slate-950 rounded-full"></div>
                </div>
                <p className="text-lg font-mono text-slate-950">CTF Participation</p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-br from-red-300 via-red-200 to-rose-300 text-white border-none opacity-80">
            <div className="h-full flex flex-col justify-between">
              <div>
                <span className="text-lg font-mono text-slate-950 uppercase tracking-widest">May 2025</span>
                <h2 className="text-3xl poppins-bold mt-2 leading-tight text-slate-950">Red Hat System Administration I (RH124)</h2>
              </div>
              <div className="flex justify-between items-end">
                <div className="w-12 h-12 bg-slate-950/20 rounded-lg backdrop-blur-sm flex items-center justify-center font-bold">
                   RH
                </div>
                <p className="text-lg font-mono text-slate-950">Infrastructure & System Management</p>
              </div>
            </div>
          </ScrollStackItem>

          <ScrollStackItem itemClassName="bg-gradient-to-br from-orange-300 via-yellow-200 to-amber-300 text-white border-none opacity-80">
            <div className="h-full flex flex-col justify-between">
              <div> 
                <span className="text-lg font-mono uppercase tracking-widest text-slate-950">Sep 2025</span>
                <h2 className="text-3xl poppins-bold mt-2 leading-tight text-slate-950">Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate</h2>
              </div>
              <div className="flex justify-between items-end">
                <div className="w-12 h-12 bg-slate-950/20 rounded-lg backdrop-blur-sm flex items-center justify-center font-bold">
                   OCI
                </div>
                <p className="text-lg font-mono text-slate-950">Artificial Intelligence & Cloud Foundations</p>
              </div>
            </div>
          </ScrollStackItem>
        </ScrollStack>
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

      
      <section id="work-experience" className="py-20 px-8 lg:px-20">
        <h1 className="text-5xl font-bold text-slate-950 mb-16 text-center lg:text-left">
          Work Experience
        </h1>
        
        <div className="relative border-l-4 border-slate-950/20 ml-4 lg:ml-10 space-y-12 pb-8">
          {/* Stopover */}
          <div className="relative pl-10">
            <div className="absolute -left-[14px] top-0 w-6 h-6 bg-slate-950 rounded-full border-4 border-[#f2eee0]"></div>
            <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-950">Part-Time Barista-Cook</h3>
                  <p className="text-xl font-medium text-slate-800">Stopover</p>
                </div>
                <span className="px-4 py-1 bg-slate-950 text-white text-sm font-mono rounded-full self-start">
                  Sep 2023 – Jan 2024
                </span>
              </div>
              <p className="text-lg text-slate-800 leading-relaxed">
                Developed teamwork and communication skills while serving customers, preparing food and beverages, and ensuring quality standards.
              </p>
            </div>
          </div>

          {/* O & G Transport */}
          <div className="relative pl-10">
            <div className="absolute -left-[14px] top-0 w-6 h-6 bg-slate-950 rounded-full border-4 border-[#f2eee0]"></div>
            <div className="bg-white/40 backdrop-blur-md border border-white/50 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                <div>
                  <h3 className="text-2xl font-black text-slate-950">Part-Time Clerk</h3>
                  <p className="text-xl font-medium text-slate-800">O & G Transport (KL) Sdn Bhd</p>
                </div>
                <span className="px-4 py-1 bg-slate-950 text-white text-sm font-mono rounded-full self-start">
                  Jan 2025 – Feb 2025
                </span>
              </div>
              <p className="text-lg text-slate-800 leading-relaxed">
                Strengthened organizational and attention-to-detail skills by managing invoices and performing accurate data entry.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section id="skills" className="px-8 lg:px-20">
        <h1 className="text-5xl font-bold text-slate-950 mt-12 mb-12 text-center lg:text-left">
          Skills & Proficiencies
        </h1>
        <div className = "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20 bg-transparent">
          <Card 
            title="Programming Languages" 
            description="React, Python, Java, C Sharp, C++, R, SQL, Javascript, HTML, CSS"
          />
          <Card
            title="Software"
            description="Adobe Creative Software (Photoshop, Lightroom), Microsoft Office, Google Cloud, Microsoft Azure, Cisco Networking, RedHat Administrative"
          />
          <Card
            title="I can speak ..."
            description="Fluent English and Malay, Native Chinese"
          />
        </div>
      </section>

    </main>
    </div>
  );
}

export default App