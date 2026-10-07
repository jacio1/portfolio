"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { LocaleSwitcher } from "./localeSwitcher";

const links = [
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
  const [isOpen, setIsOpen] = useState(false);

  // Закрываем меню при смене страницы
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Блокировка скролла и смена цвета фона для iOS (Safe Areas)
  useEffect(() => {
    const root = document.documentElement;
    
    // 1. Блокируем скролл (стили для .scroll-locked лежат в globals.css)
    root.classList.toggle("scroll-locked", isOpen);
    
    // 2. Меняем цвет фона html/body, чтобы Safari на iOS окрасил "островок" и низ в цвет сайдбара
    root.classList.toggle("sidebar-bg", isOpen);

    return () => {
      root.classList.remove("scroll-locked");
      root.classList.remove("sidebar-bg");
    };
  }, [isOpen]);

  // Закрытие по Escape
  useEffect(() => {
    if (!isOpen) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [isOpen]);

  return (
    <>
      <button
        type="button"
        aria-label={isOpen ? "Close menu" : "Open menu"}
        aria-expanded={isOpen}
        onClick={() => setIsOpen((v) => !v)}
        className="
          fixed top-4 right-4 z-[100]
          min-[1300px]:hidden
          w-11 h-11
          flex items-center justify-center
          rounded-lg
          bg-sidebar text-accent
          border border-accent/40
          touch-manipulation
          select-none
          [-webkit-tap-highlight-color:transparent]
        "
      >
        {/* Иконка бургера: transform живёт только здесь, внутри кнопки */}
        <span className="relative block w-6 h-5 pointer-events-none">
          <span
            className={`
              absolute left-0 top-0 w-6 h-0.5 bg-accent transition-transform duration-300
              ${isOpen ? "translate-y-2.5 rotate-45" : ""}
            `}
          />
          <span
            className={`
              absolute left-0 top-2.5 w-6 h-0.5 bg-accent transition-opacity duration-200
              ${isOpen ? "opacity-0" : "opacity-100"}
            `}
          />
          <span
            className={`
              absolute left-0 top-5 w-6 h-0.5 bg-accent transition-transform duration-300
              ${isOpen ? "-translate-y-2.5 -rotate-45" : ""}
            `}
          />
        </span>
      </button>

      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="
            fixed inset-x-0
            top-[env(safe-area-inset-top)]
            bottom-[env(safe-area-inset-bottom)]
            z-90 bg-black/60
            min-[1300px]:hidden
          "
          aria-hidden
        />
      )}

      <aside
  className={`
    bg-sidebar
    flex flex-col
    w-64 min-[1300px]:w-72 xl:w-80 2xl:w-96
    px-6 min-[1300px]:px-10 xl:px-14 2xl:px-20
    shrink-0
    justify-around
    overflow-y-auto
    fixed top-0 left-0 z-95
    h-dvh
    transition-[transform,visibility] duration-300 ease-out
    ${isOpen ? "translate-x-0 visible" : "-translate-x-full invisible pointer-events-none"}
    min-[1300px]:translate-x-0 min-[1300px]:visible min-[1300px]:pointer-events-auto
  `}
>
        <div className="flex items-center justify-between pt-6">
          <h1 className="uppercase text-4xl lg:text-5xl xl:text-[55px] text-accent">
            jacio1
          </h1>
        </div>

        <nav>
          <ul
            className="
              uppercase font-bold
              text-base lg:text-lg xl:text-xl
              flex flex-col
              gap-5 lg:gap-6 xl:gap-7.5
              pt-12 lg:pt-28 xl:pt-37.5
              pb-12 lg:pb-48 xl:pb-68.75
            "
          >
            {links.map(({ href, key }) => {
              const isActive = pathname === href;

              return (
                <li className="hover:text-accent" key={key}>
                  <Link
                    href={href}
                    className={`block py-1 ${isActive ? "text-accent" : ""}`}
                    onClick={() => setIsOpen(false)}
                  >
                    {isActive && <span aria-hidden>{"< "}</span>}
                    {t(key)}
                    {isActive && <span aria-hidden>{" />"}</span>}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <div className="flex flex-col items-center gap-5 lg:gap-6 xl:gap-7.5 pb-6">
          <ul className="flex gap-5 lg:gap-6 xl:gap-7.5">
            {socials.map(({ href, alt, src }) => (
              <li key={alt}>
                <Link href={href} target="_blank" rel="noopener noreferrer">
                  <Image
                    className="hover:filter-[brightness(0)_saturate(100%)_invert(85%)_sepia(80%)_saturate(700%)_hue-rotate(0deg)_brightness(105%)_contrast(101%)]"
                    width={35}
                    height={35}
                    alt={alt}
                    src={src}
                  />
                </Link>
              </li>
            ))}
          </ul>

          <LocaleSwitcher />
        </div>
      </aside>
    </>
  );
}