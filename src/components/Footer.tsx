import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const socials = [
    {
      name: 'Twitter',
      icon: require('../assets/x.png'),
      url: 'https://x.com/Arc_AO'
    },
    {
      name: 'Discord',
      icon: require('../assets/discord.png'),
      url: 'https://discord.com/invite/arc-ao'
    },
    {
      name: 'Telegram',
      icon: require('../assets/telegram.png'),
      url: 'https://t.me/ArcAOGames'
    }
  ];

  return (
    <footer className="footer">
      <p>&copy; {new Date().getFullYear()} Arc AO. All rights reserved.</p>
      <div className="footer-socials">
        {socials.map((social) => (
          <a
            key={social.name}
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
          >
            <img src={social.icon} alt={social.name} />
          </a>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
