import Image from "next/image";
import { Globe, Package, ShieldCheck, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";
import Vehicles from "./_components/templates-logistics1-vehicles";
import Testimonials from "./_components/templates-logistics1-clients";

const Page = () => {
  const services = [
    {
      src: "/images/logistics/templates-logistic1-shipping-solutions.jpg",
      alt: "Freight Forwarding",
      title: "Freight Forwarding Services",
      desc: "Streamline your global shipping with our comprehensive freight forwarding solutions. Air, sea, or land transport, we manage it all.",
    },
    {
      src: "/images/logistics/templates-logistic1-shipping-warehouse.png",
      alt: "Warehouse",
      title: "Warehousing and Distribution",
      desc: "Secure, organize, and distribute your cargo with our state-of-the-art facilities. Includes inventory management and logistics support.",
    },
    {
      src: "/images/logistics/templates-logistic1-shipping-customers.jpg",
      alt: "Customs Clearance",
      title: "Customs Clearance and Documentation",
      desc: "Let us handle the complexity of customs regulations. We prepare all necessary documents and ensure smooth border crossings.",
    },
  ];

  const features = [
    {
      Icon: Globe,
      title: "Worldwide Transport",
      subtitle: "Any destination you need",
      desc: "We organise domestic and international deliveries of collective, complete, and partial shipments.",
      border: "border-b lg:border-r lg:border-b",
    },
    {
      Icon: Package,
      title: "Storing Your Cargo",
      subtitle: "2000 m2 warehouse",
      desc: "Our capacity gives us freedom to handle your cargo from storage to delivery—small scale to large scale.",
      border: "border-b lg:border-l lg:border-b",
    },
    {
      Icon: ShieldCheck,
      title: "100% Guaranteed",
      subtitle: "We stand by our service",
      desc: "Safe and on-time delivery is our priority. With modern vehicles and expert staff, we guarantee it.",
      border: "border-b lg:border-r lg:border-t",
    },
    {
      Icon: Wrench,
      title: "Vehicle Support",
      subtitle: "We service your machines",
      desc: "From trucks to vans, we provide service, maintenance, and registration support for your vehicles.",
      border: "border-b lg:border-l lg:border-t",
    },
  ];
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] w-full overflow-hidden">
          <Image
            src="/images/logistics/templates-logistic1-hero.jpg"
            alt="Truck and warehouse"
            className="w-full h-full object-cover object-center"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 md:px-6">
            <div className="flex flex-col justify-center items-center text-center text-white space-y-4">
              <h1 className="text-4xl sm:text-7xl md:text-9xl font-bold lg:font-black lg:tracking-wide px-4">
                STORAGE IN HOUSE
              </h1>

              <p className="max-w-3xl text-lg md:text-3xl">
                We take pride on our efficiency. When it comes to our local
                storage capabilities, 100% secure 2000m2.
              </p>
              <div className="flex justify-center mt-8">
                <TransitionLink href="#features">
                  <Button
                    variant={"ghost"}
                    className="border text-lg px-12 py-4 transition-all duration-300 hover:scale-105"
                  >
                    Learn More
                  </Button>
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-20 bg-gray-100">
          <div className="container mx-auto px-4 md:px-6 space-y-8">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left py-10">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                WHAT WE OFFER
              </h2>
              <p className="max-w-[600px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expert maintenance and repairs to keep your car running
                smoothly. Book now for reliable service at the best price!
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 col-span-2">
              {services.map((service) => (
                <div
                  key={service.title}
                  className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-6 text-gray-900 shadow-lg min-w-[280px] md:min-w-[320px] lg:min-w-[360px] snap-center"
                >
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                    <Image
                      src={service.src}
                      width={80}
                      height={80}
                      alt={service.alt}
                    />
                  </div>
                  <h3 className="text-xl font-bold text-center">
                    {service.title}
                  </h3>
                  <p className="text-sm text-gray-600 text-center">
                    {service.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section
          id="features"
          className="w-full h-full lg:h-[90vh] py-12 md:py-20 bg-white flex justify-center items-center"
        >
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-0">
              {features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-center p-2.5 border-b lg:border-r lg:border-b"
                >
                  <div className="flex items-start space-x-4">
                    <feature.Icon className="h-8 w-8 text-[#007bff] flex-shrink-0" />

                    <div>
                      <h3 className="text-xl font-bold text-gray-800">
                        {feature.title}
                      </h3>
                      <p className="text-gray-500 text-sm">
                        {feature.subtitle}
                      </p>
                      <p className="mt-2 text-gray-600">{feature.desc}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-1 flex flex-col items-center text-center space-y-4">
              <Image
                src="/images/logistics/templates-logistic1-storage.jpg"
                alt="Person operating a pallet jack in a warehouse"
                width={400}
                height={300}
                className="object-cover w-full h-[325px]"
              />
              <h3 className="text-xl font-bold text-gray-800">
                2000m2 STORAGE
              </h3>
              <p className="text-gray-600">
                We offer a big storage space, heated and with air condition, to
                store your good&apos;s safe and organized even for longer period
                of time.
              </p>
            </div>
          </div>
        </section>

        {/* Dedicated Section */}
        <section className="w-full min-h-[500px] grid grid-cols-1 lg:grid-cols-2">
          <div className="flex items-center justify-center bg-red-600 p-8 md:p-12 lg:py-16 text-white">
            <div className="max-w-md space-y-4 text-center lg:text-left">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight uppercase">
                DEDICATED AND DRIVEN TO DELIVER
              </h2>
              <p className="text-base md:text-lg leading-relaxed">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet. It uses a dictionary of over 200
                Latin words.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center bg-gray-100 p-8 md:p-12">
            <Image
              src="/images/logistics/templates-logistic1-dedicated.png"
              width={1000}
              height={1000}
              alt="World Map"
              className="w-full lg:max-w-2xl h-[350px]"
            />
          </div>
        </section>

        {/* Vehicle Park */}
        <Vehicles />

        {/* Clients That Trust Us */}
        <Testimonials />

        {/* CTA Banner */}
        <section id="cta" className="relative h-[640px] w-full overflow-hidden">
          <Image
            src="/images/logistics/templates-logistic1-cta.jpg"
            alt="Power lines and a white semi-truck on a highway at sunset"
            fill
            className="object-fit object-center"
          />
          j
          <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center px-4 md:px-6 text-center text-white space-y-4">
            <h2 className="text-3xl md:text-6xl font-bold leading-tight max-w-4xl">
              REACH YOUR DESTINATION 100% SURE AND SAFE
            </h2>
            <p className="text-lg md:text-2xl max-w-xl">
              We will take care of your cargo or your passenger and deliver them
              safe and on time
            </p>
            <div className="w-full flex items-center justify-center mt-8">
              <TransitionLink href="https://wa.me/6202390310" target="_blank">
                <Button
                  variant={"ghost"}
                  className="text-xl px-12 py-4 rounded-lg border"
                >
                  Contact Us
                </Button>
              </TransitionLink>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
