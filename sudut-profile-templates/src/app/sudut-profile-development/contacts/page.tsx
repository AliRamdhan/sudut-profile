import { Mail, Map, PhoneCall } from "lucide-react";
import React from "react";

const Page = () => {
  return (
    <section>
      <div className="container px-6 py-12 mx-auto">
        <div>
          <p className="font-medium">Contact us</p>

          <h1
            className={`italic text-4xl md:text-6xl font-semibold italic tracking-tighter leading-[130%]`}
          >
            Get in touch
          </h1>

          <p className="mt-3 text-gray-500">
            Our friendly team would love to hear from you.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-12 mt-10 lg:grid-cols-3">
          <div className="overflow-hidden rounded-lg lg:col-span-2 h-96 lg:h-auto">
            <iframe
              title="Lokasi SPBU Pertamina 44.571.28 Pedaringan"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63281.77907061647!2d110.8148224!3d-7.562854399999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a178b4810d739%3A0x9eaf11ab545d1bbd!2sSPBU%20Pertamina%2044.571.28%20Pedaringan!5e0!3m2!1sen!2sid!4v1755189963360!5m2!1sen!2sid"
              style={{ border: 0, width: "100%", height: "100%" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-1">
            <div>
              <span className="inline-block p-3 text-gray-500 rounded-full bg-gray-100/80">
                <Mail className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Email
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Our friendly team is here to help.
              </p>
              <p className="mt-2 text-sm text-gray-500">hello@merakiui.com</p>
            </div>

            <div>
              <span className="inline-block p-3 text-gray-500 rounded-full bg-gray-100/80">
                <Map className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Office
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Come say hello at our office HQ.
              </p>
              <p className="mt-2 text-sm text-gray-500">
                100 Smith Street Collingwood VIC 3066 AU
              </p>
            </div>

            <div>
              <span className="inline-block p-3 text-gray-500 rounded-full bg-gray-100/80">
                <PhoneCall className="w-5 h-5" />
              </span>

              <h2 className="mt-4 text-base font-medium text-gray-800">
                Phone
              </h2>
              <p className="mt-2 text-sm text-gray-500">
                Mon-Fri from 8am to 5pm.
              </p>
              <p className="mt-2 text-sm text-gray-500">+1 (555) 000-0000</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
