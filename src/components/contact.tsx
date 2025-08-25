import { Mail, MapPin, PhoneCall } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { Card } from "@/components/ui/card";
import Link from "next/link";
import { ScrollView } from "./scroll-view";

export default function FeaturesSection() {
  return (
    <section className="relative py-8 md:py-16 bg-gradient-to-b from-blue-500/[0.03] to-background overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/[0.05] via-transparent to-blue-600/[0.03] blur-3xl" />
      
      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-12 lg:grid-cols-5 lg:gap-24">
          <div className="lg:col-span-2">
            <div className="md:pr-6 lg:pr-0">
              <ScrollView>
                <h2 className="text-4xl font-semibold lg:text-5xl">
                  Get in touch
                </h2>
              </ScrollView>
              <ScrollView>
                <p className="mt-6 text-muted-foreground">
                  We&apos;d love to hear from you! Feel free to reach out to us
                  for any inquiries or to schedule a call.
                </p>
              </ScrollView>
            </div>
            <ScrollView delay={0.2}>
              <ul className="mt-8 divide-y divide-blue-500/20 border-y border-blue-500/20 *:flex *:items-center *:gap-3 *:py-3">
                <li>
                  <Link href="#link" className="hover:text-blue-400 transition-colors relative group">
                    <Mail className="size-5 mr-2 inline text-blue-400" />
                    <span>deluve.solutions@gmail.com</span>
                    <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/40 via-blue-300/60 to-blue-400/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                  </Link>
                </li>
                
                <li>
                  <Link href="#link" className="hover:text-blue-400 transition-colors relative group">
                    <MapPin className="size-5 mr-2 inline text-blue-400" />
                    <span>Avenida Julius Nyerere, Maputo, Mozambique</span>
                    <div className="absolute -bottom-0.5 left-0 w-full h-0.5 bg-gradient-to-r from-blue-400/40 via-blue-300/60 to-blue-400/40 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-out"></div>
                  </Link>
                </li>
                
              </ul>
            </ScrollView>
          </div>
          <div className="lg:col-span-3">
            <ScrollView>
              <Card className="mx-auto mt-12 max-w-lg p-8 shadow-md sm:p-16 w-full border-blue-500/20 hover:border-blue-400/30 transition-colors">
                <div>
                  <h3 className="text-lg font-semibold">
                    Let&apos;s get you to the right place
                  </h3>
                  <p className="mt-4 text-sm text-muted-foreground">
                    Reach out to our sales team! We&apos;re eager to learn more about
                    how you plan to use our application.
                  </p>
                </div>

                <form
                  action=""
                  className="**:[&>label]:block mt-12 space-y-6 *:space-y-3"
                >
                  <div>
                    <Label htmlFor="name">Full name</Label>
                    <Input type="text" id="name" required className="border-blue-500/20 focus:border-blue-400/40 focus:ring-blue-400/20" />
                  </div>

                  <div>
                    <Label htmlFor="email">Work Email</Label>
                    <Input type="email" id="email" required className="border-blue-500/20 focus:border-blue-400/40 focus:ring-blue-400/20" />
                  </div>

                  {/* <div>
                            <Label htmlFor="country">Country/Region</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Country/Region" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">DR Congo</SelectItem>
                                    <SelectItem value="2">United States</SelectItem>
                                    <SelectItem value="3">France</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="website">Company Website</Label>
                            <Input type="url" id="website" />
                            <span className="text-muted-foreground inline-block text-sm">Must start with 'https'</span>
                        </div> */}

                  {/* <div>
                            <Label htmlFor="job">Job function</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Job Function" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="1">Finance</SelectItem>
                                    <SelectItem value="2">Education</SelectItem>
                                    <SelectItem value="3">Legal</SelectItem>
                                    <SelectItem value="4">More</SelectItem>
                                </SelectContent>
                            </Select>
                        </div> */}

                  <div>
                    <Label htmlFor="msg">Message</Label>
                    <Textarea id="msg" rows={3} className="border-blue-500/20 focus:border-blue-400/40 focus:ring-blue-400/20" />
                  </div>

                  <Button className="bg-blue-500 hover:bg-blue-600 text-white border-blue-500/20 hover:border-blue-400/30 shadow-lg shadow-blue-500/25">Submit</Button>
                </form>
              </Card>
            </ScrollView>
          </div>
        </div>
      </div>
    </section>
  );
}
