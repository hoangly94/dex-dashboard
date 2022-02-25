import type { NextPage } from 'next'
import Head from 'next/head'
import { createContext } from 'react';
import Component from '~components/Home';
import HomeContext from '~contexts/Home';

const Home: NextPage = (props) => {
  // const { locale, locales, asPath } = useRouter();
  return (
    <HomeContext.Provider value={props['lang']}>
      <Component />
    </HomeContext.Provider>
  );
}

export async function getStaticProps({ locale, locales }) {
  const res = await fetch(`${process.env.ROOT_URL}/langs/dashboard/${locale}.json`)
  const lang = await res.json()
  if (lang.length === 0) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      lang,
    },
  }
}

export default Home
