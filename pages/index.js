import Link from "next/link";
import styles from "./index.module.scss";

export default function Home () {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
        Welcome to Eojhet...
        <div className={styles.title}>
          <h1>GREETINGS FROM JOE...</h1>
        </div>
        <div>
          <h1><Link href="./cuttingslab"><a>The Cutting Slab</a></Link></h1>
        </div>
        <div className={styles.sunContainer}>
          <img className={styles.sun} src="/home/vaporSun.svg" alt="Vapor Sun" />
        </div>
        <div className={styles.triangleContainer}>
          <img className={styles.triangle} src="/home/vaporTrianglesOpt.svg" />
        </div>
      </div>
    </main>
  );
}