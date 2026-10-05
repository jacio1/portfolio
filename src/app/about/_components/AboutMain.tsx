import Button from "@/src/components/ui/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMain() {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-17.5 pt-8 pb-15">
      <Image
        className="rounded-[28px] w-full max-w-100.75 h-auto md:max-h-116.75"
        alt="My Photo"
        width={403}
        height={467}
        src="/my-photo.jpg"
      />
      <div className="flex flex-col gap-4.5 text-center md:text-left">
        <h1 className="uppercase text-[28px] md:text-[36px] text-accent">
          {t("name")}
        </h1>
        <h2 className="text-[20px] md:text-[26px] uppercase">
          Frontend Developer
        </h2>
        <p className="text-[16px] md:text-[22px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <p className="text-[16px] md:text-[22px]">
          Lorem ipsum dolor sit amet consectetur adipisicing elit...
        </p>
        <div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-7.5 text-xl">
          <Button>{t("download")}</Button>
          <Button>{t("hire")}</Button>
        </div>
      </div>
    </div>
  );
}