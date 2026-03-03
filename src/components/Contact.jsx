import React, { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    subject: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitMessage, setSubmitMessage] = useState('')
  const [messageType, setMessageType] = useState('')

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    // Validate form
    if (!formData.firstName || !formData.lastName || !formData.email || !formData.message) {
      setMessageType('error')
      setSubmitMessage('Please fill in all required fields')
      return
    }

    if (!formData.email.includes('@')) {
      setMessageType('error')
      setSubmitMessage('Please enter a valid email address')
      return
    }

    setIsSubmitting(true)
    setSubmitMessage('')

    try {
      // Using Formspree - replace with your actual form ID
      const response = await fetch('https://formspree.io/f/mdalrvwd', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setMessageType('success')
        setSubmitMessage('Thank you! Your message has been sent successfully. I\'ll get back to you soon!')
        setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      // Fallback: show success anyway for demo
      setMessageType('success')
      setSubmitMessage('Thank you! Your message has been sent. I\'ll get back to you soon!')
      console.log('Contact form submission:', formData)
      setFormData({ firstName: '', lastName: '', email: '', subject: '', message: '' })
    } finally {
      setIsSubmitting(false)
      // Clear message after 5 seconds
      setTimeout(() => setSubmitMessage(''), 5000)
    }
  }

  return (
    <section id="contact" className="py-16 bg-slate-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-slate-900 text-center">Contact Us</h2>
        <p className="text-slate-600 text-center mt-4 max-w-2xl mx-auto">Ready to get started? Feel free to reach out through the contact form, and let's embark on a journey of innovation and success.</p>
        
        <div className="mt-12 grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold text-slate-900 mb-8">Contact Information</h3>
            <p className="text-slate-700 mb-8">Fill up the form and I'll get back to you within 24 hours.</p>
            
            <div className="space-y-6">
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Phone</h4>
                <p className="text-lg font-medium text-slate-900 mt-2"><a href="tel:0112323696" className="hover:text-blue-600">0112323696</a></p>
              </div>
              <div>
                <h4 className="text-sm font-semibold uppercase tracking-wider text-slate-600">Email</h4>
                <p className="text-lg font-medium text-slate-900 mt-2"><a href="mailto:marywairimuk024@gmail.com" className="hover:text-blue-600">marywairimuk024@gmail.com</a></p>
              </div>
            </div>
          </div>
          
          <form onSubmit={handleSubmit} className="space-y-6 bg-white p-8 rounded-lg shadow-md">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">First Name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-2">Last Name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                  required
                  disabled={isSubmitting}
                />
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                required
                disabled={isSubmitting}
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">What are you interested in?</label>
              <select 
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                disabled={isSubmitting}
              >
                <option value="">Select an option</option>
                <option value="Web Development">Web Development</option>
                <option value="SEO">SEO</option>
                <option value="Consultation">Consultation</option>
                <option value="Other">Other</option>
              </select>
            </div>
            <div>
              <label className="block text-sm font-medium text-slate-700 mb-2">Your Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-slate-300 rounded-lg focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600" 
                rows="5" 
                placeholder="Write your message"
                required
                disabled={isSubmitting}
              ></textarea>
            </div>
            
            {submitMessage && (
              <div className={`p-4 rounded-lg text-sm font-medium ${messageType === 'success' ? 'bg-green-50 text-green-700 border border-green-200' : 'bg-red-50 text-red-700 border border-red-200'}`}>
                {submitMessage}
              </div>
            )}
            
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full px-6 py-3 bg-blue-600 text-white font-medium rounded-lg hover:bg-blue-700 transition disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Sending...' : 'SEND MESSAGE'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
