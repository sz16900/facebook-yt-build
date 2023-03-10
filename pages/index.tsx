import type { NextPage } from 'next';
import { useSession, getSession } from 'next-auth/react';
import Head from 'next/head';
import Feed from '../components/Feed';
import Header from '../components/Header';
import Login from '../components/Login';
import Sidebar from '../components/Sidebar';
import Widgets from '../components/Widgets';
import { db } from '../firebase';

//  I dont want to use {session}: any here. How dop I properly use typescript?
const Home: NextPage = ({ session, posts }: any) => {
  if (!session) {
    return <Login />;
  }

  return (
    <div className="h-screen bg-gray-100 overflow-hidden">
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main className="flex">
        <Sidebar />
        <Feed posts={posts} />
        <Widgets />
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  // Get User
  const session = await getSession(context);

  const posts = await db.collection('posts').orderBy('timestamp', 'desc').get();

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null,
  }));

  return {
    props: {
      session,
      posts: docs,
    },
  };
}
