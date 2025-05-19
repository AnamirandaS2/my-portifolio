"use client";

export default function Footer() {
  return (
    <section>
      <div className="flex flex-col gap-4 lg:px-6 mt-16">
        <p className="text-sm text-start ">
          Baseado no site da{" "}
          <a className="" href="https://brittanychiang.com">
            Brittany Chiang
          </a>{" "}
          . Coded in{" "}
          <a className="" href="https://code.visualstudio.com/">
            Visual Studio Code.
          </a>{" "}
          Built with{" "}
          <a className="d" href="https://nextjs.org/">
            Next.js
          </a>
          ,{" "}
          <a className="" href="https://tailwindcss.com/">
            Tailwind CSS
          </a>{" "}
          and{" "}
          <a className="" href="https://ui.shadcn.com/">
            Shadcn/ui
          </a>
          , deployed with{" "}
          <a className="" href="https://vercel.com/">
            Vercel
          </a>
          .
        </p>
      </div>
    </section>
  );
}
