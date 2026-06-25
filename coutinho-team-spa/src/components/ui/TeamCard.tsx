interface TeamCardProps {
  initials: string;
  name: string;
  role: string;
  bio: string;
  instagram: string;
  instagramHref?: string;
}

export function TeamCard({
  initials,
  name,
  role,
  bio,
  instagram,
  instagramHref = '#',
}: TeamCardProps) {
  return (
    <div className="bg-elevated border border-bone/12 rounded-[14px] px-[22px] py-[26px] text-center transition-transform duration-300 hover:scale-102">
      <div className="w-[84px] h-[84px] mx-auto mb-4 rounded-full bg-[linear-gradient(145deg,var(--color-ember-deep),#3a160d)] flex items-center justify-center font-display text-[22px] text-bone border-2 border-ember">
        {initials}
      </div>
      <h3 className="text-[16px] mb-1 tracking-[0.3px]">{name}</h3>
      <p className="text-[12px] text-ember uppercase tracking-[0.4px] mb-3">{role}</p>
      <p className="text-[13.5px] text-cream/70 mb-3.5">{bio}</p>
      <a
        href={instagramHref}
        className="text-[12.5px] font-bold text-ember border-b border-ember-deep pb-0.5"
      >
        IG: {instagram}
      </a>
    </div>
  );
}
