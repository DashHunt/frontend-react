interface BenefitCardProps {
  icon: string;
  title: string;
  description: string;
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <div className="bg-base border border-bone/12 rounded-xl px-[26px] py-[30px] transition-all duration-200 hover:border-ember-deep hover:-translate-y-1">
      <div className="text-[30px] mb-4">{icon}</div>
      <h3 className="text-[18px] mb-2.5 tracking-[0.3px]">{title}</h3>
      <p className="text-[14.5px] text-cream/70 m-0">{description}</p>
    </div>
  );
}
