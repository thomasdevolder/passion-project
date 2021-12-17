import React, {useRef, useState, useEffect} from 'react';
import styles from './lineUp.module.css' 
import boardX from '../assets/img/lineUpBoardx.png'
import artic from '../assets/img/djArtic.jpg'
import gsap, {TweenLite} from 'gsap'

const LineUp = () => {

    

    let vinyl = useRef();
    let dj1 = useRef(); 
    let dj2 = useRef();
    let dj3 = useRef(); 
    let dj4 = useRef(); 

    useEffect(()=>{ 
        console.log(vinyl);
        console.log(window.innerWidth/2+(window.innerWidth*0.05)-550)
        vinyl.style.left = (window.innerWidth)/2-550+(window.innerWidth*0.025)
        vinyl.style.top = (window.innerHeight)-350; 

        document.querySelector(`body`).style.overflow = "hidden"
    }, [])

    const [scrollPosition, setScrollPosition] = useState(1);
    const handleScroll = (e) => {
        console.log(e.deltaY, Number(scrollPosition))
        let scroll = (scrollPosition + (Number(e.deltaY.toString().split(' ')[0])))
        setScrollPosition(scroll); 
        console.log(scroll);
         handleRotation(dj1, 90, scroll)
         handleRotation(dj2, 270, scroll)
        
          
    }; 

    const handleRotation = (element, offset, scroll) => {
        let centerX = window.innerWidth/2-window.innerWidth*0.475;;
        let centerY = window.innerHeight 
        let radius = window.innerWidth/2;

        const radians = (scroll) * Math.PI / 180;
 
        //vinyl.style.transform = `rotate(${scroll-30}deg)`
        gsap.to(vinyl, {rotation: `${scroll-30}deg`, transformOrigin: "center"})
        element.style.left = `${((centerX + Math.cos(radians - offset) * radius))}px`; 
        element.style.top = `${((centerY + Math.sin(radians - offset) * radius))}px`;
        
        console.log(element.style.left, element.style.top)
    }



    
    

    return (
        <main onWheel={(e) => handleScroll(e)} className={styles.main}>
            <div className={styles.lineUp}>
                <h2 className={styles.title}>Line Up</h2>
                <div ref={el => {dj1 = el}} className={styles.info}>
                    <p className={styles.description}>DJ ARTIC is het nieuwe dj duo in Vlaanderen. Sinds ze begonnen zijn in 2019 hebben ze andere andere al op de 1 Euro fuif gedraaid. Afgelopen zomer zijn ze ook meegeweest met Summerbash en BoardX. Maar het ging niet altijd zo vlot. Tijdens de lockdown konden ze niet op evenement gaan draaien maar hebben ze hun tijd nuttig gebruik door hun vaardigheden en muziek collectie uit te breiden.  </p>
                    <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/3diNxyLMTGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img className={styles.img} src={artic}></img> 
                </div>
                <div ref={el => {dj2 = el}} className={styles.info}>
                    <p className={styles.description}>DJ ARTIC is het nieuwe dj duo in Vlaanderen. Sinds ze begonnen zijn in 2019 hebben ze andere andere al op de 1 Euro fuif gedraaid. Afgelopen zomer zijn ze ook meegeweest met Summerbash en BoardX. Maar het ging niet altijd zo vlot. Tijdens de lockdown konden ze niet op evenement gaan draaien maar hebben ze hun tijd nuttig gebruik door hun vaardigheden en muziek collectie uit te breiden.  </p>
                    <iframe className={styles.video} width="560" height="315" src="https://www.youtube.com/embed/3diNxyLMTGA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                    <img className={styles.img} src={artic}></img> 
                </div>
                
                <p className={styles.artist}>Dj Artic</p>
                <svg ref={el => vinyl = el} className={styles.vinyl} xmlns="http://www.w3.org/2000/svg" width="1100" height="1100" viewBox="0 0 1100 1100"><g transform="translate(-410 -725)"><g transform="translate(460 775)" fill="none" stroke="#fff" stroke-width="1"><circle cx="500" cy="500" r="500" stroke="none"/><circle cx="500" cy="500" r="499.5" fill="none"/></g><g transform="translate(410 725)" fill="none" stroke="#fff" stroke-width="2"><circle cx="550" cy="550" r="550" stroke="none"/><circle cx="550" cy="550" r="549" fill="none"/></g><g transform="translate(510 825)" fill="none" stroke="#fff" stroke-width="1"><circle cx="450" cy="450" r="450" stroke="none"/><circle cx="450" cy="450" r="449.5" fill="none"/></g><g transform="translate(560 875)" fill="none" stroke="#fff" stroke-width="1"><circle cx="400" cy="400" r="400" stroke="none"/><circle cx="400" cy="400" r="399.5" fill="none"/></g><g transform="translate(610 925)" fill="none" stroke="#fff" stroke-width="1"><circle cx="350" cy="350" r="350" stroke="none"/><circle cx="350" cy="350" r="349.5" fill="none"/></g><path d="M17191-947v200" transform="translate(-16230 1672)" fill="none" stroke="#fff" stroke-width="2"/><path d="M17191-947v200" transform="translate(-16230 2572)" fill="none" stroke="#fff" stroke-width="2"/><path d="M17191-947v200" transform="translate(563 -15916) rotate(90)" fill="none" stroke="#fff" stroke-width="2"/><path d="M17191-947v200" transform="translate(-337 -15916) rotate(90)" fill="none" stroke="#fff" stroke-width="2"/></g></svg>
            </div>
            
            <img className={styles.background} src={boardX}></img>
        </main>
    )
}

export default LineUp