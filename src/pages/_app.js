import Head from "next/head";
import "../styles/globals.css"; // Ensure Tailwind is applied

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Public+Sans:wght@300;400;600;700&display=swap"
          rel="stylesheet"
        />
        <meta name="viewport" content="width=device-width, initial-scale=1">
        </meta>

      </Head>
      <Component {...pageProps} />
    </>
  );
}
