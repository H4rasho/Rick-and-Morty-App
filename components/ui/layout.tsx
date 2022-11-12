import Head from "next/head";
import Navigation from "./navigation";

interface LayoutProps {
  title: string;
  children: React.ReactNode;
}

export default function Layout({ children, title }: LayoutProps) {
  return (
    <>
      <Head>
        <title>{`Rick & Morty ${title}`}</title>
        <meta name="description" content="Rick and Morty App" />
      </Head>
      <Navigation />
      {children}
    </>
  );
}
