import styles from "./footer.module.scss";

export default function Footer () {

  return (
    <footer className={styles.footer}>
      <div className={styles.socials}>
        <a href="https://twitter.com/eojhet" target="_blank"><img src="/home/twitter1.svg" alt="twitter" width="35px"/></a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://github.com/eojhet" target="_blank"><img src="/home/GitHubDark.svg" alt="github" width="35px"/></a>
        &nbsp;&nbsp;&nbsp;
        <a href="https://www.linkedin.com/in/joseph-gonzalez-0844b947/" target="_blank"><img src="/home/linkedin.png" alt="linkedin" width="35px"/></a>
      </div>
      <div className={styles.copyright}>
        &copy;eojhet 2022
      </div>
    </footer>
  )
}
