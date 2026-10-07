import PageHeader from "@/src/components/PageHeader";
import { useTranslations } from "next-intl";
import ProjectCard from "./_components/ProjectCard";

const projects = [
  {
    key: "shoesShop",
    tags: ["React", "TypeScript", "NestJS", "Next.js", "Redux"],
    github: "https://github.com/jacio1/shoes-shop",
  },
  {
    key: "studyBuddyApp",
    img: "/projects/studyApp.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/jacio1/study-buddy-app",
  },
  {
    key: "myBonchApp",
    img: "/projects/myBonchApp.png",
    tags: ["Next.js", "TypeScript", "Tailwind", "Supabase"],
    github: "https://github.com/jacio1/MyBonch-app/",
  },
] as const;

export default function PortfolioPage() {
  const t = useTranslations("PortfolioPage");

  return (
    <div className="sm:px-6 md:px-0 pb-10">
      <PageHeader page="PortfolioPage" />

      <ul className="grid grid-cols-1 md:grid-cols-2 min-[1500px]:grid-cols-3 gap-5 md:gap-7.5 pt-8 md:pt-12 max-w-300 mx-auto">
        {projects.map((project) => (
          <ProjectCard
            key={project.key}
            title={t(`items.${project.key}.title`)}
            description={t(`items.${project.key}.description`)}
            img={"img" in project ? project.img : undefined}
            tags={project.tags}
            github={"github" in project ? project.github : undefined}
            demoLabel={t("demo")}
            codeLabel={t("code")}
          />
        ))}
      </ul>
    </div>
  );
}
