"use client";

export default function About() {
  return (
    <section id="about" className="scroll-mt-16 ">
      <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen  px-6 py-5  md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
        <h2 className="text-sm font-bold uppercase tracking-widest lg:sr-only">
          About
        </h2>
      </div>
      <div className="flex flex-col gap-4">
        <p className="text-start lg:px-6">
          Ao longo da minha trajetória, da programação ao ensino, tenho sido
          guiada por uma ideia simples:{" "}
          <span className="text-white">tecnologia deve ser para todos.</span> Em
          meio ao desenvolvimento web, educação e impacto social, busco criar
          experiências acessíveis e significativas.
        </p>
        <p className="text-start lg:px-6">
          Atualmente, atuo como Desenvolvedora Front-End na ISI - soluções
          intelectuais. Dentro da faculdade, participo da empresa júnior{" "}
          <a
            className="no-wrap  dark:text-white"
            href="#"
            target="blank"
            rel="noopener noreferrer"
          >
            Tech Jr
          </a>{" "}
          e no projeto{" "}
          <a
            className="no-wrap  dark:text-white"
            href="https://swoop.exchange"
            target="blank"
            rel="noopener noreferrer"
          >
            Mermãs Digitais
          </a>
          , onde ensino desenvolvimento web para meninas do ensino médio,
          incentivando a representatividade feminina na área.
        </p>
        <p className="text-start  lg:px-6">
          Além do código, gosto de escrever artigos e compartilhar o que
          aprendo. Tenho grande interesse por temas como engenharia de software,
          interação humano-computador e formas de tornar a tecnologia mais
          compreensível e acolhedora para todos. Acredito que boas soluções
          começam com empatia e se constroem com conhecimento. ❤️
        </p>
      </div>
    </section>
  );
}
