import Image from "next/image";
import CountUp from "react-countup";

export function Statistics() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 md:px-8 text-center">
        <div className="self-stretch py-6 md:py-8 lg:py-14 flex flex-col justify-center items-center gap-2">
          <div className="flex flex-col justify-start items-center text-center">
            <h2 className="text-3xl md:text-4xl lg:text-6xl font-bold text-gray-900 mb-4">
              Our Success is Measured by Yours
            </h2>
            <p className="text-lg max-w-4xl mx-auto text-gray-700 mb-12">
              At Sudut Profile, we believe that every project’s success reflects
              directly on our clients. With tailored construction solutions and
              a commitment to excellence, we ensure your goals are achieved at
              every stage.
            </p>
          </div>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-start gap-4 md:gap-4 lg:gap-6 mx-auto">
          <div className="flex-1 grid grid-cols-1 lg:grid-cols-9 gap-4 md:gap-4 lg:gap-6">
            <div className="w-full h-full bg-white shadow-xl text-gray-900 rounded-xl shadow-[0px_2px_4px_rgba(0,0,0,0.08)] relative p-6 col-span-4">
              <div className="relative z-10 font-normal break-words text-xl font-medium leading-8 space-y-4 mb-8">
                <p>
                  Partner with Sudut Profile, a proven developer with a strong
                  track record of success. Our expertise spans across the
                  property development sector, bridging both residential and
                  commercial projects. We specialize in high-value investments,
                  including hotels, resorts, and premium residences, with
                  hundreds of units currently under development.
                </p>
                <p className="my-5">
                  Our diverse portfolio features income-generating properties
                  defined by award-winning architecture and bespoke design. With
                  end-to-end services, we ensure a seamless investment
                  cycle—reflecting our belief that your prosperity is the true
                  measure of our success.
                </p>
                <p>
                  Explore a world of opportunity with Sudut Profile as we
                  continue to redefine property development and investment
                  potential across Indonesia.
                </p>
              </div>
              <div className="relative z-10 flex justify-start items-center gap-3">
                <Image
                  src={"/images/shared/avatar.jpg"}
                  alt={`Testimonial avatar`}
                  width={36}
                  height={36}
                  className={`w-${36 / 4} h-${36 / 4} rounded-[41px]`}
                  style={{ border: "1px solid rgba(255, 255, 255, 0.08)" }}
                />
                <div className="flex flex-col justify-start items-start gap-0.5">
                  <div className={`text-base font-normal leading-6`}>
                    Bermitra dengan Kami
                  </div>
                </div>
              </div>
            </div>
            <div className="col-span-5">
              <div className="w-full h-full grid grid-cols-3">
                {/* Stat 1 */}
                <div className="w-full h-full flex flex-col justify-center items-center p-6 border-gray-300">
                  <div className="text-5xl font-medium text-gray-700 mb-2">
                    <CountUp duration={3} end={30} />+
                  </div>
                  <p className="text-lg text-gray-600">Tahun dalam Bisnis</p>
                </div>

                {/* Stat 2 */}
                <div className="w-full h-full flex flex-col justify-center items-center p-6 border-r border-l border-gray-300">
                  <div className="text-5xl font-medium text-gray-700 mb-2">
                    <CountUp duration={3} end={999} />+
                  </div>
                  <p className="text-lg text-gray-600">
                    Unit yang sedang dibangun
                  </p>
                </div>

                {/* Stat 3 */}
                <div className="w-full h-full flex flex-col justify-center items-center p-6">
                  <div className="text-5xl font-medium text-gray-700 mb-2">
                    <CountUp duration={3} end={55} />
                  </div>
                  <p className="text-lg text-gray-600">
                    Bisnis yang Beroperasi
                  </p>
                </div>

                {/* Stat 4 */}
                <div className="w-full h-full flex flex-col justify-center items-center p-6 border-t border-gray-300">
                  <div className="text-5xl font-medium text-gray-700 mb-2">
                    <CountUp duration={3} end={500} />
                    K+ m²
                  </div>
                  <p className="text-lg text-gray-600">Telah tuntas</p>
                </div>

                {/* Stat 5 */}
                <div className="w-full h-full flex flex-col justify-center items-center p-6 border-r border-l border-t border-gray-300">
                  <div className="text-5xl font-medium text-gray-700 mb-2">
                    $<CountUp duration={3} end={10.8} />B
                  </div>
                  <p className="text-lg text-gray-600">Aset yang dikelola</p>
                </div>

                {/* Stat 6 */}
                <div className="w-full h-full flex flex-col justify-center items-center p-6 border-t border-gray-300">
                  <div className="text-5xl font-medium text-gray-700 mb-2">
                    <CountUp duration={3} end={655} />+
                  </div>
                  <p className="text-lg text-gray-600">Investor pengembang</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
