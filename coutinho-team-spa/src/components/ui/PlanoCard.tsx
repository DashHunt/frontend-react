import { cn } from '../../lib/utils';
import { Button } from './Button';

interface PlanoCardProps {
  title: string;
  tag?: string;
  pricePrefix?: string;
  price: string;
  priceSuffix?: string;
  note: string;
  badge?: string;
  featured?: boolean;
  onSelect: (plan: string) => void;
}

export function PlanoCard({
  title,
  tag,
  pricePrefix,
  price,
  priceSuffix,
  note,
  badge,
  featured = false,
  onSelect,
}: PlanoCardProps) {
  return (
    <div
      className={cn(
        'relative bg-base border rounded-[14px] px-6 py-7 flex flex-col',
        featured
          ? 'border-ember bg-raised shadow-[0_0_0_1px_var(--color-ember),0_20px_50px_rgba(255,90,46,0.15)] -translate-y-1.5'
          : 'border-bone/12',
      )}
    >
      {badge && (
        <span className="absolute -top-3.5 left-6 bg-ember text-[#160a05] text-[11px] font-extrabold uppercase tracking-[0.4px] px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      <h3 className="text-[18px] mb-2.5 flex items-center gap-2 flex-wrap">
        {title}
        {tag && (
          <span className="font-body text-[11px] font-semibold bg-ember-deep text-cream px-2 py-0.5 rounded uppercase tracking-[0.3px]">
            {tag}
          </span>
        )}
      </h3>

      <p className="font-display font-extrabold text-[32px] text-ember my-1.5 leading-none">
        {pricePrefix && (
          <span className="font-body text-[14px] text-cream font-normal normal-case">
            {pricePrefix}{' '}
          </span>
        )}
        {price}
        {priceSuffix && (
          <span className="font-body text-[14px] text-cream font-normal normal-case">
            {priceSuffix}
          </span>
        )}
      </p>

      <p className="text-[13px] text-cream/65 mb-6 grow">{note}</p>

      <Button
        variant={featured ? 'ember' : 'outline-ember'}
        className="w-full"
        onClick={() => onSelect(title)}
      >
        Escolher plano
      </Button>
    </div>
  );
}
