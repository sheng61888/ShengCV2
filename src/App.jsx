import React , { useState , useEffect } from 'react'
import './index.css'
import Card from './components/card'

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
             <h1 className="text-6xl lg:text-7xl font-black text-[#30364F] leading-tight font-[Poppins]">
                Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-black to-yellow-600">Sheng.</span>
             </h1>
             <h2 className="text-2xl text-gray-600 font-medium max-w-lg">
                Computer Science Student & <br/> passionate Software Developer.
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
                <a href="#" className="hover:text-blue-600 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                </a>
                {/* LinkedIn Icon */}
                <a href="#" className="hover:text-blue-600 transition-colors">
                    <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" /></svg>
                </a>
             </div>
          </div>

          {/* Graphical/Visual Side */}
          <div className="relative hidden lg:block">
              {/* Abstract Code Card or Visual */}
              <div className="relative bg-white/40 backdrop-blur-lg border border-white/50 p-8 rounded-2xl shadow-xl transform rotate-3 hover:rotate-0 transition-all duration-500">
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