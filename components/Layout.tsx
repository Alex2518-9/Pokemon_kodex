import Head from "next/head";
import styles from "../styles/Layout.module.css";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

const Layout = ({ title, children }: LayoutProps) => {
  return (
    <div className="bg-gray-300">
      <Head>
        <title>Pokemon Kodex</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.header}>
        <h1>{title}</h1>
      </header>
      <main className={styles.layout}>{children}</main>
    </div>
  );
};
export default Layout;
