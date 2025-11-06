import React from "react";

function Footer() {
  return (
    <footer className="bg-dark text-light text-center py-3 fixed-bottom">
      <p className="mb-1">
        45, Connaught Place, New Delhi, Delhi 110001, India
      </p>
      <p className="mb-1">📞 +91 98765 43210 | ✉️ info@hotelexample.com</p>
      <p className="mb-0">
        © {new Date().getFullYear()} Hotel Paradise. All Rights Reserved.
      </p>
    </footer>
  );
}

export default Footer;
