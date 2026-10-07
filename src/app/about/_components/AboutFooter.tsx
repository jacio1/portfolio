import { useTranslations } from "next-intl";
import Image from "next/image";
const stack = [
  {
    name: "html",
    icon: "/icons/html.svg",
  },
  {
    name: "css",
    icon: "/icons/css.svg",
  },
  {
    name: "js",
    icon: "/icons/js.svg",
  },
  {
    name: "tailwind",
    icon: "/icons/tailwind.svg",
  },
  {
    name: "redux",
    icon: "/icons/redux.svg",
  },
  {
    name: "git",
    icon: "/icons/git.svg",
  },
  {
    name: "react",
    icon: "/icons/react.svg",
  },
  {
    name: "next",
    icon: "/icons/next.svg",
  },
];

export default function AboutFooter() {
  const t = useTranslations("AboutPage");

  return (
    <div className="flex flex-col">
      <h2 className="text-[24px] md:text-[30px] text-accent pb-7">
        {t("stack")}
      </h2>
      <ul className="flex flex-wrap justify-center gap-6 md:gap-11">
        {stack.map((item) => (
          <li key={item.name}>
            <Image
              src={item.icon}
              alt={item.name}
              width={70}
              height={70}
              className="w-12 h-12 md:w-17.5 md:h-17.5"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
