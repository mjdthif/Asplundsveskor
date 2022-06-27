import Head from 'next/head';
import HomePage1 from '../components/homePages/homePage1';
import HomePage2 from '../components/homePages/homePage2';


export default function Home() {
  return (
 
  <>
        <Head>
              <title> Web Deve </title>
              <meta name='keywords' content='web development'/>
        </Head> 
        <HomePage1/>
        <HomePage2/> 
  </>
 
  )
}
