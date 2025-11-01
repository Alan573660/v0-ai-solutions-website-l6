import type { Metadata } from "next"
import type { Locale } from "@/lib/i18n/config"

interface PrivacyPageProps {
  params: { locale: Locale }
}

export const metadata: Metadata = {
  title: "Политика конфиденциальности | AI Solutions",
  description:
    "Политика конфиденциальности AI Solutions. Узнайте, как мы собираем, используем и защищаем ваши персональные данные.",
}

export default function PrivacyPage({ params }: PrivacyPageProps) {
  return (
    <div className="min-h-screen bg-background">
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent">
              Политика конфиденциальности
            </h1>
            <p className="text-lg text-muted-foreground">Последнее обновление: 15 января 2024 года</p>
          </div>

          <div className="prose prose-lg max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">1. Общие положения</h2>
              <p className="text-muted-foreground leading-relaxed">
                Настоящая Политика конфиденциальности определяет порядок обработки персональных данных пользователей
                сервиса AI Solutions (далее — «Сервис»). Мы серьезно относимся к защите ваших персональных данных и
                обеспечиваем их безопасность в соответствии с требованиями GDPR, Федерального закона «О персональных
                данных» № 152-ФЗ и другого применимого законодательства.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">2. Какие данные мы собираем</h2>
              <div className="space-y-4">
                <h3 className="text-xl font-medium">Персональные данные:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Имя и фамилия</li>
                  <li>Адрес электронной почты</li>
                  <li>Номер телефона</li>
                  <li>Название компании и должность</li>
                  <li>IP-адрес и данные об устройстве</li>
                </ul>

                <h3 className="text-xl font-medium mt-6">Технические данные:</h3>
                <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                  <li>Файлы cookie и аналогичные технологии</li>
                  <li>Данные о взаимодействии с сайтом</li>
                  <li>Логи сервера и аналитические данные</li>
                </ul>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">3. Цели обработки данных</h2>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                <li>Предоставление и улучшение наших услуг</li>
                <li>Обработка запросов и техническая поддержка</li>
                <li>Отправка важных уведомлений о сервисе</li>
                <li>Маркетинговые коммуникации (с вашего согласия)</li>
                <li>Соблюдение правовых обязательств</li>
                <li>Защита от мошенничества и злоупотреблений</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">4. Правовые основания обработки</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы обрабатываем ваши персональные данные на следующих правовых основаниях:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Ваше согласие на обработку персональных данных</li>
                <li>Исполнение договора или предварительные договорные отношения</li>
                <li>Соблюдение правовых обязательств</li>
                <li>Защита жизненно важных интересов</li>
                <li>Законные интересы нашей компании</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">5. Передача данных третьим лицам</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы не продаем и не передаем ваши персональные данные третьим лицам, за исключением случаев,
                предусмотренных настоящей Политикой. Передача может осуществляться:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Поставщикам технических услуг (хостинг, аналитика)</li>
                <li>При слиянии, поглощении или продаже активов компании</li>
                <li>По требованию государственных органов в рамках закона</li>
                <li>Для защиты прав и безопасности пользователей</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">6. Ваши права</h2>
              <p className="text-muted-foreground leading-relaxed">
                В соответствии с применимым законодательством вы имеете следующие права:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Право на доступ к своим персональным данным</li>
                <li>Право на исправление неточных данных</li>
                <li>Право на удаление персональных данных</li>
                <li>Право на ограничение обработки</li>
                <li>Право на портируемость данных</li>
                <li>Право на отзыв согласия</li>
                <li>Право на возражение против обработки</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">7. Безопасность данных</h2>
              <p className="text-muted-foreground leading-relaxed">
                Мы применяем современные технические и организационные меры для защиты ваших персональных данных:
              </p>
              <ul className="list-disc pl-6 space-y-2 text-muted-foreground mt-4">
                <li>Шифрование данных при передаче и хранении</li>
                <li>Регулярные аудиты безопасности</li>
                <li>Ограничение доступа к данным</li>
                <li>Обучение сотрудников вопросам защиты данных</li>
                <li>Резервное копирование и восстановление</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-semibold text-purple-700 mb-4">8. Контактная информация</h2>
              <p className="text-muted-foreground leading-relaxed">
                По вопросам обработки персональных данных обращайтесь:
              </p>
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
