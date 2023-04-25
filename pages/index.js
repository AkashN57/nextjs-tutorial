import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
          <title>Next js Tutorial</title>
      </Head>
      <h1>Home Page</h1>
      {/* <Link href="/about">About</Link> */}
      {/* <h1 className={styles.homePageTitle}>Hello World</h1> */}
    </div>
  )
}
