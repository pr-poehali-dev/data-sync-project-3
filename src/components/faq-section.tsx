import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "Как вступить в DEZINTEGRATORI?",
      answer:
        "Подай заявку через кнопку «Вступить в гильдию». Тебя пригласят на испытательный период, где офицеры оценят твои навыки, дисциплину и командную игру.",
    },
    {
      question: "Нужен ли особый уровень персонажа?",
      answer:
        "Мы смотрим не только на цифры. Важнее — активность, умение слушать командира и готовность расти. Конкретные требования уточни у офицера после подачи заявки.",
    },
    {
      question: "Как часто проходят рейды?",
      answer:
        "Регулярные рейды проводятся несколько раз в неделю. Расписание доступно в Discord гильдии после вступления.",
    },
    {
      question: "Что будет, если нарушить кодекс гильдии?",
      answer:
        "За нарушения — предупреждение, понижение ранга или исключение в зависимости от тяжести. Правила просты: уважай своих, не воруй, не предавай.",
    },
    {
      question: "Есть ли у вас Discord?",
      answer:
        "Да, все коммуникации, расписание рейдов и новости гильдии — в нашем Discord. Ссылку получишь после вступления или по запросу офицеру.",
    },
    {
      question: "Можно ли выйти из гильдии?",
      answer:
        "Да, никто не держит насильно. Но помни: волки, покинувшие стаю, редко находят лучшую. Если есть проблемы — сначала поговори с офицером.",
    },
  ]

  return (
    <section className="py-24 bg-black">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-orbitron">Частые вопросы</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto font-space-mono">
            Всё, что ты хотел знать о DEZINTEGRATORI перед вступлением
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-red-500/20 mb-4">
                <AccordionTrigger className="text-left text-lg font-semibold text-white hover:text-red-400 font-orbitron px-6 py-4">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-300 leading-relaxed px-6 pb-4 font-space-mono">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}