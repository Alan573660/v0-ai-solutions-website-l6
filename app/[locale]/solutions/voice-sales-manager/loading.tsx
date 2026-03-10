export default function Loading() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero skeleton */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-[#060a16]">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-20">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-6 h-7 w-56 rounded-full bg-white/5 animate-pulse" />
            
            {/* Title */}
            <div className="mb-4 h-14 w-full max-w-4xl rounded-lg bg-white/5 animate-pulse" />
            <div className="mb-8 h-10 w-full max-w-3xl rounded-lg bg-white/5 animate-pulse" />
            
            {/* Subtitle */}
            <div className="mb-10 h-6 w-full max-w-2xl rounded bg-white/5 animate-pulse" />
            
            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <div className="h-12 w-48 rounded-xl bg-white/5 animate-pulse" />
              <div className="h-12 w-40 rounded-xl bg-white/5 animate-pulse" />
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-4xl">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="p-6 rounded-2xl bg-white/5 animate-pulse">
                  <div className="h-10 w-20 mb-2 rounded bg-white/5" />
                  <div className="h-4 w-full rounded bg-white/5" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Content skeleton */}
      <section className="py-20 bg-background">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="h-6 w-32 mx-auto mb-4 rounded-full bg-muted animate-pulse" />
            <div className="h-10 w-96 mx-auto mb-4 rounded bg-muted animate-pulse" />
            <div className="h-6 w-64 mx-auto rounded bg-muted animate-pulse" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
              <div key={i} className="p-6 rounded-2xl bg-card border border-border/50 animate-pulse">
                <div className="h-12 w-12 mb-4 rounded-xl bg-muted" />
                <div className="h-6 w-3/4 mb-2 rounded bg-muted" />
                <div className="h-4 w-full rounded bg-muted" />
                <div className="h-4 w-5/6 mt-1 rounded bg-muted" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
