import React from "react";
import "./Nav.css";

export const Nav = () =>
  <nav className="navbar navbar-inverse navbar-top">
    <div className="container">
      <div className="navbar-header">
        <button type="button" className="collapsed navbar-toggle">
          <span className="sr-only">Toggle navigation</span>
          <span className="icon-bar" /> <span className="icon-bar" />
          <span className="icon-bar" />
        </button>
        <a href="/" className="navbar-brand">
          New York Times Search
        </a>
      </div>
    </div>
  </nav>;
