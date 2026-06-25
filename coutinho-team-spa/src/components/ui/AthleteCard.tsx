interface AthleteAchievement {
  label: string;
}

interface AthleteCardProps {
  initial: string;
  name: string;
  achievements: readonly AthleteAchievement[];
}

export function AthleteCard({ initial, name, achievements }: AthleteCardProps) {
  return (
    <div className="bg-base border border-bone/12 rounded-[14px] p-[22px]">
      <div className="w-full h-[140px] rounded-[10px] bg-[linear-gradient(145deg,#232019,#0d0c0a)] flex items-center justify-center font-display text-[30px] text-ember mb-4 border border-bone/12">
        {initial}
      </div>
      <h3 className="text-[16px] mb-2">{name}</h3>
      <ul className="list-none p-0 m-0 space-y-1">
        {achievements.map((achievement, index) => (
          <li
            key={index}
            className="text-[13px] text-cream/70 py-1 pl-4 border-l-2 border-ember-deep"
          >
            {achievement.label}
          </li>
        ))}
      </ul>
    </div>
  );
}
