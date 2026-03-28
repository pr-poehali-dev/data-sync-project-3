import { Card, CardContent } from "@/components/ui/card"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const testimonials = [
  {
    name: "ShadowFang",
    role: "Офицер гильдии, 3 года в стае",
    avatar: "/cybersecurity-expert-man.jpg",
    content:
      "DEZINTEGRATORI — единственная гильдия, где я чувствую реальную поддержку. Мы не бросаем своих, даже когда всё идёт не по плану.",
  },
  {
    name: "IronVeil",
    role: "Рейд-лидер, топ-1 сервера",
    avatar: "/professional-woman-scientist.png",
    content:
      "За два года ни одного предательства. Дисциплина и стратегия на уровне, которого я не встречал ни в одной другой гильдии.",
  },
  {
    name: "CrimsonHowl",
    role: "Новобранец, прошёл отбор",
    avatar: "/asian-woman-tech-developer.jpg",
    content:
      "Отбор был жёстким, но после вступления понял — это стоило каждого испытания. Тут учат побеждать по-настоящему.",
  },
]

export function TestimonialsSection() {
  return (
    <section className="py-24 px-6 bg-card">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-card-foreground mb-4 font-sans">Голоса стаи</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Что говорят те, кто уже прошёл испытание и стал частью DEZINTEGRATORI
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="glow-border slide-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <CardContent className="p-6">
                <p className="text-card-foreground mb-6 leading-relaxed italic">"{testimonial.content}"</p>
                <div className="flex items-center gap-4">
                  <Avatar>
                    <AvatarImage src={testimonial.avatar || "/placeholder.svg"} alt={testimonial.name} />
                    <AvatarFallback>
                      {testimonial.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-primary">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}