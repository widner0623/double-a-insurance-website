import { FiShield } from "react-icons/fi";
import logo from "../assets/footerLogo.png"

function Footer() {
  return (
    <footer className="bg-[#000] px-6 py-14 text-white">
      <div className="mx-auto max-w-6xl">
        
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* LOGO + TEXT */}
          <div>
            <div className="flex items-center gap-3 py-8">
              <img
                src={logo}
                alt="Double A Insurance Agency"
                className="absolute h-50 w-auto object-contain sm:h-55 md:h-40 lg:h-50 overflow-hidden mb-5"
              />
            </div>

            <p className="mt-5 max-w-xs leading-relaxed text-gray-400">
              Your trusted insurance partner since 2023.
            </p>

          </div>

          {/* PRODUCTS */}
          <div>
            <h4 className="font-semibold">Products</h4>

            <ul className="mt-5 space-y-3 text-gray-400">
               <li>
                <a href="#services" className="transition hover:text-white">
                  Medicare Options
                </a>
              </li>
               <li>
                <a href="#services" className="transition hover:text-white">
                  Health & Life Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Home & Auto Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Business Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Group Plans
                </a>
              </li>
            </ul>
          </div>

          {/* COMPANY */}
          <div>
            <h4 className="font-semibold">Company</h4>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>
                <a href="#about" className="transition hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white pointer-events-none cursor-not-allowed opacity-50 text-gray-400 no-underline"
                tabindex="-1" 
                aria-disabled="true">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white pointer-events-none cursor-not-allowed opacity-50 text-gray-400 no-underline"
                tabindex="-1" 
                aria-disabled="true">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white pointer-events-none cursor-not-allowed opacity-50 text-gray-400 no-underline"
                tabindex="-1" 
                aria-disabled="true">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* SUPPORT */}
          <div>
            <h4 className="font-semibold">Support</h4>

            <ul className="mt-5 space-y-3 text-gray-400">
              <li>
                <a href="#" className="transition hover:text-white pointer-events-none cursor-not-allowed opacity-50 text-gray-400 no-underline"
                tabindex="-1" 
                aria-disabled="true">
                  Help Center
                </a>
              </li>
              <li>
                <a href="#" className="transition hover:text-white pointer-events-none cursor-not-allowed opacity-50 text-gray-400 no-underline"
                tabindex="-1" 
                aria-disabled="true">
                  Claims
                </a>
              </li>
              <li>
                <a href="#contact" className="transition hover:text-white">
                  Contact Us
                </a>
              </li>
               <li>
                <a href="/TermsOfUse.pdf" target="_blank"  rel="noopener noreferrer" className="transition hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="/PrivacyPolicy.pdf" target="_blank"  rel="noopener noreferrer" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>
      <div className="mt-16">
        <p className="max-w-xs leading-relaxed text-gray-500 opacity-70 inline">
          We do not offer every plan available in your area. Currently we represent 7 organizations which offer 75 products in your area. Please contact Medicare.gov, 1-800-MEDICARE, or your local State Health Insurance Program to get information on all of your options.
        </p>
      </div>
        {/* BOTTOM LINE */}
        <div className="mt-2 border-t border-white/10 pt-8 text-center text-gray-400">
         <p>
            &copy; {new Date().getFullYear()} Double A Insurance Agency<sup>LLC</sup>. All rights reserved. 
            | Made by <a href="https://redlinelabs.vercel.app/" target="_blank" rel="noopener noreferrer">
              <em>Derrick Widner</em>
            </a>
          </p>
        </div>

      </div>
    </footer>
  );
}

export default Footer;