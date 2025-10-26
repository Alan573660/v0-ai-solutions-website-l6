"use client"

import type React from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { CheckCircle, AlertCircle, Loader2 } from "lucide-react"
import type { ValidationError } from "@/lib/forms/validation"

export interface FormState {
  status: "idle" | "loading" | "success" | "error"
  message?: string
  errors?: ValidationError[]
}

interface FormShellProps {
  title: string
  description?: string
  children: React.ReactNode
  state: FormState
  onSubmit: (e: React.FormEvent) => void
  className?: string
}

export function FormShell({ title, description, children, state, onSubmit, className = "" }: FormShellProps) {
  return (
    <Card className={className}>
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        {description && <CardDescription>{description}</CardDescription>}
      </CardHeader>
      <CardContent>
        {state.status === "success" ? (
          <Alert className="border-green-200 bg-green-50">
            <CheckCircle className="h-4 w-4 text-green-600" />
            <AlertDescription className="text-green-800">
              {state.message || "Форма успешно отправлена! Мы свяжемся с вами в ближайшее время."}
            </AlertDescription>
          </Alert>
        ) : (
          <form onSubmit={onSubmit} className="space-y-6">
            {state.status === "error" && (
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>{state.message || "Произошла ошибка при отправке формы"}</AlertDescription>
              </Alert>
            )}

            {children}
          </form>
        )}
      </CardContent>
    </Card>
  )
}

export function SubmitButton({
  children,
  isLoading,
  disabled,
  className = "",
  dataCta,
}: {
  children: React.ReactNode
  isLoading: boolean
  disabled?: boolean
  className?: string
  dataCta?: string
}) {
  return (
    <button
      type="submit"
      disabled={isLoading || disabled}
      className={`w-full flex items-center justify-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 disabled:opacity-50 disabled:cursor-not-allowed transition-colors ${className}`}
      data-cta={dataCta}
    >
      {isLoading && <Loader2 className="h-4 w-4 animate-spin" />}
      {children}
    </button>
  )
}
