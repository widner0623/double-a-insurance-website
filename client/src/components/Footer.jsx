import { FiShield } from "react-icons/fi";

function Footer() {
  return (
    <footer className="bg-[#050514] px-6 py-14 text-white">
      <div className="mx-auto max-w-6xl">
        
        <div className="grid gap-10 md:grid-cols-4">
          
          {/* LOGO + TEXT */}
          <div>
            <div className="flex items-center gap-3">
              <FiShield className="text-3xl" />
              <h3 className="text-xl font-semibold">
                Double A Insurance
              </h3>
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
                  Life Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Health Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Auto Insurance
                </a>
              </li>
              <li>
                <a href="#services" className="transition hover:text-white">
                  Home Insurance
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
                <a href="../public/TermsOfUse.pdf" target="_blank"  rel="noopener noreferrer" className="transition hover:text-white">
                  Terms of Use
                </a>
              </li>
              <li>
                <a href="../public/PrivacyPolicy.pdf" target="_blank"  rel="noopener noreferrer" className="transition hover:text-white">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM LINE */}
        <div className="mt-12 border-t border-white/10 pt-8 text-center text-gray-400">
         <p>
            &copy; {new Date().getFullYear()} Double A Insurance<sup>LLC</sup>. All rights reserved. 
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