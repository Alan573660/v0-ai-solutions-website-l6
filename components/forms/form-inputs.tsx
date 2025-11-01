"use client"

import type React from "react"

import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import { AlertCircle, Upload, X } from "lucide-react"
import type { ValidationError } from "@/lib/forms/validation"

interface BaseInputProps {
  label: string
  name: string
  required?: boolean
  errors?: ValidationError[]
  className?: string
}

interface TextInputProps extends BaseInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  type?: "text" | "email" | "tel" | "url"
}

export function TextInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  type = "text",
  required,
  errors,
  className = "",
}: TextInputProps) {
  const fieldErrors = errors?.filter((error) => error.field === name) || []
  const hasError = fieldErrors.length > 0

  return (
    <div className={className}>
      <Label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type={type}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={hasError ? "border-red-500 focus:border-red-500" : ""}
        required={required}
      />
      {hasError && (
        <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="h-3 w-3" />
          <span>{fieldErrors[0].message}</span>
        </div>
      )}
    </div>
  )
}

interface PhoneInputProps extends BaseInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
}

export function PhoneInput({
  label,
  name,
  value,
  onChange,
  placeholder = "+1 (555) 123-4567",
  required,
  errors,
  className = "",
}: PhoneInputProps) {
  const fieldErrors = errors?.filter((error) => error.field === name) || []
  const hasError = fieldErrors.length > 0

  const formatPhone = (input: string) => {
    // Basic phone formatting - can be enhanced based on locale
    const cleaned = input.replace(/\D/g, "")
    if (cleaned.length === 0) return ""
    if (cleaned.length <= 3) return cleaned
    if (cleaned.length <= 6) return `${cleaned.slice(0, 3)}-${cleaned.slice(3)}`
    return `${cleaned.slice(0, 3)}-${cleaned.slice(3, 6)}-${cleaned.slice(6, 10)}`
  }

  return (
    <div className={className}>
      <Label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Input
        id={name}
        name={name}
        type="tel"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={hasError ? "border-red-500 focus:border-red-500" : ""}
        required={required}
      />
      {hasError && (
        <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="h-3 w-3" />
          <span>{fieldErrors[0].message}</span>
        </div>
      )}
    </div>
  )
}

interface SelectInputProps extends BaseInputProps {
  value: string
  onChange: (value: string) => void
  options: { value: string; label: string }[]
  placeholder?: string
}

export function SelectInput({
  label,
  name,
  value,
  onChange,
  options,
  placeholder = "Выберите...",
  required,
  errors,
  className = "",
}: SelectInputProps) {
  const fieldErrors = errors?.filter((error) => error.field === name) || []
  const hasError = fieldErrors.length > 0

  return (
    <div className={className}>
      <Label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <select
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full p-2 border rounded-md bg-background ${hasError ? "border-red-500" : "border-input"}`}
        required={required}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {hasError && (
        <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="h-3 w-3" />
          <span>{fieldErrors[0].message}</span>
        </div>
      )}
    </div>
  )
}

interface TextareaInputProps extends BaseInputProps {
  value: string
  onChange: (value: string) => void
  placeholder?: string
  rows?: number
}

export function TextareaInput({
  label,
  name,
  value,
  onChange,
  placeholder,
  rows = 4,
  required,
  errors,
  className = "",
}: TextareaInputProps) {
  const fieldErrors = errors?.filter((error) => error.field === name) || []
  const hasError = fieldErrors.length > 0

  return (
    <div className={className}>
      <Label htmlFor={name} className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>
      <Textarea
        id={name}
        name={name}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        rows={rows}
        className={hasError ? "border-red-500 focus:border-red-500" : ""}
        required={required}
      />
      {hasError && (
        <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="h-3 w-3" />
          <span>{fieldErrors[0].message}</span>
        </div>
      )}
    </div>
  )
}

interface CheckboxInputProps extends BaseInputProps {
  checked: boolean
  onChange: (checked: boolean) => void
  children: React.ReactNode
}

export function CheckboxInput({
  label,
  name,
  checked,
  onChange,
  children,
  required,
  errors,
  className = "",
}: CheckboxInputProps) {
  const fieldErrors = errors?.filter((error) => error.field === name) || []
  const hasError = fieldErrors.length > 0

  return (
    <div className={className}>
      <div className="flex items-start space-x-2">
        <Checkbox
          id={name}
          name={name}
          checked={checked}
          onCheckedChange={onChange}
          required={required}
          className={hasError ? "border-red-500" : ""}
        />
        <Label htmlFor={name} className="text-sm leading-5">
          {children}
          {required && <span className="text-red-500 ml-1">*</span>}
        </Label>
      </div>
      {hasError && (
        <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="h-3 w-3" />
          <span>{fieldErrors[0].message}</span>
        </div>
      )}
    </div>
  )
}

interface FileUploadProps extends BaseInputProps {
  files: File[]
  onChange: (files: File[]) => void
  accept?: string
  multiple?: boolean
  maxSize?: number // in MB
}

export function FileUpload({
  label,
  name,
  files,
  onChange,
  accept = ".pdf,.doc,.docx,.txt",
  multiple = true,
  maxSize = 10,
  required,
  errors,
  className = "",
}: FileUploadProps) {
  const [dragOver, setDragOver] = useState(false)
  const fieldErrors = errors?.filter((error) => error.field === name) || []
  const hasError = fieldErrors.length > 0

  const handleFileSelect = (selectedFiles: FileList | null) => {
    if (!selectedFiles) return

    const newFiles = Array.from(selectedFiles).filter((file) => {
      if (file.size > maxSize * 1024 * 1024) {
        alert(`Файл ${file.name} слишком большой. Максимальный размер: ${maxSize}MB`)
        return false
      }
      return true
    })

    if (multiple) {
      onChange([...files, ...newFiles])
    } else {
      onChange(newFiles.slice(0, 1))
    }
  }

  const removeFile = (index: number) => {
    const newFiles = files.filter((_, i) => i !== index)
    onChange(newFiles)
  }

  return (
    <div className={className}>
      <Label className="block text-sm font-medium mb-2">
        {label}
        {required && <span className="text-red-500 ml-1">*</span>}
      </Label>

      <div
        className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
          dragOver ? "border-primary bg-primary/5" : hasError ? "border-red-500" : "border-gray-300"
        }`}
        onDragOver={(e) => {
          e.preventDefault()
          setDragOver(true)
        }}
        onDragLeave={() => setDragOver(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragOver(false)
          handleFileSelect(e.dataTransfer.files)
        }}
      >
        <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
        <p className="text-sm text-gray-600 mb-2">
          Перетащите файлы сюда или{" "}
          <label htmlFor={name} className="text-primary cursor-pointer hover:underline">
            выберите файлы
          </label>
        </p>
        <p className="text-xs text-gray-500">
          {accept} • Максимум {maxSize}MB {multiple ? "• Можно выбрать несколько файлов" : ""}
        </p>
        <input
          id={name}
          name={name}
          type="file"
          accept={accept}
          multiple={multiple}
          onChange={(e) => handleFileSelect(e.target.files)}
          className="hidden"
          required={required}
        />
      </div>

      {files.length > 0 && (
        <div className="mt-3 space-y-2">
          {files.map((file, index) => (
            <div key={index} className="flex items-center justify-between p-2 bg-gray-50 rounded">
              <span className="text-sm truncate">{file.name}</span>
              <button type="button" onClick={() => removeFile(index)} className="text-red-500 hover:text-red-700">
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}
        </div>
      )}

      {hasError && (
        <div className="mt-1 flex items-center gap-1 text-sm text-red-600">
          <AlertCircle className="h-3 w-3" />
          <span>{fieldErrors[0].message}</span>
        </div>
      )}
    </div>
  )
}

export { Textarea, Checkbox }
