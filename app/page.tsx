// app/page.tsx
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
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden="true"
    >
      <path d="m15.75 15.75-2.489-2.489m0 0a3.375 3.375 0 1 0-4.773-4.773 3.375 3.375 0 0 0 4.774 4.774ZM21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden="true"
    >
      {/* Pilha de moedas à esquerda */}
      <ellipse cx="7" cy="6" rx="4" ry="2" />
      <path d="M3 6v4c0 1.1 1.8 2 4 2s4-.9 4-2V6" />
      <path d="M3 10v4c0 1.1 1.8 2 4 2s4-.9 4-2v-4" />
      <path d="M3 14v4c0 1.1 1.8 2 4 2s4-.9 4-2v-4" />

      {/* Gráfico de barras e seta de crescimento */}
      <path d="M14 17v-3" />
      <path d="M18 17v-6" />
      <path d="M22 17V7" />
      <path d="M14 9l3-3 2 2 3-3" />
      <path d="M19 5h4v4" />
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
      strokeLinecap="round"
      strokeLinejoin="round"
      className="size-6"
      aria-hidden="true"
    >
      <path d="M12 3v17.25m0 0c-1.472 0-2.882.265-4.185.75M12 20.25c1.472 0 2.882.265 4.185.75M18.75 4.97A48.416 48.416 0 0 0 12 4.5c-2.291 0-4.545.16-6.75.47m13.5 0c1.01.143 2.01.317 3 .52m-3-.52 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.988 5.988 0 0 1-2.031.352 5.988 5.988 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L18.75 4.971Zm-16.5.52c.99-.203 1.99-.377 3-.52m0 0 2.62 10.726c.122.499-.106 1.028-.589 1.202a5.989 5.989 0 0 1-2.031.352 5.989 5.989 0 0 1-2.031-.352c-.483-.174-.711-.703-.59-1.202L5.25 4.971Z" />
    </svg>
    ),
  },
];

export default function Home() {
  return (
    <div className="flex min-h-full flex-col bg-background text-foreground">
      <header className="sticky top-0 z-50 border-b border-zinc-200/80 bg-background/80 backdrop-blur-md dark:border-zinc-800/80">
        <nav
          className="mx-auto flex h-24 max-w-6xl items-center justify-between px-6"
          aria-label="Principal"
        >
          <a href="#inicio" className="flex items-center gap-5">
            <img 
              src="/logo.png" 
              alt="Logótipo Beatriz Meneses" 
              className="h-20 w-auto object-contain m-[5px]" 
            />
            
            <span className="text-xl font-semibold tracking-tight">
              Beatriz Meneses
            </span>
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
              Veja os serviços especializados que oferecemos.
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