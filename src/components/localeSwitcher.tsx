"use client";

import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";
import Image from "next/image";

export function LocaleSwitcher() {
  const active = useLocale();
  const [isPending, startTransition] = useTransition();

  const locales = [
    { code: "ru", label: "Русский", flag: "/us.svg" },
    { code: "en", label: "English", flag: "/ru.svg" },
    { code: "de", label: "Deutsch", flag: "/de.svg" },
  ] as const;

  return (
    <ul className="flex gap-3">
      {locales.map(({ code, label, flag }) => {
        const isActive = code === active;
        return (
          <li key={code}>
            <button
              type="button"
              className="rounded-xs"
              aria-current={isActive ? "true" : undefined}
              disabled={isPending}
              onClick={() => {
                startTransition(() => {
                  setLocale(code);
                });
              }}
            >
              <Image  src={flag} alt={label} width={35} height={35} className="object-contain"/>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
