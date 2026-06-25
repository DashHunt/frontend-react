import { AthleteCard } from './ui/AthleteCard';
import { ButtonLink } from './ui/Button';

interface Athlete {
  initial: string;
  name: string;
  achievements: { label: string }[];
}

const ATHLETES: Athlete[] = [
  {
    initial: 'A',
    name: 'Nome do Atleta',
    achievements: [
      { label: 'Conquista ou título principal' },
      { label: 'Categoria de peso / divisão' },
    ],
  },
  {
    initial: 'A',
    name: 'Nome do Atleta',
    achievements: [
      { label: 'Conquista ou título principal' },
      { label: 'Categoria de peso / divisão' },
    ],
  },
  {
    initial: 'A',
    name: 'Nome do Atleta',
    achievements: [
      { label: 'Conquista ou título principal' },
      { label: 'Categoria de peso / divisão' },
    ],
  },
];

export default function Atletas() {
  return (
    <section id="atletas" className="py-[90px] bg-elevated border-t border-b border-bone/12">
      <div className="max-w-[1180px] mx-auto px-6 grid grid-cols-1 md:grid-cols-[1fr_1.1fr] gap-[60px] items-center">
        {/* Copy */}
        <div>
          <p className="font-body text-[13px] font-bold uppercase tracking-[2.5px] text-ember mb-3">
            Resultados na prática
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-[1.15] mb-[18px]">
            Conheça alguns dos nossos atletas
          </h2>
          <p className="text-[16px] text-cream/80 max-w-[560px] mb-8">
            Melhor do que falar sobre a equipe, é mostrar resultado. Esses são alguns dos atletas que
            treinam com o Coutinho Team.
          </p>
          <ButtonLink href="#planos" variant="ember" size="lg">
            Quero entrar para o time
          </ButtonLink>
        </div>

        {/* Athletes grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-[18px]">
          {ATHLETES.map((athlete, index) => (
            <AthleteCard
              key={index}
              initial={athlete.initial}
              name={athlete.name}
              achievements={athlete.achievements}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
