import Link from "next/link";
import Image from "next/image";
import styles from "./index.module.scss";

export default function Home () {

  return (
    <main className={styles.main}>
      <div className={styles.container}>
      
        <div className={styles.left}>
          <div className={styles.profileContainer}>
            <img 
              className={styles.profile}
              alt="My Face"
              width="200px"
              src="/home/deepFriedLite.png"/>
          </div>
          <div className={styles.leftContent}>
            <div className={styles.leftContent}>
              <h2>About Me:</h2>
              <p>My name is Joe Gonzalez.</p>
              <p>I am a web developer based in Norfolk, Virginia.</p>
              <p>I love working with JavaScript, HTML, CSS, React, Nodejs and much more!</p>
              <p>Please feel free to <a href="mailto:admin@eojhet.com"><strong>Contact Me</strong></a> for questions, comments, or if you are hiring.</p>
              <p>Thank you so much for visiting!</p>
            </div>
          </div>
        </div>

        <div className={styles.center}>
          <div className={styles.title}>
            <h1>"CONTENT"...</h1>
          </div>
          <Link href="./cuttingslab"><div className={styles.card}>
            <div className={styles.cardDescription}>
              <h2>The Cutting Slab</h2>
              <p>{"Come have a taste of your favorite bread at the home The Cutting Slab. We will cut your bread to perfection!"}</p>
            </div>
            <div className={styles.cardPictureContainer}>
              <Image
                src="/images/jumpingknifejack.jpg"
                alt="The Amazing Jumping Knife Jack"
                width={1282}
                height={1920}
              />
            </div>
          </div></Link>
          <Link href="./cuttingslab"><div className={styles.card}>
            <div className={styles.cardDescription}>
              <h2>The Cutting Slab</h2>
              <p>{"Come have a taste of your favorite bread at the home The Cutting Slab. We will cut your bread to perfection!"}</p>
            </div>
            <div className={styles.cardPictureContainer}>
              <Image
                src="/images/jumpingknifejack.jpg"
                alt="The Amazing Jumping Knife Jack"
                width={1282}
                height={1920}
              />
            </div>
          </div></Link>
        </div>

        <div className={styles.right}>
          <h2>Thank you for visiting!</h2>
          <div className={styles.rightContent}>
            Check the footer for my socials.
          </div>
        </div>
        
        {/* <div className={styles.sunContainer}>
          <img className={styles.sun} src="/home/vaporSun.svg" alt="Vapor Sun" />
        </div>
        <div className={styles.triangleContainer}>
          <img className={styles.triangle} src="/home/vaporTrianglesOpt.svg" />
        </div> */}
      </div>
    </main>
  );
}