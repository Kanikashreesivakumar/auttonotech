"use client"

import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from "lucide-react"
import { motion } from "framer-motion"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const footerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  const socialVariants = {
    hidden: { scale: 0 },
    visible: { scale: 1 },
  }

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={footerVariants}
      className="bg-gray-dark text-white pt-16 pb-8"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <motion.div variants={itemVariants} className="space-y-4">
            <Image src="auttono.png" alt="Auttonotech Logo" width={180} height={50} className="h-10 w-auto" />
            <p className="mt-4 text-sm text-gray-300 max-w-xs">Scale your business with Auttono Tech</p>
            <h2>
            Grow your business and build in-demand teams with our tailored outsourcing solutions.</h2>
            <div className="flex space-x-4 mt-6">
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover={{ scale: 1.2, color: "#4267B2" }}
                className="text-white hover:text-white transition-colors duration-200"
              >
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </motion.a>
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover={{ scale: 1.2, color: "#1DA1F2" }}
                className="text-white hover:text-white transition-colors duration-200"
              >
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </motion.a>
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover={{ scale: 1.2, color: "#0A66C2" }}
                className="text-white hover:text-white transition-colors duration-200"
              >
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </motion.a>
              <motion.a
                href="#"
                variants={socialVariants}
                whileHover={{ scale: 1.2, color: "#E4405F" }}
                className="text-white hover:text-white transition-colors duration-200"
              >
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </motion.a>
            </div>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {[
                { name: "Home", href: "/" },
                { name: "Services", href: "/services" },
                { name: "About Us", href: "/about" },
                { name: "Projects", href: "/projects" },
                { name: "Blog", href: "/blog" },
                { name: "Contact", href: "/contact" },
              ].map((link, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={link.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {link.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Our Services</h3>
            <ul className="space-y-2">
              {[
                { name: "Business Process Outsourcing", href: "/services#bpo" },
                { name: "Knowledge Process Outsourcing", href: "/services#kpo" },
                { name: "Human Resource Outsourcing", href: "/services#hro" },
              ].map((service, index) => (
                <motion.li
                  key={index}
                  variants={itemVariants}
                  whileHover={{ x: 5 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Link href={service.href} className="text-gray-300 hover:text-white transition-colors duration-200">
                    {service.name}
                  </Link>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div variants={itemVariants}>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <motion.li
                className="flex items-start"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <MapPin className="mr-2 h-5 w-5 text-primary flex-shrink-0 mt-1" />
                <span className="text-gray-300">
                Headquartered in Delaware, USA,                 
                 <br />
                with a global delivery center in
                Bangalore, India (Auttonotech Solutions Pvt Ltd)
                </span>
              </motion.li>
              <motion.li
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:8123085846" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +91 81230 85846
                </a>
              </motion.li>
              <motion.li
                className="flex items-center"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@auttonotech.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@auttonotech.com
                </a>
              </motion.li>
            </ul>
          </motion.div>
        </div>

        <motion.div variants={itemVariants} className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-center md:text-left text-gray-400 text-sm">
              &copy; {currentYear} Auttonotech. All rights reserved.
            </p>
            <div className="mt-4 md:mt-0 flex space-x-4 text-sm text-gray-400">
              <Link href="/privacy-policy" className="hover:text-white transition-colors duration-200">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="hover:text-white transition-colors duration-200">
                Terms of Service
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.footer>
  )
}

export default Footer

