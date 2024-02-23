import Image from "next/image";
import Link from "next/link";
import { GridContainer } from "./grid";
import { Icon } from "./icons/icons";

const arrayMenu = [
  "Início",
  "Benefícios",
  "Para quem é o curso?",
  "Preços promocionais",
  "Sobre nós",
];

export function Header() {
  const activedStyle = "bg-green-actived text-opacity-100 rounded-full";

  return (
    <header className="relative w-full h-24 flex items-center bg-green-background">
      <GridContainer className="flex items-center justify-between">
        <Image src={Icon.Logo} alt="Logo" width={128} height={128} />
        <div className="flex items-center gap-20">
          <nav className="flex items-center gap-8">
            {arrayMenu.map((item, idx) => (
              <Link
                key={idx}
                href={"#"}
                className={`px-3 py-1 text-white text-opacity-40 hover:text-opacity-100 transition-all ${
                  idx === 0 ? activedStyle : ""
                }`}
              >
                {item}
              </Link>
            ))}
          </nav>
          <div className="flex items-center gap-6">
            <button>
              <Image
                src={Icon.Search}
                alt="Icon Search"
                width={24}
                height={24}
              />
            </button>
            <button className="flex items-center gap-2">
              <Image
                src={Icon.User}
                alt="Icon User"
                width={24}
                height={24}
              />
              <span className="text-white font-medium">Fazer login</span>
            </button>
          </div>
        </div>
      </GridContainer>
    </header>
  );
}
