import TreeMark from "./TreeMark";
import Reveal from "./Reveal";

export default function VillasIntroTitle() {
  return (
    <section id="stays" className="bg-cream pt-24 pb-10 flex flex-col items-center px-6">
      <Reveal>
        <TreeMark className="w-14 h-16 text-sage-deep mb-8" />
      </Reveal>
      <span className="w-2 h-2 rounded-full bg-ink/30 mb-2" />
      <span className="w-px h-10 bg-ink/25" />
      <Reveal delay={100}>
        <div className="text-center mt-2">
          <span className="font-script text-4xl sm:text-5xl text-ink/80 block">
            experience
          </span>
          <h2 className="font-display font-medium text-sage-deep text-6xl sm:text-8xl -mt-3">
            our stays
          </h2>
        </div>
      </Reveal>
    </section>
  );
}
