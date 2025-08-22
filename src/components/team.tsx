"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { ScrollView } from "@/components/scroll-view";
import Image from "next/image";

const members = [
  {
    name: "Liam Brown",
    role: "Founder - CEO",
    avatar: "https://alt.tailus.io/images/team/member-one.webp",
    link: "#",
  },
  {
    name: "Elijah Jones",
    role: "Co-Founder - CTO",
    avatar: "https://alt.tailus.io/images/team/member-two.webp",
    link: "#",
  },
  {
    name: "Isabella Garcia",
    role: "Sales Manager",
    avatar: "https://alt.tailus.io/images/team/member-three.webp",
    link: "#",
  },
  {
    name: "Henry Lee",
    role: "UX Engeneer",
    avatar: "https://alt.tailus.io/images/team/member-four.webp",
    link: "#",
  },
  {
    name: "Ava Williams",
    role: "Interaction Designer",
    avatar: "https://alt.tailus.io/images/team/member-five.webp",
    link: "#",
  },
  {
    name: "Olivia Miller",
    role: "Visual Designer",
    avatar: "https://alt.tailus.io/images/team/member-six.webp",
    link: "#",
  },
];

export default function TeamSection() {
  return (
    <section
      className="relative py-16 md:py-32 bg-gradient-to-b from-blue-500/[0.02] to-background overflow-hidden"
      id="team"
    >
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.03] via-transparent to-blue-600/[0.02] blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-5xl border-t border-blue-500/20 px-6">
        <span className="text-caption -ml-6 -mt-3.5 block w-max bg-background px-6 text-blue-400 border border-blue-500/20 rounded-t-lg">
          Team
        </span>
        <ScrollView>
          <div className="mt-12 gap-4 sm:grid sm:grid-cols-2 md:mt-24">
            <div className="sm:w-2/5">
              <h2 className="text-3xl font-bold sm:text-4xl">Our dream team</h2>
            </div>

            <div className="mt-6 sm:mt-0">
              <p className="text-muted-foreground">
                During the working process, we perform regular fitting with the
                client because he is the only person who can feel whether a new
                suit fits or not.
              </p>
            </div>
          </div>
        </ScrollView>
        <div className="mt-12 md:mt-24">
          <ScrollView stagger delay={0.02}>
            <div className="grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3">
              {members.map((member, index) => (
                <div key={index} className="group overflow-hidden">
                  <motion.div
                    variants={{
                      hidden: { opacity: 0, scale: 0.8, filter: "blur(10px)" },
                      visible: {
                        opacity: 1,
                        scale: 1,
                        filter: "blur(0px)",
                      },
                    }}
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-400/10 to-blue-600/10 rounded-md blur-sm group-hover:blur-md transition-all duration-500"></div>
                      <Image
                        className="relative h-96 w-full rounded-md object-cover object-top grayscale transition-all duration-500 hover:grayscale-0 group-hover:h-[22.5rem] group-hover:rounded-xl border border-blue-500/20 group-hover:border-blue-400/30"
                        src={member.avatar}
                        alt="team member"
                        width={826}
                        height={1239}
                      />
                    </div>
                    <div className="px-2 pt-2 sm:pb-0 sm:pt-4">
                      <div className="flex justify-between">
                        <h3 className="text-title text-base font-medium transition-all duration-500 group-hover:tracking-wider">
                          {member.name}
                        </h3>
                        <span className="text-xs text-blue-400">_0{index + 1}</span>
                      </div>
                      <div className="mt-1 flex items-center justify-between">
                        <span className="text-muted-foreground inline-block translate-y-6 text-sm opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                          {member.role}
                        </span>
                        <Link
                          href={member.link}
                          className="group-hover:text-blue-400 inline-block translate-y-8 text-sm tracking-wide opacity-0 transition-all duration-500 hover:underline group-hover:translate-y-0 group-hover:opacity-100 relative"
                        >
                          Linktree
                          <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/40 via-blue-300/60 to-blue-400/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                        </Link>
                      </div>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
}
