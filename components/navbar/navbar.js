import Link from "next/link";
import styles from "./navbar.module.scss";
import ReactModal from 'react-modal';
import { useState } from "react";
import Head from "next/head";

export default function Navbar () {
  const [menu, setMenu] = useState(false);

  const handleHamburger = () => {
    setMenu(!menu);
    console.log(menu);
  }

  return (
    <>
      <Head>
        <title>Eojhet</title>
        <meta name="Eojhet" content="I am Joe" />
        <link rel="icon" href="favico.ico?v=4" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Rubik&display=swap" rel="stylesheet" /> 
      </Head>
      
      <nav className={styles.nav}>
        <div className={styles.container}>
          <h3><Link href="/"><a>EOJHET.COM</a></Link></h3>
          <div className={styles.hamburger} onClick={handleHamburger}>
            <span className={styles.top}></span>
            <span className={styles.middle}></span>
            <span className={styles.bottom}></span>
          </div>
          <ReactModal
            isOpen={menu}
            onRequestClose={handleHamburger}
            ariaHideApp={false}
            contentLabel="Menu Options"
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'rgba(255, 255, 255, 0.1)'
              },
              content: {
                position: 'fixed',
                top: '3.2rem',
                left: '0',
                right: '0',
                bottom: '0',
                border: '1px solid #ccc',
                background: '#fff',
                overflow: 'auto',
                WebkitOverflowScrolling: 'touch',
                borderRadius: '4px',
                outline: 'none',
                padding: '20px',
                textAlign: 'right',
              }
            }}       
          >
            <div>
              <p>Asses Exploding</p>
              <p><Link href="/"><a onClick={handleHamburger}>Home</a></Link></p>
              <p><Link href="/cuttingslab"><a onClick={handleHamburger}>The Cutting Slab</a></Link></p>
              <p>GOATS</p>
            </div>
          </ReactModal>
        </div>
      </nav>
    </>
  );
}
