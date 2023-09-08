import { useState } from "react"
import "./contact.scss"

export default function Contact() {
  const [message, setMessage] = useState(false)

  const handleSend = (e) => {
    e.preventDefault()
    console.log(message)
    setMessage(true)
  }
  return (
    <div id="contact" className="contact">
      <div className="left">
        <img src="assets/shake.svg" alt="" />
      </div>
      <div className="right">
        <h2>Contact.</h2>
        <form onSubmit={handleSend}>
          <input type="text" placeholder="Email" />
          <textarea placeholder="Message"></textarea>
          <button type="submit">Send</button>
          {message && <span>Thanks, I'll reply ASAP</span>}
        </form>
      </div>
    </div>
  )
}
