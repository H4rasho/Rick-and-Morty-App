import { Container } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "./footer";
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
      <Container maxW="container.lg">
        <Navigation />
        <main>{children}</main>
        <Footer />
      </Container>
    </>
  );
}
