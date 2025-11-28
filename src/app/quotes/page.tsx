import { getAllQuotes } from '@/actions/quoteActions'
import AddQuoteForm from '@/components/AddQuoteForm'
import QuoteList from '@/components/QuoteList'

import { Nanum_Pen_Script } from 'next/font/google'

const handwritingFont = Nanum_Pen_Script({
  weight: '400',
  subsets: ['latin'],
})

export const dynamic = 'force-dynamic'

export default async function QuotesPage() {
  const { quotes } = await getAllQuotes()

  let featuredQuote = {
    text: '자신이 생각하기에 따라 인생은 달라진다.',
    author: '마르쿠스 아우렐리우스',
  }

  if (quotes && quotes.length > 0) {
    const randomIndex = Math.floor(Math.random() * quotes.length)
    featuredQuote = quotes[randomIndex]
  }

  return (
    <div className="max-w-3xl mx-auto p-4">
      <div className="mb-10 text-center py-12 px-4 bg-white shadow-xl shadow-gray-300">
        <h1
          className={`${handwritingFont.className} text-2xl md:text-3xl mb-6 whitespace-pre-wrap leading-relaxed`}
        >
          &quot;{featuredQuote.text}&quot;
        </h1>

        <p className="text-base font-medium">- {featuredQuote.author}</p>
      </div>

      <AddQuoteForm />

      <div className="my-8 border-b border-gray-300"></div>

      <h2 className="text-2xl font-bold mb-4">명언 목록</h2>
      {quotes && <QuoteList quotes={quotes} />}
    </div>
  )
}
