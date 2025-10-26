import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

interface TermsPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: "Условия использования | AI Solutions",
  description:
    "Условия использования сервиса AI Solutions. Правила и условия предоставления услуг голосовых AI-ассистентов.",
}

export default function TermsPage({ params }: TermsPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Условия использования
            </h1>
            <p className="text-lg text-muted-foreground">Последнее обновление: 15 января 2024 года</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">1. Принятие условий</h2>
              <p className="text-muted-foreground leading-relaxed">
                Используя сервис AI Solutions, вы соглашаетесь с настоящими Условиями использования. Если вы не согласны
                с какими-либо условиями, пожалуйста, не используйте наш сервис. Мы оставляем за собой право изменять
                данные условия в любое время с уведомлением пользователей.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">2. Описание сервиса</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI Solutions предоставляет платформу для создания и управления голосовыми AI-ассистентами для
                автоматизации продаж и обслуживания клиентов. Сервис включает в себя:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Голосовые AI-ассистенты для различных отраслей</li>
                <li>Интеграцию с CRM и другими системами</li>
                <li>Аналитику и отчетность</li>
                <li>Техническую поддержку и консультации</li>
                <li>API для разработчиков</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">3. Регистрация и аккаунт</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Требования к регистрации:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Предоставление достоверной информации</li>
                  <li>Возраст не менее 18 лет или согласие законного представителя</li>
                  <li>Один аккаунт на пользователя или организацию</li>
                  <li>Соблюдение применимого законодательства</li>
                </ul>

                <h3 className="text-xl font-medium mt-6">Ответственность за аккаунт:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Вы несете ответственность за безопасность своего аккаунта</li>
                  <li>Немедленно уведомляйте нас о несанкционированном доступе</li>
                  <li>Не передавайте доступ к аккаунту третьим лицам</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">4. Использование сервиса</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Разрешенное использование:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Коммерческое использование в рамках подписки</li>
                  <li>Интеграция с вашими системами</li>
                  <li>Настройка под ваши бизнес-процессы</li>
                </ul>

                <h3 className="text-xl font-medium mt-6">Запрещенное использование:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Нарушение авторских прав и интеллектуальной собственности</li>
                  <li>Распространение вредоносного ПО</li>
                  <li>Спам и массовые рассылки</li>
                  <li>Попытки взлома или нарушения безопасности</li>
                  <li>Использование для незаконных целей</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">5. Интеллектуальная собственность</h2>
              <p className="text-muted-foreground leading-relaxed">
                Все права на сервис AI Solutions, включая программное обеспечение, дизайн, контент и торговые марки,
                принадлежат нашей компании. Вы получаете ограниченную лицензию на использование сервиса в соответствии с
                данными условиями.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">6. Оплата и возврат средств</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Условия оплаты:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Оплата производится согласно выбранному тарифному плану</li>
                  <li>Автоматическое продление подписки</li>
                  <li>Изменение тарифа в любое время</li>
                </ul>

                <h3 className="text-xl font-medium mt-6">Возврат средств:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>30-дневная гарантия возврата для новых клиентов</li>
                  <li>Пропорциональный возврат при досрочном расторжении</li>
                  <li>Обращение в службу поддержки для оформления возврата</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">7. Ограничение ответственности</h2>
              <p className="text-muted-foreground leading-relaxed">
                Сервис предоставляется "как есть". Мы не гарантируем бесперебойную работу и не несем ответственности за
                косвенные убытки. Наша ответственность ограничена суммой, уплаченной вами за сервис в течение последних
                12 месяцев.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">8. Прекращение использования</h2>
              <p className="text-muted-foreground leading-relaxed">
                Вы можете прекратить использование сервиса в любое время. Мы оставляем за собой право приостановить или
                прекратить предоставление услуг при нарушении данных условий.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">9. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">По вопросам условий использования обращайтесь:</p>
              <div className="bg-purple-50 p-6 rounded-lg mt-4">
                <p className="font-medium">Email: legal@ai-solutions.com</p>
                <p className="font-medium">Телефон: +7 (495) 123-45-67</p>
                <p className="font-medium">Адрес: ул. Тверская, 15, Москва, Россия</p>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  )
}
