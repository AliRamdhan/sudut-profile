import { notFound } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Phone, Mail } from "lucide-react";
import Image from "next/image";
import { activities, activityDetails } from "../../_lib/data";
import TransitionLink from "@/components/shared/transition-link";

const Page = ({ params }: { params: { slug: string } }) => {
  const event = activityDetails[params.slug as keyof typeof activityDetails];

  if (!event) {
    notFound();
  }
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[520px] bg-slate-900 text-white">
        <div className="absolute inset-0">
          <Image
            src={event.heroImage}
            alt={event.title}
            className="w-full h-full object-cover object-center opacity-80"
            width={1024}
            height={1024}
          />
          <div className="absolute inset-0 bg-slate-900/60"></div>
        </div>

        <div className="h-full relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 flex justify-center items-center">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 justify-center items-center">
            <div>
              <h2 className="text-4xl lg:text-5xl font-bold mb-4">
                {event.title}
              </h2>
              {event.subtitle && (
                <p className="text-lg text-gray-300 mb-6">{event.subtitle}</p>
              )}
              <p className="text-gray-300 mb-6">{event.descriptions[0]}</p>

              <div className="flex items-center text-gray-300">
                <MapPin className="w-5 h-5 mr-2" />
                <span>{event.location.venue}</span>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-white text-gray-900 rounded-lg p-6 shadow-xl">
              <h3 className="text-xl font-semibold mb-4">Date & Time</h3>
              <p className="text-gray-600 mb-4">{event.dateTime}</p>
              <p className="text-gray-600 mb-6">Add to Calendar</p>

              <Button className="w-full bg-purple-600 hover:bg-purple-700 text-white mb-4">
                Book Now
              </Button>

              <p className="text-center text-gray-600">Powered by Eventbox</p>
            </div>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Description</h3>
              {event.descriptions.map((desc, i) => (
                <p
                  key={i}
                  className="text-gray-600 leading-relaxed mb-4 last:mb-0"
                >
                  {desc}
                </p>
              ))}
            </section>

            {/* Hours */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Hours</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-600">Doors Open</span>
                  <span className="font-medium">{event.hours.doorsOpen}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Show Starts</span>
                  <span className="font-medium">{event.hours.showStarts}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Show Ends</span>
                  <span className="font-medium">{event.hours.showEnds}</span>
                </div>
              </div>
            </section>

            {/* Contact */}
            <section>
              <h3 className="text-2xl font-bold mb-4">
                How can I contact the organizer?
              </h3>
              <p className="text-gray-600 mb-4">
                Please use the contact information below to reach out to the
                event organizer with any questions or concerns.
              </p>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Phone className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">{event.contact.phone}</span>
                </div>
                <div className="flex items-center">
                  <Mail className="w-5 h-5 mr-3 text-gray-400" />
                  <span className="text-gray-600">{event.contact.email}</span>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column */}
          <div className="space-y-8">
            {/* Event Location */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Event Location</h3>
              <div className="bg-gray-200 rounded-lg h-48 mb-4 flex items-center justify-center">
                <div className="text-center">
                  <MapPin className="w-12 h-12 text-purple-600 mx-auto mb-2" />
                  <p className="text-gray-600">Map View</p>
                </div>
              </div>
              <h4 className="font-semibold mb-2">{event.location.name}</h4>
              <p className="text-gray-600 text-sm mb-1">
                {event.location.venue}
              </p>
              <p className="text-gray-600 text-sm">{event.location.address}</p>
            </section>

            {/* Tags */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Tags</h3>
              <div className="flex flex-wrap gap-2">
                {event.tags.map((tag, i) => (
                  <span
                    key={i}
                    className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </section>

            {/* Share With Friends */}
            <section>
              <h3 className="text-2xl font-bold mb-4">Share With Friends</h3>
              <div className="flex space-x-3">
                <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">f</span>
                </div>
                <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">t</span>
                </div>
                <div className="w-10 h-10 bg-blue-700 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-bold">in</span>
                </div>
              </div>
            </section>
          </div>
        </div>

        {/* Other Events Section */}
        <section className="mt-16">
          <h3 className="text-2xl font-bold mb-8">
            Other Activities of Sudut Profile Corp
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Event Card 1 */}
            {activities.slice(0, 6).map((activity) => (
              <Card
                key={activity.id}
                className="overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105"
              >
                <TransitionLink
                  href={`/sudut-profile-corp/activities/${activity.slug}`}
                >
                  <div className="relative">
                    <Image
                      src={activity.imageUrl}
                      alt={activity.title}
                      className="w-full h-64 object-contain object-center"
                      width={1024}
                      height={1024}
                    />
                    <div className="absolute top-3 left-3 bg-purple-600 text-white px-2 py-1 rounded text-sm">
                      LIVE
                    </div>
                  </div>
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-500">
                        {activity.date}
                      </span>
                    </div>
                    <h4 className="font-semibold mb-1">
                      {activity.title} - {activity.category}
                    </h4>
                    <p className="text-gray-600 text-sm">
                      {activity.shortDescription}
                    </p>
                  </CardContent>
                </TransitionLink>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Page;
