import Link from "next/link";

export default function Sidebar() {
  return (
    <div>
      <div>
        <h1 className="uppercase">jacio1</h1>
      </div>
      <div>
        <ul>
          <li>
            <Link href={"/about"}>About Me</Link>
          </li>
          <li>
            <Link href={"/about"}>Portfolio</Link>
          </li>
          <li>
            <Link href={"/about"}>Education</Link>
          </li>
          <li>
            <Link href={"/about"}>Contact</Link>
          </li>
        </ul>
      </div>
      <div>
        <ul>
            <li>
                <Link href={'#'}>Github</Link>
            </li>
            <li>
                <Link href={'#'}>Linkedin</Link>
            </li>
            <li>
                <Link href={'#'}>Telegram</Link>
            </li>
        </ul>
      </div>
    </div>
  );
}
