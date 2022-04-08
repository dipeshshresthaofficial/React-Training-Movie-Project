import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

export default function Header() {
  return (
    <div className="header-container">
      <Link to="/" style={{ textDecoration: 'none', color: '#fff' }}>
        <h3>DDFlix</h3>
      </Link>
      <img
        src="https://www.pngkey.com/png/full/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png"
        alt="user-avatar"
      />
    </div>
  );
}
