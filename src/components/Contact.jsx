import React from 'react'
// line
export default function Contact() {
  return (
    <div>
      <h3 className="cnt-head">Contact Me</h3>
      <div className="main-contact">
        <p></p>
        <div className="contact">
          <h4 className="cnt-tagline">Have an idea?</h4>

          <h4 className="cnt-tagline2">Let's work on it!</h4>

          <p className="tag">
            I believe to bring up ideas into reality.
            <br />
            Let's Research, Design and Develop the solution .
          </p>
          <input placeholder="Your name" name="name" id="name" type="text" />
          <input
            placeholder="Your email"
            name="email"
            id="email"
            type="email"
          />
          <textarea
            placeholder="Your message"
            name="desc"
            id="desc"
            cols="30"
            rows="10"
          ></textarea>
          <button className="submit-btn" type="submit">
            Send message
          </button>
        </div>

        <div className="contact-det">
          <h4>Contact details</h4>
          <a href="mail.to:motesarv@gmail.com">Mail</a>
          <a href="">Meta address</a>
          <br />
          <h4>I'm available here</h4>
          <a href="">X/Twitter</a>
          <a href="">Pinterest</a>
          <a href="">Github</a>
          {/* <!-- <a href=""></a> --> */}
          <br />
          <h4>My Profiles</h4>
          <a href="">GeeksForGeeks</a>
          <a href="">LeetCode</a>
          {/* <!-- <a href="">Github</a> --> */}
        </div>
      </div>
    </div>
  )
}
