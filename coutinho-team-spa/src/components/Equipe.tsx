import { TeamCard } from './ui/TeamCard';

interface TeamMember {
  initials: string;
  name: string;
  role: string;
  bio: string;
  instagram: string;
  instagramHref?: string;
}

const TEAM: TeamMember[] = [
  {
    initials: 'CT',
    name: 'Nome do Treinador',
    role: 'Head Coach · Powerlifting',
    bio: 'Substitua por uma breve descrição da experiência, títulos e especialidade deste treinador.',
    instagram: '@usuario',
  },
  {
    initials: 'CT',
    name: 'Nome do Treinador',
    role: 'Treinador · Especialista Jr/Sub-jr',
    bio: 'Substitua por uma breve descrição da experiência, títulos e especialidade deste treinador.',
    instagram: '@usuario',
  },
  {
    initials: 'CT',
    name: 'Nome do Treinador',
    role: 'Treinador · Reabilitação',
    bio: 'Substitua por uma breve descrição da experiência, títulos e especialidade deste treinador.',
    instagram: '@usuario',
  },
  {
    initials: 'CT',
    name: 'Nome do Treinador',
    role: 'Treinador · Performance',
    bio: 'Substitua por uma breve descrição da experiência, títulos e especialidade deste treinador.',
    instagram: '@usuario',
  },
];

export default function Equipe() {
  return (
    <section id="equipe" className="py-[90px]">
      <div className="max-w-[1180px] mx-auto px-6">
        <div className="text-center max-w-[640px] mx-auto mb-14">
          <p className="font-body text-[13px] font-bold uppercase tracking-[2.5px] text-ember mb-3">
            Bastidores do time
          </p>
          <h2 className="font-display text-[clamp(28px,4vw,42px)] leading-[1.15]">
            Nossa equipe de treinadores
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[22px]">
          {TEAM.map((member, index) => (
            <TeamCard
              key={index}
              initials={member.initials}
              name={member.name}
              role={member.role}
              bio={member.bio}
              instagram={member.instagram}
              instagramHref={member.instagramHref}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
