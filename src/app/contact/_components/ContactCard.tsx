import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    contact: "Telegram",
    src: "/telegram.svg",
  },
];

export default function ContactCard() {
  const t = useTranslations("ContactPage");
  return (
    <div className="pt-8 sm:px-6 md:px-0">
      <ul className="flex justify-center gap-4 md:gap-6 xl:gap-10">
        {contacts.map((contact) => (
          <li
            key={contact.contact}
            className="px-4 py-4 md:px-5 rounded-[14px] flex bg-sidebar gap-4 md:gap-6 xl:gap-10 uppercase items-center min-w-0"
          >
            <Image
              src={contact.src}
              alt={contact.contact}
              width={74}
              height={74}
              className="w-14 h-14 md:w-18.5 md:h-18.5 shrink-0 filter-[brightness(0)_saturate(100%)_invert(85%)_sepia(80%)_saturate(700%)_hue-rotate(0deg)_brightness(105%)_contrast(101%)]"
            />
            <div className="min-w-0">
              <h3>{t("writeMe")}</h3>
              <Link
                className="hover:text-accent break-all"
                href="https://t.me/gl3273"
                target="_blank"
                rel="noopener noreferrer"
              >
                t.me/gl3273
              </Link>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
