import React from "react";

// Troque pelos caminhos reais das suas imagens
import skeletonImg from "../assets/skull-athlete-rock.png";
import skullBgImg from "../assets/logo-skull-front.png";

const stats = [
  { value: "+00", label: "MEDALHAS CONQUISTADAS" },
  { value: "+00", label: "ATLETAS EM ACOMPANHAMENTO" },
  { value: "+0", label: "TREINADORES ESPECIALIZADOS" },
];

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-black">
      {/* Container: limita a largura e centraliza o conteúdo na tela */}
      <div className="mx-auto grid max-w-7xl grid-cols-1 items-center px-6 py-20 md:grid-cols-2 md:px-12">
        {/* ============ COLUNA ESQUERDA: TEXTO ============ */}
        <div className="relative">
          {/* Tag pequena no topo */}
          <p className="text-sm font-bold text-[#ff5a2e] uppercase text-start">
            Powerlifting · Força · Competição
          </p>

          {/* Título grande, 3 linhas, com a palavra "CAMPEÕES" destacada */}
          <h1 className="hero-title">
            TREINE COM QUEM CONSTROI <span className="text-[#ff5a2e] text-extrabold">CAMPEÕES</span>{" "}
            DE VERDADE.
          </h1>

          {/* Parágrafo descritivo */}
          <p className="max-w-lg text-start text-gray-300">
            O Coutinho Team é uma equipe de Powerlifting feita para quem quer evoluir com{" "}
            <strong className="text-white">método, técnica e acompanhamento de perto</strong> — do
            primeiro treino ao pódio.
          </p>

          {/* Botões: laranja sólido + outline */}
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#planos"
              className="inline-flex items-center justify-center rounded-md bg-[#ff5a2e] px-7 py-3 text-sm font-extrabold tracking-wide text-[#160a05] uppercase transition-transform hover:-translate-y-0.5"
            >
              Quero entrar para o time
            </a>
            <a
              href="#equipe"
              className="inline-flex items-center justify-center rounded-md border-2 border-white/20 px-7 py-3 text-sm font-extrabold tracking-wide text-white uppercase transition-colors hover:bg-white/5"
            >
              Conhecer a equipe
            </a>
          </div>

          {/* Estatísticas: número grande + label pequeno, repetido 3x */}
          <div className="mt-12 flex flex-wrap gap-10">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="font-['Anton','Archivo_Black',sans-serif] text-3xl text-[#ff5a2e]">
                  {stat.value}
                </p>
                <p className="mt-1 max-w-[140px] text-xs leading-tight text-gray-400 uppercase">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* ============ COLUNA DIREITA: IMAGEM ============ */}
        <div className="relative flex items-center justify-center">
          {/* Caveira de fundo, decorativa, atrás do esqueleto */}
          <img
            src={skullBgImg}
            alt=""
            aria-hidden="true"
            className="hidden md:block absolute left-80 w-800 h-200 opacity-10"
          />
          {/* Esqueleto principal, por cima */}
          <div className="hero-art">
            <img
              src={skeletonImg}
              alt="Atleta esqueleto Coutinho Team"
              className="hero-art  hero-art-img"
            />
            <div className="hero-art-glow"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
