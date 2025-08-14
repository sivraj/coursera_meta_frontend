import React from "react";
import footerLogo from "../assets/Logo.svg"; // Make sure to have a logo image in your assets
import { FaFacebook, FaInstagram, FaTiktok, FaTwitter } from "react-icons/fa"; // Importing Facebook icon from react-icons

export default function Footer() {
  return (
    <footer className="bg-primary text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 text-center md:text-left">
          <div className="flex justify-center md:justify-start">
            <img
              src={footerLogo}
              alt="Little Lemon footer logo"
              className="w-24" // Adjust size as needed
            />
          </div>

          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Sitemap</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About Us
                </a>
              </li>
              <li>
                <a href="/menu" className="hover:underline">
                  Menu
                </a>
              </li>
              <li>
                <a href="/reservations" className="hover:underline">
                  Reservations
                </a>
              </li>
              <li>
                <a href="/order-online" className="hover:underline">
                  Order Online
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">Contact</h3>
            <address className="not-italic space-y-2">
              <p>123 Lemon Lane,</p>
              <p>Chicago, IL 60601</p>
              <p>
                <a href="tel:+13125551234" className="hover:underline">
                  (312) 555-1234
                </a>
              </p>
              <p>
                <a
                  href="mailto:contact@littlelemon.com"
                  className="hover:underline"
                >
                  contact@littlelemon.com
                </a>
              </p>
            </address>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-4 text-yellow-400">
              Connect With Us
            </h3>
            <div className="flex justify-center md:justify-start space-x-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FaFacebook className="w-6 h-6 hover:opacity-75" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FaInstagram className="w-6 h-6 hover:opacity-75" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTwitter className="w-6 h-6 hover:opacity-75" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <FaTiktok className="w-6 h-6 hover:opacity-75" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright */}
        <div className="border-t border-gray-700 mt-12 pt-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Little Lemon. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
