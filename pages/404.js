import Head from 'next/head';
import Error404 from '../components/Erro404';

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
