"use client";
import About from "@/components/About";
import Contact from "@/components/Contact";
import ExpCard from "@/components/ExpCard";
import Footer from "@/components/Footer";
import Nav from "@/components/Nav";
import { Inter } from "next/font/google";
import { useEffect, useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const auraRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (auraRef.current) {
        const { clientX, clientY } = e;
        auraRef.current.style.setProperty("--mouse-x", `${clientX}px`);
        auraRef.current.style.setProperty("--mouse-y", `${clientY}px`);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      <div ref={auraRef} className="mouse-aura" />
      <div className="mx-auto min-h-screen max-w-screen-xl px-6 py-12 md:px-12 md:py-20 lg:px-24 lg:py-0">
        <div className="lg:flex lg:justify-between lg:gap-4">
          <Nav />
          <main className="flex flex-col items-center justify-center pt-6 lg:pt-24 lg:w-1/2 lg:py-24 gap-8">
            <About />
            <ExpCard />
            {/* <Projects /> */}
            <Contact />
            <Footer />
          </main>
        </div>
      </div>
    </>
  );
}
