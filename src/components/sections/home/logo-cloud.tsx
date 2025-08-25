import { InfiniteSlider } from "@/components/motion-primitives/infinite-slider";

export default function LogoCloud() {
  return (
    <section className="py-8 md:py-16 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center md:flex-row">
          <div className="mb-6 md:mb-0 md:max-w-44 md:border-r md:pr-6">
            <p className="text-center md:text-end text-sm ">
              Powering with the best technologies
            </p>
          </div>
          <div className="relative w-full md:w-[calc(100%-11rem)]">
            <InfiniteSlider speedOnHover={20} speed={40} gap={80} className="py-4">
              <div className="flex items-center justify-center">
                <i className="devicon-amazonwebservices-plain-wordmark text-4xl md:text-5xl "></i>
              </div>

              <div className="flex items-center justify-center">
                <i className="devicon-linux-plain text-4xl md:text-5xl "></i>
              </div>

              <div className="flex items-center justify-center">
                <i className="devicon-cloudflare-plain text-4xl md:text-5xl "></i>
              </div>

              <div className="flex items-center justify-center">
                <i className="devicon-hyperv-original-wordmark text-4xl md:text-5xl "></i>
              </div>

              <div className="flex items-center justify-center">
                <i className="devicon-kubernetes-plain text-4xl md:text-5xl "></i>
              </div>
              
              <div className="flex items-center justify-center">
                <i className="devicon-redhat-plain text-4xl md:text-5xl "></i>
              </div>

              <div className="flex items-center justify-center">
                <i className="devicon-tensorflow-original text-4xl md:text-5xl "></i>
              </div>

              <div className="flex items-center justify-center">
                <i className="devicon-wordpress-plain text-4xl md:text-5xl "></i>
              </div>
            </InfiniteSlider>
          </div>
        </div>
      </div>
    </section>
  );
}
