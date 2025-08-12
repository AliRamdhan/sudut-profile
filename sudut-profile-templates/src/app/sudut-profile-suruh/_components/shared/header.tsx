import { ChevronDown, Clock, Logs, Mail, Phone } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import TransitionLink from "@/components/shared/transition-link";
const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-black border-b border-gray-800">
      {/* Top bar */}
      <div className="py-2 text-sm border-b border-gray-700">
        <div className="container mx-auto flex flex-col sm:flex-row items-center justify-between px-4 md:px-6 space-y-2 sm:space-y-0">
          {/* Social icons */}
          <div className="flex items-center space-x-4">
            {/* Facebook */}
            <TransitionLink
              href="#"
              className="text-gray-300 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <title>Facebook</title>
                <path d="M22 12.073C22 6.484 17.523 2 12 2S2 6.484 2 12.073C2 17.09 5.657 21.254 10.438 21.98v-6.99H7.898v-2.92h2.54V9.845c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.196 2.238.196v2.46h-1.26c-1.242 0-1.63.772-1.63 1.562v1.875h2.773l-.444 2.92h-2.329v6.99C18.343 21.254 22 17.09 22 12.073z" />
              </svg>
            </TransitionLink>
            {/* Twitter */}
            <TransitionLink
              href="#"
              className="text-gray-300 hover:text-gray-600"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-4 h-4"
              >
                <title>Twitter</title>
                <path d="M22.162 5.656c-.63.28-1.306.47-2.016.56.725-.434 1.28-1.12 1.544-1.94-.678.402-1.428.695-2.226.853C18.92 4.7 18.03 4.25 17.05 4.25c-1.86 0-3.372 1.51-3.372 3.373 0 .264.03.52.087.766-2.803-.14-5.29-1.48-6.955-3.52-.29.5-.456 1.083-.456 1.703 0 1.176.598 2.213 1.506 2.822-.556-.017-1.08-.17-1.539-.425v.043c0 1.642 1.17 3.01 2.724 3.322-.285.078-.585.12-.894.12-.218 0-.43-.02-.637-.062.43 1.345 1.678 2.327 3.157 2.354-1.158.907-2.62 1.45-4.205 1.45-.273 0-.544-.016-.81-.047 1.5.962 3.28 1.523 5.194 1.523 6.233 0 9.644-5.162 9.644-9.636 0-.146-.003-.292-.01-.436.664-.48 1.24-1.08 1.696-1.767-.607.27-1.26.452-1.945.535.7-.42 1.236-1.085 1.49-1.878z" />
              </svg>
            </TransitionLink>
            {/* Instagram */}
            <TransitionLink
              href="#"
              className="text-gray-300 hover:text-gray-600"
            >
              <svg
                role="img"
                aria-label="Instagram"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                width="24"
                height="24"
                fill="currentColor"
                className="w-3 h-3"
              >
                <title>Instagram</title>
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.17.054 1.97.24 2.43.405a4.92 4.92 0 011.675 1.09c.48.48.81 1.05 1.09 1.675.165.46.352 1.26.405 2.43.058 1.266.07 1.646.07 4.85s-.012 3.584-.07 4.85c-.054 1.17-.24 1.97-.405 2.43a4.92 4.92 0 01-1.09 1.675 4.92 4.92 0 01-1.675 1.09c-.46.165-1.26.352-2.43.405-1.266.058-1.646.07-4.85.07s-3.584-.012-4.85-.07c-1.17-.054-1.97-.24-2.43-.405a4.902 4.902 0 01-1.675-1.09 4.902 4.902 0 01-1.09-1.675c-.165-.46-.352-1.26-.405-2.43C2.175 15.747 2.163 15.367 2.163 12s.012-3.584.07-4.85c.054-1.17.24-1.97.405-2.43a4.902 4.902 0 011.09-1.675 4.902 4.902 0 011.675-1.09c.46-.165 1.26-.352 2.43-.405C8.416 2.175 8.796 2.163 12 2.163zm0 1.838c-3.17 0-3.548.012-4.796.069-1.02.045-1.574.215-1.944.357-.495.18-.848.396-1.22.768-.372.372-.588.725-.768 1.22-.142.37-.312.924-.357 1.944-.057 1.248-.069 1.626-.069 4.796s.012 3.548.069 4.796c.045 1.02.215 1.574.357 1.944.18.495.396.848.768 1.22.372.372.725.588 1.22.768.37.142.924.312 1.944.357 1.248.057 1.626.069 4.796.069s3.548-.012 4.796-.069c1.02-.045 1.574-.215 1.944-.357.495-.18.848-.396 1.22-.768.372-.372.588-.725.768-1.22.142-.37.312-.924.357-1.944.057-1.248.069-1.626.069-4.796s-.012-3.548-.069-4.796c-.045-1.02-.215-1.574-.357-1.944-.18-.495-.396-.848-.768-1.22-.372-.372-.725-.588-1.22-.768-.37-.142-.924-.312-1.944-.357C15.548 4.013 15.17 4.001 12 4.001zM12 7.838a4.162 4.162 0 100 8.324 4.162 4.162 0 000-8.324zm0 1.838a2.324 2.324 0 110 4.648 2.324 2.324 0 010-4.648zM17.844 6.162a1.02 1.02 0 11-2.04 0 1.02 1.02 0 012.04 0z" />
              </svg>
            </TransitionLink>
          </div>

          {/* Contact info */}
          <div className="flex flex-wrap justify-center sm:justify-end items-center gap-4 text-xs sm:text-sm">
            <div className="flex items-center space-x-1">
              <Clock className="h-4 w-4" />
              <span>Mon - Sat: 7:00 - 17:00</span>
            </div>
            <div className="flex items-center space-x-1">
              <Phone className="h-4 w-4" />
              <span>+386 40 111 5555</span>
            </div>
            <div className="flex items-center space-x-1">
              <Mail className="h-4 w-4" />
              <span>info@yourdomain.com</span>
            </div>
          </div>
        </div>
      </div>
      <div className="h-20 container py-4 shadow-sm mx-auto flex items-center justify-between px-4 md:px-6">
        <div className="absolute inset-0 bg-cover bg-center opacity-20"></div>
        <div className="relative z-10 flex w-full items-center justify-between">
          <TransitionLink href="#" className="mr-6 flex items-center">
            <p className="text-xl font-bold underline">SUDUT PROFILE SURUH</p>
          </TransitionLink>

          <div className="flex items-center gap-4 relative z-10">
            <Button
              variant="secondary"
              className="hidden md:inline-flex bg-white text-[#0a0a2a] hover:bg-gray-200"
            >
              Hubungi Kami
            </Button>
            <div className="hidden md:flex items-center text-sm">
              <span className="text-gray-400">ID</span>
              <ChevronDown className="w-4 h-4 ml-1 text-gray-400" />
            </div>
            {/* Sheet Trigger for all screen sizes */}
            <Sheet>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="text-white border border-white rounded-full p-2.5"
                >
                  <Logs className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="bg-black text-white border-l border-gray-800 w-full max-w-md sm:max-w-xl flex flex-col p-6"
              >
                <TransitionLink href="/" className="flex items-center">
                  <p className="text-xl font-bold underline mt-8">
                    SUDUT PROFILE SURUH
                  </p>
                </TransitionLink>
                <div className="flex flex-1 overflow-y-auto">
                  <div className="flex-1 pr-4 py-6 border-r border-gray-800">
                    <div className="grid gap-4">
                      <TransitionLink
                        href="/sudut-profile-suruh/services"
                        className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-400 border-b"
                      >
                        Services
                      </TransitionLink>
                      <TransitionLink
                        href="#about-us"
                        className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-400 border-b"
                      >
                        Tentang Kami
                      </TransitionLink>
                      <TransitionLink
                        href="#solution"
                        className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-400 border-b"
                      >
                        Solusi
                      </TransitionLink>
                      <TransitionLink
                        href="#testimonials"
                        className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-400 border-b"
                      >
                        Kisah Sukses
                      </TransitionLink>
                      <TransitionLink
                        href="#"
                        className="flex w-full items-center py-2 text-lg font-semibold hover:text-gray-400 border-b"
                      >
                        Hubungi Kami
                      </TransitionLink>
                    </div>
                    <div className="mt-8 text-sm">
                      <p className="text-gray-400">Bahasa</p>
                      <div className="flex gap-2 mt-1">
                        <TransitionLink
                          href="#"
                          className="font-bold hover:text-gray-400"
                        >
                          ENGLISH
                        </TransitionLink>
                        <span className="text-gray-400">|</span>
                        <TransitionLink
                          href="#"
                          className="font-bold hover:text-gray-400"
                        >
                          INDONESIA
                        </TransitionLink>
                      </div>
                    </div>
                  </div>
                  <div className="flex-1 pl-4 py-6">
                    <div className="grid gap-6">
                      <div>
                        <h3 className="text-lg font-semibold mb-3">
                          Kategori Layanan
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Antar & jemput barang atau dokumen
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Belanja kebutuhan harian
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Perawatan rumah & kebersihan
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Perbaikan kecil & teknisi panggilan
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Bantuan acara atau hajatan
                            </TransitionLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">
                          Tipe Layanan
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Layanan cepat (1–2 jam)
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Layanan terjadwal harian
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Layanan berbasis proyek
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Layanan darurat
                            </TransitionLink>
                          </li>
                        </ul>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold mb-3">
                          Industri & Segmen Pengguna
                        </h3>
                        <ul className="space-y-2 text-gray-300 text-sm">
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Rumah tangga & pribadi
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              UMKM & bisnis lokal
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Perusahaan skala menengah
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Event organizer
                            </TransitionLink>
                          </li>
                          <li>
                            <TransitionLink
                              href="#"
                              className="hover:text-white"
                            >
                              Industri jasa kreatif
                            </TransitionLink>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
