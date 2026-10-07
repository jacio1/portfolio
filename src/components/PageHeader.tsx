import { useTranslations } from "next-intl";
interface pageTranslation {
  page: "AboutPage" | "ContactPage" | "PortfolioPage" | "EducationPage";
}

export default function PageHeader({ page }: pageTranslation) {
  const t = useTranslations(page);
  return (
    <div className="flex flex-col justify-center items-center gap-2  min-[1300px]:pt-0">
      <h1 className="uppercase text-center text-[32px] sm:text-[40px] md:text-[50px] leading-tight">
        {t("title")}
      </h1>
      <p className="text-base md:text-2xl text-center max-w-201.75">
        {t("titleText")}
      </p>
    </div>
  );
}