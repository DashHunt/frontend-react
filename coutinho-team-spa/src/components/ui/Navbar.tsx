import React, { useState } from "react";
import badgetLogo from "../../assets/badge-logo-final.png";

type NavbarProps = {
  children: React.ReactNode;
};

// Lista de links do menu. Pra adicionar/remover um item, só edita esse array.
const navigation = [
  { name: "Sobre", href: "#sobre" },
  { name: "Benefícios", href: "#beneficios" },
  { name: "Equipe", href: "#equipe" },
  { name: "Atletas", href: "#atletas" },
  { name: "Planos", href: "#planos" },
];

const Navbar = (props: NavbarProps) => {
  // Controla se o menu mobile (hambúrguer) está aberto ou fechado
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <nav className="relative bg-black">
        {/* Container central: limita a largura máxima e centraliza na tela */}
        <div className=" flex h-20 w-full items-center justify-between px-6 md:px-12">
          {/* ---------- BLOCO 1: LOGO (esquerda) ---------- */}
          <div className="flex items-center gap-2">
            <img src={badgetLogo} alt="Coutinho Team" className="h-9 w-auto" />
            <span className="font-['Anton','Archivo_Black',sans-serif] text-lg tracking-wide text-[#f3f1ec] font-bold ">
              COUTINHO<span className="text-[#ff5a2e] font-semibold">TEAM</span>
            </span>
          </div>

          {/* ---------- BLOCO 2: MENU (centro, só aparece em telas médias+) ---------- */}
          <div className="hidden items-center gap-8 md:flex">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-sm font-bold tracking-wide text-white uppercase transition-colors hover:text-[#ff5a2e]"
              >
                {item.name}
              </a>
            ))}
          </div>

          {/* ---------- BLOCO 3: BOTÃO CTA (direita, só aparece em telas médias+) ---------- */}
          <a
            href="#planos"
            className="hidden items-center justify-center rounded-md bg-[#ff5a2e] px-7 py-3 text-sm font-bold tracking-wide text-[#160a05] uppercase transition-transform hover:-translate-y-0.5 md:inline-flex"
          >
            Comece agora
          </a>

          {/* ---------- BOTÃO HAMBÚRGUER (só aparece em telas pequenas) ---------- */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white md:hidden"
            aria-label="Abrir menu"
          >
            {menuOpen ? (
              // ícone "X" (fechar)
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              // ícone hambúrguer (3 linhas)
              <svg className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>

        {/* ---------- MENU MOBILE (aparece embaixo, só quando aberto) ---------- */}
        {menuOpen && (
          <div className="space-y-1 px-6 pb-4 md:hidden">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-white/5 hover:text-white"
              >
                {item.name}
              </a>
            ))}
            <a
              href="#planos"
              onClick={() => setMenuOpen(false)}
              className="mt-2 block rounded-md bg-[#ff5a2e] px-4 py-3 text-center text-sm font-bold tracking-wide text-[#160a05] uppercase"
            >
              Comece agora
            </a>
          </div>
        )}
      </nav>
      {props.children}
    </>
  );
};

export default Navbar;
