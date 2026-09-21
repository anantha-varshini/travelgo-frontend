import React from 'react'
import './Pages.css'

const Contact = () => {

  const handleSubmit = async (event) => {
    event.preventDefault()

    const form = event.target

    const contact = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value
    }

    try {
      const res = await fetch('https://travelgo-backend-five.vercel.app/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(contact)
      })

      const data = await res.json()

      if (!res.ok) {
        throw new Error(data.message || 'Failed to send message')
      }

      alert('Message sent successfully! 🎉')
      form.reset()

    } catch (error) {
      console.error('Contact error:', error)
      alert('Failed to send message')
    }
  }

  return (
    <section className="contact">

      <h1>Contact Us</h1>
      <p>We'd love to help you plan your next trip.</p>

      <div className="contact-container">

        <div className="contact-info">
          <h2>Get in Touch</h2>

          <p>
            <strong>📍 Address:</strong><br />
            Travel Go, Coimbatore, Tamil Nadu
          </p>

          <p>
            <strong>📞 Phone:</strong><br />
            +91 98765 43210
          </p>

          <p>
            <strong>📧 Email:</strong><br />
            travelgo@gmail.com
          </p>

          <p>
            <strong>🕒 Working Hours:</strong><br />
            Monday - Saturday<br />
            9:00 AM - 7:00 PM
          </p>
        </div>

        <form className="contact-form" onSubmit={handleSubmit}>

          <input type="text" name="name" placeholder="Your Name" required/>
          <input type="email" name="email" placeholder="Your Email" required/>
          <textarea name="message" rows="6" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>

        </form>

      </div>

    </section>
  )
}

export default Contact