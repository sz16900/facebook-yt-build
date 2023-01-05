import type { NextPage } from 'next';
import { useSession } from 'next-auth/react';
import Head from 'next/head';
import Header from '../components/Header';
import Login from '../components/Login';

// this works but whats up with this error?
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
  // Get the user
  const { data: session } = useSession(context);

  return {
    props: {
      session,
    },
  };
}
