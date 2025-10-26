interface Metric {
  name: string
  value: number
  timestamp: number
  labels?: Record<string, string>
}

class MetricsCollector {
  private metrics: Metric[] = []
  private counters: Map<string, number> = new Map()
  private histograms: Map<string, number[]> = new Map()

  counter(name: string, value = 1, labels?: Record<string, string>): void {
    const key = this.getKey(name, labels)
    const current = this.counters.get(key) || 0
    this.counters.set(key, current + value)

    this.metrics.push({
      name,
      value: current + value,
      timestamp: Date.now(),
      labels,
    })
  }

  histogram(name: string, value: number, labels?: Record<string, string>): void {
    const key = this.getKey(name, labels)
    const values = this.histograms.get(key) || []
    values.push(value)
    this.histograms.set(key, values)

    this.metrics.push({
      name,
      value,
      timestamp: Date.now(),
      labels,
    })
  }

  gauge(name: string, value: number, labels?: Record<string, string>): void {
    this.metrics.push({
      name,
      value,
      timestamp: Date.now(),
      labels,
    })
  }

  getMetrics(): Metric[] {
    return [...this.metrics]
  }

  getCounter(name: string, labels?: Record<string, string>): number {
    const key = this.getKey(name, labels)
    return this.counters.get(key) || 0
  }

  getHistogramStats(
    name: string,
    labels?: Record<string, string>,
  ): {
    count: number
    sum: number
    avg: number
    min: number
    max: number
    p50: number
    p95: number
    p99: number
  } | null {
    const key = this.getKey(name, labels)
    const values = this.histograms.get(key)

    if (!values || values.length === 0) return null

    const sorted = [...values].sort((a, b) => a - b)
    const sum = sorted.reduce((acc, val) => acc + val, 0)

    return {
      count: sorted.length,
      sum,
      avg: sum / sorted.length,
      min: sorted[0],
      max: sorted[sorted.length - 1],
      p50: sorted[Math.floor(sorted.length * 0.5)],
      p95: sorted[Math.floor(sorted.length * 0.95)],
      p99: sorted[Math.floor(sorted.length * 0.99)],
    }
  }

  clear(): void {
    this.metrics = []
    this.counters.clear()
    this.histograms.clear()
  }

  private getKey(name: string, labels?: Record<string, string>): string {
    if (!labels) return name
    const labelStr = Object.entries(labels)
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([k, v]) => `${k}=${v}`)
      .join(",")
    return `${name}{${labelStr}}`
  }
}

export const metrics = new MetricsCollector()

// Common metrics
export const METRICS = {
  HTTP_REQUEST_DURATION: "http_request_duration_ms",
  HTTP_REQUEST_TOTAL: "http_request_total",
  HTTP_REQUEST_ERRORS: "http_request_errors",
  LEAD_SUBMISSION_TOTAL: "lead_submission_total",
  LEAD_SUBMISSION_ERRORS: "lead_submission_errors",
  CACHE_HIT: "cache_hit_total",
  CACHE_MISS: "cache_miss_total",
} as const
