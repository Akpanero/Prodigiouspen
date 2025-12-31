import { motion } from "framer-motion";
import { Youtube, Linkedin } from "lucide-react";

const UpworkIcon = ({ size = 20 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M17.24 6.37c-1.3 0-2.47.45-3.39 1.21-.3.25-.6.53-.86.85-.58-1.34-.96-2.88-1.15-4.53h-2.1v6.6c0 2.64-1.3 4.02-3.3 4.02-2.01 0-3.3-1.38-3.3-4.02V3.9H1v6.78c0 3.74 2.3 5.94 5.64 5.94 3.33 0 5.63-2.2 5.63-5.94V9.77c.19.6.43 1.15.7 1.67l-2.26 3.46h2.36l1.33-2.06c.74.88 1.7 1.5 2.88 1.5 2.2 0 3.72-1.6 3.72-3.98 0-2.4-1.52-3.99-3.76-3.99zm-.2 5.92c-1.1 0-1.96-.7-2.52-1.64.74-1.26 1.52-2.06 2.52-2.06 1.1 0 1.84.77 1.84 1.85 0 1.08-.74 1.85-1.84 1.85z" />
  </svg>
);


const socialLinks = [
  { icon: Youtube, href: "http://www.youtube.com/@KickOffArchive", label: "YouTube" },
   { icon: UpworkIcon, href: "https://www.upwork.com/freelancers/~01405fc2d0f1246dcc?mp_source=share", label: "Upwork" },
  { icon: Linkedin, href: "https://www.linkedin.com/in/israel-adewale-a12921179/overlay/about-this-profile/?trk=opento_sprofile_details&lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BoxunBwEaR7Wzk9wd3DrUaQ%3D%3D", label: "LinkedIn" },
];

const navLinks = [
  { label: "Newsletter", href: "#newsletter" },
  { label: "Accelerator", href: "#accelerator" },
  { label: "Consulting", href: "#consulting" },
  { label: "Contact", href: "#contact" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-card pt-14 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-8 mb-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center md:text-left"
          >
            <h3 className="text-2xl font-bold text-foreground mb-4">
              Adewale Israel Akorede
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed max-w-4xl mx-auto md:mx-0">
              I help creators turn YouTube from guesswork into a system.
From viral storytelling to team execution, my work is focused on one thing:
building channels that compound.

            </p>
          </motion.div>

          {/* Navigation */}
          {/* <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-center"
          >
             <h4 className="text-lg font-semibold text-background mb-4">
              Quick Links
            </h4>
            <nav className="flex flex-col gap-3">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-background/70 hover:text-primary transition-colors duration-200 text-sm"
                >
                  {link.label}
                </a>
              ))}
            </nav> 
          </motion.div> */}

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-center md:text-right"
          >
            <h4 className="text-lg font-semibold text-foreground mb-4">
              Follow Me
            </h4>
            <div className="flex justify-center md:justify-end gap-4">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  whileHover={{ scale: 1.15, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
              
        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="h-px bg-border mb-8 origin-left"
        />

        {/* Copyright */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Prodigiouspen. All rights reserved.
          </p>
          <p className="text-muted-foreground text-sm text-right te">
              powered by Akpanero
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;