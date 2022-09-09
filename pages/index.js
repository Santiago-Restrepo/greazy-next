import Head from 'next/head'
import { ProductCard } from '../components/ProductCard'
export default function Home() {
  return (
    <div>
      <Head>
        <title>Greazy</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <ProductCard/>
    </div>
  )
}
