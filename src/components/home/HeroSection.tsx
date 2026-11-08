import Image from "next/image";
import Link from "next/link";
import { EnvelopeIcon, MapPinIcon, RocketLaunchIcon } from "@heroicons/react/24/outline";

export function Hero() {
  return (
    <section aria-labelledby="hero-title" className="mx-auto max-w-4xl px-4 pb-7 pt-10 sm:px-6 sm:pb-10 sm:pt-12 lg:pb-12 lg:pt-14">
      <div className="flex items-start gap-4 sm:items-center sm:gap-6">
        <Image
          src="/images/profile/gab.jpg"
          alt="Gabriel Vargas"
          width={160}
          height={160}
          className="size-[120px] rounded-2xl border border-line object-cover sm:size-40"
          priority
        />
        <div className="min-w-0">
          <p className="mb-1.5 flex items-center gap-1 font-mono text-[9px] text-muted sm:mb-2 sm:gap-1.5 sm:text-[11px]">
            <MapPinIcon className="size-3 shrink-0 sm:size-3.5" aria-hidden="true" />
            Metro Manila, Philippines <span aria-hidden="true">·</span> GMT+8
          </p>
          <p className="flex items-center gap-1 font-pixel text-base font-bold tracking-tight text-foreground sm:gap-2 sm:text-2xl">
            Gabriel Vargas
            <Image
              src="/images/branding/verified.png"
              alt="Verified"
              width={24}
              height={24}
              className="size-3.5 shrink-0 object-contain sm:size-5"
            />
          </p>
          <p className="mt-1.5 font-mono text-[10px] leading-4 text-muted sm:mt-2 sm:text-sm sm:leading-normal">Software Developer · Web Developer · AI Enthusiast</p>
          <div className="-ml-3 mt-1.5 flex items-center gap-0 sm:-ml-3 sm:mt-2">
            <a href="https://github.com/gabzy0423" target="_blank" rel="noreferrer" aria-label="GitHub profile" className="grid size-10 place-items-center rounded-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-11">
              <Image src="/images/social/github.svg" alt="" width={20} height={20} className="social-icon size-5" />
            </a>
            <a href="https://www.linkedin.com/in/gabriel-vargas-b15977347/" target="_blank" rel="noreferrer" aria-label="LinkedIn profile" className="grid size-10 place-items-center rounded-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-11">
              <Image src="/images/social/linkedin.svg" alt="" width={20} height={20} className="social-icon size-5" />
            </a>
            <a href="mailto:gabrielvargas0423@gmail.com" aria-label="Email Gabriel Vargas" className="grid size-10 place-items-center rounded-sm text-muted transition-colors hover:text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent sm:size-11">
              <EnvelopeIcon className="size-5" aria-hidden="true" />
            </a>
          </div>
        </div>
      </div>

      <div className="mt-6 max-w-3xl sm:mt-6">
        <div className="mb-5 h-px w-8 bg-accent sm:hidden" aria-hidden="true" />
        <h1 id="hero-title" className="max-w-[285px] font-pixel text-3xl font-bold leading-[1.05] tracking-[-0.04em] text-foreground sm:max-w-none sm:text-5xl sm:leading-normal">
          I design, build &amp; <span className="text-accent">innovate.</span>
        </h1>
        <p className="mt-4 max-w-[300px] text-sm leading-6 text-muted sm:max-w-none sm:text-base sm:leading-7">
          I&apos;m a Software Developer specializing in full-stack web development, building web applications, custom management systems, and digital solutions with <strong className="font-semibold text-foreground">Laravel</strong>, <strong className="font-semibold text-foreground">React</strong>, <strong className="font-semibold text-foreground">Next.js</strong>, <strong className="font-semibold text-foreground">PHP</strong>, <strong className="font-semibold text-foreground">TypeScript</strong>, and <strong className="font-semibold text-foreground">MySQL</strong>—turning ideas into functional, user-focused experiences.
        </p>
        <div className="mt-8 grid grid-cols-2 gap-2 sm:mt-5 sm:flex sm:flex-wrap sm:items-center sm:gap-4">
          <Link
            href="/contact"
            className="inline-flex min-h-11 items-center justify-center rounded-md bg-foreground px-3 py-2 text-xs font-semibold text-background transition-colors hover:bg-accent focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 focus-visible:ring-offset-background sm:px-5 sm:py-3 sm:text-sm"
          >
            Let&apos;s build
            <RocketLaunchIcon aria-hidden="true" className="ml-3 size-4" />
          </Link>
          <span
            aria-disabled="true"
            title="Resume coming soon"
            className="inline-flex min-h-11 cursor-not-allowed items-center justify-center rounded-md bg-muted/15 px-3 py-2 font-pixel text-xs font-semibold text-muted sm:px-5 sm:py-3 sm:text-sm"
          >
            View my resume
          </span>
        </div>

      </div>
    </section>
  );
}

export function HeroHighlights() {
  return (
    <section aria-label="Portfolio highlights" className="mx-auto max-w-4xl px-4 pb-12 sm:px-6 sm:pb-16">
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        <li className="rounded-lg border border-line bg-foreground/[0.03] px-4 py-3 transition-colors duration-300 hover:border-accent/50">
          <p className="font-pixel text-2xl font-bold tracking-tight text-foreground">3<span className="text-accent">+</span> yrs</p>
          <p className="mt-1 font-mono text-[11px] text-muted">Experience</p>
        </li>
        <li className="rounded-lg border border-line bg-foreground/[0.03] px-4 py-3 transition-colors duration-300 hover:border-accent/50">
          <p className="font-pixel text-2xl font-bold tracking-tight text-foreground">15<span className="text-accent">+</span></p>
          <p className="mt-1 font-mono text-[11px] text-muted">Shipped projects</p>
        </li>
        <li className="rounded-lg border border-line bg-foreground/[0.03] px-4 py-3 transition-colors duration-300 hover:border-accent/50">
          <p className="font-pixel text-2xl font-bold tracking-tight text-foreground">20<span className="text-accent">+</span></p>
          <p className="mt-1 font-mono text-[11px] text-muted">Websites built</p>
        </li>
        <li className="rounded-lg border border-line bg-foreground/[0.03] px-4 py-3 transition-colors duration-300 hover:border-accent/50">
          <p className="font-pixel text-lg font-bold tracking-tight text-foreground">Open to</p>
          <p className="mt-1 font-mono text-[11px] text-muted">Freelance &amp; collaboration</p>
        </li>
      </ul>
    </section>
  );
}
