const navLinks = [
  { href: "#inicio", label: "Início" },
  { href: "#servicos", label: "Serviços" },
  { href: "#contato", label: "Contato" },
];

const services = [
  {
    title: "Perícia Contábil",
    description:
      "Diagnóstico claro e um plano objetivo. Aperfeiçoamos o processo de auditoria e prevenção de fraudes, para garantir a integridade e a transparência da sua empresa.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="size-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z"
        />
      </svg>
    ),
  },
  {
    title: "Perícia Financeira",
    description:
      "Diagnóstico claro e um plano objetivo. Aperfeiçoamos o processo de auditoria e prevenção de fraudes, para garantir a integridade e a transparência da sua empresa.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="size-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.53 16.122a3 3 0 0 0-5.78 1.128 2.25 2.25 0 0 1-2.4 2.245 4.5 4.5 0 0 0 8.4-2.245c0-.399-.078-.78-.22-1.128Zm0 0a15.998 15.998 0 0 0 3.388-1.62m-5.043-.025a15.994 15.994 0 0 1 1.622-3.395m3.42 3.42a15.995 15.995 0 0 0 4.764-4.648l3.876-5.814a1.151 1.151 0 0 0-1.597-1.597L14.146 6.32a15.996 15.996 0 0 0-4.649 4.763m3.42 3.42a6.776 6.776 0 0 0-3.42-3.42"
        />
      </svg>
    ),
  },
  {
    title: "Perícia Tributária",
    description:
      "Diagnóstico claro e um plano objetivo. Aperfeiçoamos o processo de auditoria e prevenção de fraudes, para garantir a integridade e a transparência da sua empresa.",
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="size-6"
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5"
        />
      </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-background/80 backdrop-blur-md dark:border-zinc-800/80">
        <nav
          className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6"
          aria-label="Principal"
        >
          <a href="#inicio" className="text-sm font-semibold tracking-tight">
            Bia Meneses
          </a>
          <ul className="flex items-center gap-1 sm:gap-2">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="rounded-full px-3 py-2 text-sm text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-50"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </header>

      <main className="flex-1">
        <section
          id="inicio"
          className="mx-auto flex max-w-3xl flex-col items-center px-6 py-24 text-center sm:py-32"
        >
          <p className="mb-4 text-sm font-medium tracking-wide text-zinc-500 uppercase">
            Perícia Contábil, Financeira e Tributária
          </p>
          <h1 className="text-4xl font-semibold tracking-tight text-balance sm:text-5xl lg:text-6xl">
            Perícia Contábil, Financeira e Tributária
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-zinc-600 text-pretty dark:text-zinc-400 sm:text-lg">
            Ajudamos marcas a se apresentarem com consistência — da estratégia
            ao produto — com um visual limpo e foco no essencial.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#servicos"
              className="inline-flex h-11 items-center rounded-full bg-zinc-900 px-6 text-sm font-medium text-white transition-opacity hover:opacity-90 dark:bg-zinc-100 dark:text-zinc-900"
            >
              Ver serviços
            </a>
            <a
              href="#contato"
              className="inline-flex h-11 items-center rounded-full border border-zinc-200 px-6 text-sm font-medium text-zinc-900 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-100 dark:hover:bg-zinc-900"
            >
              Falar conosco
            </a>
          </div>
        </section>

        <section
          id="servicos"
          className="mx-auto max-w-6xl px-6 pb-24 sm:pb-32"
        >
          <div className="mx-auto mb-12 max-w-2xl text-center">
            <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
              Serviços
            </h2>
            <p className="mt-3 text-zinc-600 dark:text-zinc-400">
              Três frentes para construir, refinar e lançar o que importa.
            </p>
          </div>
          <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <li
                key={service.title}
                className="rounded-2xl border border-zinc-200 bg-white p-7 shadow-sm transition-shadow hover:shadow-md dark:border-zinc-800 dark:bg-zinc-950"
              >
                <div className="mb-5 flex size-11 items-center justify-center rounded-full bg-zinc-100 text-zinc-800 dark:bg-zinc-900 dark:text-zinc-100">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold tracking-tight">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 dark:text-zinc-400">
                  {service.description}
                </p>
              </li>
            ))}
          </ul>
        </section>
      </main>

      <footer
        id="contato"
        className="border-t border-zinc-200 py-8 text-center text-sm text-zinc-500 dark:border-zinc-800"
      >
        <p>Bia Meneses · contato@biameneses.com</p>
      </footer>
    </div>
  );
}
