import Image from "next/image";
import Link from "next/link";

type Props = {
  title: string;
  description: string;
  img?: string;
  tags: readonly string[];
  demo?: string;
  github?: string;
  demoLabel: string;
  codeLabel: string;
};

export default function ProjectCard({
  title,
  description,
  img,
  tags,
  demo,
  github,
  demoLabel,
  codeLabel,
}: Props) {
  return (
    <li className="bg-sidebar rounded-2xl overflow-hidden flex flex-col border border-transparent hover:border-accent/40 transition-colors">
      <div className="relative w-full aspect-video bg-white/5">
        {img ? (
          <Image
            src={img}
            alt={title}
            fill
            sizes="(min-width: 1500px) 33vw, (min-width: 768px) 50vw, 100vw"
            className="object-cover"
          />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center text-accent/60 text-4xl font-bold select-none">
            {"</>"}
          </div>
        )}
      </div>

      <div className="flex flex-col gap-3 p-4 md:p-5 grow">
        <h3 className="text-accent text-[18px] md:text-[22px] font-semibold uppercase">
          {title}
        </h3>

        <p className="text-[14px] md:text-[16px] leading-relaxed text-white/80">
          {description}
        </p>

        <ul className="flex flex-wrap gap-2 mt-auto pt-1">
          {tags.map((tag) => (
            <li
              key={tag}
              className="text-xs md:text-sm px-2.5 py-1 rounded-full border border-accent/40 text-accent"
            >
              {tag}
            </li>
          ))}
        </ul>

        {(demo || github) && (
          <div className="flex flex-wrap gap-3 pt-2">
            {demo && (
              <Link
                href={demo}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 px-5 flex items-center justify-center rounded-[11px] bg-accent text-black font-semibold hover:opacity-90"
              >
                {demoLabel}
              </Link>
            )}
            {github && (
              <Link
                href={github}
                target="_blank"
                rel="noopener noreferrer"
                className="min-h-11 px-5 flex items-center justify-center rounded-[11px] border border-accent text-accent hover:opacity-90"
              >
                {codeLabel}
              </Link>
            )}
          </div>
        )}
      </div>
    </li>
  );
}