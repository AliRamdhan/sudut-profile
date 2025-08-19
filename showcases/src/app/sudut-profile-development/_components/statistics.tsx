import Image from "next/image";
import CountUp from "react-countup";

export function Statistics() {
  return (
    <section className="w-full px-5 overflow-hidden flex flex-col justify-start py-6 md:py-8 lg:py-14">
      <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
        <div className="flex flex-col justify-start items-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Kesuksesan kami adalah milik Anda
          </h2>
          <p className="max-w-3xl mx-auto text-gray-700">
            At Struktura, we offer a comprehensive suite of construction
            services, meticulously tailored to match your unique project
            requirements, ensuring success at every step.
          </p>
        </div>
      </div>
      <div className="w-full pt-0.5 pb-4 md:pb-6 lg:pb-10 flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 mx-auto">
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-9 gap-4 md:gap-4 lg:gap-6">
          <div className="w-full h-[502px] flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative p-6 bg-primary col-span-4">
            <div
              className="absolute inset-0 w-full h-full bg-cover bg-center bg-no-repeat opacity-20"
              style={{
                backgroundImage: "url('/images/large-card-background.svg')",
                zIndex: 0,
              }}
            />
            <div className="relative z-10 font-normal break-words text-primary-foreground text-lg font-medium leading-8 space-y-4">
              <p>
                Yakinlah bahwa Anda bermitra dengan grup pengembang yang telah
                terbukti sukses dan memiliki rekam jejak yang baik. Mirah
                Investment & Development mencakup spektrum yang luas dalam
                sektor pengembangan properti, menjembatani properti residensial
                dan komersial. Keahlian kami bersinar dalam investasi hotel &
                resor dan properti residensial, dengan lebih dari 1000 unit yang
                saat ini sedang dibangun.
              </p>
              <p>
                Portofolio beragam yang kami hadirkan kaya akan properti
                investasi yang menghasilkan pendapatan tinggi, semuanya
                dicirikan oleh arsitektur pemenang penghargaan dan desain yang
                dibuat khusus. Layanan kami dari hulu ke hilir memastikan siklus
                investasi yang bebas dari kerumitan, mewujudkan filosofi bahwa
                kesuksesan kami sama dengan kepuasan dan kemakmuran finansial
                Anda. Jelajahi permadani peluang bersama Mirah, saat kami
                mendefinisikan kembali kemewahan dan potensi investasi di Bali
                dan sekitarnya.
              </p>
            </div>
            <div className="relative z-10 flex justify-start items-center gap-3">
              <Image
                src={"/placeholder.svg"}
                alt={`Testimonial avatar`}
                width={36}
                height={36}
                className={`w-${36 / 4} h-${36 / 4} rounded-[41px]`}
                style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
              />
              <div className="flex flex-col justify-start items-start gap-0.5">
                <div
                  className={`text-primary-foreground text-base font-normal leading-6`}
                >
                  Bermitra dengan Kami
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-5">
            {/* <div
              className={`w-full h-[244px] flex flex-col justify-between items-start overflow-hidden rounded-[10px] shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative p-6 bg-card outline outline-1 outline-border outline-offset-[-1px]`}
            >
              <div
                className={`relative z-10 font-normal break-words text-foreground/80 text-[17px] font-normal leading-6`}
              >
                Deploying on Vercel with Pointer was not just simple, it felt
                seamless. We went from coding to seeing our changes live in
                minutes without worrying about build pipelines or configuration
                issues.
              </div>
              <div className="relative z-10 flex justify-start items-center gap-3">
                <Image
                  src={"/placeholder.svg"}
                  alt={`Testimonial avatar`}
                  width={36}
                  height={36}
                  className={`w-${36 / 4} h-${36 / 4} rounded-[30.75px]`}
                  style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
                />
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <div
                    className={`text-foreground text-sm font-normal leading-[22px]`}
                  >
                    Vincent
                  </div>
                  <div
                    className={`text-muted-foreground text-sm font-normal leading-[22px]`}
                  >
                    Black Jack
                  </div>
                </div>
              </div>
            </div> */}
            <div className="w-full h-full grid grid-cols-3">
              {/* Stat 1 */}
              <div className="w-full h-full flex flex-col justify-center items-center p-6 border-gray-300">
                <div className="text-6xl font-medium text-gray-700 mb-2">
                  <CountUp duration={3} end={30} />+
                </div>
                <p className="text-lg text-gray-600">Tahun dalam Bisnis</p>
              </div>

              {/* Stat 2 */}
              <div className="w-full h-full flex flex-col justify-center items-center p-6 border-r border-l border-gray-300">
                <div className="text-6xl font-medium text-gray-700 mb-2">
                  <CountUp duration={3} end={999} />+
                </div>
                <p className="text-lg text-gray-600">
                  Unit yang sedang dibangun
                </p>
              </div>

              {/* Stat 3 */}
              <div className="w-full h-full flex flex-col justify-center items-center p-6">
                <div className="text-6xl font-medium text-gray-700 mb-2">
                  <CountUp duration={3} end={55} />
                </div>
                <p className="text-lg text-gray-600">Bisnis yang Beroperasi</p>
              </div>

              {/* Stat 4 */}
              <div className="w-full h-full flex flex-col justify-center items-center p-6 border-t border-gray-300">
                <div className="text-6xl font-medium text-gray-700 mb-2">
                  <CountUp duration={3} end={500} />
                  K+ m²
                </div>
                <p className="text-lg text-gray-600">Telah tuntas</p>
              </div>

              {/* Stat 5 */}
              <div className="w-full h-full flex flex-col justify-center items-center p-6 border-r border-l border-t border-gray-300">
                <div className="text-6xl font-medium text-gray-700 mb-2">
                  $<CountUp duration={3} end={10.8} />B
                </div>
                <p className="text-lg text-gray-600">Aset yang dikelola</p>
              </div>

              {/* Stat 6 */}
              <div className="w-full h-full flex flex-col justify-center items-center p-6 border-t border-gray-300">
                <div className="text-6xl font-medium text-gray-700 mb-2">
                  <CountUp duration={3} end={655} />+
                </div>
                <p className="text-lg text-gray-600">Investor pengembang</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
