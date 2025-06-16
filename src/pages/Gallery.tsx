import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { XMarkIcon } from '@heroicons/react/24/outline';

type GalleryImage = {
  id: number;
  src: string;
  alt: string;
  category: 'food' | 'interior' | 'events';
  description?: string;
};

const galleryImages: GalleryImage[] = [
  // Food images from Home and Menu pages
  {
    id: 1,
    src: 'https://images.pexels.com/photos/6287525/pexels-photo-6287525.jpeg',
    alt: 'Truffle Mushroom Risotto',
    category: 'food',
    description: 'Our signature Truffle Mushroom Risotto'
  },
  {
    id: 2,
    src: 'https://images.pexels.com/photos/461382/pexels-photo-461382.jpeg',
    alt: 'Osso Buco alla Milanese',
    category: 'food',
    description: 'Classic Osso Buco with saffron risotto'
  },
  {
    id: 3,
    src: 'https://images.pexels.com/photos/2144112/pexels-photo-2144112.jpeg',
    alt: 'Tiramisu Classico',
    category: 'food',
    description: 'Traditional Italian Tiramisu'
  },
  // Interior images from About page
  {
    id: 4,
    src: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1600&q=80',
    alt: 'Restaurant Interior',
    category: 'interior',
    description: 'Our elegant dining room'
  },
  {
    id: 5,
    src: 'https://images.pexels.com/photos/6267/menu-restaurant-vintage-table.jpg',
    alt: 'Restaurant Table Setting',
    category: 'interior',
    description: 'Classic Italian table setting'
  },
  // Event images from Unsplash and Pixabay
  {
    id: 6,
    src: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?auto=format&fit=crop&w=1600&q=80',
    alt: 'Private Dining Event',
    category: 'events',
    description: 'Private dining experience in our elegant private room'
  },
  {
    id: 7,
    src: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?auto=format&fit=crop&w=1600&q=80',
    alt: 'Wine Tasting Event',
    category: 'events',
    description: 'Wine tasting and pairing event with our sommelier'
  },
  {
    id: 8,
    src: 'https://images.unsplash.com/photo-1556910103-1c02745aae4d?auto=format&fit=crop&w=1600&q=80',
    alt: 'Cooking Class',
    category: 'events',
    description: 'Interactive cooking class with our master chefs'
  }
];

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [selectedCategory, setSelectedCategory] = useState<'all' | 'food' | 'interior' | 'events'>('all');

  const filteredImages = selectedCategory === 'all' 
    ? galleryImages 
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <div className="min-h-screen py-16 bg-primary">
      <div className="container">
        {/* Hero Section */}
        <section className="relative h-[40vh] flex items-center justify-center">
          <div className="absolute inset-0">
            <img
              src="https://images.unsplash.com/photo-1555396273-367ea4eb4db5?auto=format&fit=crop&w=1600&q=80"
              alt="Elegant Italian restaurant gallery with art and decor"
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
            <h1 className="text-4xl md:text-6xl font-bold mb-4 text-white dark:text-white">Our Gallery</h1>
            <p className="text-xl max-w-2xl mx-auto text-white dark:text-white">
              A visual journey through our culinary creations and ambiance
            </p>
          </motion.div>
        </section>

        {/* Gallery Section */}
        <section className="py-16">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl font-bold mb-4 text-heading">Photo Gallery</h2>
              <p className="text-lg max-w-2xl mx-auto">
                Explore our collection of food, ambiance, and special moments
              </p>
            </motion.div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
              {['all', 'food', 'interior', 'events'].map((category) => (
                <button
                  key={category}
                  onClick={() => setSelectedCategory(category as any)}
                  className={`px-4 py-2 rounded-full transition-colors ${
                    selectedCategory === category
                      ? 'bg-accent text-light'
                      : 'bg-secondary text-body hover:bg-accent hover:text-light'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>

            {/* Gallery Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredImages.map((image) => (
                <motion.div
                  key={image.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="relative group cursor-pointer"
                  onClick={() => setSelectedImage(image)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-64 object-cover rounded-lg shadow-lg"
                  />
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity rounded-lg flex items-center justify-center">
                    <p className="text-white text-center px-4">{image.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Image Modal */}
            <AnimatePresence>
              {selectedImage && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80"
                  onClick={() => setSelectedImage(null)}
                >
                  <motion.div
                    initial={{ scale: 0.9 }}
                    animate={{ scale: 1 }}
                    exit={{ scale: 0.9 }}
                    className="relative max-w-4xl w-full"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedImage.src}
                      alt={selectedImage.alt}
                      className="w-full h-auto rounded-lg"
                    />
                    <button
                      className="absolute top-4 right-4 text-white hover:text-accent transition-colors"
                      onClick={() => setSelectedImage(null)}
                    >
                      <XMarkIcon className="w-8 h-8" />
                    </button>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Gallery; 