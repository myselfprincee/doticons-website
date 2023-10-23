"use client";
import styles from "./Navbar.module.scss";
import Link from "next/link";
import Image from "next/image";
import GitHubButton from "react-github-btn";
import packageJson from "../../../package.json";

export default function Navbar() {
  let version = packageJson.dependencies.doticons.includes("^")
    ? packageJson.dependencies.doticons.replace("^", "")
    : packageJson.dependencies.doticons;
  return (
    <nav className={styles.navbar}>
      <div className={styles.nav_grouped}>
        <div className={styles.nav_left_grouped}>
          <Link href={"/"}>
            <Image
              draggable="false"
              width={140}
              height={50}
              src="/DotIcons.svg"
              alt="Doticons Logo"
            />
          </Link>
          <Link href={"https://www.npmjs.com/package/doticons"} target="_blank">
            <p className={styles.version}>{"v" + version}</p>
          </Link>
        </div>
        <GitHubButton
          href="https://github.com/eduardconstantin/doticons-website"
          data-color-scheme="no-preference: dark_dimmed; light: light; dark: dark_high_contrast;"
          data-icon="octicon-star"
          data-show-count="true"
          aria-label="Star eduardconstantin/doticons-website on GitHub"
        >
          Star
        </GitHubButton>
      </div>
    </nav>
  );
}

