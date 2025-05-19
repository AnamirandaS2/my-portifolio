"use client";

import { Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Contact() {
  return (
    <section id="contact" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only ">
          Get In Touch
        </h2>
      </div>
      <div className="flex flex-col gap-4 lg:px-6 mb-8">
        <h2 className="text-4xl font-bold lg:text-start flex items-center gap-2">
          Entre em contato
          <span>
            <Image
              src={"/emoji.gif"}
              unoptimized
              alt="rindo"
              width={60}
              height={60}
            />
          </span>
        </h2>
        <p className="lg:text-lg lg:text-start ">
          Se gostou do meu trabalho ou quer conversar sobre um projeto, estarei
          a disposição!
        </p>
      </div>
      <div className="flex flex-row justify-center items-center gap-4 lg:px-6 mb-4">
        <a
          href="mailto:anaclarapontesm@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:cursor-pointer w-full"
        >
          <Button variant={"outline"} className="w-full h-full">
            <div className="flex flex-row items-center">
              <Mail className="dark:text-white  h-6 w-6" />
              <p className="ml-3 text-xl dark:text-white ">Mande um oi!</p>
            </div>
          </Button>
        </a>
      </div>
    </section>
  );
}
