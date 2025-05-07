import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaLinkedinIn,
  FaInstagram,
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaClock
} from "react-icons/fa";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Company Info */}
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-blue-400">Roots Analysis</h2>
            <p className="text-gray-300 leading-relaxed">
              Delivering smart insights and market intelligence across the
              healthcare industry.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-600 transition-colors">
                <FaFacebookF className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-400 transition-colors">
                <FaTwitter className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-blue-700 transition-colors">
                <FaLinkedinIn className="w-4 h-4" />
              </a>
              <a href="#" className="bg-gray-800 p-3 rounded-full hover:bg-pink-600 transition-colors">
                <FaInstagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/reports" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Industry Reports
                </Link>
              </li>
              <li>
                <Link to="/blogs" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Blogs
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-blue-400 transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2"></span>
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Contact Us</h3>
            <ul className="space-y-4 text-gray-300">
              <li className="flex items-start">
                <FaMapMarkerAlt className="mt-1 mr-3 text-blue-400 flex-shrink-0" />
                <span>123 Business Ave, Suite 400<br />San Francisco, CA 94107</span>
              </li>
              <li className="flex items-center">
                <FaPhoneAlt className="mr-3 text-blue-400" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <FaEnvelope className="mr-3 text-blue-400" />
                <span>info@rootsanalysis.com</span>
              </li>
              <li className="flex items-center">
                <FaClock className="mr-3 text-blue-400" />
                <span>Mon-Fri: 9AM - 6PM</span>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-lg font-semibold mb-4 pb-2 border-b border-gray-700">Newsletter</h3>
            <p className="text-gray-300 mb-4">
              Subscribe to our newsletter for the latest industry insights.
            </p>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Your email address"
                className="w-full px-4 py-2 rounded-lg bg-gray-800 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                required
              />
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg transition-colors"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400 text-sm">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              &copy; {new Date().getFullYear()} Roots Analysis. All rights reserved.
            </div>
            <div className="flex space-x-6">
              <Link to="/privacy" className="hover:text-blue-400 transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="hover:text-blue-400 transition-colors">
                Terms of Service
              </Link>
              <Link to="/cookies" className="hover:text-blue-400 transition-colors">
                Cookie Policy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}