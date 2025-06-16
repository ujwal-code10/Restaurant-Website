import { motion } from 'framer-motion';

interface DishCardProps {
  image: string;
  name: string;
  description: string;
  price: string;
}

export default function DishCard({ image, name, description, price }: DishCardProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="card bg-card dark:bg-card-dark hover:shadow-lg transition-all duration-300 rounded-lg overflow-hidden flex flex-col h-full"
    >
      <img
        src={image}
        alt={`Image of ${name}`}
        className="w-full h-[180px] object-cover rounded-t-lg block"
      />
      <div className="p-4 sm:p-5 flex-grow">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-lg sm:text-xl font-semibold text-text-heading-light dark:text-text-heading-dark">
            {name}
          </h3>
          <span className="font-medium text-accent">{price}</span>
        </div>
        <p className="text-sm sm:text-base text-text-body-light dark:text-text-body-dark">
          {description}
        </p>
      </div>
    </motion.div>
  );
} 