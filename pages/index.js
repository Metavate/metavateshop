import Head from 'next/head'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Shopify Website Template</title>
        <meta name="description" content="This is the started template for a shopify Website" />
      
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Shopify Store
        </h1>

        <div className={styles.product}>{/* TODO: add products */}</div>

    
      </main>

  
    </div>
  )
}
