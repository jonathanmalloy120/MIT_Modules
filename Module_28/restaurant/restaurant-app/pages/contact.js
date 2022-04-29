import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

export default function Contact() {
  return (
      <>
    <h1> Contact Page</h1>
    <h2>Jon@testmail.com</h2>
    <Link href="/">
                    <a>Back to Home</a>
                </Link>
    </>
  )
}