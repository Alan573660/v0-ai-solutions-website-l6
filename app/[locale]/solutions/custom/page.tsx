"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { CheckCircle, Code, Cog, Users, Clock, Star, ArrowRight, Brain, Rocket, Shield, Target } from "lucide-react"
import { SkipLink } from "@/components/skip-link"
import { useCTA } from "@/components/modals/cta-provider"
import type { Locale } from "@/lib/i18n/config"

export default function CustomSolutionsPage({ params }: { params: { locale: Locale } }) {
  const { openModal } = useCTA()

  return (
    <div className="min-h-screen bg-background">
      <SkipLink />

      <main id="main-content" role="main" tabIndex={-1}>
        {/* 1. Hero Section */}
        <section className="pt-24 sm:pt-32 pb-16 sm:pb-20 px-4 gradient-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-7xl mx-auto text-center relative z-10">
            <Badge variant="secondary" className="mb-6 bg-white/20 text-white border-white/30">
              Индивидуальные AI Решения
            </Badge>
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 sm:mb-8 text-balance">
              Уникальные AI решения для <span className="text-yellow-300">инновационных</span> компаний
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl mb-8 sm:mb-10 max-w-4xl mx-auto text-balance opacity-90">
              Создаем персонализированные AI-системы для компаний с уникальными процессами, R&D бюджетами и амбициозными
              целями
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto h-12 sm:h-auto"
                onClick={() => openModal("consultation")}
              >
                <Brain className="mr-2 h-5 sm:h-6 w-5 sm:w-6" />
                Обсудить проект
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent w-full sm:w-auto h-12 sm:h-auto"
                onClick={() => openModal("demo")}
              >
                <Rocket className="mr-2 h-5 sm:h-6 w-5 sm:w-6" />
                Посмотреть кейсы
              </Button>
            </div>
          </div>
        </section>

        {/* 2. Problem Statement */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Вызовы инновационных компаний</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Стандартные решения не подходят для уникальных бизнес-процессов
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600">Уникальные процессы</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Ваши бизнес-процессы настолько специфичны, что готовые решения не покрывают даже 50% потребностей
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600">Высокие требования</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Нужна интеграция с legacy-системами, соблюдение специфических стандартов и максимальная
                    производительность
                  </p>
                </CardContent>
              </Card>

              <Card className="border-l-4 border-l-primary">
                <CardHeader>
                  <CardTitle className="text-2xl text-red-600">Конкурентное преимущество</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Стандартные решения не дают преимуществ - нужны инновационные подходы для опережения конкурентов
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 3. Solution Overview */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <Badge className="mb-6 gradient-purple text-white">Наш подход</Badge>
                <h2 className="text-4xl md:text-5xl font-bold mb-8 gradient-text">
                  Создаем AI решения с нуля под ваши задачи
                </h2>
                <p className="text-xl text-muted-foreground mb-8">
                  Глубоко изучаем ваши процессы, разрабатываем архитектуру и создаем уникальное AI решение, которое
                  становится вашим конкурентным преимуществом.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg">100% персонализация под ваши процессы</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Собственная интеллектуальная собственность</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <CheckCircle className="h-6 w-6 text-green-500" />
                    <span className="text-lg">Полный контроль и масштабируемость</span>
                  </div>
                </div>
              </div>
              <div className="relative">
                <div className="bg-white rounded-2xl p-8 shadow-2xl">
                  <div className="space-y-6">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center">
                        <Brain className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Анализ процессов</h4>
                        <p className="text-sm text-muted-foreground">Глубокое изучение бизнеса</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center">
                        <Code className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Разработка архитектуры</h4>
                        <p className="text-sm text-muted-foreground">Проектирование решения</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 gradient-purple rounded-full flex items-center justify-center">
                        <Rocket className="h-6 w-6 text-white" />
                      </div>
                      <div>
                        <h4 className="font-semibold">Внедрение и масштабирование</h4>
                        <p className="text-sm text-muted-foreground">Запуск и развитие</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4. Features */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Возможности наших решений</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Передовые технологии для решения самых сложных задач
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 gradient-purple rounded-full flex items-center justify-center mb-4">
                    <Brain className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Машинное обучение</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Кастомные ML модели для ваших уникальных данных и задач</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 gradient-purple rounded-full flex items-center justify-center mb-4">
                    <Cog className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Автоматизация</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Полная автоматизация сложных бизнес-процессов с AI</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 gradient-purple rounded-full flex items-center justify-center mb-4">
                    <Shield className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Безопасность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Максимальная защита данных и соответствие стандартам</p>
                </CardContent>
              </Card>

              <Card className="text-center hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="mx-auto w-16 h-16 gradient-purple rounded-full flex items-center justify-center mb-4">
                    <Target className="h-8 w-8 text-white" />
                  </div>
                  <CardTitle>Точность</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">Высокая точность прогнозов и рекомендаций AI</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 5. Testimonials */}
        <section className="py-20 px-4 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Отзывы клиентов</h2>
              <p className="text-xl text-muted-foreground">Что говорят компании, которые уже внедрили наши решения</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-pink-400 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">Анна Петрова</h4>
                      <p className="text-sm text-muted-foreground">CTO, TechInnovate</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "AI Solutions создали для нас уникальную систему прогнозирования, которая увеличила точность наших
                    прогнозов на 340%. Это дало нам огромное конкурентное преимущество."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-purple-400 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">Михаил Волков</h4>
                      <p className="text-sm text-muted-foreground">CEO, DataDriven Corp</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Команда полностью поняла наши сложные процессы и создала решение, которое автоматизировало 80%
                    рутинных задач. ROI окупился за 4 месяца."
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white">
                <CardHeader>
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-blue-400 rounded-full"></div>
                    <div>
                      <h4 className="font-semibold">Елена Смирнова</h4>
                      <p className="text-sm text-muted-foreground">Head of Innovation, FutureTech</p>
                    </div>
                  </div>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    "Невероятный уровень экспертизы! Создали AI-систему для нашего R&D отдела, которая ускорила
                    разработку новых продуктов в 2.5 раза."
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 6. Case Studies */}
        <section className="py-20 px-4">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Кейсы успешных проектов</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Реальные результаты внедрения индивидуальных AI решений
              </p>
            </div>

            <div className="space-y-12">
              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="p-8 lg:p-12">
                    <Badge className="mb-4 gradient-purple text-white">Фармацевтика</Badge>
                    <h3 className="text-3xl font-bold mb-4">AI для разработки лекарств</h3>
                    <p className="text-muted-foreground mb-6">
                      Создали систему машинного обучения для ускорения процесса открытия новых лекарственных соединений
                      для крупной фармацевтической компании.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">65%</div>
                        <div className="text-sm text-muted-foreground">Ускорение исследований</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">$12M</div>
                        <div className="text-sm text-muted-foreground">Экономия в год</div>
                      </div>
                    </div>
                    <Button className="gradient-purple text-white">
                      Подробнее о проекте <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                  <div className="bg-gradient-to-br from-purple-100 to-indigo-100 p-8 lg:p-12 flex items-center justify-center">
                    <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <Brain className="h-24 w-24 text-purple-400" />
                    </div>
                  </div>
                </div>
              </Card>

              <Card className="overflow-hidden">
                <div className="grid lg:grid-cols-2">
                  <div className="bg-gradient-to-br from-blue-100 to-purple-100 p-8 lg:p-12 flex items-center justify-center lg:order-1">
                    <div className="w-full h-64 bg-white rounded-lg shadow-lg flex items-center justify-center">
                      <Rocket className="h-24 w-24 text-blue-400" />
                    </div>
                  </div>
                  <div className="p-8 lg:p-12 lg:order-2">
                    <Badge className="mb-4 gradient-purple text-white">Аэрокосмическая отрасль</Badge>
                    <h3 className="text-3xl font-bold mb-4">Предиктивная аналитика для спутников</h3>
                    <p className="text-muted-foreground mb-6">
                      Разработали AI-систему для прогнозирования технических неисправностей спутников и оптимизации их
                      орбитальных маневров.
                    </p>
                    <div className="grid grid-cols-2 gap-6 mb-6">
                      <div>
                        <div className="text-3xl font-bold text-primary">99.2%</div>
                        <div className="text-sm text-muted-foreground">Точность прогнозов</div>
                      </div>
                      <div>
                        <div className="text-3xl font-bold text-primary">40%</div>
                        <div className="text-sm text-muted-foreground">Снижение затрат</div>
                      </div>
                    </div>
                    <Button className="gradient-purple text-white">
                      Подробнее о проекте <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </section>

        {/* 7. Pricing Overview */}
        <section className="py-20 px-4 bg-gradient-to-br from-purple-50 to-indigo-50">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Инвестиции в ваше будущее</h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Прозрачное ценообразование для индивидуальных AI проектов
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">Исследование и MVP</CardTitle>
                  <div className="text-4xl font-bold gradient-text">$50K - $150K</div>
                  <CardDescription>Первый этап разработки</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Анализ требований и процессов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Проектирование архитектуры</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Создание MVP</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Тестирование концепции</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative border-2 border-primary">
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-purple text-white px-4 py-1">Популярный</Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-2xl">Полная разработка</CardTitle>
                  <div className="text-4xl font-bold gradient-text">$200K - $500K</div>
                  <CardDescription>Готовое к продакшену решение</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Все из предыдущего пакета</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Полная разработка системы</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Интеграция с существующими системами</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Обучение команды</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>6 месяцев поддержки</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="relative">
                <CardHeader>
                  <CardTitle className="text-2xl">Enterprise решение</CardTitle>
                  <div className="text-4xl font-bold gradient-text">$500K+</div>
                  <CardDescription>Масштабируемая платформа</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Все из предыдущих пакетов</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Масштабируемая архитектура</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Высокая доступность (99.9%)</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Выделенная команда поддержки</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="h-5 w-5 text-green-500" />
                    <span>Непрерывное развитие</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <p className="text-muted-foreground mb-6">
                Стоимость зависит от сложности проекта. Получите персональное предложение.
              </p>
              <Button size="lg" className="gradient-purple text-white">
                Получить расчет стоимости
              </Button>
            </div>
          </div>
        </section>

        {/* 8. FAQs */}
        <section className="py-20 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">Частые вопросы</h2>
              <p className="text-xl text-muted-foreground">
                Ответы на самые популярные вопросы о индивидуальных AI решениях
              </p>
            </div>

            <div className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">
                    Сколько времени занимает разработка индивидуального AI решения?
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Обычно от 6 до 18 месяцев в зависимости от сложности. MVP можно создать за 3-4 месяца, полное
                    решение требует 8-12 месяцев, а enterprise-платформа может занять до 18 месяцев.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Какие гарантии вы предоставляете?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Мы гарантируем достижение заявленных KPI или возврат средств. Также предоставляем гарантию на
                    техническую поддержку и исправление ошибок в течение 12 месяцев.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Можете ли вы работать с нашими конфиденциальными данными?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, мы подписываем NDA и соблюдаем все требования по защите данных. Можем работать в изолированной
                    среде клиента или использовать федеративное обучение для особо чувствительных данных.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Кто будет владеть интеллектуальной собственностью?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Все права на созданное решение принадлежат клиенту. Мы передаем полный исходный код, документацию и
                    права на использование всех компонентов системы.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="text-xl">Предоставляете ли вы обучение нашей команде?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground">
                    Да, включаем комплексное обучение вашей команды: техническое обучение для разработчиков, обучение
                    пользователей и менеджмент-тренинги для руководителей проекта.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* 9. Call to Action */}
        <section className="py-16 sm:py-20 px-4 gradient-purple text-white relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="max-w-4xl mx-auto text-center relative z-10">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6">
              Готовы создать уникальное AI решение?
            </h2>
            <p className="text-lg sm:text-xl mb-8 sm:mb-10 opacity-90">
              Обсудим ваш проект и покажем, как AI может трансформировать ваш бизнес. Бесплатная консультация и анализ
              возможностей.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center max-w-md sm:max-w-none mx-auto">
              <Button
                size="lg"
                className="bg-white text-purple-600 hover:bg-gray-100 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 w-full sm:w-auto h-12 sm:h-auto"
                onClick={() => openModal("consultation")}
              >
                <Users className="mr-2 h-5 sm:h-6 w-5 sm:w-6" />
                Заказать консультацию
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-white text-white hover:bg-white/10 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4 bg-transparent w-full sm:w-auto h-12 sm:h-auto"
                onClick={() => openModal("demo")}
              >
                <Clock className="mr-2 h-5 sm:h-6 w-5 sm:w-6" />
                Скачать презентацию
              </Button>
            </div>
            <p className="text-sm mt-6 opacity-75">
              Ответим в течение 2 часов • Консультация бесплатно • NDA по запросу
            </p>
          </div>
        </section>
      </main>
    </div>
  )
}
