import Button from "@/src/components/ui/Button";
import { useTranslations } from "next-intl";
import Image from "next/image";

export default function AboutMain() {
  const t = useTranslations("AboutPage");
  return (
    <div className="flex">
      <Image alt="My Photo" width={403} height={467} src="/my-photo.jpg" />
      <div>
        <h1>{t("name")}</h1>
        <h2>Frontend Developer</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          magni voluptatem, cupiditate exercitationem impedit maxime iste cumque
          rerum veritatis sed dignissimos ad error eligendi doloribus quibusdam
          excepturi incidunt numquam vel.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam
          eveniet adipisci blanditiis sunt nihil, expedita unde impedit
          excepturi repellat aliquam ratione optio harum tempore non accusantium
          facilis. Dolorem, natus veniam.
        </p>
        <div>
          <Button>{t("download")}</Button>
          <Button>{t("hire")}</Button>
        </div>
      </div>
    </div>
  );
}
