import { motion } from 'framer-motion';


export default function Contact() {
  return (
    <div className="min-h-screen py-12 bg-primary">
      <div className="container">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0 bg-[url('/contact-hero.jpg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-heading/80"></div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="relative text-center px-4 text-light"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl max-w-2xl mx-auto">
              We'd love to hear from you
            </p>
          </motion.div>
        </section>

        {/* Contact Information */}
        <section className="py-16">
          <div className="container">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <h2 className="text-3xl font-bold mb-6 text-heading">Get in Touch</h2>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block mb-2 text-body">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-2 rounded-lg border border-ui-border focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2 text-body">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-2 rounded-lg border border-ui-border focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2 text-body">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-ui-border focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="btn btn-primary w-full"
                  >
                    Send Message
                  </button>
                </form>
              </motion.div>

              {/* Restaurant Location */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative aspect-[4/3] rounded-lg overflow-hidden shadow-xl"
              >
                <img
                  src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=800&q=80"
                  alt="Elegant Italian restaurant exterior with outdoor seating and warm lighting"
                  className="w-full h-full object-cover"
                  loading="lazy"
                  decoding="async"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-6">
                  <div className="text-white dark:text-white">
                    <h3 className="text-xl font-bold mb-2 text-white dark:text-white">Visit Us</h3>
                    <p className="text-white dark:text-white">123 Italian Street</p>
                    <p className="text-white dark:text-white">Culinary District</p>
                    <p className="text-white dark:text-white">City, State 12345</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Map Section */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-heading">Find Us</h2>
              <p className="text-lg max-w-2xl mx-auto text-body">
                Visit us at our location
              </p>
            </motion.div>

            <div className="h-[400px] rounded-lg overflow-hidden">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.30591910525!2d-74.25986432970718!3d40.697149422113014!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2s!4v1647043087964!5m2!1sen!2s"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Bella Italia Location"
              ></iframe>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
} 