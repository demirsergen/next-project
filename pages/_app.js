import "../styles/globals.css";
import { SessionProvider } from "next-auth/react";
import Layout from "../components/layout";

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  return (
    <Layout>
      <SessionProvider session={session}>
        <Component {...pageProps} />
      </SessionProvider>
    </Layout>
  );
}

export default MyApp;
