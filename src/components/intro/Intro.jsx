import { useEffect, useRef } from "react"
import "./intro.scss"
import Typed from "typed.js"

export default function Intro() {
  const textRef = useRef()

  useEffect(() => {
    const options = {
      strings: ["Web Developer", "React", "MongoDB", "NodeJs"],
      typeSpeed: 200, // Typing speed in milliseconds
      backSpeed: 50, // Backspacing speed in milliseconds
      startDelay: 1000, // Delay before typing starts in milliseconds
      backDelay: 1000, // Delay before backspacing starts in milliseconds
      loop: true, // Whether to loop the animation
      fadeOut: true,
    }

    const typed = new Typed(textRef.current, options)

    return () => {
      typed.destroy() // Clean up the Typed instance when the component unmounts
    }
  }, [])

  return (
    <div id="intro" className="intro">
      <div className="left">
        <div className="imgContainer">
          <img src="assets/man.png" alt="" />
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hi There, Im</h2>
          <h1>Jack</h1>
          <h3>
            Skill <span ref={textRef}></span>
          </h3>
        </div>
        <a href="#portofolio">
          <img src="assets/down.png" alt="" />
        </a>
      </div>
    </div>
  )
}
