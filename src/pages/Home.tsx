import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import TestimonialCard from '../components/TestimonialCard';
import DishCard from '../components/DishCard';

const specials = [
  {
    title: 'Truffle Mushroom Risotto',
    description: 'Creamy Arborio rice with wild mushrooms and black truffle',
    price: '$24',
    image: 'https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg',
  },
  {
    title: 'Osso Buco alla Milanese',
    description: 'Braised veal shanks with saffron risotto and gremolata',
    price: '$32',
    image: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
  },
  {
    title: 'Tiramisu Classico',
    description: 'Traditional Italian dessert with espresso-soaked ladyfingers',
    price: '$12',
    image: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
  },
];

const testimonials = [
  {
    name: 'Sarah Johnson',
    avatar: '', // image removed for reset
    review: 'The authentic flavors and warm atmosphere make Bella Italia my favorite Italian restaurant in town. Their pasta is simply divine!',
  },
  {
    name: 'Michael Chen',
    avatar: '', // image removed for reset
    review: "I've been coming here for years. The service is impeccable, and the wine selection is outstanding. A true gem!",
  },
  {
    name: 'Emma Rodriguez',
    avatar: '', // image removed for reset
    review: 'The attention to detail in every dish is remarkable. Their homemade pasta and sauces are made with love and tradition.',
  },
];

const Home = () => {
  return (
    <div className="overflow-hidden bg-base-light dark:bg-base-dark">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&w=1600&q=80"
            alt="Elegant Italian restaurant interior with warm lighting and wooden tables"
            className="w-full h-full object-cover"
            loading="eager"
            fetchPriority="high"
            decoding="async"
          />
          <div className="absolute inset-0 bg-black/60"></div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative text-center text-white dark:text-white px-4"
        >
          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 text-white dark:text-white">
            Bella Italia
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl mb-8 max-w-2xl mx-auto text-white dark:text-white">
            Experience authentic Italian cuisine in an elegant setting
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/reservation"
              className="btn btn-primary text-lg px-8 py-3"
            >
              Make a Reservation
            </Link>
            <Link
              to="/menu"
              className="btn btn-secondary text-lg px-8 py-3"
            >
              View Menu
            </Link>
          </div>
        </motion.div>
      </section>

      {/* Today's Specials Section */}
      <section className="py-16 bg-section-light dark:bg-section-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-heading-light dark:text-text-heading-dark">
              Today's Specials
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-text-body-light dark:text-text-body-dark">
              Discover our chef's specially curated dishes for today
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {specials.map((special, index) => (
              <motion.div
                key={special.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <DishCard 
                  name={special.title}
                  description={special.description}
                  price={special.price}
                  image={special.image}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-base-light dark:bg-base-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-text-heading-light dark:text-text-heading-dark">
              What Our Guests Say
            </h2>
            <p className="text-lg max-w-2xl mx-auto text-text-body-light dark:text-text-body-dark">
              Join our satisfied customers who have experienced the authentic taste of Italy
            </p>
          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
              >
                <TestimonialCard {...testimonial} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action Section */}
      <section className="py-16 bg-section-light dark:bg-section-dark">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-text-heading-light dark:text-text-heading-dark">
              Experience Authentic Italian Dining
            </h2>
            <p className="text-lg text-text-body-light dark:text-text-body-dark mb-8 max-w-2xl mx-auto">
              Join us for an unforgettable culinary journey through Italy's finest flavors
            </p>
            <Link
              to="/reservation"
              className="btn btn-primary text-lg px-8 py-3"
            >
              Reserve Your Table
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home; 