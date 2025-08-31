import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ScrollView } from "@/components/scroll-view";
import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";
import Image from "next/image";

export default function Testimonials() {
  return (
    <section className="py-8 md:py-16" id="testimonials">
      <div className="mx-auto max-w-6xl space-y-8 px-6 md:space-y-16">
        <div className="relative z-10 mx-auto max-w-xl space-y-6 text-center md:space-y-12">
          <ScrollView>
            <h2 className="text-4xl font-medium lg:text-5xl">
              Trusted by businesses, loved by clients
            </h2>
          </ScrollView>
          <ScrollView delay={0.2}>
            <p>
              Our clients trust us to deliver exceptional digital experiences that drive results. 
              Here&apos;s what they have to say about working with Deluve.
            </p>
          </ScrollView>
        </div>

        <ScrollView delay={0.3}>
          {/* Mobile Carousel */}
          <div className="block md:hidden">
            <InfiniteSlider speed={30} gap={16} className="py-4">
              <Card className="w-80 flex-shrink-0">
                <CardHeader>
                  <Image
                    className="h-6 w-fit dark:invert"
                    src="https://html.tailus.io/blocks/customers/nike.svg"
                    alt="Nike Logo"
                    height={24}
                    width={100}
                  />
                </CardHeader>
                <CardContent>
                  <blockquote className="grid grid-rows-[1fr_auto] gap-6">
                                      <p className="text-lg font-medium">
                    Deluve transformed our business with their automation solutions. 
                    The 60% efficiency gain they delivered exceeded our expectations 
                    and their 24/7 support is unmatched.
                  </p>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage
                          src="https://tailus.io/images/reviews/shekinah.webp"
                          alt="Shekinah Tshiokufila"
                          height="400"
                          width="400"
                          loading="lazy"
                        />
                        <AvatarFallback>ST</AvatarFallback>
                      </Avatar>

                      <div>
                        <cite className="text-sm font-medium">
                          Shekinah Tshiokufila
                        </cite>
                        <span className="text-muted-foreground block text-sm">
                          Software Ingineer
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="w-80 flex-shrink-0">
                <CardContent className="pt-6">
                  <blockquote className="grid grid-rows-[1fr_auto] gap-6">
                                      <p className="text-lg font-medium">
                    The website Deluve designed for us increased our online conversions by 40%. 
                    Their attention to detail and modern design approach is exceptional.
                  </p>

                    <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                      <Avatar className="size-12">
                        <AvatarImage
                          src="https://tailus.io/images/reviews/jonathan.webp"
                          alt="Jonathan Yombo"
                          height="400"
                          width="400"
                          loading="lazy"
                        />
                        <AvatarFallback>JY</AvatarFallback>
                      </Avatar>
                      <div>
                        <cite className="text-sm font-medium">
                          Jonathan Yombo
                        </cite>
                        <span className="text-muted-foreground block text-sm">
                          Software Ingineer
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="w-80 flex-shrink-0">
                <CardContent className="pt-6">
                  <blockquote className="grid grid-rows-[1fr_auto] gap-6">
                    <p>
                      Great work on tailfolio template. This is one of the best
                      personal website that I have seen so far!
                    </p>

                    <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                      <Avatar className="size-12">
                        <AvatarImage
                          src="https://tailus.io/images/reviews/yucel.webp"
                          alt="Yucel Faruksahan"
                          height="400"
                          width="400"
                          loading="lazy"
                        />
                        <AvatarFallback>YF</AvatarFallback>
                      </Avatar>
                      <div>
                        <cite className="text-sm font-medium">
                          Yucel Faruksahan
                        </cite>
                        <span className="text-muted-foreground block text-sm">
                          Creator, Tailkits
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>

              <Card className="w-80 flex-shrink-0">
                <CardContent className="pt-6">
                  <blockquote className="grid grid-rows-[1fr_auto] gap-6">
                    <p>
                      Great work on tailfolio template. This is one of the best
                      personal website that I have seen so far!
                    </p>

                    <div className="grid grid-cols-[auto_1fr] gap-3">
                      <Avatar className="size-12">
                        <AvatarImage
                          src="https://tailus.io/images/reviews/rodrigo.webp"
                          alt="Rodrigo Aguilar"
                          height="400"
                          width="400"
                          loading="lazy"
                        />
                        <AvatarFallback>RA</AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-medium">Rodrigo Aguilar</p>
                        <span className="text-muted-foreground block text-sm">
                          Creator, TailwindAwesome
                        </span>
                      </div>
                    </div>
                  </blockquote>
                </CardContent>
              </Card>
            </InfiniteSlider>
          </div>

          {/* Desktop Grid Layout */}
          <div className="hidden md:grid gap-4 sm:grid-cols-2 md:grid-cols-4 lg:grid-rows-2">
            <Card className="grid grid-rows-[auto_1fr] gap-8 sm:col-span-2 sm:p-6 lg:row-span-2">
              <CardHeader>
                <Image
                  className="h-6 w-fit dark:invert"
                  src="https://html.tailus.io/blocks/customers/nike.svg"
                  alt="Nike Logo"
                  height={24}
                  width={100}
                />
              </CardHeader>
              <CardContent>
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">
                    Tailus has transformed the way I develop web applications.
                    Their extensive collection of UI components, blocks, and
                    templates has significantly accelerated my workflow. The
                    flexibility to customize every aspect allows me to create
                    unique user experiences. Tailus is a game-changer for modern
                    web development
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/shekinah.webp"
                        alt="Shekinah Tshiokufila"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>ST</AvatarFallback>
                    </Avatar>

                    <div>
                      <cite className="text-sm font-medium">
                        Maria Santos
                      </cite>
                      <span className="text-muted-foreground block text-sm">
                        Operations Manager, TechFlow
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
            <Card className="md:col-span-2">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p className="text-xl font-medium">
                    The website Deluve designed for us increased our online conversions by 40%. 
                    Their attention to detail and modern design approach is exceptional.
                  </p>

                  <div className="grid grid-cols-[auto_1fr] items-center gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/jonathan.webp"
                        alt="Jonathan Yombo"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>JY</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">
                        Carlos Mendes
                      </cite>
                      <span className="text-muted-foreground block text-sm">
                        Marketing Director, InnovateCo
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>
                    Working with Deluve was a game-changer for our startup. Their custom software 
                    development helped us launch 3 weeks ahead of schedule.
                  </p>

                  <div className="grid items-center gap-3 [grid-template-columns:auto_1fr]">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/yucel.webp"
                        alt="Yucel Faruksahan"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>YF</AvatarFallback>
                    </Avatar>
                    <div>
                      <cite className="text-sm font-medium">
                        Ana Silva
                      </cite>
                      <span className="text-muted-foreground block text-sm">
                        CEO, StartupHub
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
            <Card className="card variant-mixed">
              <CardContent className="h-full pt-6">
                <blockquote className="grid h-full grid-rows-[1fr_auto] gap-6">
                  <p>
                    Deluve&apos;s AI chatbot solution reduced our customer service costs by 50%. 
                    Their innovative approach to automation is truly impressive.
                  </p>

                  <div className="grid grid-cols-[auto_1fr] gap-3">
                    <Avatar className="size-12">
                      <AvatarImage
                        src="https://tailus.io/images/reviews/rodrigo.webp"
                        alt="Rodrigo Aguilar"
                        height="400"
                        width="400"
                        loading="lazy"
                      />
                      <AvatarFallback>RA</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-sm font-medium">João Costa</p>
                      <span className="text-muted-foreground block text-sm">
                        CTO, DigitalSolutions
                      </span>
                    </div>
                  </div>
                </blockquote>
              </CardContent>
            </Card>
          </div>
        </ScrollView>
      </div>
    </section>
  );
}
