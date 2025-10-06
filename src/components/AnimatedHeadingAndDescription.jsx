import { motion } from "framer-motion";

export default function AnimatedHeadingAndDescription({
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

  const headingWords = heading?.split(" ") || [];

  return (
    <div>
      {/* Animated Heading */}
      {heading && (
        <motion.h1
          className={`flex flex-wrap ${headingClass}`}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={container}
        >
          {headingWords.map((word, i) => (
            <motion.span key={i} variants={child} className="mr-2 inline-block">
              {word}
            </motion.span>
          ))}
        </motion.h1>
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
