import Error404 from '../components/Erro404';
import Head from 'next/head';

export default function Custom404() {
  return (
    <>
      <Head>
        <title>Erro 404</title>
      </Head>
      <Error404 />
    </>
  );
}
