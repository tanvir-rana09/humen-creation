import { motion } from "framer-motion";

export default function AnimatedSection({
  heading,
  description,
  headingClass = "",
  descriptionClass = "",
}) {
  const container = {
    visible: {
      transition: { staggerChildren: 0.25 },
    },
  };

  const child = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <div>
      {/* Animated Heading */}
      {heading && (
        <motion.h2
          className={`flex flex-col ${headingClass}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {heading.map((line, i) => (
            <motion.div key={i} className="flex flex-wrap">
              {line.map((word, j) => (
                <motion.span
                  key={j}
                  variants={child}
                  className={`mr-2 inline-block ${
                    word.highlight ? "text-[#FF702A]" : ""
                  }`}
                >
                  {word.text}
                </motion.span>
              ))}
            </motion.div>
          ))}
        </motion.h2>
      )}

      {/* Animated Description */}
      {description && (
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={child}
          className={descriptionClass}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
}
