import React, {useState, useRef} from "react"
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from "react-router-dom";
import styles from './home.module.css'
import BackgroundMusic from "./BackgroundMusic";
import Start from "./Start";
import Hall from "./Hall";
import LineUp from "./LineUp";
import DressCode from "./DressCode";
import Photographer from "./Photographer";
import GuestList from "./GuestList";
import Camping from "./Camping";
import gsap from 'gsap'
import homeImg from '../assets/img/home.jpg'
import hallImg from '../assets/img/hall.jpg'
import lineUpImg from '../assets/img/lineUp.jpg'
import dressCodeImg from '../assets/img/dressCode.jpg'
import guestListImg from '../assets/img/guestList.jpg'
import photographerImg from '../assets/img/darkRoom.jpg'
import campingImg from '../assets/img/camping.jpg'

const Home = () => {

    const [menu, showMenu] = useState(false); 
    const [image, changeImage] = useState(homeImg); 
    const imgHall = hallImg

    //Vars for our animated dom nodes 
    let nav = useRef(null);
    let logo = useRef(null);
    let navMiddle = useRef(null);
    let hamburger = useRef(null); 
    let sound = useRef(null);
    let list = useRef(null);
    let line1 = useRef(null);
    let line2 = useRef(null);
    let line3 = useRef(null);
    let line4 = useRef(null);
    let line5 = useRef(null);
    let line6 = useRef(null);

    const showMenuBar = () =>{
        console.log('works')
        if(menu) {
            showMenu(false);
            gsap.to([nav], {
                duration: .5,
                width: "5vw",
                alignItems: "center",
                height: "100%",
                ease: "Power3.inOut",
            });
            gsap.to([line1, line2, line3, line4, line5, line6], {
                duration: .8,
                opacity: 0,
                marginLeft: "-20rem",
                ease: "Power3.inOut",
                stagger: {
                    amount: 0.2
                }
            });

            gsap.to([hamburger], {
                duration: .5,
                transform: "rotate(0deg)",
                ease: "Power3.inOut"
            })
            
        } else {
            gsap.to([nav], {
                duration: .5,
                width: "50vw",
                alignItems: "flex-start",
                height: "100%",
                ease: "Power3.inOut",
            });
            gsap.to([line1, line2, line3, line4, line5, line6], {
                duration: .8,
                opacity: 1,
                marginLeft: 0,
                ease: "Power3.inOut",
                stagger: {
                    amount: 0.2
                }
            });
            gsap.to([hamburger], {
                duration: .5,
                transform: "rotate(90deg)",
                ease: "Power3.inOut"
            })
            showMenu(true);
             nav.style.height = "100%"
        }
    }

    const changeHomeImage = (e) => {
        let element = e.target.id
        if(element === "hall") {
            changeImage(hallImg)
        } else if (element === "lineUp") {
            changeImage(lineUpImg)
        } else if (element === "dressCode") {
            changeImage(dressCodeImg)
        } else if (element === "guestList") {
            changeImage(guestListImg)
        } else if (element === "photographer") {
            changeImage(photographerImg)
        } else if (element === "camping") {
            changeImage(campingImg)
        }
    }

    const resetImageDefault = () => {
        changeImage(homeImg)
    }

    return(
        <div className={styles.container}>
                <div ref={el => {nav = el}} className={styles.nav}>
                    <Link to="./start">
                        <svg ref={el => {logo = el}} className={styles.logo} xmlns="http://www.w3.org/2000/svg" width="70" height="105" viewBox="0 0 70 105">
                            <g id="Group_6" data-name="Group 6" transform="translate(-41 -15)">
                                <text id="_17" data-name="17" transform="translate(61 45)" fill="#fff" font-size="31" font-family="HelveticaNeue-Light, Helvetica Neue" font-weight="300"><tspan x="-17.236" y="0">17</tspan></text>
                                <text id="_12" data-name="12" transform="translate(93 76)" fill="#fff" font-size="31" font-family="HelveticaNeue-Light, Helvetica Neue" font-weight="300"><tspan x="-17.236" y="0">12</tspan></text>
                                <text id="_22" data-name="‘22" transform="translate(62 114)" fill="#fff" font-size="30" font-family="HelveticaNeue-Light, Helvetica Neue" font-weight="300"><tspan x="-20.85" y="0">‘22</tspan></text>
                                <line id="Line_1" data-name="Line 1" x2="42" transform="translate(68.5 72.651) rotate(45)" fill="none" stroke="#fff" stroke-width="1"/>
                                <line id="Line_2" data-name="Line 2" x2="42" transform="translate(68.5 57.198) rotate(-45)" fill="none" stroke="#fff" stroke-width="1"/>
                            </g>
                        </svg>
                    </Link>
                    <div ref={el => {navMiddle = el}} className={styles.navMiddle}>
                        <ul ref={el => {list = el}} className={menu ? styles.navList : styles.noDisplay}>
                            <li onMouseEnter={(e) => changeHomeImage(e)} onMouseLeave={resetImageDefault} id="camping" ref={el => {line1 = el}} className={styles.navItem}><Link id="camping" to="./camping" className={styles.navItemStyle}>camping</Link></li>
                            <li onMouseEnter={(e) => changeHomeImage(e)} onMouseLeave={resetImageDefault} id="hall" ref={el => {line2 = el}} className={styles.navItem}><Link id="hall" to="./hall" className={styles.navItemStyle}>zaal</Link></li>
                            <li onMouseEnter={(e) => changeHomeImage(e)} onMouseLeave={resetImageDefault} id="lineUp" ref={el => {line3 = el}} className={styles.navItem}><Link id="lineUp" to="./lineUp" className={styles.navItemStyle}>line-up</Link></li>
                            <li onMouseEnter={(e) => changeHomeImage(e)} onMouseLeave={resetImageDefault} id="dressCode" ref={el => {line4 = el}} className={styles.navItem}><Link id="dressCode" to="./dressCode" className={styles.navItemStyle}>dress code</Link></li>
                            <li onMouseEnter={(e) => changeHomeImage(e)} onMouseLeave={resetImageDefault} id="photographer" ref={el => {line5 = el}} className={styles.navItem}><Link id="photographer" to="./photographer" className={styles.navItemStyle}>fotograaf</Link></li>
                            <li onMouseEnter={(e) => changeHomeImage(e)} onMouseLeave={resetImageDefault} id="guestList" ref={el => {line6 = el}} className={styles.navItem}><Link id="guestList" to="./guestList" className={styles.navItemStyle}>Gasten lijst</Link></li>
                        </ul>
                        <svg ref={el => {hamburger = el}} onClick={showMenuBar} className={styles.menuIcon} xmlns="http://www.w3.org/2000/svg" width="28.098" height="54.382" viewBox="0 0 28.098 54.382">
                            <g id="Group_7" data-name="Group 7" transform="translate(-68.273 -504.203)">
                                <path id="Path_4" data-name="Path 4" d="M0,0V54.382" transform="translate(69.773 504.203)" fill="none" stroke="#fff" stroke-width="3"/>
                                <path id="Path_5" data-name="Path 5" d="M0,0V54.382" transform="translate(94.871 504.203)" fill="none" stroke="#fff" stroke-width="3"/>
                            </g>
                        </svg>
                    </div>
                    <BackgroundMusic ref={el => {sound = el}}/>
                </div>
                <div className={styles.organize}>
                    <a className={styles.organisation} target="_blank" href="https://www.voldercompany.be">A VOLDER EVENT</a>
                    <p className={styles.accept}>Accept<br/>Invite</p>
                </div>
            
            <Routes>
            <Route path="/start" element={<Start homeImage={image}/>} />
            <Route path="/camping" element={<Camping/>} />
            <Route path="/hall" element={<Hall/>} />
            <Route path="/lineUp" element={<LineUp/>} />
            <Route path="/dressCode" element={<DressCode/>} />
            <Route path="/photograhper" element={<Photographer/>} />
            <Route path="/guestList" element={<GuestList/>} />
        </Routes>
        </div>
        
        
    )
}

export default Home;