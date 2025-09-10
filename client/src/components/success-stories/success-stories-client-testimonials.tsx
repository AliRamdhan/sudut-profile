import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { useTranslations } from "next-intl";

const testimonials = [
  {
    id: 1,
    quote:
      "Thanks to Desa Metesih's new administrative system, operations are now smoother and more efficient than ever. It’s truly transformed the way the local governance team works!",
    author: "Desa Metesih Staff",
    company: "Desa Metesih",
    avatar: "/images/logo/meteseh.gif",
    rows: 2,
    cols: 1,
  },
  {
    id: 2,
    quote:
      "Laduny Computer’s POS system with 2FA authentication makes transactions secure and effortless. The audit logs and management features give us total control over our business!",
    author: "Laduny Computer Staff",
    company: "PUSB - President University",
    avatar: "/images/logo/laduny.png",
    rows: 1,
    cols: 2,
  },
  { id: 5, logo: "SUDUTPROFILE", rows: 1, cols: 1 },
  {
    id: 3,
    quote:
      "Arvindo’s UI and UX redesign with multi-language support has made our platform intuitive and enjoyable for users worldwide. The experience is seamless!",
    author: "Arvindo Staff",
    company: "Arvindo Indonesia",
    avatar: "/images/logo/arvindo.png",
    rows: 2,
    cols: 1,
  },
  {
    id: 4,
    quote:
      "The Posyandu administration system now lets us efficiently manage birth records, child growth tracking, and pregnancy monitoring. It’s made our work faster and more reliable!",
    author: "Posyandu Kab. Bandung Staff",
    company: "AKAB V x IAICP",
    avatar: "/images/logo/posyandu.png",
    rows: 1,
    cols: 2,
  },
];

const rowSpanClasses: Record<number, string> = {
  1: "md:row-span-1",
  2: "md:row-span-2",
};

const colSpanClasses: Record<number, string> = {
  1: "md:col-span-1",
  2: "md:col-span-2",
};

const TestimonialsSection = () => {
  const t = useTranslations("success-stories");

  return (
    <section className="py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl sm:text-5xl font-bold text-balance mb-6">
          {t("testimonial-title")}
        </h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto text-pretty">
          {t("testimonial-description")}
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {testimonials.map((testimonial) => {
          const cardClasses = [
            "p-6",
            "transition-all",
            "duration-300",
            "hover:scale-[1.02]",
            rowSpanClasses[testimonial.rows ?? 1],
            colSpanClasses[testimonial.cols ?? 1],
            "flex items-center justify-center",
          ]
            .filter(Boolean)
            .join(" ");

          return (
            <Card key={testimonial.id} className={cardClasses}>
              {testimonial.logo ? (
                <div className="flex justify-center items-center cursor-default">
                  <h2 className="text-white font-black text-3xl">
                    {testimonial.logo}
                  </h2>
                </div>
              ) : (
                <div className="flex flex-col h-full">
                  <blockquote className="text-sm leading-relaxed mb-6 flex-grow">
                    &quot;{t(`testimonial-quote-${testimonial.id}`)}&quot;
                  </blockquote>

                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarImage
                        src={testimonial.avatar || "/placeholder.svg"}
                        alt={testimonial.author}
                      />
                      <AvatarFallback className="bg-primary text-primary-foreground">
                        {testimonial.author
                          ?.split(" ")
                          .map((n) => n[0])
                          .join("") ?? "?"}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium text-sm">
                        {testimonial.author}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </Card>
          );
        })}
      </div>
    </section>
  );
};

export default TestimonialsSection;
