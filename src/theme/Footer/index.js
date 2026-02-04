import React from 'react';
import { Icon } from '@iconify/react';
import Layout from '@theme/Layout';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

export default function Footer() {
  const { siteConfig } = useDocusaurusContext();
  const { themeConfig, customFields } = siteConfig;

  return (
    <footer className="footer">
      <div className="container footer__inner"> 
        <div className='footer__middle'>
          {themeConfig.footer.copyright}
        </div>
        <div className="footer__right">
          <a href="https://github.com/Scot-Survivor" aria-label="GitHub">
            <Icon icon="mdi:github" width="24" />
          </a>
          <a href={`${siteConfig.url}/rss`} aria-label="RSS Feed">
            <Icon icon="mdi:rss" width="24" />
          </a>
        </div>
      </div>
    </footer>
  );
}
