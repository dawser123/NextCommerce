import React from "react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="mt-auto border-t px-7 py-5 text-center text-primaryTextColor">
      <small>&copy;{currentYear}. All right reserved.</small>
    </footer>
  );
};

export default Footer;
