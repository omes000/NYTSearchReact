import React from "react";
import "./Nav.css";

export const Footer = () =>
  <nav className="footer navbar navbar-bottom navbar-inverse">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          Made with React by Umer Rathore
        </a>
      </div>
    </div>
  </nav>;