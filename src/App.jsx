import React , { useState , useEffect } from 'react'
import './index.css'

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
    <div className="min-h-screen bg-[#F5F5F3] text-[#333333] font-sans selection:bg-stone-200">
      {/* ASCII Tracker */}
      <div 
        className="fixed pointer-events-none font-mono text-[10px] opacity-40 z-50 transition-all duration-75 ease-out"
        style={{ left: mousePos.x + 15, top: mousePos.y + 15 }}
      >
        {`{ x: ${mousePos.x}, y: ${mousePos.y} }`}
        <br />
        {`[ AI_STUDENT ]`}
      </div>

      {/* Hero Content */}
      <nav className="p-8 flex justify-between items-center font-mono text-sm tracking-widest">
        <span>SAM KIAN SHENG</span>
        <div className="space-x-8">
          <a href="#projects" className="hover:line-through">WORK</a>
          <a href="#about" className="hover:line-through">ABOUT</a>
        </div>
      </nav>

      <main className="flex flex-col justify-center px-8 mt-32 max-w-5xl">
        <h1 className="text-7xl md:text-8xl font-light tracking-tighter mb-8">
          Computer Science Student<br /> 
          <span className="italic font-serif opacity-80">Specialising in <br/>Artificial Intelligence.</span>
        </h1>
        <p className="max-w-md text-lg leading-relaxed opacity-70">
          Focused on technical expertise and critical soft skills.
        </p>
      </main>
    </div>
  );
}

export default App