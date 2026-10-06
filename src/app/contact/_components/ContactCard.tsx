import Image from "next/image";
import Link from "next/link";

const contacts = [
  {
    contact: "Telegram",
    src: "/telegram.svg",
  },
  {
    contact: "Telegram",
    src: "/telegram.svg",
  },
  {
    contact: "Telegram",
    src: "/telegram.svg",
  },
];

export default function ContactCard() {
  return (
    <div className="pt-8">
      <ul className="flex justify-center gap-10">
        {contacts.map((contact) => (
          <li
            key={contact.contact}
            className="px-5 py-4 rounded-[14px] flex bg-sidebar gap-22.5 uppercase items-center"
          >
            <Image
              src={contact.src}
              alt={contact.contact}
              width={74}
              height={74}
            />
            <div>
              <h3>Write me</h3>
              <Link
                className="hover:text-accent"
                href="https://t.me/gl3273"
                target="_blank"
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
