import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Privacy() {
  return (
      <>
    <h1> Privacy Page</h1>
    <h2>We give your data right to the bad guys. Hand it straight over.</h2>
    <Link href="/">
                    <a>Back to Home</a>
                </Link>
    </>
  )
}