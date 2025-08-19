import React from "react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
const Testimonials = () => {
  return (
    <section className="py-12 md:py-20 bg-white">
      <div className="container mx-auto px-4 md:px-6 space-y-10">
        <h2 className="text-3xl font-bold text-center text-gray-800">
          CLIENTS THAT TRUST US
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 items-center justify-items-center">
          <Image
            src="/images/logistics/templates-logistic1-client1.jpg"
            alt="BuildPro+ logo"
            width={150}
            height={50}
            className="w-full h-32 object-cover rounded-lg"
          />
          <Image
            src="/images/logistics/templates-logistic1-client2.jpg"
            alt="Constructis logo"
            width={150}
            height={50}
            className="w-full h-32 object-cover rounded-lg"
          />
          <Image
            src="/images/logistics/templates-logistic1-client3.jpg"
            alt="GiantBuild logo"
            width={150}
            height={50}
            className="w-full h-32 object-cover rounded-lg"
          />
          <Image
            src="/images/logistics/templates-logistic1-client4.jpg"
            alt="BuildPro+ logo"
            width={150}
            height={50}
            className="w-full h-32 object-cover rounded-lg"
          />
          <Image
            src="/images/logistics/templates-logistic1-client5.jpg"
            alt="Constructis logo"
            width={150}
            height={50}
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col md:flex-row items-center space-y-6 md:space-y-0 md:space-x-8 bg-gray-100 p-6 rounded-lg">
          <Avatar className="h-24 w-24 flex-shrink-0">
            <AvatarImage
              src="/images/logistics/templates-logistic1-client.jpg"
              alt="Terence Wheels"
            />
            <AvatarFallback>TW</AvatarFallback>
          </Avatar>
          <div className="text-center md:text-left space-y-2">
            <p className="text-lg italic text-gray-700">
              &quot;Our cargo was picked up, stored and all paperwork covered
              for its transport. It was delivered on time and with friendly
              staff, you just cannot go wrong.&quot;
            </p>
            <p className="font-semibold text-gray-800">
              Terence Wheels, CEO/ Transport inc.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
