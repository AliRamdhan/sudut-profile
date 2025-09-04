import { Mail, MapPin, Phone } from "lucide-react"

const Page = () => {
  return (
    <section>
      <div className="container px-6 py-20 lg:py-32 mx-auto">
        <div className="text-center max-w-5xl mx-auto mb-20">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight leading-tight text-slate-900 mb-8">
            Get in touch
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-emerald-500 to-emerald-700 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl md:text-2xl text-slate-700">Our friendly team would love to hear from you.</p>
        </div>

        <div className="grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="lg:col-span-2">
            <div className="overflow-hidden rounded-2xl shadow-2xl h-96 lg:h-[610px] border border-slate-200">
              <iframe
                title="Lokasi SPBU Pertamina 44.571.28 Pedaringan"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63281.77907061647!2d110.8148224!3d-7.562854399999991!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a178b4810d739%3A0x9eaf11ab545d1bbd!2sSPBU%20Pertamina%2044.571.28%20Pedaringan!5e0!3m2!1sen!2sid!4v1755189963360!5m2!1sen!2sid"
                style={{ border: 0, width: "100%", height: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Mail className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Email</h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm">Our friendly team is here to help.</p>
              <p className="text-base font-semibold text-slate-900">hello@sudutprofile.com</p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <MapPin className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Office</h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm">Come say hello at our office HQ.</p>
              <p className="text-base font-semibold text-slate-900">
                Jl. Pedaringan No. 123
                <br />
                Yogyakarta, Indonesia
              </p>
            </div>

            <div className="bg-white p-4 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center mb-6">
                <Phone className="w-5 h-5 text-emerald-600" />
              </div>
              <h2 className="text-lg font-bold text-slate-900 mb-3">Phone</h2>
              <p className="text-slate-600 mb-4 leading-relaxed text-sm">Mon-Fri from 8am to 5pm.</p>
              <p className="text-base font-semibold text-slate-900">+62 274 123 4567</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Page
