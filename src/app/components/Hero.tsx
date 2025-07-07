import { motion } from 'framer-motion';
import { PlayIcon, DocumentPlusIcon } from '@heroicons/react/24/outline';

export default function Hero() {
  return (
    <section className="relative h-[600px] bg-gradient-to-b from-orange-50 to-amber-50">
      <div className="container mx-auto px-4 h-full flex items-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl"
        >
          <h1 className="text-5xl font-bold text-gray-900 mb-6 leading-tight">
            Master the Art of Cooking with Expert Recipes
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Discover world-class recipes, cooking techniques, and culinary inspiration from professional chefs worldwide.
          </p>
          <div className="flex gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="bg-amber-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
            >
              Explore Recipes
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              className="border-2 border-amber-600 text-amber-600 px-8 py-4 rounded-lg font-semibold flex items-center gap-2"
            >
              <DocumentPlusIcon className="w-5 h-5" />
              Submit Recipe
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}