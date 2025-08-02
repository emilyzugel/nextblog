import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "@/components/Navbar";
import Posts from "@/components/Posts";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
    <Posts/>
    <Footer/>
    </>
  );

}
