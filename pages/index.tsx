import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link';
import Header from '../components/Header';
import HomeBox from '../components/HomeBox';

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>LondonExplorer75</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header/>
        <div className="grid grid-cols-1 md:grid-cols-3 mx-auto my-5 mb-[10%] lg:gap-12 w-screen md:max-w-screen">
          <Link href="/Nearby">
            <a><HomeBox title="What's Nearby" imageUrl="nearby.jpg"/></a>
          </Link>

          <Link href="/CheckIn">
              <a><HomeBox title="Check-In Guide" imageUrl="contacts.jpg"/></a>
            </Link>
          
          <Link href="/Eatdrinks">
            <a><HomeBox title="Food & Drinks" imageUrl="londoneat.jpg"/></a>
          </Link>
            
          <Link href="/Transport">
            <a><HomeBox title="Getting Around" imageUrl="transport.jpg"/></a>
          </Link>
           
           <Link href="/Usermanual">
            <a><HomeBox title="User Manual" imageUrl="usermanual.jpg"/></a>
           </Link>
            
            <Link href="/PlacesInterest">
              <a><HomeBox title="Places of Interest" imageUrl="traveltips.jpg"/></a>
            </Link>

        </div>
      </main>

    </div>
  )
}

export default Home
