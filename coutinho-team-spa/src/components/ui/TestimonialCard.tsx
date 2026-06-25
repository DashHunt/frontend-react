interface TestimonialCardProps {
  initial: string;
  name: string;
  tag: string;
  quote: string;
}

export function TestimonialCard({ initial, name, tag, quote }: TestimonialCardProps) {
  return (
    <div className="bg-elevated border border-bone/12 rounded-[14px] px-6 py-7 transition-transform duration-300 hover:scale-102">
      <div className="w-12 h-12 rounded-full bg-ember-deep text-bone flex items-center justify-center font-display text-xl mb-3.5">
        {initial}
      </div>
      <h4 className="text-[15px] font-extrabold font-body normal-case tracking-normal mb-0.5">
        {name}
      </h4>
      <span className="text-[12px] text-ember font-bold">{tag}</span>
      <p className="text-[14px] text-cream/75 mt-3.5 italic">{quote}</p>
    </div>
  );
}
