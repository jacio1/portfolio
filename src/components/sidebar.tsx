"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { LocaleSwitcher } from "./localeSwitcher";

const links = [
  { href: "/", key: "home" },
  { href: "/about", key: "about" },
  { href: "/portfolio", key: "portfolio" },
  { href: "/education", key: "education" },
  { href: "/contact", key: "contact" },
] as const;

const socials = [
  { href: "https://github.com/jacio1", alt: "Github", src: "/github.svg" },
  { href: "https://www.linkedin.com/", alt: "LinkedIn", src: "/linkedin.svg" },
  { href: "https://t.me/gl3273", alt: "Telegram", src: "/telegram.svg" },
] as const;

export default function Sidebar() {
  const pathname = usePathname();
  const t = useTranslations("Sidebar");

  return (
    <div className="bg-sidebar flex flex-col px-36">
      <h1 className="uppercase text-[55px] text-accent pt-9.75">jacio1</h1>
      <div>
        <ul className="uppercase font-bold text-xl flex flex-col gap-7.5 pt-37.5 pb-68.75">
          {links.map(({ href, key }) => {
            const isActive = pathname === href;
            return (
              <li key={key}>
                <Link href={href} className={isActive ? "text-accent" : ""}>
                  {isActive && <span aria-hidden>{"< "}</span>}
                  {t(key)}
                  {isActive && <span aria-hidden>{" />"}</span>}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="flex flex-col items-center gap-7.5">
        <ul className="flex gap-7.5">
          {socials.map(({ href, alt, src }) => (
            <li key={alt}>
              <Link href={href} target="_blank">
                <Image width={35} height={35} alt={alt} src={src} />
              </Link>
            </li>
          ))}
        </ul>
        <LocaleSwitcher />
      </div>
    </div>
  );
}
