"use client";
import { Circle, Cpu, Lock, Sparkles, Zap, Users, Target, Clock, TrendingUp, Award, Rocket, Shield, Heart } from "lucide-react";
import { ScrollView } from "./scroll-view";
import Image from "next/image";
import { useLanguage } from "@/contexts/language-context";

const whyChooseUs = [
  {
    icon: Rocket,
    titleKey: 'why.fast',
    descriptionKey: 'why.fastDesc',
  },
  {
    icon: Award,
    titleKey: 'why.results',
    descriptionKey: 'why.resultsDesc',
  },
  {
    icon: Heart,
    titleKey: 'why.support',
    descriptionKey: 'why.supportDesc',
  },
  {
    icon: Shield,
    titleKey: 'why.quality',
    descriptionKey: 'why.qualityDesc',
  },
];

export default function ContentSection() {
  const { t } = useLanguage();

  return (
    <section className="py-12 md:py-20 bg-gradient-to-b from-background to-muted/20" id="about">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header Section */}
        <div className="mx-auto max-w-4xl text-center mb-8 md:mb-12">
          <ScrollView>
            <div className="inline-flex items-center rounded-full border px-4 py-2 text-sm mb-6">
              <span className="text-muted-foreground">{t('about.badge')}</span>
            </div>
          </ScrollView>
          <ScrollView delay={0.1}>
            <h2 className="text-balance text-4xl font-semibold lg:text-6xl mb-6">
              {t('about.title').split('Digital Excellence').map((part, index) => (
                <span key={index}>
                  {part}
                  {index === 0 && <span className="text-primary"> Digital Excellence</span>}
                </span>
              ))}
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              {t('about.description')}
            </p>
          </ScrollView>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-12">
          {/* Left Column - Image */}
          <ScrollView>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl blur-3xl"></div>
              <Image
                className="relative rounded-2xl object-cover aspect-[4/3] w-full shadow-2xl"
                src="/images/office.jpeg"
                alt="Deluve team working together"
                height="600"
                width="800"
                loading="lazy"
              />
            </div>
          </ScrollView>

          {/* Right Column - Content */}
          <ScrollView delay={0.1}>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4">
                  {t('about.subtitle')}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('about.subdescription')}
                </p>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-6 pt-6">
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary mb-1">50+</div>
                  <div className="text-sm text-muted-foreground">{t('about.projects')}</div>
                </div>
                <div className="text-center p-4 rounded-lg bg-muted/50">
                  <div className="text-2xl font-bold text-primary mb-1">3+</div>
                  <div className="text-sm text-muted-foreground">{t('about.experience')}</div>
                </div>
              </div>
            </div>
          </ScrollView>
        </div>

        {/* Why Choose Us Section - Engaging */}
        <div className="mx-auto max-w-6xl">
          <ScrollView>
            <div className="text-center mb-6">
              <h3 className="text-3xl font-semibold mb-4">{t('about.whyChooseUs')}</h3>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                {t('about.whyChooseUsDesc')}
              </p>
            </div>
          </ScrollView>

          <ScrollView delay={0.1}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyChooseUs.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div 
                    key={index}
                    className="group p-6 rounded-xl border bg-card hover:bg-muted/50 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                        <IconComponent className="size-5 text-primary" />
                      </div>
                      <h4 className="font-semibold text-lg group-hover:text-primary transition-colors">
                        {t(item.titleKey)}
                      </h4>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {t(item.descriptionKey)}
                    </p>
                  </div>
                );
              })}
            </div>
          </ScrollView>
        </div>
      </div>
    </section>
  );
}
