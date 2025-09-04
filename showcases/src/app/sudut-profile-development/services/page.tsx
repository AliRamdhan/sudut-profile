import SliderService from "../_components/slider-service"
import Cta from "../_components/cta"

const Page = () => {
  return (
    <div>
      <section className="container px-6 py-20 lg:py-32 mx-auto">
        <div className="text-center max-w-5xl mx-auto">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-slate-900 mb-8">
            What We Offer
          </h1>
          <div className="w-24 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mb-12 rounded-full"></div>
        </div>

        <div className="max-w-5xl mx-auto mt-20 text-center">
          <h2 className="ttext-xl md:text-2xl font-medium text-slate-600 leading-relaxed mb-6">
            We are a trusted real estate agency dedicated to helping you find the perfect property, whether you are
            buying, selling, or renting. 
          </h2>
        </div>
      </section>

      <SliderService />

      <section className="py-20 lg:py-32 bg-gradient-to-br from-slate-50 via-white to-emerald-50/30">
        <div className="container px-6 mx-auto">
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:items-center md:gap-20">
            <div className="order-2 md:order-1">
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1731690415686-e68f78e2b5bd?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                  className="w-full h-[60vh] object-cover transition-transform duration-300 hover:scale-105"
                  alt="Investment property"
                  width={800}
                  height={600}
                />
              </div>
            </div>

            <div className="order-1 md:order-2 space-y-8">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-slate-900 mb-8 leading-tight">
                Berinvestasi dengan mudah: <br />
                <span className="text-emerald-600">Visi Anda, Misi Kami</span>
              </h2>

              <p className="text-xl leading-relaxed text-slate-700 mb-8">
                Di Mirah, layanan dari hulu ke hilir kami dirancang untuk memastikan perjalanan investasi real estat
                yang benar-benar pasif bagi klien kami. Konsep kami dibuat untuk memaksimalkan pendapatan & ROI pemilik,
                sementara desain kami memprioritaskan kenyamanan dan fasilitas terbaik.
              </p>

              <p className="text-xl leading-relaxed text-slate-700">
                Dari manajemen properti yang ahli hingga pemasaran strategis, kami mencakup semua dasar untuk memastikan
                kinerja dan profitabilitas yang optimal. Proses kami yang mulus menghilangkan beban operasional dari
                klien, memungkinkan mereka untuk menikmati hasil investasi mereka.
              </p>
            </div>
          </div>
        </div>
      </section>
      <Cta />
      <div className="mb-24" />
    </div>
  )
}

export default Page
