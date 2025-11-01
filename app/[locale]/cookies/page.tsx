import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

interface CookiesPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: "Политика использования Cookies | AI Solutions",
  description:
    "Политика использования файлов cookie на сайте AI Solutions. Узнайте, какие cookies мы используем и как управлять настройками.",
}

export default function CookiesPage({ params }: CookiesPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Политика использования Cookies
            </h1>
            <p className="text-lg text-muted-foreground">Последнее обновление: 15 января 2024 года</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">1. Что такое cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Cookies (куки) — это небольшие текстовые файлы, которые сохраняются на вашем устройстве при посещении
                веб-сайтов. Они помогают сайтам запоминать информацию о вашем визите, что делает последующие посещения
                более удобными и персонализированными.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">2. Какие cookies мы используем</h2>

              <div className="space-y-6">
                <div className="border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-700 mb-3">Необходимые cookies</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Эти cookies необходимы для работы сайта и не могут быть отключены.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>
                      • <strong>Сессионные cookies:</strong> Поддержание сеанса пользователя
                    </li>
                    <li>
                      • <strong>Безопасность:</strong> Защита от CSRF-атак
                    </li>
                    <li>
                      • <strong>Настройки языка:</strong> Запоминание выбранного языка
                    </li>
                  </ul>
                </div>

                <div className="border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-700 mb-3">Функциональные cookies</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Улучшают функциональность сайта и персонализируют ваш опыт.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>
                      • <strong>Предпочтения пользователя:</strong> Настройки интерфейса
                    </li>
                    <li>
                      • <strong>Форма обратной связи:</strong> Сохранение данных формы
                    </li>
                    <li>
                      • <strong>Чат поддержки:</strong> Состояние чата с поддержкой
                    </li>
                  </ul>
                </div>

                <div className="border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-700 mb-3">Аналитические cookies</h3>
                  <p className="text-sm text-muted-foreground mb-3">Помогают понять, как посетители используют сайт.</p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>
                      • <strong>Google Analytics:</strong> Статистика посещений
                    </li>
                    <li>
                      • <strong>Яндекс.Метрика:</strong> Анализ поведения пользователей
                    </li>
                    <li>
                      • <strong>Hotjar:</strong> Тепловые карты и записи сессий
                    </li>
                  </ul>
                </div>

                <div className="border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-700 mb-3">Маркетинговые cookies</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Используются для показа релевантной рекламы и отслеживания эффективности кампаний.
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>
                      • <strong>Google Ads:</strong> Ретаргетинг и конверсии
                    </li>
                    <li>
                      • <strong>Facebook Pixel:</strong> Отслеживание конверсий
                    </li>
                    <li>
                      • <strong>LinkedIn Insight:</strong> B2B аналитика
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">3. Сторонние cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Некоторые cookies устанавливаются третьими сторонами, чьи сервисы мы используем:
              </p>

              <div className="overflow-x-auto mt-6">
                <table className="w-full border-collapse border border-purple-200">
                  <thead>
                    <tr className="bg-purple-50">
                      <th className="border border-purple-200 p-3 text-left">Сервис</th>
                      <th className="border border-purple-200 p-3 text-left">Назначение</th>
                      <th className="border border-purple-200 p-3 text-left">Срок хранения</th>
                    </tr>
                  </thead>
                  <tbody className="text-sm">
                    <tr>
                      <td className="border border-purple-200 p-3">Google Analytics</td>
                      <td className="border border-purple-200 p-3">Веб-аналитика</td>
                      <td className="border border-purple-200 p-3">2 года</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-3">Яндекс.Метрика</td>
                      <td className="border border-purple-200 p-3">Анализ трафика</td>
                      <td className="border border-purple-200 p-3">1 год</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-3">Intercom</td>
                      <td className="border border-purple-200 p-3">Чат поддержки</td>
                      <td className="border border-purple-200 p-3">1 год</td>
                    </tr>
                    <tr>
                      <td className="border border-purple-200 p-3">Calendly</td>
                      <td className="border border-purple-200 p-3">Запись на встречи</td>
                      <td className="border border-purple-200 p-3">1 год</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">4. Управление cookies</h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Вы можете управлять использованием cookies несколькими способами:
              </p>

              <div className="space-y-6">
                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Настройки браузера</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    Большинство браузеров позволяют управлять cookies через настройки:
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>
                      • <strong>Chrome:</strong> Настройки → Конфиденциальность и безопасность → Файлы cookie
                    </li>
                    <li>
                      • <strong>Firefox:</strong> Настройки → Приватность и защита → Файлы cookie
                    </li>
                    <li>
                      • <strong>Safari:</strong> Настройки → Конфиденциальность → Файлы cookie
                    </li>
                    <li>
                      • <strong>Edge:</strong> Настройки → Файлы cookie и разрешения сайтов
                    </li>
                  </ul>
                </div>

                <div className="bg-purple-50 p-6 rounded-lg">
                  <h3 className="text-lg font-medium mb-3">Панель согласия на cookies</h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    При первом посещении сайта вы увидите панель с настройками cookies, где можете:
                  </p>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Принять все cookies</li>
                    <li>• Отклонить необязательные cookies</li>
                    <li>• Настроить категории cookies индивидуально</li>
                    <li>• Изменить настройки в любое время</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">5. Влияние отключения cookies</h2>
              <p className="text-muted-foreground leading-relaxed">
                Отключение определенных типов cookies может повлиять на функциональность сайта:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Необходимые cookies: Сайт может работать некорректно</li>
                <li>Функциональные cookies: Потеря персонализации и настроек</li>
                <li>Аналитические cookies: Мы не сможем улучшать сайт на основе данных</li>
                <li>Маркетинговые cookies: Реклама станет менее релевантной</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">6. Обновления политики</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы можем обновлять данную политику при изменении используемых cookies или законодательства. О
                существенных изменениях мы уведомим через баннер на сайте или по электронной почте.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">7. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">По вопросам использования cookies обращайтесь:</p>
              <div className="bg-purple-50 p-6 rounded-lg mt-4">
                <p className="font-medium">Email: privacy@ai-solutions.com</p>
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
