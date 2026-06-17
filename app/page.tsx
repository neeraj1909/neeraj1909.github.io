import Image from "next/image";

type LinkItem = { label: string; href: string };

type Project = {
  title: string;
  period: string;
  summary: string;
  impact: string;
  href: string;
};

const profileLinks: LinkItem[] = [
  { label: "GitHub", href: "https://github.com/neeraj1909" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/neeraj1909/" },
  { label: "X", href: "https://twitter.com/Neerajkrsgh" },
  { label: "Stack Overflow", href: "https://stackoverflow.com/users/7971878/neeraj-singh" },
];

const projects: Project[] = [
  {
    title: "XAI-RAG",
    period: "Dec 2025 - Mar 2026",
    summary:
      "Explainable retrieval-augmented generation system with hybrid search, retrieval attribution, and streaming FastAPI endpoints.",
    impact:
      "Combines ChromaDB, Elasticsearch, RRF, BGE re-ranking, DeBERTa NLI faithfulness checks, RAGAS, OpenTelemetry, Redis, and SSE delivery.",
    href: "https://github.com/neeraj1909/xai-rag",
  },
  {
    title: "Indic Research Agent",
    period: "2026",
    summary:
      "Public research assistant with Chainlit UI, LangGraph orchestration, LiteLLM model access, and typed search tools.",
    impact:
      "Uses query-kit provider search, PostgreSQL persistence, Redis caching, and streamed progress updates for research workflows.",
    href: "https://github.com/neeraj1909/indic-research-agent",
  },
  {
    title: "query-kit",
    period: "2026",
    summary:
      "Provider-agnostic Python CLI and library for searching public research sources with normalized text and JSON output.",
    impact:
      "Covers ACL Anthology, arXiv, PubMed, Semantic Scholar, and OpenReview with deduplication, filtering, and sync/async APIs.",
    href: "https://github.com/neeraj1909/query-kit",
  },
  {
    title: "Explainable Agentic RAG",
    period: "2026",
    summary:
      "LangGraph workflow with typed tools, structured outputs, retrieval attribution, verifier/retry loops, and human review.",
    impact:
      "Evaluates faithfulness, context precision and recall, factual correctness, latency, and tool-call behavior for trustworthy RAG.",
    href: "https://github.com/neeraj1909/explainable-agentic-rag",
  },
  {
    title: "DLBacktrace",
    period: "2024 - 2026",
    summary:
      "Model-agnostic interpretability framework for relevance tracing across MLPs, LLMs, and custom deep networks.",
    impact:
      "Benchmarked against SHAP, LIME, and Integrated Gradients; extended in production work for transformer and MoE attribution.",
    href: "https://ieeexplore.ieee.org/document/11228632",
  },
  {
    title: "SafeSpeech",
    period: "Published",
    summary:
      "Indic hate-speech mitigation pipeline for classification, explanation, and intensity-reduction suggestions.",
    impact:
      "Validated across five Indic languages with BERTScore results in the 0.96-0.99 range for mitigation quality.",
    href: "https://link.springer.com/article/10.1007/s13278-024-01393-9",
  },
];

const writingAndTalks: LinkItem[] = [
  { label: "GitHub Activity", href: "https://github.com/neeraj1909" },
  { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/neeraj1909/" },
  { label: "X Profile", href: "https://twitter.com/Neerajkrsgh" },
];

const navigation = [
  { id: "about", label: "About" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "writing", label: "Writing" },
  { id: "experience", label: "Experience" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

function toLabel(prefix: string, value: string): string {
  return `${prefix}_${value.toLowerCase().replace(/\s+/g, "_")}`;
}

function ExtLink({
  href,
  label,
  className,
  children,
}: {
  href: string;
  label: string;
  className: string;
  children: React.ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      data-track-label={label}
      className={className}
    >
      {children}
    </a>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-900">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:font-semibold focus:text-slate-900"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-6xl px-6 py-10 md:py-14">
        <header className="sticky top-0 z-20 mb-8 rounded-2xl border border-slate-200 bg-white/90 p-4 backdrop-blur">
          <nav aria-label="Primary" className="flex flex-wrap items-center justify-between gap-3">
            <p className="text-sm font-semibold tracking-wide text-cyan-700">Neeraj Kumar Singh</p>
            <ul className="flex flex-wrap items-center gap-2 text-sm">
              {navigation.map((item) => (
                <li key={item.id}>
                  <a
                    href={`#${item.id}`}
                    className="rounded-full px-3 py-1.5 font-medium text-slate-700 transition hover:bg-slate-100"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </header>

        <section className="grid gap-10 rounded-3xl bg-white p-8 shadow-sm ring-1 ring-slate-200 md:grid-cols-[1.6fr_1fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.16em] text-cyan-700">
              AI Engineer Portfolio
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight md:text-5xl">
              Building explainable LLM, RAG, and agent systems for real-world use.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700" id="main-content">
              I am Neeraj Kumar Singh, an Applied AI / LLM engineer with 4+ years across
              NLP, explainable AI, model interpretability, production-oriented RAG systems,
              and backend AI tooling.
            </p>
            <div className="mt-7 flex flex-wrap gap-3">
              {profileLinks.map((item) => (
                <ExtLink
                  key={item.label}
                  href={item.href}
                  label={toLabel("hero", item.label)}
                  className="rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-600 hover:text-cyan-700"
                >
                  {item.label}
                </ExtLink>
              ))}
              <a
                href="/resume/neeraj_resume_1page.pdf"
                data-track-label="hero_download_resume"
                className="rounded-full bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-800"
                download
              >
                Download Resume
              </a>
            </div>
          </div>
          <div className="justify-self-start md:justify-self-end">
            <Image
              src="/img/github-avatar.jpg"
              alt="Portrait of Neeraj Kumar Singh"
              width={280}
              height={280}
              priority
              className="rounded-3xl border border-slate-200 object-cover"
            />
          </div>
        </section>

        <section id="about" className="mt-12 rounded-3xl bg-white p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold">About</h2>
          <div className="mt-5 grid gap-6 md:grid-cols-[1.4fr_1fr]">
            <p className="text-sm leading-6 text-slate-700">
              I work at the intersection of applied LLMs, trustworthy AI, and production
              engineering. My recent work includes LLM attribution, retrieval evaluation,
              agent workflows, and Python/PyTorch/FastAPI tooling that turns research ideas
              into usable systems.
            </p>
            <div className="rounded-2xl bg-slate-50 p-5 ring-1 ring-slate-200">
              <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                Core stack
              </p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Python, PyTorch, FastAPI, LangGraph, LangChain, Hugging Face, PostgreSQL,
                Redis, ChromaDB, Elasticsearch, OpenTelemetry, and RAGAS.
              </p>
            </div>
          </div>
        </section>

        <section id="projects" className="mt-12">
          <div className="mb-5 flex items-end justify-between">
            <h2 className="text-2xl font-bold">Selected Projects</h2>
            <ExtLink
              href="https://github.com/neeraj1909"
              label="projects_view_all_github"
              className="text-sm font-semibold text-cyan-700 hover:text-cyan-800"
            >
              View all on GitHub
            </ExtLink>
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            {projects.map((project) => (
              <article key={project.title} className="rounded-2xl bg-white p-6 ring-1 ring-slate-200">
                <p className="text-xs font-semibold uppercase tracking-wider text-slate-500">
                  {project.period}
                </p>
                <h3 className="mt-2 text-lg font-semibold">{project.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-700">{project.summary}</p>
                <p className="mt-2 text-sm leading-6 text-slate-600">{project.impact}</p>
                <ExtLink
                  href={project.href}
                  label={toLabel("project", project.title)}
                  className="mt-4 inline-block text-sm font-semibold text-cyan-700 hover:text-cyan-800"
                >
                  Open project
                </ExtLink>
              </article>
            ))}
          </div>
        </section>

        <section id="research" className="mt-12 rounded-3xl bg-white p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold">Research and Technical Focus</h2>
          <div className="mt-6 grid gap-5 md:grid-cols-3">
            {[
              "LLM attribution and explainability for transformers, LLaMA-family models, and Mixture-of-Experts architectures",
              "RAG and agent systems with hybrid search, retrieval attribution, verifier loops, and quality metrics",
              "Backend AI delivery with Python, FastAPI, async APIs, tracing, persistence, caching, and deployment-ready tooling",
            ].map((item) => (
              <article key={item} className="rounded-xl border border-slate-200 bg-slate-50 p-5">
                <p className="text-sm leading-6 text-slate-700">{item}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="writing" className="mt-12 rounded-3xl bg-white p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold">Writing and Talks</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-700">
            A dedicated publications and talks index is being expanded. Current public activity
            and technical updates are available through the channels below.
          </p>
          <ul className="mt-5 flex flex-wrap gap-3">
            {writingAndTalks.map((item) => (
              <li key={item.label}>
                <ExtLink
                  href={item.href}
                  label={toLabel("writing", item.label)}
                  className="inline-block rounded-full border border-slate-300 px-4 py-2 text-sm font-medium text-slate-700 transition hover:border-cyan-600 hover:text-cyan-700"
                >
                  {item.label}
                </ExtLink>
              </li>
            ))}
          </ul>
        </section>

        <section id="experience" className="mt-12 rounded-3xl bg-white p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold">Experience</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article>
              <h3 className="text-lg font-semibold">Research Scientist, Lexsi AI</h3>
              <p className="text-sm text-slate-600">April 2024 - Present</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Shipped DLBacktrace v2 for explainability across tabular, vision, NLP, and LLM
                workloads; expanded transformer and MoE support, compressed attribution traces
                17-93x with low error, and built scalable visualization and trace-storage tooling.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold">
                Research Assistant (NLP Lab), CVPR Unit, Indian Statistical Institute
              </h3>
              <p className="text-sm text-slate-600">September 2021 - February 2024</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Contributed to TrustED for trustworthiness evaluation in deep learning; developed
                explainable Indic hate speech detection and worked on an IC50 prediction web
                application integrating deep learning models.
              </p>
            </article>
          </div>
        </section>

        <section id="education" className="mt-12 rounded-3xl bg-white p-8 ring-1 ring-slate-200">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article>
              <h3 className="text-lg font-semibold">
                Master of Technology, Indian Statistical Institute
              </h3>
              <p className="text-sm text-slate-600">2019 - 2021</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Percentage: 77.45
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold">
                Bachelor of Technology, Bundelkhand Institute of Engineering &amp; Technology
              </h3>
              <p className="text-sm text-slate-600">2015 - 2019</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Percentage: 71.82
              </p>
            </article>
          </div>
        </section>

        <section id="contact" className="mt-12 rounded-3xl bg-slate-900 px-8 py-10 text-slate-100">
          <h2 className="text-2xl font-bold">Let&apos;s connect</h2>
          <p className="mt-3 max-w-2xl text-sm leading-6 text-slate-300">
            For AI engineering roles, collaboration, or technical discussion, reach out by email
            or LinkedIn.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <a
              href="mailto:neeraj1909@gmail.com"
              data-track-label="contact_email"
              className="rounded-full bg-white px-4 py-2 text-sm font-semibold text-slate-900"
            >
              neeraj1909@gmail.com
            </a>
            <ExtLink
              href="https://www.linkedin.com/in/neeraj1909/"
              label="contact_linkedin"
              className="rounded-full border border-slate-500 px-4 py-2 text-sm font-semibold text-white hover:border-cyan-400"
            >
              LinkedIn
            </ExtLink>
          </div>
        </section>
      </div>
    </main>
  );
}
