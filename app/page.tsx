import Image from "next/image";
import { ArrowDownRight, ArrowUpRight, CodeXml, Contact, FileText, Mail } from "lucide-react";
import { ExperienceMotion } from "@/components/experience-motion";
import { PortraitStage } from "@/components/portrait/portrait-stage";
import { ScrollReveal } from "@/components/scroll-reveal";
import { SiteHeader } from "@/components/site-header";
import { TechMark } from "@/components/tech-mark";
import { portfolio } from "@/content/portfolio";

export default function Home() {
  return <>
    <SiteHeader />
    <ScrollReveal />
    <main>
      <section id="home" className="hero shell">
        <div className="hero-copy">
          <p className="eyebrow">Computer engineering · AI/ML · Backend</p>
          <h1>I build systems that turn <em>complex ideas</em> into useful software.</h1>
          <p className="hero-deck">{portfolio.intro}</p>
          <div className="hero-actions">
            <a className="button button-dark" href="#work">Explore selected work <ArrowDownRight size={17} /></a>
            <a className="button button-outline resume-link" href="/resume-parag-patil.pdf" target="_blank">View resume <FileText size={16} /></a>
          </div>
          <dl className="hero-facts">{portfolio.facts.map((fact) => <div key={fact.label}><dt>{fact.label}</dt><dd>{fact.value}</dd></div>)}</dl>
        </div>
        <PortraitStage />
      </section>

      <section className="signal-strip" aria-label="Current focus areas"><div className="shell signal-grid">
        {portfolio.focus.map((item, index) => <div key={item} data-reveal="rise"><span>0{index + 1}</span><p>{item}</p></div>)}
      </div></section>

      <section id="work" className="section shell">
        <header className="section-heading" data-reveal="rise"><p className="eyebrow">Selected work / 2024—2026</p><h2>Engineering stories, not a wall of cards.</h2><p>Four verified projects spanning clinical data, agricultural intelligence, generative learning tools, and neural compression.</p></header>
        <div className="project-list">{portfolio.projects.map((project, index) => <article className={`project-story project-${index + 1}`} key={project.title} data-reveal="story">
          <div className="project-visual">{project.image ? <Image src={project.image} alt={project.imageAlt} fill sizes="(max-width: 820px) 100vw, 56vw" /> : <div className="quiz-visual" aria-hidden="true"><span>Q</span><i /><i /><i /></div>}<div className="visual-label">CASE / 0{index + 1}</div></div>
          <div className="project-copy"><p className="project-kicker">{project.category}</p><h3>{project.title}</h3><p>{project.summary}</p><ul>{project.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}</ul><div className="tag-row">{project.stack.map((item) => <span key={item}>{item}</span>)}</div><a className="project-link" href={project.href} target="_blank" rel="noreferrer">View repository <ArrowUpRight size={17} /></a></div>
        </article>)}</div>
      </section>

      <section id="experience" className="section section-ink"><ExperienceMotion /><div className="shell experience-grid">
        <header className="section-heading sticky-heading"><p className="eyebrow">Experience</p><h2>Learning in production contexts.</h2><p>Dates are presented exactly as supplied in the résumé, including the upcoming 22Neuro placement.</p></header>
        <div className="timeline">{portfolio.experience.map((role, index) => <article className="experience-entry" key={role.company}><span className="timeline-index">0{index + 1}</span><div className="timeline-content"><p className="timeline-date">{role.date}</p><h3>{role.role}</h3><h4>{role.company}</h4><p>{role.summary}</p></div></article>)}</div>
      </div></section>

      <section id="research" className="section shell split-section">
        <header className="section-heading" data-reveal="rise"><p className="eyebrow">Research & recognition</p><h2>Evidence-led work, from papers to hackathons.</h2></header>
        <div className="research-list">{portfolio.research.map((item) => <article key={item.title} data-reveal="rise"><span>{item.meta}</span><h3>{item.title}</h3><p>{item.description}</p>{item.href ? <a href={item.href} target="_blank" rel="noreferrer">Open publication ↗</a> : null}</article>)}<div className="achievement-image" data-reveal="image"><Image src="/projects/sih-winner.jpeg" alt="Parag Patil holding the SIH 2025 winner award and cheque" fill sizes="(max-width: 900px) 100vw, 55vw" /></div></div>
      </section>

      <section id="skills" className="section skills-section"><div className="shell">
        <header className="section-heading skills-heading" data-reveal="rise"><p className="eyebrow">01 / Capabilities</p><h2>A practical stack for end-to-end problem solving.</h2><p><strong>Core</strong> marks primary strengths, <strong>Applied</strong> denotes project use, and <strong>Familiar</strong> indicates foundational exposure.</p></header>
        <div className="skills-grid">{portfolio.skills.map((group) => <article key={group.title} data-reveal="rise"><span>{group.index}</span><h3>{group.title}</h3><ul>{group.items.map((item) => <li key={item.name}><TechMark name={item.name} /><span className="skill-name">{item.name}</span><small>{item.level}</small></li>)}</ul></article>)}</div>
        <section className="credentials" aria-labelledby="credentials-title" data-reveal="rise"><header className="subsection-heading"><div><p className="eyebrow">02 / Certifications</p><h3 id="credentials-title">Certifications & learning.</h3></div><p>Selected coursework and presentation credentials.</p></header><div className="credential-grid">{portfolio.credentials.map((credential) => <article key={credential.title}><span>{credential.date}</span><h3>{credential.title}</h3><p>{credential.issuer}</p></article>)}</div></section>
        <section className="more-work" aria-labelledby="more-work-title" data-reveal="rise"><header className="subsection-heading"><div><p className="eyebrow">03 / More experiments</p><h3 id="more-work-title">Additional systems in the repository.</h3></div><p>Smaller explorations that extend the main project stories.</p></header><div className="more-work-list">{portfolio.moreWork.map((project, index) => <a key={project.title} href={project.href} target="_blank" rel="noreferrer"><b>0{index + 1}</b><span>{project.title}</span><small>{project.note}</small><ArrowUpRight size={17} /></a>)}</div></section>
      </div></section>

      <section id="contact" className="contact-section"><div className="shell contact-grid" data-reveal="rise">
        <div><p className="eyebrow">Start a conversation</p><h2>Let’s build something considered and useful.</h2></div>
        <div className="contact-links"><a href={`mailto:${portfolio.contact.email}`}><Mail size={18} />{portfolio.contact.email}</a><a href={portfolio.contact.github} target="_blank" rel="noreferrer"><CodeXml size={18} />GitHub</a><a href={portfolio.contact.linkedin} target="_blank" rel="noreferrer"><Contact size={18} />LinkedIn</a></div>
      </div></section>
    </main>
    <footer className="site-footer shell"><p>© 2026 Parag Patil</p><p>Designed from extracted principles, never copied branding.</p><a href="#home">Back to top ↑</a></footer>
  </>;
}
