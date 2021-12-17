import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState, useRef} from 'react'

function App() {

  let element1 = useRef(null)
  let element2 = useRef(null)
  let element3 = useRef(null)
  let element4 = useRef(null)
  let full = useRef(null)

  const [scrollPosition, setScrollPosition] = useState(1);
  const handleScroll = (e) => {
      console.log(e.deltaY, Number(scrollPosition))
      let scroll = (scrollPosition + (e.deltaY/100))
      console.log(scroll)
      setScrollPosition(scroll)
      handleRotation(element1, 0);
      handleRotation(element2, 1); 
      handleRotation(element3, 2); 
      handleRotation(element4, 3);
  }; 

 

  

  /* useEffect(() => {
      window.addEventListener('mousewheel', handleScroll, { passive: true });

      return () => {
          window.removeEventListener('mousewheel', handleScroll);
      };
  }, []); */

  
  
  let centerX = window.innerWidth/2
  let centerY = window.innerHeight; 
  let radius = window.innerWidth/2;

  console.log(window.innerWidth); 



   const radians = (scrollPosition) * Math.PI / 180;

  const handleRotation = (element1, offset) => {
     console.log(full.current.style.width)
      element1.current.style.left = `${((centerX + Math.cos(radians - offset) * radius)+200)}px`; 
      element1.current.style.top = `${((centerY + Math.sin(radians - offset) * radius) +200)}px`; 
   
  };  

 
  

  return (
    <div ref={el => {full.current = el}} className="full" onWheel={(e) => handleScroll(e)}>
        <p ref={el => {element1.current = el}} className="element element1">Scroll</p>
         <p ref={el => {element2.current = el}} className="element element2">Scroll</p>
         <p ref={el => {element3.current = el}} className="element element3">Scroll</p>
         <p ref={el => {element4.current = el}} className="element element4">Scroll</p>
    </div>
  );
}

export default App;
