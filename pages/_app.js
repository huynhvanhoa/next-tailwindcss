// import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "@/styles/globals.css";
import Navbar from "@/components/Navbar";

export default function App({ Component, pageProps }) {
  return (
    <>
      {/* <Header /> */}
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}
