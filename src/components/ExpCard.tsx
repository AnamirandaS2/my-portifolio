"use client";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MoveRight } from "lucide-react";

const jobPositions = [
  {
    timeline: "Fev 2025 — Presente",
    currentPosition: "Desenvolvedora de Full Stack",
    place: "ISI - soluções intelectuais",
    previousPositions: [""],
    description:
      "Atuo no desenvolvimento de uma plataforma de leilão, sendo responsável pela criação das interfaces Front-End e pelo desenvolvimento completo da API e do backend utilizando NestJS. Entre as minhas atividades estão o desenvolvimento de componentes reutilizáveis, integração entre Front-End e Back-End, consumo e exibição de dados em tempo real, além da aplicação de boas práticas de usabilidade e performance.",
    skills: [
      "Typescript",
      "React",
      "Tailwind CSS",
      "NestJS",
      "NextJS",
      "Figma",
      "UI/UX Design",
      "API Rest",
      "WebSockets",
      "Testes E2E",
      "Proatividade",
      "Comunicação",
    ],
  },

  {
    timeline: "Ago 2024 — Presente",
    currentPosition: "Desenvolvedora Front-End & Monitora",
    place: "Mermãs Digitais",
    previousPositions: ["Voluntária"],
    description:
      "Manutenção do site do projeto (mermasdigitais.com.br) com React e Typescript, além de Criação de material gráfico no Figma para a identidade visual e eventos da marca e também sou Monitora na oficina de Desenvolvimento Web, ensinando HTML, CSS e JavaScript para meninas do ensino médio da rede pública.",
    skills: [
      "Comunicação",
      "UI/UX Design",
      "Figma",
      "Typescript",
      "React",
      "Criatividade",
      "Didática",
      "Organização",
      "Proatividade",
    ],
  },
  {
    timeline: "Mar 2023 — Presente",
    currentPosition: " Desenvolvedora Front-End & Designer",
    place: "Tech Jr - Empresa Júnior do IFMA",
    previousPositions: ["Diretora de Recursos Humanos"],
    description:
      "Guio novos membros e calouros para o desenvolvimento de projetos e atividades da empresa. Meu papel é mentorar e guiar os membros para o desenvolvimento de novos projetos e sempre que possível, participo ativamente no desenvolvimento dos projetos.",
    skills: [
      "Liderança",
      "Autogestão",
      "UI/UX Design",
      "React & Next.js",
      "HTML, CSS, JS",
      "Figma",
      "Boas Práticas",
      "Proatividade",
      "Comunicação",
      "Gestão de Equipe",
    ],
  },
];

export default function ExpCard() {
  return (
    <section id="experience" className="scroll-mt-16 lg:mt-16">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          Experiências
        </h2>
      </div>
      <>
        {jobPositions.map((job, index) => (
          <Card
            key={index}
            className="group lg:p-6 mb-4 flex flex-col lg:flex-row w-full min-h-fit gap-0 lg:gap-5 border border-white/10 bg-[#180147]/80 rounded-xl transition duration-300 hover:bg-white/10 hover:backdrop-blur-md hover:shadow-lg hover:border-white/20 md:px-3 px-3"
          >
            <CardHeader className="h-full w-full p-0 lg:w-1/4 flex-shrink-0 flex items-center ">
              <CardTitle className="flex items-center text-gray-500 text-xs whitespace-nowrap ">
                {job.timeline}
              </CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col p-0 lg:w-3/4">
              <p className="text-white font-bold transition-colors duration-300 group-hover:text-[#a173ff]">
                {job.currentPosition} • {job.place}
              </p>
              {job.previousPositions.map((position, index) => (
                <p key={index} className=" text-sm font-bold">
                  {position}
                </p>
              ))}
              <CardDescription className="py-3 ">
                {job.description}
              </CardDescription>
              <CardFooter className="p-0 flex flex-wrap gap-2">
                {job.skills.map((skill, index) => (
                  <Badge variant={"dark"} key={index}>
                    {skill}
                  </Badge>
                ))}
              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </>
      <div className="lg:px-12 mt-12">
        <a
          href="/AnaClaraPontes_CV.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center font-medium leading-tight  group"
        >
          <span className="border-b border-transparent pb-px transition  motion-reduce:transition-none">
            Clique aqui para ver meu currículo
          </span>
          <MoveRight className="ml-1 inline-block h-5 w-5 shrink-0 -translate-y-px transition-transform group-hover:translate-x-2 group-focus-visible:translate-x-2 motion-reduce:transition-none" />
        </a>
      </div>
    </section>
  );
}
