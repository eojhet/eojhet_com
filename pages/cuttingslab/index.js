// The Cutting Slab

import styles from './index.module.scss';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>The Cutting Slab</title>
        <meta name="The Cutting Slab" content="We Cut Bread" />
      </Head>
      <div className={styles.container}>
        <div className={styles.bannerElements}>
            <img
              src="/images/thecuttingslabsm.svg"
              alt="The Cutting Slab"
              className={styles.svgLogo}
            />        
          <div className={styles.title}>
            <p>FINE BREAD CUTTERY</p>
          </div>
        </div>
        <div className={styles.storefront}>
            <img
              src="/images/storefront.jpg"
              alt="The Cutting Slab Store Front"
              className={styles.storefrontPic}
            />
        </div>
      
      
        
        <div className={styles.welcome}>
          <h2>
            Welcome to the Cutting Slab!
          </h2>
          <p>
            {"We are the world's first foremost bread cutting storefront in all of Canada."}
          </p>
          <p>
            {"We specialize in cutting every variety of bread. If we can't cut it, you shouldn't eat it."}
          </p>
          <p>Our world-class state-of-the-art advanced science technologies are able and willing to slice with accuracy and bravado.</p>
        </div>  


        <div className={styles.jackContainer}>
          <div className={styles.jackhead}>
            <h2>See the Amazing Jumping Knife Jack!</h2>
            <p>Broadway trained and ready for magic. You have never seen a more majestic knife.</p>
          </div>
          <img
            src="/images/jumpingknifejack.jpg"
            alt="The Amazing Jumping Knife Jack"
            className={styles.jack}
          />
          <div className={styles.afterjack}>
          </div>
        </div>


        <div className={styles.breads}>

          <div className={styles.breadCard} id="1">
            <img
              src="/images/bread1.jpg"
              alt="Bread"
            />
            <h2>{"Don't you love bread?"}</h2>
          </div>

          <div className={styles.breadCard} id="2">
            <h2>{"Don't you love it sliced?"}</h2>
            <img
              src="/images/bread2.jpg"
              alt="Bread"
            />
          </div>

          <div className={styles.breadCard} id="3">
            <img
              src="/images/bread3.jpg"
              alt="Bread"
            />
            <h2>{"It just looks so good doesn't it?"}</h2>
          </div>

          <div className={styles.breadCard} id="4">
            <h2>{"Oh you want that so bad don't you?"}</h2>
            <img
              src="/images/bread4.jpg"
              alt="Bread"
            />
          </div>

          <div className={styles.afterBreads}>
            <h2>{"Come on over... We're waiting for you, big [boy or girl]"}</h2>
          </div>

        </div>
        <div className={styles.bottomContainer}>
          <img
            src="/images/thecuttingslab.png"
            alt="The Cutting Slab"
            className={styles.cuttingSlabBottom}
          />
        </div>
      </div>
     
      <style jsx global>{`
        .cuttingSlab {
          width: 75%;
          margin: auto;
        }
      `}</style>
    </>
  )
}
