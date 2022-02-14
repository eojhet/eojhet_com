// The Cutting Slab

import styles from './index.module.scss';
import Image from 'next/image';
import Head from 'next/head';


export default function Home() {
  return (
    <>
      <Head>
        <title>The Cutting Slab</title>
        <meta name="The Cutting Slab" content="We Cut Bread" />
        <link rel="icon" href="favico.ico?v=4" />
      </Head>
      
      <div className={styles.banner}>
        <div className={styles.logo}>
          <Image
            src="/images/thecuttingslabsm.png"
            alt="The Cutting Slab"
            width={175}
            height={60}
          />        
        </div>
        <div className={styles.title}>
          <p>Fun for everyone!</p>
        </div>
      </div>
      
      <div className={styles.container}>
        <div className={styles.storefront}>
          <div className={styles.image}>
            <Image
              src="/images/storefront.jpg"
              alt="The Cutting Slab Store Front"
              width={1920}
              height={1277}
            />
          </div>
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
        <div className={styles.jackhead}>
          <h2>See the Amazing Jumping Knife Jack!</h2>
        </div>
        <div>
          <Image
            src="/images/jumpingknifejack.jpg"
            alt="The Amazing Jumping Knife Jack"
            width={1282}
            height={1920}
          />
        </div>
        <div className={styles.afterjack}>
          <p>Broadway trained and ready for magic. You have never seen a more majestic knife.</p>
        </div>
        <div className={styles.breads}>
          <p>{"Don't you love bread?"}</p>
          <Image
            src="/images/bread1.jpg"
            alt="Bread"
            width={640}
            height={399}
          />
          <p>{"Don't you love it sliced?"}</p>
          <Image
            src="/images/bread2.jpg"
            alt="More Bread"
            width={640}
            height={426}
          />
          <p>{"It just looks so good doesn't it?"}</p>
          <Image
            src="/images/bread3.jpg"
            alt="Yummy Bread"
            width={640}
            height={424}
          />
          <p>{"Oh you want that so bad don't you?"}</p>
          <Image
            src="/images/bread4.jpg"
            alt="Lovely Bread"
            width={640}
            height={426}
          />
          <p>{"Come on over... We're waiting for you, big [boy or girl]"}</p>
        </div>
        <div className="cuttingSlab">
          <Image
            src="/images/thecuttingslab.png"
            alt="The Cutting Slab"
            width={1129}
            height={926}
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
