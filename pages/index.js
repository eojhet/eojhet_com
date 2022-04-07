import Link from "next/link";
import styles from "./index.module.scss";

export default function Home () {

  return (
      <main className={styles.container}>
        <section className={styles.center}>
          <div className={styles.title}>
            <h1>Content...</h1>
          </div>

          <a href="https://www.chesapeakebayoil.com"><article className={styles.card}>
            <div className={styles.cardDescription}>
              <h2>ChesapeakeBayOil.com</h2>
              <p>{"An informational website on heating oil tanks in the Hampton Roads area of Virginia."}</p>
            </div>
            <img
              src="/home/ChesapeakeBayOilOpt.svg"
              alt="ChesapeakeBayOil.com Logo"
            />
          </article></a>

          <Link href="./tictactoe"><article className={styles.card}>
            <div className={styles.cardDescription}>
              <h2>Tic-Tac-Toe</h2>
              <p>{"Play with yourself or make friends with an older man in the park and enjoy this amazing rendition of Tic-Tac-Toe!"}</p>
            </div>
              <img
                src="/home/tictactoeOpt.svg"
                alt="TicTacToe"
              />
          </article></Link>

          <Link href="./cuttingslab"><article className={styles.card}>
            <div className={styles.cardDescription}>
              <h2>The Cutting Slab</h2>
              <p>{"Come have a taste of your favorite bread at the home The Cutting Slab. We will cut your bread to perfection!"}</p>
            </div>
              <img
                src="/images/jumpingknifejack.jpg"
                alt="The Amazing Jumping Knife Jack"
              />
          </article></Link>

        </section>
        <aside className={styles.right}>
          <article className={styles.profileContainer}>
            <img 
              className={styles.profile}
              alt="My Face"
              width="200px"
              src="/home/deepFriedLite.png"/>
          </article>
          <article className={styles.rightContent}>
            <div className={styles.rightContent}>
              <h2>About Me:</h2>
              <p>My name is Joe Gonzalez.</p>
              <p>I am a web developer based in Norfolk, Virginia.</p>
              <p>I love working with JavaScript, HTML, CSS, React, Nodejs and much more!</p>
              <p>I will be updating this site fequently with new content so check back regularly.</p>
              <p>Please feel free to <a href="mailto:admin@eojhet.com"><strong>Contact Me</strong></a> for questions, comments, or if you are hiring.</p>
              <p>Thank you so much for visiting!</p>
            </div>
          </article>
        </aside>
      </main>
  );
}