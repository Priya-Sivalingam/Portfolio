// src/components/WhatsAppIcon.js
import React from "react";
import "./header.css"; // We'll create this CSS file next

const WhatsAppIcon = () => {
  return (
    <div className="whatsapp-icon">
      <a href="https://wa.me/+94771781833" target="_blank" rel="noopener noreferrer">
      <img width="50" height="50" src="https://img.icons8.com/external-those-icons-flat-those-icons/50/external-WhatsApp-Logo-social-media-those-icons-flat-those-icons.png" alt="external-WhatsApp-Logo-social-media-those-icons-flat-those-icons"/>
      </a>
    </div>
  );
};

export default WhatsAppIcon;
