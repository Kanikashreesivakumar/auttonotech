import Link from "next/link"
import Image from "next/image"
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-secondary text-white pt-16 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="space-y-4">
            <Image src="/logo.png" alt="Auttonotech Logo" width={180} height={50} className="h-10 w-auto" />
            <p className="mt-4 text-sm text-gray-300 max-w-xs">
              Engineering, consulting, and technology company serving industries like Automotive, Aerospace, Defense,
              Heavy Engineering, and Energy.
            </p>
            <div className="flex space-x-4 mt-6">
              <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                <Linkedin size={20} />
                <span className="sr-only">LinkedIn</span>
              </a>
              <a href="#" className="text-white hover:text-primary transition-colors duration-200">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white transition-colors duration-200">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Industries
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-300 hover:text-white transition-colors duration-200">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a href="tel:+1234567890" className="text-gray-300 hover:text-white transition-colors duration-200">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary flex-shrink-0" />
                <a
                  href="mailto:info@auttonotech.com"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  info@auttonotech.com
                </a>
              </li>
            </ul>
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Industries</h3>
              <ul className="space-y-2">
                <li>
                  <Link
                    href="/industries#automotive"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Automotive
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#aerospace"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Aerospace
                  </Link>
                </li>
                <li>
                  <Link
                    href="/industries#defense"
                    className="text-gray-300 hover:text-white transition-colors duration-200"
                  >
                    Defense
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8">
          <p className="text-center text-gray-400 text-sm">&copy; {currentYear} Auttonotech. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

