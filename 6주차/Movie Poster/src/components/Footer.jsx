import React from "react";
import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-wrap">
        <div className="footer-left-wrap">
            <ul>
              <Link className="footer-nav-item" to='/'>UMC Movie.com</Link>
            </ul>
        </div>
      </div>
    </div>
  );
}
