import styles from './page.module.scss';
import DotsBackground from '../components/DotsBackground';

export default function Home() {
  return (
    <main className={styles.main}>
      <DotsBackground />
    </main>
  );
}

