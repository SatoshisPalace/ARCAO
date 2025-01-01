import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  const socials = [
    {
      name: 'Twitter',
      icon: require('../assets/x.png'),
      url: 'https://twitter.com/ArcadeOnArweave'
    },
    {
      name: 'Discord',
      icon: require('../assets/discord.png'),
      url: 'https://discord.gg/arcadeonarweave'
    },
    {
      name: 'Telegram',
      icon: require('../assets/telegram.png'),
      url: 'https://t.me/arcadeonarweave'
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
