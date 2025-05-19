"use client";
import { Button } from "@/components/ui/button";
import useActiveSection from "@/hooks/useActiveSection";
import { Github, Linkedin } from "lucide-react";
import Image from "next/image";
import { Avatar, AvatarImage } from "./ui/avatar";

type NavItem = {
  name: string;
  href: string;
};

export default function Nav() {
  const activeSection = useActiveSection([
    "about",
    "experience",
    // "projects",
    "contact",
  ]);

  const navItems: NavItem[] = [
    { name: "Sobre", href: "#about" },
    { name: "Experiências", href: "#experience" },
    // { name: "Projetos", href: "#projects" },
    { name: "Contato", href: "#contact" },
  ];

  const getNavItemClasses = (href: string) => {
    const sectionId = href.substring(1); // Remove o # do href
    const isActive = activeSection === sectionId;

    return {
      linkClass: isActive ? "active" : "",
      indicatorClass: `nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all ${
        isActive ? "active w-16 h-2" : "group-hover:w-16 group-hover:h-px"
      }`,
      textClass: `nav-text text-xs font-bold uppercase tracking-widest ${
        isActive ? "text-foreground" : "text-muted-foreground"
      }`,
    };
  };

  return (
    <header className="relative lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-16 flex flex-col lg:gap-4 overflow-hidden">
      {/* Background SVG */}
      <div
        aria-hidden="true"
        className="absolute inset-0 z-0 pointer-events-none"
        style={{
          backgroundImage: "url('/background.svg')",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.5,
        }}
      />
      <div className="flex flex-col gap-4 lg:pr-24 mt-6 lg:mt-0 relative z-10">
        <div className="w-full flex lg:items-center lg:justify-start">
          <div className="relative w-36 h-36 flex items-center justify-center">
            {/* Borda animada */}
            <div className="absolute inset-0 rounded-full animate-spin-gradient bg-gradient-to-tr from-[#a173ff] via-[#7f3fff] to-[#e2b8ff] " />
            {/* Avatar menor, para a borda aparecer */}
            <Avatar className="relative w-[136px] h-[136px]  rounded-full overflow-hidden bg-white">
              <AvatarImage src="./anaclara.jpeg" />
            </Avatar>
          </div>
        </div>
        <h1 className="text-[25px] font-bold lg:text-start flex items-center gap-2">
          Oii, sou a Ana{" "}
          <span>
            <Image
              src={"/emoji-feliz.gif"}
              unoptimized
              alt="rindo"
              width={25}
              height={25}
            />
          </span>
        </h1>
        <h2 className="text-lg lg:text-start">
          Desenvolvedora front-end, designer e estudante.
        </h2>
        <p className="text-md lg:text-start text-muted-foreground">
          Sou estudante de Ciência da Computação no IFMA e desenvolvedora
          FrontEnd. Atuo na Tech Jr e no projeto{" "}
          <span>
            <a
              className="hover:text-[#a173ff] text-[#b99df1]"
              href="https://mermasdigitais.com.br"
              target="_blank"
              rel="noopener noreferrer"
            >
              Mermãs Digitais
            </a>
          </span>
          , unindo tecnologia, aprendizado e impacto social. ❤️
        </p>
      </div>
      <nav className="lg:flex hidden relative z-10">
        <ul className="flex flex-col w-max text-start gap-6 uppercase text-xs font-medium">
          {navItems.map((item: NavItem) => {
            const { linkClass, indicatorClass, textClass } = getNavItemClasses(
              item.href
            );
            return (
              <li key={item.name} className="group">
                <a href={item.href} className={`py-3 ${linkClass}`}>
                  <span className={indicatorClass}></span>
                  <span className={textClass}>{item.name}</span>
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
      <ul className="flex flex-row gap-6 mt-6 lg:mt-0 relative z-10">
        <Button variant="outline" size="icon">
          <a
            href="https://github.com/AnamirandaS2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Github className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
        <Button variant="outline" size="icon">
          <a
            href="https://linkedin.com/in/anaclara-pmiranda"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Linkedin className="h-[1.2rem] w-[1.2rem]" />
          </a>
        </Button>
      </ul>
    </header>
  );
}
