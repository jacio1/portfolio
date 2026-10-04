import { useTranslations } from "next-intl";

export default function AboutHeader() {
  const t = useTranslations("AboutPage");
  return (
    <div>
      <h1 className="text-[50px]">{t("title")}</h1>
      <p className="text-2xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus autem
        eum, rem repellat voluptatibus omnis animi natus, debitis sunt alias
        reiciendis, labore nulla aspernatur quas neque facilis tempore saepe
        architecto.
      </p>
    </div>
  );
}
