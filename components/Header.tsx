'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import styles from './Header.module.scss';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Dr. Moore' },
  { href: '/services', label: 'Services' },
  { href: '/forms', label: 'New Client Forms' },
  { href: '/schedule', label: 'Schedule Appointment' },
  { href: '/payment', label: 'Payment & Insurance' },
  { href: '/contact', label: 'Contact' },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // prevent body scroll when menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileMenuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.logo}>
          <h1>Western Wake Counseling</h1>
        </Link>

        {/* desktop navigation */}
        <NavigationMenu.Root className={styles.desktopNav}>
          <NavigationMenu.List className={styles.navList}>
            {navItems.map((item) => (
              <NavigationMenu.Item key={item.href}>
                <NavigationMenu.Link asChild>
                  <Link href={item.href} className={styles.navLink}>
                    {item.label}
                  </Link>
                </NavigationMenu.Link>
              </NavigationMenu.Item>
            ))}
          </NavigationMenu.List>
        </NavigationMenu.Root>

        {/* mobile menu button */}
        <Dialog.Root open={mobileMenuOpen} onOpenChange={setMobileMenuOpen}>
          <Dialog.Trigger asChild>
            <button
              className={styles.mobileMenuButton}
              aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              type="button"
            >
              <span className={styles.iconWrapper}>
                {mobileMenuOpen ? (
                  <X size={24} className={styles.icon} aria-hidden="true" />
                ) : (
                  <Menu size={24} className={styles.icon} aria-hidden="true" />
                )}
              </span>
              <span className={styles.srOnly}>
                {mobileMenuOpen ? 'Close menu' : 'Open menu'}
              </span>
            </button>
          </Dialog.Trigger>

          <Dialog.Portal>
            <Dialog.Overlay className={styles.overlay} />
            <Dialog.Content
              className={styles.mobileMenu}
              id="mobile-menu"
            >
              <Dialog.Title className={styles.mobileMenuTitle}>
                Navigation Menu
              </Dialog.Title>
              <Dialog.Description className={styles.srOnly}>
                Main site navigation menu
              </Dialog.Description>
              <div className={styles.mobileMenuHeader}>
                <Dialog.Close asChild>
                  <button
                    className={styles.closeButton}
                    aria-label="Close menu"
                    type="button"
                  >
                    <X size={24} aria-hidden="true" />
                    <span className={styles.srOnly}>Close menu</span>
                  </button>
                </Dialog.Close>
              </div>
              <nav
                className={styles.mobileNav}
                aria-label="Main navigation"
                role="navigation"
              >
                {navItems.map((item, index) => (
                  <Dialog.Close key={item.href} asChild>
                    <Link
                      href={item.href}
                      className={styles.mobileNavLink}
                      onClick={() => setMobileMenuOpen(false)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter' || e.key === ' ') {
                          setMobileMenuOpen(false);
                        }
                      }}
                      tabIndex={0}
                    >
                      {item.label}
                    </Link>
                  </Dialog.Close>
                ))}
              </nav>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </header>
  );
}

