import { motion } from 'framer-motion';

interface TestimonialCardProps {
  avatar: string;
  name: string;
  review: string;
}

const TestimonialCard = ({name, review }: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="card bg-card dark:bg-card-dark p-6 rounded-lg shadow-lg"
    >
      <div className="flex items-center space-x-4 mb-4">
        {/* image removed for reset */}
        <h3 className="text-lg sm:text-xl font-semibold text-text-heading-light dark:text-text-heading-dark">
          {name}
        </h3>
      </div>
      <p className="text-sm sm:text-base italic text-text-body-light dark:text-text-body-dark">
        "{review}"
      </p>
    </motion.div>
  );
};

export default TestimonialCard; 