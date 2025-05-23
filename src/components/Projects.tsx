"use client";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveUpRight } from "lucide-react";

const jobProjects = [
  {
    imagePath: "/vercel.svg",
    title: "Vela Exchange - Product Design",
    description:
      "Led a team of 4 designers, implementing design systems and processes to launch flagship features like Duels, Accounts, Loyalty Tiers, and Notification Tray and System.",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Design System",
      "Design Strategy",
      "Vercel",
      "Figma",
    ],
    link: "https://vela.exchange",
  },
  {
    imagePath: "/vercel.svg",
    title: "L3X Network - Founding Product Design",
    description:
      "L3X Network is a Layer 3 interoperability blockchain designed to provide institutions, developers, and users with secure, compliant, and efficient access to decentralized finance (DeFi) markets. My role involved founding and leading the design team, mapping UX, and designing the protocol's Landing Page and Interfaces for the Bridge, Trading, Swap, and Staking platforms.",
    skills: [
      "Product Design",
      "UI/UX Design",
      "Design System",
      "Design Strategy",
      "Vercel",
      "Figma",
    ],
    link: "https://l3x.com",
  },
  {
    imagePath: "/vercel.svg",
    title: "Swoop Exchange - Landing Page",
    description:
      "Swoop's landing page highlights the platform's use cases and solutions. Swoop Exchange is a Meta-DEX Aggregator that automatically sources, ranks and routes quotes from the best DEX Aggregators and Bridges, ensuring the best prices for on-chain and cross-chain swaps. Swoop Exchange has achieved millions in USD volume and currently has around 4000 monthly users with 0 paid marketing.",
    skills: [
      "Next.js",
      "Framer",
      "Shadcn/ui",
      "Typescript",
      "JavaScript",
      "Vercel",
      "Figma",
    ],
    link: "https://swoop.exchange",
  },
  {
    imagePath: "/vercel.svg",
    title: "Swoop Exchange - Application Design",
    description:
      "Swoop Exchange is a next generation Meta Decentralized Exchange and Bridge Aggregator. By Aggregating the Aggregators, Bridges, and Liquidity across chains, and off-chain it solves protocol and liquidity fragmentation, significantly improving UX. Provides access to: 450,000+ Tokens, 7+ Aggregators, 13+ Bridges, 50+ DEXs, 280+ Liquidity Sources and 16+ Blockchains.",
    skills: [
      "Next.js",
      "Typescript",
      "JavaScript",
      "MUI",
      "Tailwind CSS",
      "Vercel",
      "Figma",
    ],
    link: "https://app.mtopswap.com",
  },
  {
    imagePath: "/vercel.svg",
    title: "meikopoulos.com",
    description:
      "The portfolio webpage you are looking at right now. Based on Brittany Chiang's website (they awesome). Coded in Visual Studio Code.",
    skills: ["Typescript", "JavaScript", "Tailwind CSS", "Vercel"],
    link: "https://github.com/0xAlexander/my-website",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Projects
        </h2>
      </div>
      <>
        {jobProjects.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:cursor-pointer"
          >
            <Card className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border border-white/10 bg-[#180147]/80 rounded-xl transition duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg hover:border-white/20 md:px-3">
              <CardHeader className="h-full w-full lg:w-1/3 mb-4 p-0">
                <Image
                  src={project.imagePath}
                  alt={`Screenshot of ${project.title}`}
                  width={200}
                  height={100}
                  priority
                  className="bg-[#141414] mt-2 border  rounded-[0.5rem]"
                />
              </CardHeader>
              <CardContent className="flex flex-col p-0 w-full lg:w-2/3">
                <p className="font-bold transition-colors duration-300 group-hover:text-[#a173ff]">
                  {project.title}{" "}
                  <MoveUpRight className="ml-1 inline-block h-5 w-5 shrink-0 transition-transform group-hover:-translate-y-1 group-hover:translate-x-1 motion-reduce:transition-none" />
                </p>
                <CardDescription className="py-3 ">
                  {project.description}
                </CardDescription>
                <CardFooter className="p-0 flex flex-wrap gap-2">
                  {project.skills.map((skill, index) => (
                    <Badge variant={"dark"} key={index}>
                      {skill}
                    </Badge>
                  ))}
                </CardFooter>
              </CardContent>
            </Card>
          </a>
        ))}
      </>
    </section>
  );
}
