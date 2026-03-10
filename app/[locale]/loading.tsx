export default function Loading() {
  return (
    <div className="min-h-screen bg-[#060a16]">
      {/* Header skeleton */}
      <header className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#060a16]/80 backdrop-blur-xl">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="h-9 w-32 rounded-lg bg-white/5 animate-pulse" />
            <div className="hidden md:flex items-center gap-6">
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="h-4 w-20 rounded bg-white/5 animate-pulse" />
              ))}
            </div>
            <div className="h-9 w-24 rounded-lg bg-white/5 animate-pulse" />
          </div>
        </div>
      </header>

      {/* Hero skeleton */}
      <section className="relative flex min-h-[100svh] flex-col justify-center pt-16">
        <div className="mx-auto w-full max-w-7xl px-6">
          <div className="flex flex-col items-center text-center">
            {/* Badge */}
            <div className="mb-10 h-8 w-48 rounded-full bg-white/5 animate-pulse" />
            
            {/* Title */}
            <div className="mb-4 h-16 w-full max-w-3xl rounded-lg bg-white/5 animate-pulse" />
            <div className="mb-8 h-12 w-full max-w-2xl rounded-lg bg-white/5 animate-pulse" />
            
            {/* Subtitle */}
            <div className="mb-10 h-6 w-full max-w-xl rounded bg-white/5 animate-pulse" />
            
            {/* Buttons */}
            <div className="flex gap-4">
              <div className="h-12 w-40 rounded-lg bg-white/5 animate-pulse" />
              <div className="h-12 w-32 rounded-lg bg-white/5 animate-pulse" />
            </div>
            
            {/* Stats */}
            <div className="mt-16 grid grid-cols-3 gap-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex flex-col items-center gap-2">
                  <div className="h-10 w-20 rounded bg-white/5 animate-pulse" />
                  <div className="h-4 w-24 rounded bg-white/5 animate-pulse" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
