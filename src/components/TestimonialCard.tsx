import { motion } from "framer-motion";

interface TestimonialCardProps {
  image: string;
  name: string;
  subscribers: string;
  quote: string;
  index: number;
}

const TestimonialCard = ({
  image,
  name,
  subscribers,
  quote,
  index,
}: TestimonialCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{
        duration: 0.6,
        delay: index * 0.15,
        ease: "easeOut",
      }}
      className="testimonial-card"
    >
      <div className="flex flex-col items-center">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: index * 0.15 + 0.2 }}
          className="w-24 h-24 md:w-28 md:h-28 mb-4 rounded-full overflow-hidden border-4 border-background"
        >
          <img
            src={image}
            alt={`${name} profile`}
            className="w-full h-full object-cover"
          />
        </motion.div>

        <h4 className="text-lg font-bold text-card-foreground mb-1">{name}</h4>
        <p className="text-sm font-semibold text-card-foreground/80 mb-4">
          {subscribers}
        </p>
        <p className="text-sm md:text-base text-card-foreground/90 italic leading-relaxed">
          "{quote}"
        </p>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;
