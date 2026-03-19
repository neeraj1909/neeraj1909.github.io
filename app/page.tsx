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
    title: "rag_chatbot",
    period: "Recent",
    summary:
      "RAG chatbot built with FastAPI and LangChain for retrieval-augmented question answering.",
    impact:
      "Demonstrates practical GenAI system integration using modern LLM tooling and API serving.",
    href: "https://github.com/neeraj1909/rag_chatbot",
  },
  {
    title: "safespeech-indic-hate-mitigation",
    period: "Recent",
    summary:
      "SafeSpeech pipeline for Indic hate intensity classification, explanation, and mitigation suggestions.",
    impact:
      "Shows responsible AI workflow design for safety-critical social text moderation tasks.",
    href: "https://github.com/neeraj1909/safespeech-indic-hate-mitigation",
  },
  {
    title: "twitter_sentimental_analysis",
    period: "Recent",
    summary:
      "Sentiment analysis pipeline for topic-based tweet streams using Python and Twitter API data.",
    impact:
      "Implements full NLP flow from data collection to sentiment classification and reporting.",
    href: "https://github.com/neeraj1909/twitter_sentimental_analysis",
  },
  {
    title: "healthcare_fraud_classification",
    period: "Recent",
    summary:
      "End-to-end healthcare fraud detection pipeline using claims, beneficiary, and provider datasets.",
    impact:
      "Benchmarks multiple ML models (RF, LightGBM, DT, SVM, ANN) for fraud-risk classification.",
    href: "https://github.com/neeraj1909/healthcare_fraud_classification",
  },
  {
    title: "IC50",
    period: "Recent",
    summary:
      "Repository for IC50-related experimentation and predictive modeling workflow.",
    impact:
      "Represents domain-specific ML experimentation and applied model development practices.",
    href: "https://github.com/neeraj1909/IC50",
  },
  {
    title: "quiz_app",
    period: "Recent",
    summary:
      "Quiz application project focused on interactive quiz flows and backend-driven score handling.",
    impact:
      "Demonstrates full-stack implementation skills for user-oriented assessment products.",
    href: "https://github.com/neeraj1909/quiz_app",
  },
];

const writingAndTalks: LinkItem[] = [
  { label: "GitHub Activity", href: "https://github.com/neeraj1909" },
  { label: "LinkedIn Profile", href: "https://www.linkedin.com/in/neeraj1909/" },
  { label: "X Profile", href: "https://twitter.com/Neerajkrsgh" },
];

const navigation = [
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "writing", label: "Writing" },
  { id: "experience", label: "Experience" },
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
              Building reliable LLM and ML systems for real-world use.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-slate-700" id="main-content">
              I am Neeraj Kumar Singh, an AI engineer with a computer science background from
              ISI Kolkata. My focus is applied GenAI, model-driven product features, and
              engineering workflows that move from research prototypes to usable software.
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
                href="/resume/llm_genai_engineer_cv.pdf"
                data-track-label="hero_download_cv"
                className="rounded-full bg-cyan-700 px-4 py-2 text-sm font-semibold text-white transition hover:bg-cyan-800"
                download
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="justify-self-start md:justify-self-end">
            <Image
              src="/img/neeraj1.jpg"
              alt="Portrait of Neeraj Kumar Singh"
              width={280}
              height={280}
              priority
              className="rounded-3xl border border-slate-200 object-cover"
            />
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
              "LLM application design and prompt-driven product features",
              "Deep learning systems: ANN, CNN, ResNet, and ResNeXt implementation",
              "Backend-heavy ML product delivery with Python and Django",
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
          <h2 className="text-2xl font-bold">Experience and Education</h2>
          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <article>
              <h3 className="text-lg font-semibold">Intern, Jeevaniya Naturals Pvt. Ltd.</h3>
              <p className="text-sm text-slate-600">June 2018 - September 2018</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Delivered backend features in Python/Django, integrated PayTM payments, and
                improved ecommerce transaction workflows in a production-oriented setting.
              </p>
            </article>
            <article>
              <h3 className="text-lg font-semibold">M.Tech, Computer Science - ISI Kolkata</h3>
              <p className="text-sm text-slate-600">Started July 2019</p>
              <p className="mt-3 text-sm leading-6 text-slate-700">
                Developed machine learning foundations and practical deep learning
                implementations across core architectures.
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
