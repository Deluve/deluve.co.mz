import { Circle, Cpu, Lock, Sparkles, Zap } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";

const ourPrinciples = [
  {
    title: "Creative Innovation",
    description:
      "We push boundaries with innovative solutions that transform ideas into impactful digital experiences.",
  },
  {
    title: "Collaborative Excellence",
    description:
      "Great results come from teamwork. We partner closely with clients to deliver solutions that exceed expectations.",
  },
  {
    title: "Efficient Delivery",
    description:
      "We optimize processes and leverage cutting-edge technology to deliver high-quality solutions faster and more cost-effectively.",
  },
  {
    title: "Results-Driven",
    description:
      "Every project is measured by its impact. We focus on outcomes that drive real business value and growth.",
  },
];

export default function ContentSection() {
  return (
    <section className="py-16 md:py-32" id="about">
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-12">
        <div className="mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-balance text-4xl font-medium lg:text-5xl">
              About Us
            </h2>
          </ScrollView>
          <ScrollView>
            <p>
              At Deluve, we believe that great design and technology can transform businesses and create meaningful connections with users. Our team of passionate creatives and developers work together to bring innovative ideas to life.

              We focus on creating digital solutions that not only look stunning but also drive real business results. From concept to launch, we're with you every step of the way.
            </p>
          </ScrollView>
        </div>
        <ScrollView>
          <Image
            className="rounded-(--radius) grayscale-75 object-cover aspect-[16/9] w-full"
            src="/images/office.jpeg"
            alt="team image"
            height="480"
            width="720"
            loading="lazy"
          />
        </ScrollView>
        <ScrollView>
          <div className="relative mx-auto grid grid-cols-2 gap-x-3 gap-y-6 sm:gap-8 lg:grid-cols-4">
            {ourPrinciples.map((principle, index) => (
              <div className="space-y-3" key={index}>
                <div className="flex items-center gap-2">
                  <Circle className="size-4" />
                  <h3 className="text-sm font-medium">{principle.title}</h3>
                </div>
                <p className="text-muted-foreground text-sm">
                  {principle.description}
                </p>
              </div>
            ))}
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
