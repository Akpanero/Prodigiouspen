import { motion } from "framer-motion";
import ServiceCard from "./ServiceCard";

const services = [
  {
    icon: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/3324353/settings_images/b01e0d0-b886-f7de-aebf-fb5dc6155ed4_icons8-blueprint-zoom-500.png",
    title: "Scriptwriting",
    description:
      "Are your videos hooking, retaining, or traveling to the right audience? We rebuild the story so retention compounds and virality becomes repeatable, not random.",
    buttonText: "Let's Talk",
    buttonLink: "https://calendar.app.google/46VcavycG6carP886",
  },
  {
    icon: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/3324353/settings_images/f627bc0-8778-574e-f73f-f066fad750e_icons8-account-500.png",
    title: "Talent management",
    description:
      "Your ideas are strong. Your execution isn’t. We align the right editors, thumbnails, and voice talent so quality scales without friction.",
    buttonText: "Let's Talk",
    buttonLink: "https://calendar.app.google/46VcavycG6carP886",
  },
  
  {
    icon: "https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/themes/3324353/settings_images/07825-6824-cad5-f65-bef6a44c115b_icons8-organization-500.png",
    title: "YouTube Strategy",
    description:
      "Your channel grows but inconsistently. We redesign the structure behind the content so every upload builds momentum instead of resetting it.",
    buttonText: "Let's Talk",
    buttonLink: "https://calendar.app.google/46VcavycG6carP886",
  }, 
];

const WorkWithMeSection = () => {
  return (
    <section id="work-with-me" className="w-full bg-secondary py-20 md:py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16"
        >
          Work with me{" "}
          <span role="img" aria-label="brain"></span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkWithMeSection;
