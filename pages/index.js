import Head from 'next/head'
import Image from 'next/image'
import 'antd/dist/antd.css';
import Header from '../components/Header'
import BlogCard from '../components/BlogCard';
import { getPosts } from '../lib/data';
import LandingPage from '../components/LandingPage';
import Footer from '../components/Footer';

export const getStaticProps = async () => {

  const data = await getPosts();
  
  return {
    props: {
      data,
    },
  };
};

export default function Home({ data }) {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <LandingPage />
      <BlogCard data={data} />
      <Footer />
    </div>
  )
}