import Image from "next/image";
import { mainSkills, secondarySkills } from "@/constants";
import siteContent from "@/constants/navbar-content.json";

const selectSkills = (skills: typeof mainSkills, names: string[]) =>
    skills.filter((skill) => names.includes(skill.skill_name));

const skillGroups = [
    {
        title: "Mobile development",
        skills: selectSkills(mainSkills, ["Flutter", "Android", "Ios"]),
    },
    {
        title: "State management",
        skills: selectSkills(mainSkills, ["bloc", "Riverpod"]),
    },
    {
        title: "Languages",
        skills: selectSkills(mainSkills, ["Dart", "Kotlin", "Java", "C", "JavaScript", "Python", "Bash"]),
    },
    {
        title: "Backend & data",
        skills: selectSkills(secondarySkills, ["Node.js", "MongoDB", "Ktor", "Django", "Fire base", "Postger SQL"]),
    },
    {
        title: "Design & developer tools",
        skills: [
            ...selectSkills(secondarySkills, ["Figma", "Material UI", "GitLab"]),
            ...selectSkills(mainSkills, ["Git", "GitHub"]),
            ...selectSkills(secondarySkills, ["Postman"]),
        ],
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
        className="relative w-full overflow-hidden px-6 py-14 md:px-10 md:py-20 scroll-mt-20"
    >
        <div className="relative mx-auto max-w-6xl">
            <header className="mb-8 flex flex-wrap items-baseline gap-x-4 gap-y-1 border-b border-white/15 pb-5">
                <h2 className="text-3xl font-semibold text-white sm:text-4xl">
                    {siteContent.skills.title}{" "}
                    <span className="text-cyan-300">&amp; {siteContent.skills.subtitle}</span>
                </h2>
            </header>

            <div className="grid gap-3 md:grid-cols-2">
                {skillGroups.map((group) => (
                    <article
                        key={group.title}
                        className={`rounded-lg border border-white/10 bg-white/[0.025] p-4 sm:p-5 ${group.title === "Design & developer tools" ? "md:col-span-2" : ""}`}
                    >
                        <div className="mb-4 flex items-center gap-3">
                            <span className="h-6 w-1 rounded-full bg-cyan-300" />
                            <h3 className="text-base font-semibold text-white">{group.title}</h3>
                            <span className="ml-auto font-mono text-[11px] text-gray-400">
                                {String(group.skills.length).padStart(2, "0")}
                            </span>
                        </div>

                        <ul className="flex flex-wrap gap-2">
                            {group.skills.map((skill) => (
                                <li key={skill.skill_name} className="shrink-0">
                                    <span className="inline-flex items-center gap-2 whitespace-nowrap rounded-md border border-white/10 bg-[#080b1b] px-2.5 py-1.5 text-xs text-gray-200">
                                        <Image src={skill.Image} alt="" width={20} height={20} sizes="20px" className="h-5 w-5 object-contain" />
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