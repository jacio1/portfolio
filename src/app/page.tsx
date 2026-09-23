"use client";

import { useTranslations } from "next-intl";
import { setLocale } from "./actions";

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <main className="">
      <h1>{t("title")}</h1>
      <button onClick={() => setLocale("ru")}>Русский</button>
      <button onClick={() => setLocale("en")}>English</button>
    </main>
  );
}
