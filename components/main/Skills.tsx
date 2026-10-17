import Image from "next/image";
import { mainSkills, secondarySkills } from "@/constants";
import siteContent from "@/constants/navbar-content.json";

const skillGroups = [
    {
        number: "01",
        title: "Mobile",
        detail: "Cross-platform product development",
        skills: mainSkills.slice(0, 3),
    },
    {
        number: "02",
        title: "State management",
        detail: "Application structure and data flow",
        skills: mainSkills.slice(3, 5),
    },
    {
        number: "03",
        title: "Backend & data",
        detail: "Services, persistence, and APIs",
        skills: secondarySkills.slice(0, 4),
    },
    {
        number: "04",
        title: "UI & workflow",
        detail: "Interface systems and collaboration",
        skills: [...secondarySkills.slice(5), ...mainSkills.slice(5), secondarySkills[4]],
    },
];

const skillLabels: Record<string, string> = {
    Ios: "iOS",
    bloc: "BLoC",
    "Fire base": "Firebase",
    "Postger SQL": "PostgreSQL",
};

const Skills = () => (
    <section
        id="skills"
        className="relative w-full overflow-hidden px-6 py-20 md:px-10 md:py-28 scroll-mt-20"
    >
        <div
            className="pointer-events-none absolute -left-40 top-20 h-80 w-80 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(34,211,238,0.08), transparent 70%)" }}
        />

        <div className="relative mx-auto max-w-6xl">
            <header className="mb-12 grid gap-5 border-b border-white/15 pb-8 md:grid-cols-[1fr_auto] md:items-end">
                <div>
                    <p className="mb-3 font-mono text-xs uppercase tracking-[0.18em] text-cyan-300">
                        Capability index / 01-04
                    </p>
                    <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                        {siteContent.skills.title}{" "}
                        <span className="text-cyan-300">&amp; {siteContent.skills.subtitle}</span>
                    </h2>
                </div>
                <p className="max-w-md text-sm leading-6 text-gray-400 md:text-right">
                    A practical toolkit for shipping mobile products, structuring application state, and supporting the services behind them.
                </p>
            </header>

            <div className="grid gap-x-10 md:grid-cols-2 md:gap-x-16">
                {skillGroups.map((group) => (
                    <article
                        key={group.number}
                        className="border-b border-white/10 py-7 first:pt-0 md:odd:border-r md:odd:pr-10 md:even:pl-6"
                    >
                        <div className="mb-5 flex items-start justify-between gap-4">
                            <div>
                                <p className="mb-1 font-mono text-xs text-cyan-300/80">
                                    {group.number}
                                </p>
                                <h3 className="text-lg font-semibold text-white">{group.title}</h3>
                                <p className="mt-1 text-sm text-gray-400">{group.detail}</p>
                            </div>
                            <span className="pt-1 font-mono text-xs text-gray-400">
                                {String(group.skills.length).padStart(2, "0")} items
                            </span>
                        </div>

                        <ul className="grid grid-cols-1 gap-y-3 sm:grid-cols-2">
                            {group.skills.map((skill) => (
                                <li key={skill.skill_name} className="flex min-w-0 items-center gap-3">
                                    <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-white/10 bg-white/[0.04] p-2">
                                        <Image
                                            src={skill.Image}
                                            alt=""
                                            width={36}
                                            height={36}
                                            sizes="36px"
                                            className="h-full w-full object-contain"
                                        />
                                    </span>
                                    <span className="text-sm text-gray-200">
                                        {skillLabels[skill.skill_name] ?? skill.skill_name}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </article>
                ))}
            </div>
        </div>
    </section>
);

export default Skills;