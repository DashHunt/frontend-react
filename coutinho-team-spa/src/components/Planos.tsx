import { PlanoCard } from './ui/PlanoCard';

interface PlanoData {
  id: string;
  title: string;
  tag?: string;
  pricePrefix?: string;
  price: string;
  priceSuffix?: string;
  note: string;
  badge?: string;
  featured?: boolean;
}

const PLANOS: PlanoData[] = [
  {
    id: 'mensal',
    title: 'Mensal',
    price: 'R$ 000',
    note: 'À vista ou no cartão',
  },
  {
    id: 'trimestral',
    title: 'Trimestral',
    tag: '7% OFF',
    pricePrefix: '3x',
    price: 'R$ 000',
    note: 'Ou R$ 000 à vista (10% OFF)',
    badge: 'Mais vendido',
    featured: true,
  },
  {
    id: 'semestral',
    title: 'Semestral',
    tag: '10% OFF',
    pricePrefix: '6x',
    price: 'R$ 000',
    note: 'Ou R$ 000 à vista (14% OFF)',
  },
  {
    id: 'recorrencia',
    title: 'Recorrência',
    price: 'R$ 000',
    priceSuffix: '/mês',
    note: 'Permanência mínima de 3 meses*',
  },
];

interface PlanosProps {
  onSelectPlan: (plan: string) => void;
}

export default function Planos({ onSelectPlan }: PlanosProps) {
  return (
    <section id="planos" className="py-[90px] bg-elevated border-t border-b border-bone/12">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <p className="font-body text-[13px] font-bold uppercase tracking-[2.5px] text-ember mb-3">
            Faça parte
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-[1.15]">
            Planos disponíveis
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[18px] items-stretch">
          {PLANOS.map((plano) => (
            <PlanoCard
              key={plano.id}
              title={plano.title}
              tag={plano.tag}
              pricePrefix={plano.pricePrefix}
              price={plano.price}
              priceSuffix={plano.priceSuffix}
              note={plano.note}
              badge={plano.badge}
              featured={plano.featured}
              onSelect={onSelectPlan}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
