"use client";

import { useTranslations } from "next-intl";
import EducationCard from "./EducationCard";

const educationKeys = ["bachelor", "master"] as const;

export default function EducationMain() {
  const t = useTranslations("EducationPage");

  return (
    <div className="pt-8 pb-15">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-275 mx-auto">
        {educationKeys.map((key) => (
          <EducationCard
            key={key}
            title={t(`items.${key}.title`)}
            place={t(`items.${key}.place`)}
            period={t(`items.${key}.period`)}
            description={t(`items.${key}.description`)}
          />
        ))}
      </div>
    </div>
  );
}