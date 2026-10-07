import Button from "@/src/components/ui/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AboutMain() {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-6 sm:gap-8 md:gap-17.5 sm:px-6 md:px-0 pt-4 md:pt-8 pb-8 md:pb-15">
      <Image
        className="rounded-[28px] w-full max-w-70 sm:max-w-85 md:max-w-none md:w-100.75 h-auto object-cover"
        alt="My Photo"
        width={403}
        height={467}
        src="/my-photo.jpg"
        priority
      />
      <div className="flex flex-col gap-4 md:gap-4.5 text-center md:text-left w-full">
        <h1 className="uppercase text-[24px] sm:text-[28px] md:text-[36px] text-accent">
          {t("name")}
        </h1>
        <h2 className="text-[16px] sm:text-[20px] md:text-[26px] uppercase">
          Frontend Developer
        </h2>
        <p className="text-lg md:text-[22px] leading-relaxed">
          {t("aboutText")}
        </p>
        <div className="flex flex-col sm:flex-row sm:flex-wrap justify-center md:justify-start gap-3 sm:gap-4 md:gap-7.5 text-base sm:text-lg md:text-xl mt-2">
          <Button className="w-full sm:w-auto">{t("download")}</Button>
          <Link
            className="border-accent border text-accent rounded-[11px] min-h-12 sm:min-h-14.5 sm:min-w-53.5 px-6 hover:opacity-90 flex items-center justify-center w-full sm:w-auto"
            href="/contact"
          >
            {t("hire")}
          </Link>
        </div>
      </div>
    </div>
  );
}