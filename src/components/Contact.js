import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  // Generate test email URL
  const testEmailUrl = `mailto:provash20cb@gmail.com?subject=${encodeURIComponent('TEST EMAIL from Portfolio')}&body=${encodeURIComponent(`This is a test email to check if provash20cb@gmail.com is receiving emails.\n\nFrom: Portfolio Contact Form\nTime: ${new Date().toLocaleString()}`)}`;

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Create mailto link with form data
    const subject = encodeURIComponent(formData.subject || 'Contact from Portfolio');
    const body = encodeURIComponent(
      `Hi Provash,\n\n` +
      `Name: ${formData.name}\n` +
      `Email: ${formData.email}\n` +
      `Subject: ${formData.subject}\n\n` +
      `Message:\n${formData.message}\n\n` +
      `Best regards,\n${formData.name}`
    );
    
    // Open email client with pre-filled data
    const mailtoLink = `mailto:provash20cb@gmail.com?subject=${subject}&body=${body}`;
    window.location.href = mailtoLink;
    
    // Show detailed instructions
    alert(
      'Your email client will open with the message pre-filled.\n\n' +
      'IMPORTANT: Please make sure to:\n' +
      '1. Check that the email opened in your email app\n' +
      '2. Click SEND in your email client\n' +
      '3. The email will be sent from YOUR email to provash20cb@gmail.com'
    );
    
    // Reset form
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <section id="contact" className="py-12 bg-gradient-to-br from-white via-blue-50/30 to-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-primary mx-auto mb-4"></div>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities and exciting projects. 
            Let's connect and create something amazing together!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Let's Connect</h3>
              <p className="text-gray-600 mb-8">
                Feel free to reach out to me through any of the following channels. 
                I'm always excited to discuss new projects and opportunities.
              </p>
            </div>

            {/* Contact Methods */}
            <div className="space-y-4">
              <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-primary rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-envelope text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Email</h4>
                  <a 
                    href="mailto:provash20cb@gmail.com"
                    className="text-primary hover:text-blue-700 transition-colors duration-300"
                  >
                    provash20cb@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-phone text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Phone</h4>
                  <a 
                    href="tel:+8801710490345"
                    className="text-primary hover:text-blue-700 transition-colors duration-300"
                  >
                    +880 1710 490345
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center mr-4">
                  <i className="fab fa-whatsapp text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">WhatsApp</h4>
                  <a 
                    href="https://wa.me/8801710490345"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-blue-700 transition-colors duration-300"
                  >
                    +880 1710 490345
                  </a>
                </div>
              </div>

              <div className="flex items-center p-4 bg-gray-50 rounded-xl">
                <div className="w-12 h-12 bg-gray-700 rounded-lg flex items-center justify-center mr-4">
                  <i className="fas fa-map-marker-alt text-white text-xl"></i>
                </div>
                <div>
                  <h4 className="font-semibold text-gray-900">Location</h4>
                  <p className="text-gray-600">Dhaka, Bangladesh</p>
                </div>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h4 className="font-semibold text-gray-900 mb-4">Follow Me</h4>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/provash10"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center text-white hover:bg-gray-900 transition-colors duration-300"
                >
                  <i className="fab fa-github text-xl"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/provashchandrabarman/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white hover:bg-blue-700 transition-colors duration-300"
                >
                  <i className="fab fa-linkedin text-xl"></i>
                </a>
                <a
                  href="https://wa.me/8801710490345"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center text-white hover:bg-yellow-600 transition-colors duration-300"
                  title="Buy Me a Coffee - Contact via WhatsApp"
                >
                  <i className="fas fa-coffee text-xl"></i>
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-gray-50 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">Send Me a Message</h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Test Email Button */}
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                <h4 className="text-sm font-semibold text-blue-800 mb-2">📧 Email Delivery Test</h4>
                <p className="text-xs text-blue-600 mb-3">
                  If you're not receiving emails, click this test button to send a direct email:
                </p>
                <a
                  href={testEmailUrl}
                  className="inline-flex items-center bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300"
                >
                  <i className="fas fa-envelope mr-2"></i>
                  Send Test Email
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent transition-colors duration-300 resize-none"
                  placeholder="Tell me about your project or just say hello!"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-300 flex items-center justify-center"
              >
                <i className="fas fa-paper-plane mr-2"></i>
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-primary to-accent rounded-2xl p-8 text-white">
            <h3 className="text-2xl font-bold mb-4">Ready to Start Your Project?</h3>
            <p className="text-lg mb-6 max-w-2xl mx-auto">
              I'm available for freelance work and full-time opportunities. 
              Let's discuss how I can help bring your vision to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:provash20cb@gmail.com"
                className="bg-white text-primary px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-300 inline-flex items-center justify-center"
              >
                <i className="fas fa-envelope mr-2"></i>
                Email Me
              </a>
              <a
                href="https://wa.me/8801710490345"
                target="_blank"
                rel="noopener noreferrer"
                className="border-2 border-white text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:text-primary transition-colors duration-300 inline-flex items-center justify-center"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;