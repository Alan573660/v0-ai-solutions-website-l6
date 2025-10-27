import type { Metadata } from "next"
import { Header } from "@/components/header"
import type { Locale } from "@/lib/i18n/config"

interface DPAPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: "Соглашение об обработке данных | AI Solutions",
  description:
    "Соглашение об обработке персональных данных AI Solutions в соответствии с требованиями GDPR и российского законодательства.",
}

export default function DPAPage({ params }: DPAPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <Header locale={params.locale} />

      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Соглашение об обработке данных
            </h1>
            <p className="text-lg text-muted-foreground">
              Data Processing Agreement (DPA) — Последнее обновление: 15 января 2024 года
            </p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">1. Определения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящее Соглашение об обработке данных (DPA) дополняет наши Условия использования и определяет условия
                обработки персональных данных в соответствии с GDPR, Федеральным законом «О персональных данных» №
                152-ФЗ и другим применимым законодательством.
              </p>

              <div className="bg-purple-50 p-6 rounded-lg mt-6">
                <h3 className="text-lg font-medium mb-3">Ключевые термины:</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <strong>Контролер данных:</strong> Клиент (вы)
                  </li>
                  <li>
                    <strong>Обработчик данных:</strong> AI Solutions
                  </li>
                  <li>
                    <strong>Персональные данные:</strong> Любая информация, относящаяся к идентифицированному лицу
                  </li>
                  <li>
                    <strong>Обработка:</strong> Любые операции с персональными данными
                  </li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">2. Роли и обязанности</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-700 mb-3">Контролер данных (Клиент)</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Определяет цели и средства обработки</li>
                    <li>• Обеспечивает законность обработки</li>
                    <li>• Получает согласие субъектов данных</li>
                    <li>• Отвечает на запросы субъектов данных</li>
                  </ul>
                </div>

                <div className="border border-purple-200 p-6 rounded-lg">
                  <h3 className="text-lg font-medium text-purple-700 mb-3">Обработчик данных (AI Solutions)</h3>
                  <ul className="text-sm space-y-2 text-muted-foreground">
                    <li>• Обрабатывает данные по инструкции клиента</li>
                    <li>• Обеспечивает безопасность данных</li>
                    <li>• Уведомляет о нарушениях безопасности</li>
                    <li>• Помогает в выполнении прав субъектов</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">3. Категории данных и субъектов</h2>
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-medium mb-3">Категории персональных данных:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Контактные данные (имя, email, телефон)</li>
                    <li>Профессиональные данные (компания, должность)</li>
                    <li>Технические данные (IP-адрес, cookies)</li>
                    <li>Данные взаимодействия с сервисом</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-medium mb-3">Категории субъектов данных:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>Клиенты и потенциальные клиенты</li>
                    <li>Пользователи сервиса</li>
                    <li>Контактные лица в организациях</li>
                    <li>Посетители веб-сайта</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">4. Меры безопасности</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                AI Solutions применяет следующие технические и организационные меры для защиты персональных данных:
              </p>

              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-medium mb-3">Технические меры:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
                    <li>Шифрование данных (AES-256)</li>
                    <li>Защищенные каналы передачи (TLS 1.3)</li>
                    <li>Регулярные резервные копии</li>
                    <li>Мониторинг безопасности 24/7</li>
                    <li>Контроль доступа и аутентификация</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-3">Организационные меры:</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
                    <li>Обучение персонала</li>
                    <li>Политики безопасности</li>
                    <li>Аудиты и сертификации</li>
                    <li>Процедуры реагирования на инциденты</li>
                    <li>Ограничение доступа по принципу необходимости</li>
                  </ul>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">5. Международные передачи</h2>
              <p className="text-muted-foreground leading-relaxed">
                При передаче персональных данных за пределы ЕЭЗ или России мы обеспечиваем адекватный уровень защиты с
                использованием:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Стандартных договорных положений ЕС</li>
                <li>Решений о достаточности Европейской комиссии</li>
                <li>Сертификации и кодексов поведения</li>
                <li>Дополнительных гарантий безопасности</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">6. Нарушения безопасности данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                В случае нарушения безопасности персональных данных AI Solutions обязуется:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Уведомить клиента в течение 72 часов</li>
                <li>Предоставить детальную информацию об инциденте</li>
                <li>Принять меры по устранению нарушения</li>
                <li>Помочь в уведомлении надзорных органов</li>
                <li>Документировать все инциденты</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">7. Права субъектов данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                AI Solutions помогает клиентам в обеспечении следующих прав субъектов данных:
              </p>
              <div className="grid md:grid-cols-2 gap-4 mt-4">
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
                  <li>Право на доступ</li>
                  <li>Право на исправление</li>
                  <li>Право на удаление</li>
                  <li>Право на ограничение обработки</li>
                </ul>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground text-sm">
                  <li>Право на портируемость данных</li>
                  <li>Право на возражение</li>
                  <li>Право на отзыв согласия</li>
                  <li>Право на подачу жалобы</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">8. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">
                По вопросам обработки данных и DPA обращайтесь к нашему уполномоченному по защите данных:
              </p>
              <div className="bg-purple-50 p-6 rounded-lg mt-4">
                <p className="font-medium">Email: dpo@ai-solutions.com</p>
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
