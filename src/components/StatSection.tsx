import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { motion, useAnimation } from "framer-motion";

export default function StatSection() {
  const controls = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    if (inView) {
      controls.start({ opacity: 1, y: 0 });
    }
  }, [controls, inView]);

  return (
    <section ref={ref} className="">
      <div className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
        {/* Value Proposition */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Our Value Proposition
          </h2>
          <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
            Ethsoil streamlines the supply chain for agricultural residues, empowering FPOs, MSMEs/SMEs, and industries. With an extensive network, we ensure optimal sourcing of raw materials.
          </p>
        </motion.div>
        
        {/* Creating Market Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Creating Market Opportunities
          </h2>
          <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
            Specializing in creating market linkages, we drive demand and distribution for our partners’ finished products. Ethsoil offers a comprehensive ecosystem, integrating aggregation and market linkage services.
          </p>
        </motion.div>
        
        {/* Comprehensive Ecosystem and Support */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={controls}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="max-w-3xl mb-20"
        >
          <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl dark:text-white">
            Comprehensive Ecosystem and Support
          </h2>
          <p className="mt-4 text-gray-500 sm:text-xl dark:text-gray-400">
            We are dedicated to bridging the gap for buyers, empowering businesses to thrive and expand.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
