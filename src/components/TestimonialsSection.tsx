import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { useCallback, useEffect, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Index from "@/pages/Index";
import EliteFoot from "@/Assets/images/Elitefoot.jpg";
import Aswatch from "@/Assets/images/Aswatch.jpg";
import PedalPulse from "@/Assets/images/pedalpulse.jpg";
import Groundglory from "@/Assets/images/groundglory.jpg";
import BeyondfootballLines from "@/Assets/images/bfl.jpg";
import Abovethegooal from "@/Assets/images/abovethegoal.jpg";
import Thefootballnarrative from "@/Assets/images/tfn.jpg";
import KickKorner from "@/Assets/images/kk.jpg";

const testimonials = [
  {
    image:
      EliteFoot,
    name: "EliteFoot",
    subscribers: "60.9m views",
    quote:
      "Working with Prodigious Pen transformed our channel. The scripts changed everything, we broke our plateau and grew from 10M to 60M+ views, and 50K to 130K subscribers.",
    link: "https://www.youtube.com/@EliteFoot10",
  },
  {
    image:
      Groundglory,
    name: "GroundGlory Goalkeeping",
    subscribers: "14.5m views",
    quote:
      "Our channel had no viral momentum. Israel’s storytelling scripts unlocked everything, we grew from 10K to 60K+ subscribers and crossed 13 million total views.",
    link: "https://www.youtube.com/@GroundGloryGoalkeeping",
  },
  {
    image:
      Thefootballnarrative,
    name: "The Football Narrative",
    subscribers: "6.7m views",
    quote:
      "After working with Israel, our content finally clicked. Over 50 scripts later, our channel shifted from inconsistent results to regular viral performances and stronger audience retention.",
    link: "https://www.youtube.com/@footballnarrative24",
  },
  {
    image:
    PedalPulse,
    name: "PedalPulse",
    subscribers: "1.4m views",
    quote:
      "We started with nothing. Prodigious Pen helped us structure scripts and formats, and in under a month we hit 3K subscribers and nearly 1M views with just a few videos.",
    link: "https://www.youtube.com/@PedalPulse-q9y",
  },
  {
    image:
      Aswatch,
    name: "AsWatch",
    subscribers: "648k views",
    quote: "Israel fixed our biggest problem: weak hooks and the wrong team. With better scripts and a rebuilt creative team, we doubled subscribers and hit 600K+ views in one month.",
    link: "https://www.youtube.com/@aswatchsports ",
  },
  {
    image:
      Abovethegooal,
    name: "AboveTheGooal",
    subscribers: "719k views",
    quote:
      "We had ideas but no proper team. Prodigious Pen rebuilt everything scripts, editors, execution and in under three months we passed 600K views consistently.",
    link: "https://www.youtube.com/@AboveTheGooal",
  },
  {
    image:
      KickKorner,
    name: "Kick Korner",
    subscribers: "72k views",
    quote:
      "Our production was fine, but the storytelling wasn’t landing. Prodigious Pen’s scripts improved retention and emotion, and our videos started performing noticeably better.",
    link: "http://www.youtube.com/@KickKorner",
  },
  {
    image:
      BeyondfootballLines,
    name: "BeyondFootball Lines",
    subscribers: "61k views",
    quote:
      "Israel helped us find direction fast. With clear ideation and story-first scripts, our new channel crossed 100K views quickly and finally felt like it had momentum.",
    link: "https://www.youtube.com/@beyondfootballlines",
  },
];

const TestimonialsSection = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel(
    {
      loop: true,
      align: "start",
      slidesToScroll: 1,
    },
    [Autoplay({ delay: 4000, stopOnInteraction: false })]
  );

  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

  return (
    <section id="TestimonialsSection" className="w-full bg-background py-20 md:py-28 px-6 overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 70 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }} 
          className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground text-center mb-16"
        >
          The System Behind These Results
        </motion.h2>

        {/* Carousel Container */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: false, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.2, ease:"easeOut" }}
          className="relative"
        >
          {/* Navigation Buttons */}
          <button
            onClick={scrollPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-12 h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hidden md:flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-12 h-12 rounded-full bg-background border border-border shadow-lg flex items-center justify-center text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-all duration-200 hidden md:flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>

          {/* Carousel */}
          <div ref={emblaRef} className="overflow-hidden">
            <div className="flex">
              {testimonials.map((testimonial, index) => (
                <div
                  key={index}
                  className="flex-[0_0_100%] min-w-0 md:flex-[0_0_33.333%] px-3"
                >
                  <a
                    href={testimonial.link} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block h-full"
                  >
                    <motion.div
                      initial={{ opacity: 0, scale: 0.95 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                      className="testimonial-card h-full transition-all duration-300 hover:border-primary cursor-pointer"
                    >
                      <div className="flex flex-col items-center h-full">
                        <div className="w-24 h-24 md:w-28 md:h-28 mb-4 rounded-full overflow-hidden border-4 border-primary/20 shadow-lg">
                          <img
                            src={testimonial.image}
                            alt={`${testimonial.name} profile`}
                            className="w-full h-full object-cover"
                          />
                        </div>

                        <h4 className="text-lg font-bold text-foreground mb-1">
                          {testimonial.name}
                        </h4>
                        <p className="text-sm font-semibold text-primary mb-4">
                          {testimonial.subscribers}
                        </p>
                        <p className="text-sm md:text-base text-muted-foreground italic leading-relaxed flex-1">
                          "{testimonial.quote}"
                        </p>
                      </div>
                    </motion.div>
                  </a>
                </div>
              ))}
            </div>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => emblaApi?.scrollTo(index)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  selectedIndex === index
                    ? "bg-primary w-8"
                    : "bg-border hover:bg-muted-foreground"
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialsSection;