import { TestimonialCard } from './ui/TestimonialCard';

interface Testimonial {
  initial: string;
  name: string;
  tag: string;
  quote: string;
}

const TESTIMONIALS: Testimonial[] = [
  {
    initial: 'A',
    name: 'Nome do Aluno',
    tag: 'Categoria / Perfil',
    quote:
      'Espaço reservado para o depoimento real deste aluno sobre a experiência treinando com o Coutinho Team.',
  },
  {
    initial: 'A',
    name: 'Nome do Aluno',
    tag: 'Categoria / Perfil',
    quote:
      'Espaço reservado para o depoimento real deste aluno sobre a experiência treinando com o Coutinho Team.',
  },
  {
    initial: 'A',
    name: 'Nome do Aluno',
    tag: 'Categoria / Perfil',
    quote:
      'Espaço reservado para o depoimento real deste aluno sobre a experiência treinando com o Coutinho Team.',
  },
];

export default function Depoimentos() {
  return (
    <section id="depoimentos" className="py-[90px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <p className="font-body text-[13px] font-bold uppercase tracking-[2.5px] text-ember mb-3">
            Quem treina, recomenda
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-[1.15]">
            O que dizem nossos alunos
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[22px]">
          {TESTIMONIALS.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              initial={testimonial.initial}
              name={testimonial.name}
              tag={testimonial.tag}
              quote={testimonial.quote}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
