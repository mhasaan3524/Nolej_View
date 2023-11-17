import Head from "next/head";
import Navbar from "./components/Navbar";
import SubNavbar from "./components/SubNavbar";

export default function Home() {
  return (
    <>
      <Head>
        <title>Nolej View</title>
      </Head>
      <Navbar />
      <SubNavbar />
    </>
  );
}
