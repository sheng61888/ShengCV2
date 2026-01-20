import React , { useState , useEffect } from 'react'
import './index.css'
import Card from './components/card'
import { FaGithub, FaLinkedin } from "react-icons/fa";

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
    <div className="min-h-screen bg-[#f2eee0] text-[#30364F] font-sans selection:bg-stone-200">
      {/* ASCII Tracker */}
      <div 
        className="fixed pointer-events-none font-mono text-[10px] opacity-40 z-50 transition-all duration-75 ease-out"
        style={{ left: mousePos.x + 15, top: mousePos.y + 15 }}
      >
        {`{ x: ${mousePos.x}, y: ${mousePos.y} }`}
        <br />
        {`[ HOLA AMIGO ]`}
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
             <h1 className="text-6xl lg:text-7xl font-black text-[#30364F] leading-tight font-poppins">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-600">Sheng.</span>
             </h1>
             <h2 className="text-2xl text-gray-600 font-medium max-w-lg">
                Computer Science Student & <br/> specializing in Artificial Intelligence.
             </h2>
             <p className="text-lg text-gray-600 leading-relaxed max-w-xl">
                I am a passionate and detail-oriented individual with a strong foundation in computer science and a keen interest in software development. I enjoy solving complex problems and building collaborative solutions.
             </p>
             
             {/* Buttons & Socials */}
             <div className="flex flex-wrap gap-4 pt-4">
                <a href="#projects" className="px-8 py-3 bg-[#30364F] text-white font-semibold rounded-lg hover:bg-opacity-90 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                   View Work
                </a>
                <a href="#contact" className="px-8 py-3 border-2 border-[#30364F] text-[#30364F] font-semibold rounded-lg hover:bg-[#30364F] hover:text-white transition-all">
                   Contact Me
                </a>
             </div>

             <div className="flex gap-6 pt-4 text-[#30364F]">
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
              {/* Abstract Code Card or Visual */}
              <div className="relative bg-white/50 backdrop-blur-lg border border-white/50 p-8 rounded-2xl shadow-xl transform rotate-5 hover:rotate-0 transition-all duration-500">
                  <div className="flex gap-2 mb-4">
                      <div className="w-3 h-3 rounded-full bg-red-400"></div>
                      <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                      <div className="w-3 h-3 rounded-full bg-green-400"></div>
                  </div>
                  <div className="space-y-3 font-mono text-sm">
                      <div className="text-pink-600">const developer = {"{"}</div>
                      <div className="pl-4 text-[#30364F]">name: <span className="text-green-600">'Sheng'</span>,</div>
                      <div className="pl-4 text-[#30364F]">role: <span className="text-green-600">'Software Engineer'</span>,</div>
                      <div className="pl-4 text-[#30364F]">skills:<br /> [<span className="text-green-600">'React'</span>, <span className="text-green-600">'Java'</span>, <span className="text-green-600">'Python'</span>, <span className="text-green-600">'C++'</span>],<br />
                      [<span className= "text-red-600">'SQL'</span>,<span className= "text-red-600">'Javascript'</span>,<span className= "text-red-600">'HTML'</span>,<span className= "text-red-600">'CSS'</span>],<br />
                      [<span className="text-blue-600">'Photoshop'</span>, <span className="text-blue-600">'Lightroom'</span>, <span className="text-blue-600">'Davinci Resolve'</span>]</div>
                      <div className="pl-4 text-[#30364F]">hardWorker: <span className="text-blue-600">true</span>,</div>
                      <div className="pl-4 text-[#30364F]">quickLearner: <span className="text-blue-600">true</span></div>
                      <div className="text-pink-600">{"}"};</div>
                  </div>
              </div>
          </div>
        </div>
      </section>

      <section>
        <h1 className='h1'>
          Skills
        </h1>
        <h2 className='h2'>
            hello
        </h2>
      </section>

      <section>
        <h1 className='h1'>
          Education
        </h1>
        <h2 className='h2'>
            hello
        </h2>
      </section>

      <section id="projects">
        <h1 className='h1'>
          Projects
        </h1>
        <div className="flex flex-wrap gap-8 ml-10 justify-center">
          <Card 
            title="Automated Purchase Order System" 
            description="Java Swing & OOP"
            backTitle="Key Features"
            backDescription="Role-based dashboards, automated requisition approval, and inventory updates with file handling."
          />
          <Card 
            title="KiraKira Learning App" 
            description="Full-stack C# .NET & Web"
            backTitle="Key Features"
            backDescription="Gamified learning for SPM students with progress dashboards and multi-user management."
          />
          <Card 
            title=" " 
            description=" "
            backTitle="Key Features"
            backDescription=" "
          />
        </div>
      </section>

      <section>
        <h1 className='h1'>
          Contact
        </h1>
        <h2 className='h2'>
            hello
        </h2>
      </section>
      
    </main>
    </div>
  );
}

export default App