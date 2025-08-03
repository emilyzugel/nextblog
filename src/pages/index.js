import Image from "next/image";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";
import Header from "@/components/Header";



export default function Home() {
  return (
    <>
    <Header/>
    <Posts/>
    <Footer/>
    </>
  );

}
