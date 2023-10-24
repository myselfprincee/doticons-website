'use client';

import Image from 'next/image';
import Link from 'next/link';
import GitHubButton from 'react-github-btn';
import packageJson from '../../../package.json';
import styles from './Navbar.module.scss';

export default function Navbar() {
  let version = packageJson.dependencies.doticons.includes('^')
    ? packageJson.dependencies.doticons.replace('^', '')
    : packageJson.dependencies.doticons;
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_grouped}>
        <div className={styles.nav_left_grouped}>
          <Link href={'/'}>
            <Image
              draggable="false"
              width={140}
              height={50}
              src="/DotIcons.svg"
              alt="Doticons Logo"
            />
          </Link>
          <Link href={'https://www.npmjs.com/package/doticons'} target="_blank">
            <p className={styles.version}>{'v' + version}</p>
          </Link>
        </div>
        <GitHubButton
          href="https://github.com/eduardconstantin/doticons"
          data-color-scheme="no-preference: light; light: light; dark: dark;"
          data-icon="octicon-star"
          data-size="large"
          data-show-count="true"
          aria-label="Star doticons collection on GitHub"
        >
          Star
        </GitHubButton>
      </div>
    </nav>
  );
}
