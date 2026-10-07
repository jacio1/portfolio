type Props = {
  title: string;
  place: string;
  period: string;
  description: string;
};

export default function EducationCard({ title, place, period, description }: Props) {
  return (
    <article className="bg-white/5 rounded-2xl p-5 md:p-6 flex flex-col gap-3 text-left">
      <div className="flex flex-col gap-1">
        <h3 className="text-accent text-[18px] md:text-[22px] font-semibold uppercase">
          {title}
        </h3>
        <p className="text-white/60 text-[14px] md:text-[16px]">
          {place} · {period}
        </p>
      </div>

      <p className="text-[14px] md:text-[17px] leading-relaxed text-white/90">
        {description}
      </p>
    </article>
  );
}