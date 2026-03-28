import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

const features = [
  {
    title: "Сила стаи",
    description: "Мы побеждаем вместе. Каждый участник гильдии — часть единого организма, где слабое место прикрыто.",
    icon: "brain",
    badge: "Единство",
  },
  {
    title: "Кодекс чести",
    description: "Никакого предательства, никакого мародёрства у своих. Репутация — наша валюта.",
    icon: "lock",
    badge: "Честь",
  },
  {
    title: "Доминирование на карте",
    description: "Стратегический контроль территорий и ресурсов — наш приоритет в каждом сезоне.",
    icon: "globe",
    badge: "Территория",
  },
  {
    title: "Рейды и осады",
    description: "Регулярные вылазки, жёсткие тренировки, разбор тактик — мы готовимся к каждой битве.",
    icon: "zap",
    badge: "Рейды",
  },
  {
    title: "Отбор сильнейших",
    description: "Вступление только через испытание. Мы берём тех, кто доказал своё место в стае делом.",
    icon: "target",
    badge: "Отбор",
  },
  {
    title: "Братство волков",
    description: "DEZINTEGRATORI — это не просто гильдия. Это семья, которая не бросает своих в бою.",
    icon: "link",
    badge: "Братство",
  },
]

export function FeaturesSection() {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-foreground mb-4 font-sans">Что значит быть DEZINTEGRATORI</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Мы не просто играем — мы охотимся. Наши правила просты: побеждай или учись у тех, кто побеждает
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="glow-border hover:shadow-lg transition-all duration-300 slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-3xl">
                    {feature.icon === "brain" && "&#129504;"}
                    {feature.icon === "lock" && "&#128274;"}
                    {feature.icon === "globe" && "&#127760;"}
                    {feature.icon === "zap" && "&#9889;"}
                    {feature.icon === "link" && "&#128279;"}
                    {feature.icon === "target" && "&#127919;"}
                  </span>
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {feature.badge}
                  </Badge>
                </div>
                <CardTitle className="text-xl font-bold text-card-foreground">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}