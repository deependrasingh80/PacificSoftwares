import React from "react";
import { motion } from "framer-motion";
import {
  Facebook,
  Twitter,
  Linkedin,
  Instagram
} from "lucide-react"; // 🔧 You must import the icons

// Animation Variants
const textVariant = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.3,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

const imageVariant = {
  hidden: { opacity: 0, scale: 0.9, y: 50 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 10,
      delay: 0.5,
    },
  },
};

const socialLinks = [
  { icon: <Facebook className="w-5 h-5" />, href: '#', name: 'Facebook' },
  { icon: <Twitter className="w-5 h-5" />, href: '#', name: 'Twitter' },
  { icon: <Linkedin className="w-5 h-5" />, href: '#', name: 'LinkedIn' },
  { icon: <Instagram className="w-5 h-5" />, href: '#', name: 'Instagram' }
];

const AboutUs: React.FC = () => {
  return (
    <section className="px-6 py-12 md:py-20 bg-white dark:bg-[#0A0F1C]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        
        {/* Text Section */}
        <div>
          <motion.h2
            className="text-3xl md:text-4xl font-bold mb-4 text-gray-800 dark:text-white"
            initial="hidden"
            whileInView="visible"
            custom={0}
            variants={textVariant}
            viewport={{ once: false, amount: 0.3 }}
          >
            About Us
          </motion.h2>

          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-4"
            initial="hidden"
            whileInView="visible"
            custom={1}
            variants={textVariant}
            viewport={{ once: false, amount: 0.3 }}
          >
         At Pacific Softwares, we are a passionate team of developers, designers, and problem solvers delivering high-quality software solutions. With years of experience across diverse industries, we’ve helped businesses grow through robust web apps, mobile apps, and e-commerce platforms.

          </motion.p>
{/* 
          <motion.p
            className="text-gray-600 dark:text-gray-300"
            initial="hidden"
            whileInView="visible"
            custom={2}
            variants={textVariant}
            viewport={{ once: false, amount: 0.3 }}
          >
            With years of experience and a customer-first approach, we believe
            in turning ideas into impactful digital products.
          </motion.p> */}

          {/* Social Links */}
          <div className="flex items-center space-x-4 mt-6">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                className="w-10 h-10 bg-gray-200 dark:bg-white/10 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:text-white hover:bg-[#FF6B2B] transition-all duration-300 hover:scale-110"
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          className="w-full"
          initial="hidden"
          whileInView="visible"
          variants={imageVariant}
          viewport={{ once: false, amount: 0.3 }}
        >
          <img
            src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
            alt="About us"
            className="rounded-lg shadow-lg w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
