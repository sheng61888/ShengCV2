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
      <section>
        <h1 className='h1'>
          About Me
        </h1>
        <h2 className='h2'>
            hello
        </h2>
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