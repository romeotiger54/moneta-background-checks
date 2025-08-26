"use client";

import { useState } from "react";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <div className="text-2xl font-bold text-slate-800">
              Moneta
              <span className="text-sm font-normal text-slate-600 block leading-none">
                INTELLIGENCE GROUP
              </span>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button className="text-slate-700 hover:text-slate-900 font-medium">
              Services
            </button>
            <a href="#testimonials" className="text-slate-700 hover:text-slate-900 font-medium">
              Testimonials
            </a>
            <a href="#contact" className="text-slate-700 hover:text-slate-900 font-medium">
              Contact
            </a>
            <button className="text-slate-700 hover:text-slate-900 font-medium">
              More
            </button>
          </nav>

          {/* Phone CTA Button */}
          <div className="hidden md:block">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md font-medium">
              Call Us (800) 216-5198
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-700 hover:text-slate-900"
            >
              {isMenuOpen ? (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 border-t border-slate-200">
              <a href="#services" className="block px-3 py-2 text-slate-700 hover:text-slate-900">
                Services
              </a>
              <a href="#testimonials" className="block px-3 py-2 text-slate-700 hover:text-slate-900">
                Testimonials
              </a>
              <a href="#contact" className="block px-3 py-2 text-slate-700 hover:text-slate-900">
                Contact
              </a>
              <div className="px-3 py-2">
                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-md">
                  Call Us (800) 216-5198
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
