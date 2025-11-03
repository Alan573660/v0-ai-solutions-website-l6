"use client"

import { MessageCircle, Send } from "lucide-react"
import { Button } from "@/components/ui/button"

interface MessengerLinksProps {
  phone: string
  country: "spain" | "kazakhstan" | "russia"
  className?: string
}

export function MessengerLinks({ phone, country, className = "" }: MessengerLinksProps) {
  // Remove all non-digit characters from phone
  const cleanPhone = phone.replace(/\D/g, "")

  const whatsappUrl = `https://wa.me/${cleanPhone}`
  const telegramUrl = `https://t.me/${cleanPhone}`

  const countryNames = {
    spain: "Испания",
    kazakhstan: "Казахстан",
    russia: "Россия",
  }

  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="text-sm font-medium text-muted-foreground">{countryNames[country]}:</div>
      <div className="flex items-center gap-2">
        <Button
          size="sm"
          variant="outline"
          className="h-9 px-3 hover:bg-green-50 hover:border-green-500 hover:text-green-700 transition-colors bg-transparent"
          asChild
        >
          <a href={whatsappUrl} target="_blank" rel="noopener noreferrer" aria-label={`WhatsApp ${phone}`}>
            <MessageCircle className="h-4 w-4 mr-1.5" />
            WhatsApp
          </a>
        </Button>
        <Button
          size="sm"
          variant="outline"
          className="h-9 px-3 hover:bg-blue-50 hover:border-blue-500 hover:text-blue-700 transition-colors bg-transparent"
          asChild
        >
          <a href={telegramUrl} target="_blank" rel="noopener noreferrer" aria-label={`Telegram ${phone}`}>
            <Send className="h-4 w-4 mr-1.5" />
            Telegram
          </a>
        </Button>
      </div>
    </div>
  )
}
