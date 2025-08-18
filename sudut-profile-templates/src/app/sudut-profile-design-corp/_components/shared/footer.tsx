import React from "react";

const Footer = () => {
  return (
    <footer className="bg-black text-white px-6 py-16">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div className="text-2xl font-semibold">DesignCorp.</div>
          <p className="text-gray-400">
            A leading digital design agency creating exceptional experiences.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
          <div>
            <h4 className="font-semibold mb-4">Pages</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Work
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Insights
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Work</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Spotify
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Figma
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wallet
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Wooter
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Utility</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Style Guide
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Licenses
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Changelog
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Dribbble
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Behance
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-gray-800">
          <p className="text-gray-400 mb-4 md:mb-0">
            © 2024 DesignCorp. All rights reserved.
          </p>
          <p className="text-gray-400">Built with passion and lots of ☕</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
