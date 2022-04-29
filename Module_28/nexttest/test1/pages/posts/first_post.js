import Link from 'next/link'
import Head from 'next/head'
import Layout from '../../components/layout'

export default function FirstPost() {
    return (
        <Layout>
        <Head>
            <title> This is the tab text!</title>
        </Head>
        <h1> First Post </h1>
        <h2>
            <Link href ="/">
                <a>Go Back Home By Clicking Here</a>
            </Link>
        </h2>
        
        </Layout>
    )

}