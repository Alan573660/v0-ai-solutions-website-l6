"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Bot, Mail, Lock, User, ArrowRight, Eye, EyeOff, AlertCircle } from "lucide-react"
import Link from "next/link"
import type { Locale } from "@/lib/i18n/config"
import { Alert, AlertDescription } from "@/components/ui/alert"

interface LoginPageClientProps {
  locale: Locale
}

export function LoginPageClient({ locale }: LoginPageClientProps) {
  const [activeTab, setActiveTab] = useState<"login" | "register" | "reset">("login")
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [success, setSuccess] = useState<string | null>(null)

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    remember: false,
  })

  const [registerData, setRegisterData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    consent: false,
  })

  const [resetData, setResetData] = useState({
    email: "",
  })

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    // Simulate API call
    setTimeout(() => {
      console.log("[v0] Login attempt:", loginData)
      setError("Функция входа находится в разработке. Пожалуйста, свяжитесь с нами для получения доступа.")
      setIsLoading(false)
    }, 1000)
  }

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)

    if (registerData.password !== registerData.confirmPassword) {
      setError("Пароли не совпадают")
      setIsLoading(false)
      return
    }

    if (registerData.password.length < 8) {
      setError("Пароль должен содержать минимум 8 символов")
      setIsLoading(false)
      return
    }

    // Simulate API call
    setTimeout(() => {
      console.log("[v0] Registration attempt:", registerData)
      setError("Функция регистрации находится в разработке. Пожалуйста, свяжитесь с нами для получения доступа.")
      setIsLoading(false)
    }, 1000)
  }

  const handleReset = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError(null)
    setSuccess(null)

    // Simulate API call
    setTimeout(() => {
      console.log("[v0] Password reset attempt:", resetData)
      setSuccess("Инструкции по восстановлению пароля отправлены на ваш email")
      setIsLoading(false)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/5 via-background to-secondary/5 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href={`/${locale}`} className="inline-flex items-center space-x-2 mb-4">
            <div className="h-10 w-10 rounded-lg bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">M2</span>
            </div>
            <span className="font-bold text-xl">AI Platform</span>
          </Link>
          <p className="text-sm text-muted-foreground">Управление AI-агентами для вашего бизнеса</p>
        </div>

        <Card className="shadow-2xl border-2">
          <CardHeader className="space-y-1 pb-4">
            <div className="flex items-center justify-center mb-4">
              <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center">
                <Bot className="h-6 w-6 text-white" />
              </div>
            </div>
            <CardTitle className="text-2xl text-center">Добро пожаловать</CardTitle>
            <CardDescription className="text-center">
              Войдите или создайте аккаунт для доступа к платформе
            </CardDescription>
          </CardHeader>

          <CardContent>
            <Tabs
              value={activeTab}
              onValueChange={(value) => setActiveTab(value as typeof activeTab)}
              className="w-full"
            >
              <TabsList className="grid w-full grid-cols-3 mb-6">
                <TabsTrigger value="login" className="text-xs sm:text-sm">
                  Вход
                </TabsTrigger>
                <TabsTrigger value="register" className="text-xs sm:text-sm">
                  Регистрация
                </TabsTrigger>
                <TabsTrigger value="reset" className="text-xs sm:text-sm">
                  Восстановление
                </TabsTrigger>
              </TabsList>

              {/* Login Tab */}
              <TabsContent value="login">
                <form onSubmit={handleLogin} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="login-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-email"
                        type="email"
                        placeholder="ivan@company.com"
                        required
                        className="pl-10"
                        value={loginData.email}
                        onChange={(e) => setLoginData({ ...loginData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="login-password">Пароль</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="login-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••"
                        required
                        className="pl-10 pr-10"
                        value={loginData.password}
                        onChange={(e) => setLoginData({ ...loginData, password: e.target.value })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="remember"
                        checked={loginData.remember}
                        onCheckedChange={(checked) => setLoginData({ ...loginData, remember: checked as boolean })}
                      />
                      <label htmlFor="remember" className="text-sm cursor-pointer">
                        Запомнить меня
                      </label>
                    </div>
                    <button
                      type="button"
                      onClick={() => setActiveTab("reset")}
                      className="text-sm text-primary hover:underline"
                    >
                      Забыли пароль?
                    </button>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "Вход..." : "Войти"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Нет аккаунта?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("register")}
                      className="text-primary hover:underline"
                    >
                      Зарегистрироваться
                    </button>
                  </p>
                </form>
              </TabsContent>

              {/* Register Tab */}
              <TabsContent value="register">
                <form onSubmit={handleRegister} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  <div className="space-y-2">
                    <Label htmlFor="register-name">Имя и фамилия</Label>
                    <div className="relative">
                      <User className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-name"
                        type="text"
                        placeholder="Иван Иванов"
                        required
                        className="pl-10"
                        value={registerData.name}
                        onChange={(e) => setRegisterData({ ...registerData, name: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-email"
                        type="email"
                        placeholder="ivan@company.com"
                        required
                        className="pl-10"
                        value={registerData.email}
                        onChange={(e) => setRegisterData({ ...registerData, email: e.target.value })}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-password">Пароль</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-password"
                        type={showPassword ? "text" : "password"}
                        placeholder="Минимум 8 символов"
                        required
                        className="pl-10 pr-10"
                        value={registerData.password}
                        onChange={(e) => setRegisterData({ ...registerData, password: e.target.value })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="register-confirm-password">Подтвердите пароль</Label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="register-confirm-password"
                        type={showConfirmPassword ? "text" : "password"}
                        placeholder="Повторите пароль"
                        required
                        className="pl-10 pr-10"
                        value={registerData.confirmPassword}
                        onChange={(e) => setRegisterData({ ...registerData, confirmPassword: e.target.value })}
                      />
                      <button
                        type="button"
                        onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                      >
                        {showConfirmPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-start space-x-2">
                    <Checkbox
                      id="consent"
                      required
                      checked={registerData.consent}
                      onCheckedChange={(checked) => setRegisterData({ ...registerData, consent: checked as boolean })}
                    />
                    <label htmlFor="consent" className="text-xs text-muted-foreground cursor-pointer leading-relaxed">
                      Я согласен с{" "}
                      <Link href={`/${locale}/privacy`} className="underline hover:text-foreground">
                        политикой конфиденциальности
                      </Link>{" "}
                      и{" "}
                      <Link href={`/${locale}/terms`} className="underline hover:text-foreground">
                        условиями использования
                      </Link>
                    </label>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "Регистрация..." : "Создать аккаунт"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Уже есть аккаунт?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("login")}
                      className="text-primary hover:underline"
                    >
                      Войти
                    </button>
                  </p>
                </form>
              </TabsContent>

              {/* Reset Tab */}
              <TabsContent value="reset">
                <form onSubmit={handleReset} className="space-y-4">
                  {error && (
                    <Alert variant="destructive">
                      <AlertCircle className="h-4 w-4" />
                      <AlertDescription>{error}</AlertDescription>
                    </Alert>
                  )}

                  {success && (
                    <Alert className="border-green-600 bg-green-50 text-green-900">
                      <AlertCircle className="h-4 w-4 text-green-600" />
                      <AlertDescription>{success}</AlertDescription>
                    </Alert>
                  )}

                  <div className="text-center mb-4">
                    <p className="text-sm text-muted-foreground">
                      Введите ваш email, и мы отправим инструкции по восстановлению пароля
                    </p>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="reset-email">Email</Label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="reset-email"
                        type="email"
                        placeholder="ivan@company.com"
                        required
                        className="pl-10"
                        value={resetData.email}
                        onChange={(e) => setResetData({ email: e.target.value })}
                      />
                    </div>
                  </div>

                  <Button type="submit" className="w-full" size="lg" disabled={isLoading}>
                    {isLoading ? "Отправка..." : "Восстановить пароль"}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>

                  <p className="text-center text-sm text-muted-foreground">
                    Вспомнили пароль?{" "}
                    <button
                      type="button"
                      onClick={() => setActiveTab("login")}
                      className="text-primary hover:underline"
                    >
                      Войти
                    </button>
                  </p>
                </form>
              </TabsContent>
            </Tabs>

            <div className="mt-6 pt-6 border-t text-center">
              <p className="text-xs text-muted-foreground mb-3">Нужна помощь?</p>
              <div className="flex flex-col sm:flex-row gap-2 justify-center">
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/${locale}/contacts`}>Связаться с нами</Link>
                </Button>
                <Button variant="outline" size="sm" asChild>
                  <Link href={`/${locale}/platform/demo`}>Запросить демо</Link>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <p className="text-center text-xs text-muted-foreground mt-6">© 2025 M2 Solutions. Все права защищены.</p>
      </div>
    </div>
  )
}
