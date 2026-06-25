interface StatCardProps {
  value: string;
  label: string;
}

export function StatCard({ value, label }: StatCardProps) {
  return (
    <div className="transition-transform duration-300 hover:scale-110 bg-elevated border border-bone/12 rounded-[10px] px-5 py-4 min-w-[120px]">
      <span className="block font-display font-extrabold text-[30px] text-ember leading-none">{value}</span>
      <span className="block text-[12px] text-cream/65 uppercase tracking-[0.4px] mt-1.5">
        {label}
      </span>
    </div>
  );
}
