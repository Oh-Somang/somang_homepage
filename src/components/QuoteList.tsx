'use client'

interface Quote {
  _id: string
  text: string
  author: string
  createdAt: string
}

export default function QuoteList({ quotes }: { quotes: Quote[] }) {
  return (
    <div className="grid gap-4">
      {quotes.map((quote) => (
        <div
          key={quote._id}
          className="p-4 border border-slate-300 rounded-lg shadow-sm bg-white"
        >
          <blockquote className="text-xl font-semibold italic mb-2">
            "{quote.text}"
          </blockquote>
          <div className="text-right text-gray-600">- {quote.author}</div>
          <div className="text-xs text-gray-400 mt-2">
            등록일: {new Date(quote.createdAt).toLocaleDateString()}
          </div>
        </div>
      ))}
    </div>
  )
}
