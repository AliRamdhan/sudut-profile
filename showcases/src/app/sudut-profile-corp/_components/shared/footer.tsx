import React from "react";

const Footer = () => {
  return (
    <footer className="border-t text-center py-8">
      <p className="text-neutral-800">
        &copy; {new Date().getFullYear()} Sudut Corp | All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
