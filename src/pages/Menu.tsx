import { motion } from 'framer-motion';
import DishCard from '../components/DishCard';
import { Link } from 'react-router-dom';

const menuItems = {
  appetizers: [
    {
      name: 'Bruschetta al Pomodoro',
      description: 'Toasted bread topped with fresh tomatoes, basil, and extra virgin olive oil',
      price: '$12',
      image: '/items/bruschetta.jpg',
    },
    {
      name: 'Carpaccio di Manzo',
      description: 'Thinly sliced raw beef with arugula, parmesan, and truffle oil',
      price: '$18',
      image: '/items/carpaccio.jpg',
    },
    {
      name: 'Burrata con Prosciutto',
      description: 'Fresh burrata cheese served with prosciutto di Parma and balsamic glaze',
      price: '$16',
      image: '/items/burrata.jpg',
    },
  ],
  pasta: [
    {
      name: 'Spaghetti alla Carbonara',
      description: 'Classic Roman pasta with guanciale, egg, pecorino, and black pepper',
      price: '$22',
      image: '/items/carbonare pasta.jpg',
    },
    {
      name: 'Ravioli di Zucca',
      description: 'Pumpkin-filled ravioli with sage butter sauce and toasted pine nuts',
      price: '$24',
      image: '/items/ravioli.jpg',
    },
    {
      name: 'Linguine alle Vongole',
      description: 'Linguine with fresh clams, garlic, white wine, and parsley',
      price: '$26',
      image: '/items/pasta seafood.jpg',
    },
  ],
  mainCourses: [
    {
      name: 'Osso Buco alla Milanese',
      description: 'Braised veal shanks with saffron risotto and gremolata',
      price: '$32',
      image: '/items/ossobuco.jpg',
    },
    {
      name: 'Bistecca alla Fiorentina',
      description: 'Grilled T-bone steak with rosemary, olive oil, and roasted potatoes',
      price: '$38',
      image: '/items/t-bone.jpg',
    },
    {
      name: 'Branzino al Forno',
      description: 'Whole roasted sea bass with herbs, lemon, and seasonal vegetables',
      price: '$34',
      image: '/items/rostedfish.jpg',
    },
  ],
  desserts: [
    {
      name: 'Tiramisu Classico',
      description: 'Traditional Italian dessert with espresso-soaked ladyfingers and mascarpone cream',
      price: '$12',
      image: '/items/dessert.jpg',
    },
    {
      name: 'Panna Cotta',
      description: 'Silky vanilla cream with fresh berries and berry coulis',
      price: '$10',
      image: '/items/pannacotta.jpg',
    },
    {
      name: 'Cannoli Siciliani',
      description: 'Crispy pastry shells filled with sweet ricotta cream and chocolate chips',
      price: '$11',
      image: '/items/italian pastry.jpg',
    },
  ],
};

const Menu = () => {
  return (
    <div className="min-h-screen bg-background dark:bg-background-dark py-12">
      <div className="container">
        {/* Hero Section */}
        <section className="relative py-32">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
              alt="Beautiful spread of authentic Italian dishes including pasta, pizza, and antipasti"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60"></div>
          </div>
          <div className="container relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center text-white dark:text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white dark:text-white">Our Menu</h1>
              <p className="text-lg md:text-xl max-w-2xl mx-auto text-white dark:text-white">
                Discover our authentic Italian dishes, prepared with the finest ingredients
              </p>
            </motion.div>
          </div>
        </section>

        {/* Menu Section */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-heading">Our Offerings</h2>
              <p className="text-lg text-body max-w-2xl mx-auto">
                Explore our carefully curated selection of traditional and contemporary Italian dishes
              </p>
            </motion.div>

            {/* Menu Grid */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
              {Object.entries(menuItems).map(([, items]) => (
                items.map((item, _index) => (
                  <DishCard key={item.name} {...item} />
                ))
              ))}
            </motion.div>
          </div>
        </section>

        {/* Special Offers Section */}
        <section className="py-16 bg-secondary">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center"
            >
              <h2 className="text-3xl font-bold mb-6 text-heading">Special Offers</h2>
              <p className="text-lg mb-8 max-w-2xl mx-auto">
                Take advantage of our exclusive dining packages and promotions
              </p>
              <Link
                to="/reservation"
                className="btn btn-primary inline-block"
              >
                Book a Table
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Menu; 