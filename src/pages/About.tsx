import { motion } from 'framer-motion';

const timeline = [
  {
    year: '2010',
    title: 'Our Beginning',
    description: 'Bella Italia opened its doors with a vision to bring authentic Italian cuisine to the heart of the city.',
  },
  {
    year: '2012',
    title: 'First Award',
    description: 'Recognized as the Best Italian Restaurant by the City Food Critics Association.',
  },
  {
    year: '2015',
    title: 'Expansion',
    description: 'Expanded our kitchen and dining area to accommodate more guests while maintaining our intimate atmosphere.',
  },
  {
    year: '2018',
    title: 'Chef Recognition',
    description: 'Our head chef, Marco Rossi, was awarded the prestigious Italian Culinary Excellence Award.',
  },
  {
    year: '2023',
    title: 'Today',
    description: 'Continuing our tradition of excellence while innovating with new dishes and experiences.',
  },
];

const teamMembers = [
  {
    name: 'Marco Rossi',
    role: 'Head Chef',
    image: 'https://images.pexels.com/photos/3814446/pexels-photo-3814446.jpeg',
    bio: 'With over 20 years of experience in Italian cuisine, Chef Marco brings traditional recipes from his hometown in Tuscany.',
  },
  {
    name: 'Sofia Bianchi',
    role: 'Sous Chef',
    image: 'https://images.pexels.com/photos/3771120/pexels-photo-3771120.jpeg',
    bio: 'Specializing in pasta and seafood, Sofia adds her creative touch to our menu while maintaining authentic flavors.',
  },
  {
    name: 'Luca Romano',
    role: 'Pastry Chef',
    image: 'https://images.pexels.com/photos/169193/breakfast-coffee-croissant-rolls-169193.jpeg',
    bio: 'Our dessert expert, Luca creates the perfect sweet ending to every meal with his innovative takes on classic Italian desserts.',
  },
  {
    name: 'Giulia Marino',
    role: 'Restaurant Manager',
    image: 'https://images.pexels.com/photos/3778876/pexels-photo-3778876.jpeg',
    bio: 'Giulia ensures every guest experiences the warmth and hospitality that makes Bella Italia special.',
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80"
            alt="Elegant Italian restaurant interior with warm lighting"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative text-center px-4 text-white dark:text-white"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white dark:text-white">Our Story</h1>
          <p className="text-xl max-w-2xl mx-auto text-white dark:text-white">
            A journey of passion, tradition, and culinary excellence
          </p>
        </motion.div>
      </section>

      {/* History Section */}
      <section className="py-16">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-bold mb-6 text-heading">Our History</h2>
              <p className="text-lg mb-6">
                Founded in 2010, Bella Italia began as a small family restaurant with a big dream: to bring the authentic flavors of Italy to our community. What started as a passion project has grown into a beloved culinary destination, while maintaining the warmth and intimacy of a family gathering.
              </p>
              <p>
                Our commitment to quality ingredients, traditional recipes, and exceptional service has earned us recognition as one of the city's premier Italian restaurants. Every dish we serve tells a story of Italian culinary heritage, prepared with love and attention to detail.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="h-[400px] rounded-lg overflow-hidden"
            >
              <img
                src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg"
                alt="Restaurant interior with elegant table setting"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold mb-4 text-heading">Our Journey</h2>
            <p className="text-lg max-w-2xl mx-auto">
              Milestones that have shaped our story
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-8 mb-12 last:mb-0"
              >
                <div className="w-24 flex-shrink-0">
                  <span className="text-2xl font-bold text-accent">{event.year}</span>
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-heading">{event.title}</h3>
                  <p>{event.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Restaurant Interior */}
      <section className="py-16">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
              Our Restaurant
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Experience the warm and inviting atmosphere of our restaurant
            </p>
          </motion.div>

          <div className="relative aspect-[16/9] rounded-lg overflow-hidden shadow-xl">
            <img
              src="https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg"
              alt="Elegant restaurant interior with warm lighting"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-secondary">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-heading">
              Our Team
            </h2>
            <p className="text-lg max-w-2xl mx-auto">
              Meet the passionate individuals behind our culinary excellence
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative w-48 h-48 mx-auto mb-4 rounded-full overflow-hidden shadow-lg">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-bold mb-2 text-heading">
                  {member.name}
                </h3>
                <p className="text-accent mb-2">{member.role}</p>
                <p className="text-body">{member.bio}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 