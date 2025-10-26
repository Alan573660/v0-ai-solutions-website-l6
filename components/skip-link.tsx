export function SkipLink() {
  return (
    <a
      href="#main-content"
      className="sr-only focus:not-sr-only fixed top-4 left-4 z-[99999] bg-black text-white px-6 py-3 rounded-md font-bold no-underline border-2 border-white shadow-2xl transition-all focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-black"
    >
      Перейти к основному содержанию
    </a>
  )
}
