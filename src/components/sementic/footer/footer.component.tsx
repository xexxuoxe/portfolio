// components/FooterComponent.tsx
'use client';
import React from 'react';
import Link from 'next/link';
import styles from './footer.module.scss';
import { useFooter } from './hooks/useFooter';

export default function FooterComponent() {
  const { year, MENU_LIST, SOCIAL_LINKS } = useFooter();

  return (
    <footer className={styles.footer}>
      <div className={styles.grid}>
        <div className={styles.footer_main}>
          <div className={styles.footer_contact}>
            <div>Contact</div>
            <a href="mailto:ieunseo802@gmail.com">ieunseo802@gmail.com</a>
          </div>
          <aside className={styles.footer_media}>
            <div className={styles.media_title}>Social media</div>
            {SOCIAL_LINKS.map((link, index) => (
              <a key={index} href={link.url} target="_blank" className={styles.media_icon} aria-label={link.name}>
                <svg width="40px" height="40px" viewBox="0 0 15 15" fill="none">
                </svg>
              </a>
            ))}
          </aside>
          <nav className={styles.footer_menu}>
            <div className={styles.menu_list}>
              <ul>
                {MENU_LIST.map((link, index) => (
                  <li key={index}>
                    <Link href={link.url}>{link.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className={styles.footer_copy}>Copyright © {year}. All Rights Reserved.</div>
        </div>
      </div>
    </footer>
  );
}
