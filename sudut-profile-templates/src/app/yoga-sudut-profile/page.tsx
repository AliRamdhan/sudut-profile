import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight, ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Page = () => {
  return (
    <div>
      {/* Header */}
      <header className="flex items-center justify-between p-6 md:p-8">
        <div className="flex items-center gap-4">
          <Link href="#" className="text-2xl font-bold tracking-tight">
            yoggo
          </Link>
        </div>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="#" className="hover:text-gray-900 transition-colors">
            CLASSES
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            INSTRUCTORS
          </Link>
          <Link href="#" className="hover:text-gray-900 transition-colors">
            SCHEDULE
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="rounded-full px-4 py-2 text-sm bg-transparent"
              >
                EN
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>ES</DropdownMenuItem>
              <DropdownMenuItem>FR</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <Button className="rounded-full px-6 py-2 text-sm bg-black text-white hover:bg-gray-800">
            ONLINE CONSULTATION
          </Button>
        </div>
      </header>
      <main className="w-full bg-[#F8F7F3] rounded-xl shadow-lg overflow-hidden flex flex-col justify-center items-center">
        {/* Hero Section */}
        <section className="relative max-w-screen-xl px-4 py-8 h-[600px] md:h-[700px] overflow-hidden">
          <Image
            src="/placeholder.svg?height=700&width=1200"
            alt="Yoga pose"
            layout="fill"
            objectFit="cover"
            className="rounded-xl"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center p-8">
            <div className="absolute top-8 left-8 bg-white/80 backdrop-blur-sm rounded-full px-4 py-2 text-sm font-medium flex items-center gap-2">
              <ChevronLeft className="w-4 h-4" />
              INDIVIDUAL YOGA
              <ChevronRight className="w-4 h-4" />
            </div>
            <Button className="absolute bottom-8 right-8 rounded-full px-6 py-3 text-sm bg-black text-white hover:bg-gray-800 flex items-center gap-2">
              BOOK A CLASS <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </section>

        {/* Why Us Section */}
        <section className="max-w-screen-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-5xl font-light mb-4">WHY US</h2>
            <p className="text-lg font-medium mb-4">
              Connect your body to your soul.
            </p>
            <p className="text-gray-600 mb-6">
              Through our carefully selected strategies we create a harmony
              between your mind and your body, thus reducing stress, enhancing
              well-being & increasing emotional stability.
            </p>
            <div className="grid grid-cols-3 gap-4">
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Yoga meditation"
                width={150}
                height={150}
                className="rounded-lg object-cover aspect-square"
              />
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Yoga stretching"
                width={150}
                height={150}
                className="rounded-lg object-cover aspect-square"
              />
              <Image
                src="/placeholder.svg?height=150&width=150"
                alt="Yoga pose close up"
                width={150}
                height={150}
                className="rounded-lg object-cover aspect-square"
              />
            </div>
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-gray-200 py-4"
            >
              <AccordionTrigger className="text-xl font-light flex justify-between items-center w-full">
                BENEFITS
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Yoga offers numerous benefits, including improved flexibility,
                strength, balance, and mental well-being. It can reduce stress,
                enhance focus, and promote overall health.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-b border-gray-200 py-4"
            >
              <AccordionTrigger className="text-xl font-light flex justify-between items-center w-full">
                PROGRAMS
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Our programs are designed for all levels, from beginners to
                advanced practitioners. We offer a variety of styles, including
                Vinyasa, Hatha, Kundalini, and Ashtanga, tailored to your needs.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-b border-gray-200 py-4"
            >
              <AccordionTrigger className="text-xl font-light flex justify-between items-center w-full">
                HISTORY
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Yoggo was established in 2004 with a vision to create a serene
                and welcoming space for individuals to explore the
                transformative power of yoga. We have been serving our community
                for over 20 years.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Scrolling Banner 1 */}
        <div className="w-full bg-black text-white py-3 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex">
            {"FREE TRIAL CLASS • ".repeat(10)}
          </div>
        </div>

        {/* Classes Section */}
        <section className="max-w-screen-xl p-8 md:p-12">
          <h2 className="text-5xl font-light mb-8">CLASSES</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-gray-100 rounded-xl p-6 flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-medium mb-2">INDIVIDUAL</h3>
                <p className="text-gray-600 text-sm mb-4">From $89/month</p>
                <p className="text-gray-600 text-sm mb-4">
                  Carefully selected classes for groups and individuals. Online
                  classes with a program from the market&apos;s top instructors.
                  Promotions & discounts for our regular customers.
                </p>
              </div>
              <Button
                variant="outline"
                className="rounded-full px-4 py-2 text-sm flex items-center gap-2 self-start bg-transparent"
              >
                View details <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="relative bg-gray-200 rounded-xl overflow-hidden h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Group yoga class"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">GROUP</h3>
                <p className="text-gray-200 text-sm mb-4">From $49/month</p>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm flex items-center gap-2 self-start bg-white text-black hover:bg-gray-100"
                >
                  View details <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
            <div className="relative bg-gray-200 rounded-xl overflow-hidden h-[300px]">
              <Image
                src="/placeholder.svg?height=300&width=400"
                alt="Online yoga class"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-6 text-white">
                <h3 className="text-2xl font-medium mb-2">ONLINE</h3>
                <p className="text-gray-200 text-sm mb-4">From $19/month</p>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm flex items-center gap-2 self-start bg-white text-black hover:bg-gray-100"
                >
                  View details <ArrowRight className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Mid-page Banner */}
        <section className="relative max-w-screen-xl h-[400px] md:h-[500px] overflow-hidden bg-gray-800 flex items-center justify-center p-8">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Yoga studio banner"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="relative z-10 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
              The one yoga studio <br /> you&apos;ll ever need.
            </h2>
            <p className="text-lg mb-6">
              Established in far 2004, we currently have 1K+ monthly customers.
            </p>
            <div className="flex justify-center gap-4 mb-6">
              <Button
                variant="outline"
                className="rounded-full px-4 py-2 text-sm bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                20 YEARS EXPERIENCE
              </Button>
              <Button
                variant="outline"
                className="rounded-full px-4 py-2 text-sm bg-transparent border-white text-white hover:bg-white hover:text-black"
              >
                16 YOGA INSTRUCTORS
              </Button>
            </div>
            <Button className="rounded-full px-8 py-3 text-base bg-white text-black hover:bg-gray-200">
              TAKE A TRIAL CLASS
            </Button>
          </div>
        </section>

        {/* Yoga Styles Section */}
        <section className="max-w-screen-xl p-8 md:p-12 grid md:grid-cols-2 gap-8 items-start">
          <div>
            <h2 className="text-5xl font-light mb-4">VINYASA</h2>
            <p className="text-gray-600 mb-6">
              Vinyasa yoga is a creative form of yoga where poses are linked
              together with the breath in a flowing sequence. The beauty of
              Vinyasa is the variety.
            </p>
            <Image
              src="/placeholder.svg?height=250&width=400"
              alt="Vinyasa yoga"
              width={400}
              height={250}
              className="rounded-xl object-cover mb-6"
            />
          </div>
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem
              value="item-1"
              className="border-b border-gray-200 py-4"
            >
              <AccordionTrigger className="text-xl font-light flex justify-between items-center w-full">
                HATHA
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Hatha yoga is a traditional form of yoga that focuses on holding
                poses for longer periods, emphasizing alignment and breath
                control. It&apos;s great for beginners.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-2"
              className="border-b border-gray-200 py-4"
            >
              <AccordionTrigger className="text-xl font-light flex justify-between items-center w-full">
                KUNDALINI
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Kundalini yoga incorporates dynamic movements, breathing
                techniques, meditation, and chanting to awaken energy and
                promote spiritual growth.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem
              value="item-3"
              className="border-b border-gray-200 py-4"
            >
              <AccordionTrigger className="text-xl font-light flex justify-between items-center w-full">
                ASHTANGA
              </AccordionTrigger>
              <AccordionContent className="text-gray-600 pt-2">
                Ashtanga yoga is a physically demanding practice with a fixed
                sequence of poses, designed to build strength, flexibility, and
                stamina.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Scrolling Banner 2 */}
        <div className="bg-black text-white py-3 overflow-hidden whitespace-nowrap">
          <div className="animate-marquee flex">
            {"FREE ONLINE CONSULTATION • ".repeat(10)}
          </div>
        </div>

        {/* Instructors Section */}
        <section className="max-w-screen-xl px-4 py-8 p-8 md:p-12">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-5xl font-light">INSTRUCTORS</h2>
            <Link href="#" className="text-sm text-gray-600 hover:underline">
              All instructors
            </Link>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            <div className="relative bg-gray-100 rounded-xl overflow-hidden h-[350px]">
              <Image
                src="/placeholder.svg?height=350&width=300"
                alt="Instructor Agata Kowalski"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="font-medium">AGATA KOWALSKI</h3>
                <p className="text-sm text-gray-200">HATHA • VINYASA</p>
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-xl overflow-hidden h-[350px]">
              <Image
                src="/placeholder.svg?height=350&width=300"
                alt="Instructor Katarzyna Petrakova"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="font-medium">KATARZYNA PETRAKOVA</h3>
                <p className="text-sm text-gray-200">VINYASA</p>
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-xl overflow-hidden h-[350px]">
              <Image
                src="/placeholder.svg?height=350&width=300"
                alt="Instructor Alex Johnson"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="font-medium">ALEX JOHNSON</h3>
                <p className="text-sm text-gray-200">KUNDALINI</p>
              </div>
            </div>
            <div className="relative bg-gray-100 rounded-xl overflow-hidden h-[350px]">
              <Image
                src="/placeholder.svg?height=350&width=300"
                alt="Instructor Maria Garcia"
                layout="fill"
                objectFit="cover"
              />
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                <h3 className="font-medium">MARIA GARCIA</h3>
                <p className="text-sm text-gray-200">ASHTANGA</p>
              </div>
            </div>
          </div>
        </section>

        {/* Schedule Section */}
        <section className="max-w-screen-xl p-8 md:p-12">
          <h2 className="text-5xl font-light mb-8">SCHEDULE</h2>
          <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>
              <span className="font-medium">17 JULY - 23 JULY</span>
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-transparent"
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
            <div className="flex gap-4">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full px-4 py-2 text-sm bg-transparent"
                  >
                    GROUP CLASSES
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Individual Classes</DropdownMenuItem>
                  <DropdownMenuItem>Online Classes</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button
                    variant="outline"
                    className="rounded-full px-4 py-2 text-sm bg-transparent"
                  >
                    HATHA
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuItem>Vinyasa</DropdownMenuItem>
                  <DropdownMenuItem>Kundalini</DropdownMenuItem>
                  <DropdownMenuItem>Ashtanga</DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
              <Link
                href="#"
                className="text-sm text-gray-600 hover:underline flex items-center"
              >
                Open calendar
              </Link>
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-6 gap-4">
            {/* Monday */}
            <div className="bg-gray-100 rounded-xl p-4 flex flex-col gap-4">
              <div className="text-center font-medium">Monday</div>
              <div className="text-center text-2xl font-bold">17</div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">09:00am - 10:00am</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">03:00pm - 04:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
            </div>

            {/* Tuesday */}
            <div className="bg-gray-100 rounded-xl p-4 flex flex-col gap-4">
              <div className="text-center font-medium">Tuesday</div>
              <div className="text-center text-2xl font-bold">18</div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">12:00pm - 01:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">06:00pm - 07:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
            </div>

            {/* Wednesday */}
            <div className="bg-gray-100 rounded-xl p-4 flex flex-col gap-4">
              <div className="text-center font-medium">Wednesday</div>
              <div className="text-center text-2xl font-bold">19</div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">09:00am - 10:00am</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">03:00pm - 04:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
            </div>

            {/* Thursday */}
            <div className="bg-gray-100 rounded-xl p-4 flex flex-col gap-4">
              <div className="text-center font-medium">Thursday</div>
              <div className="text-center text-2xl font-bold">20</div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">12:00pm - 01:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">06:00pm - 07:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
            </div>

            {/* Friday */}
            <div className="bg-gray-100 rounded-xl p-4 flex flex-col gap-4">
              <div className="text-center font-medium">Friday</div>
              <div className="text-center text-2xl font-bold">21</div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">09:00am - 10:00am</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">03:00pm - 04:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
            </div>

            {/* Saturday */}
            <div className="bg-gray-100 rounded-xl p-4 flex flex-col gap-4">
              <div className="text-center font-medium">Saturday</div>
              <div className="text-center text-2xl font-bold">22</div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">12:00pm - 01:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-sm text-gray-600">06:00pm - 07:00pm</div>
                <div className="font-medium">HATHA</div>
                <Button
                  variant="outline"
                  className="rounded-full px-4 py-2 text-sm bg-transparent"
                >
                  BOOK
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Bottom Banner */}
        <section className="relative max-w-screen-xl h-[400px] md:h-[500px] overflow-hidden bg-gray-800 flex items-center justify-center p-8">
          <Image
            src="/placeholder.svg?height=500&width=1200"
            alt="Yoga harmony banner"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
          />
          <div className="relative z-10 text-white text-center">
            <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight">
              The ultimate place <br /> to find harmony <br /> of body, mind &
              soul.
            </h2>
            <p className="text-lg mb-6">
              Don&apos;t believe? Enroll to a trial class, it&apos;s completely
              free of charge.
            </p>
            <Button className="rounded-full px-8 py-3 text-base bg-white text-black hover:bg-gray-200">
              TAKE A TRIAL CLASS
            </Button>
          </div>
        </section>

        {/* Footer */}
      </main>
      <footer className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
        <div className="flex flex-col gap-4">
          <Link href="#" className="text-2xl font-bold tracking-tight">
            yoggo
          </Link>
          <div className="flex gap-4">
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Instagram
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              TikTok
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-900">
              Youtube
            </Link>
          </div>
        </div>
        <div>
          <h3 className="font-medium mb-4">Quick Links</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="#" className="hover:underline">
                Classes
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Instructors
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Schedule
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">Company</h3>
          <ul className="space-y-2 text-gray-600">
            <li>
              <Link href="#" className="hover:underline">
                Contacts
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                About us
              </Link>
            </li>
            <li>
              <Link href="#" className="hover:underline">
                Team roles
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-medium mb-4">Newsletter</h3>
          <p className="text-gray-600 mb-4">
            Subscribe to be aware of our regular promotions & exclusive offers!
          </p>
          <div className="flex w-full max-w-sm items-center space-x-2">
            <Input type="email" placeholder="Email" className="rounded-full" />
            <Button
              type="submit"
              className="rounded-full px-4 py-2 bg-black text-white hover:bg-gray-800"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
        <div className="col-span-full flex flex-col md:flex-row justify-between items-center mt-8 border-t border-gray-200 pt-6 text-gray-600 text-xs">
          <p>Copyright © 2023 Yoggo Studio. All rights reserved.</p>
          <div className="flex gap-4 mt-4 md:mt-0">
            <Link href="#" className="hover:underline">
              Privacy Policy
            </Link>
            <Link href="#" className="hover:underline">
              Terms & Conditions
            </Link>
            <Link href="#" className="hover:underline">
              Support
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
};
export default Page;
