"use client"
import styles from './Navbar.module.scss';
import Link from 'next/link';
import GithubButton from '../Button';
import Image from 'next/image';
import packageJson from '../../../package.json';

export default function Navbar() {

  let version = packageJson.dependencies.doticons.includes("^") ? packageJson.dependencies.doticons.replace("^", "") : packageJson.dependencies.doticons;
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.nav_grouped}>
        <div className={styles.nav_left_grouped}>
        <Link href={"/"}>
          <Image draggable="false" width={140} height={50} src="/DotIcons.svg" alt="Doticons Logo" />
        </Link>
        <Link href={"https://www.npmjs.com/package/doticons"} target='_blank'>
        <p className={styles.version}>{"v" + version}</p>
        </Link>
        </div>


<GithubButton/>
</div>
      </nav>
    </>
  )
}
