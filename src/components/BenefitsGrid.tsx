import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import {
  InfoBenefits,
  Benefit,
} from "../data/Benefits/CardsBenefits/InfoBenefits";
import { PiCaretDownBold, PiCaretUpBold } from "react-icons/pi";

export default function BenefitsGrid() {
  const [showAll, setShowAll] = useState(false);
  const visibleBenefits = showAll ? InfoBenefits : InfoBenefits.slice(0, 3);

  return (
    <div className="p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      <AnimatePresence>
        {visibleBenefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <Card benefit={benefit} />
          </motion.div>
        ))}

        {/* Boton ver mas */}
        <motion.div
          key="toggle-card"
          className="lg:col-span-1 col-span-full"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
        >
          <button
            onClick={() => setShowAll(!showAll)}
            className="w-full h-full"
          >
            <motion.div
              className="p-6 rounded-2xl shadow-md flex flex-col items-center justify-center text-center border border-gray-200 bg-gradient-to-t from-green-200 to-green-500 text-white h-full"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ duration: 0.4, ease: "easeInOut" }}
            >
              <motion.div
                animate={{ rotate: showAll ? 360 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                {showAll ? (
                  <PiCaretUpBold size={32} />
                ) : (
                  <PiCaretDownBold size={32} />
                )}
              </motion.div>
              <h3 className="text-lg font-semibold mt-3">
                {showAll ? "Ver menos" : "Ver más"}
              </h3>
            </motion.div>
          </button>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

{
  /* Componente para la card */
}
const Card: React.FC<{ benefit: Benefit }> = ({ benefit }) => {
  const IconComponent = benefit.icon;

  return (
    <motion.div
      className="p-6 rounded-2xl shadow-md flex flex-col items-center justify-between text-center border border-gray-200 bg-gradient-to-t from-green-200 to-green-500 h-full"
      transition={{ duration: 0.4, ease: "easeInOut" }}
      whileHover={{ scale: 1.05 }}
    >
      <motion.div
        className="text-white"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        {IconComponent && <IconComponent size={40} />}
      </motion.div>
      <h3 className="text-lg font-semibold text-green-950 mt-3">
        {benefit.name}
      </h3>
      <Link
        to={benefit.url}
        className="mt-4 px-4 py-2 bg-white text-green-700 rounded-lg font-medium hover:bg-green-100 transition"
      >
        Consultar
      </Link>
    </motion.div>
  );
};
