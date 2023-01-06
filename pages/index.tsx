import type { NextPage } from 'next';
import { useSession, getSession } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';

const Home: NextPage = (session) => {
  if (!session) return <Login />;

  return (
    <div className="">
      <Head>
        <title>Facebook Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <Header />

      <main>
        {/* Sidebar */}
        {/* Feed */}
        {/* Widget */}
      </main>
    </div>
  );
};

export default Home;

export async function getServerSideProps(context: any) {
  // Get User
  const session = await getSession(context);

  return {
    props: {
      session,
    },
  };
}
