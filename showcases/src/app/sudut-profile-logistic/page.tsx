import Image from "next/image";
import { Globe, Package, ShieldCheck, Wrench } from "lucide-react";

import { Button } from "@/components/ui/button";
import TransitionLink from "@/components/shared/transition-link";
import Vehicles from "./_components/templates-logistics1-vehicles";
import Testimonials from "./_components/templates-logistics1-clients";

const Page = () => {
  return (
    <div className="flex flex-col">
      <div className="flex-1">
        {/* Hero Section */}
        <section id="home" className="relative h-[90vh] w-full overflow-hidden">
          <Image
            src="/images/logistics/templates-logistic1-hero.jpg"
            alt="Truck and warehouse"
            fill
            className="object-cover object-center"
            priority
          />
          <div className="absolute inset-0 bg-black/50 flex items-center justify-center px-4 md:px-6">
            <div className="text-center text-white space-y-4">
              <h1 className="text-7xl sm:text-8xl md:text-9xl font-bold px-4">
                STORAGE IN HOUSE
              </h1>

              <p className="text-lg md:text-xl">
                We take pride on our efficiency. When it comes to our local
                storage capabilities, 100% secure 2000m2.
              </p>
              <div className="flex justify-center space-x-4">
                <TransitionLink href="services" target="_blank">
                  <Button className="text-lg px-12 py-4 rounded-lg">
                    Learn More
                  </Button>
                </TransitionLink>
              </div>
            </div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-12 md:py-20 bg-black text-white">
          <div className="container mx-auto px-4 md:px-6 grid lg:grid-cols-3 lg:gap-12 gap-8">
            <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                WHAT WE OFFER
              </h2>
              <p className="max-w-[600px] text-gray-300 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                Expert maintenance and repairs to keep your car running
                smoothly. Book now for reliable service at the best price!
              </p>
            </div>

            <div className="flex flex-col lg:flex-row gap-6 col-span-2">
              <div className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-6 text-gray-900 shadow-lg min-w-[280px] md:min-w-[320px] lg:min-w-[360px] snap-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <Image
                    src="/images/logistics/templates-logistic1-shipping-solutions.jpg"
                    width={48}
                    height={48}
                    alt="Freight Forwarding Icon"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">
                  Freight Forwarding Services
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Streamline your global shipping with our comprehensive freight
                  forwarding solutions. Whether it&apos;s air, sea, or land
                  transport, we man...
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-6 text-gray-900 shadow-lg min-w-[280px] md:min-w-[320px] lg:min-w-[360px] snap-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <Image
                    src="/images/logistics/templates-logistic1-shipping-warehouse.png"
                    width={48}
                    height={48}
                    alt="Warehouse Icon"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">
                  Warehousing and Distribution
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Secure, organize, and distribute your cargo efficiently with
                  our state-of-the-art warehousing facilities. Our services
                  include inv...
                </p>
              </div>
              <div className="flex flex-col items-center justify-center space-y-4 rounded-xl bg-white p-6 text-gray-900 shadow-lg min-w-[280px] md:min-w-[320px] lg:min-w-[360px] snap-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                  <Image
                    src="/images/logistics/templates-logistic1-shipping-customers.jpg"
                    width={48}
                    height={48}
                    alt="Customs Clearance Icon"
                    className="w-full h-full"
                  />
                </div>
                <h3 className="text-xl font-bold text-center">
                  Customs Clearance and Documentation
                </h3>
                <p className="text-sm text-gray-600 text-center">
                  Navigating customs regulations can be complex—let us handle it
                  for you. Our customs clearance services include preparing all
                  nec...
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section id="features" className="py-12 md:py-20 bg-white">
          <div className="container mx-auto px-4 md:px-6 grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="flex items-start space-x-4">
                <Globe className="h-8 w-8 text-[#007bff] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    World wide transport
                  </h3>
                  <p className="text-gray-500 text-sm">
                    Any destination you need
                  </p>
                  <p className="mt-2 text-gray-600">
                    In accordance with your needs we organise domestic and
                    international deliveries of collective, complete and partial
                    shipments.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Package className="h-8 w-8 text-[#007bff] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Storing your cargo
                  </h3>
                  <p className="text-gray-500 text-sm">2000 m2 warehouse</p>
                  <p className="mt-2 text-gray-600">
                    Our capacities give us the freedom to take care of your
                    cargo from storage to delivery. From small cargo to cargo of
                    grand scale.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <ShieldCheck className="h-8 w-8 text-[#007bff] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    100% guaranteed
                  </h3>
                  <p className="text-gray-500 text-sm">
                    We stand by our service
                  </p>
                  <p className="mt-2 text-gray-600">
                    Safe and on time delivery of your goods is our primary
                    concern. with top notch staff highly modernised vehicles we
                    are confident we can do it.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4">
                <Wrench className="h-8 w-8 text-[#007bff] flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-gray-800">
                    Support for your vehicles
                  </h3>
                  <p className="text-gray-500 text-sm">
                    we can service your machines
                  </p>
                  <p className="mt-2 text-gray-600">
                    Having problems with your Truck, Van or any kind of
                    transportation vehicles. We cover everything from service to
                    registration.
                  </p>
                </div>
              </div>
            </div>
            <div className="lg:col-span-1 flex flex-col items-center text-center space-y-4">
              <Image
                src="/images/logistics/templates-logistic1-storage.jpg"
                alt="Person operating a pallet jack in a warehouse"
                width={400}
                height={300}
                className="object-cover w-full h-[300px]"
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

        {/* CTA Banner */}
        <section id="cta" className="relative h-[400px] w-full overflow-hidden">
          <Image
            src="/images/logistics/templates-logistic1-cta.jpg"
            alt="Power lines and a white semi-truck on a highway at sunset"
            fill
            className="object-fill object-center"
          />
          <div className="absolute inset-0 bg-black/50 flex flex-col items-start justify-center px-4 md:px-6 text-center text-white space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold leading-tight">
              REACH YOUR DESTINATION 100% SURE AND SAFE
            </h2>
            <p className="text-lg md:text-xl">
              We will take care of your cargo or your passenger and deliver them
              safe and on time
            </p>
            <div className="w-full flex items-center justify-center lg:items-start lg:justify-start">
              <TransitionLink href="https://wa.me/6202390310" target="_blank">
                <Button className="text-lg px-12 py-4 rounded-lg">
                  Contact Us
                </Button>
              </TransitionLink>
            </div>
          </div>
        </section>

        {/* Clients That Trust Us */}
        <Testimonials />
      </div>
    </div>
  );
};

export default Page;
