import { Boxes, BrainCircuit, Braces, Code2, Database, Lightbulb, Network, Workflow } from "lucide-react";
import {
  SiCss,
  SiFastapi,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiMongodb,
  SiMysql,
  SiNextdotjs,
  SiOpenjdk,
  SiPostgresql,
  SiPython,
  SiReact,
  SiTypescript,
} from "react-icons/si";

const marks = {
  Python: SiPython,
  Java: SiOpenjdk,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  SQL: Database,
  React: SiReact,
  "Next.js": SiNextdotjs,
  HTML: SiHtml5,
  CSS: SiCss,
  "REST APIs": Workflow,
  FastAPI: SiFastapi,
  MySQL: SiMysql,
  MongoDB: SiMongodb,
  PostgreSQL: SiPostgresql,
  Git: SiGit,
  DSA: Braces,
  OOP: Boxes,
  "ML evaluation": BrainCircuit,
  "Problem solving": Lightbulb,
  "System design basics": Network,
} as const;

export function TechMark({ name }: { name: string }) {
  const Icon = marks[name as keyof typeof marks] ?? Code2;

  return <span className="tech-mark" aria-hidden="true"><Icon /></span>;
}
