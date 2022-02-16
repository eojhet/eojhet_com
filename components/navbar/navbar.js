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
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="true" />
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
            // closeTimeoutMS={500}
            isOpen={menu}
            onRequestClose={handleHamburger}
            ariaHideApp={false}
            contentLabel="Menu Options"
            className
            overlayClassName    
          >
            <div>
              <div onClick={handleHamburger} className="modalClose"><span className="x1"/><span className="x2"/></div>
              <h2>MENU</h2>
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
