import { getAllQuotes } from '@/actions/quoteActions'
import AddQuoteForm from '@/components/AddQuoteForm'
import QuoteList from '@/components/QuoteList'

export default async function QuotesPage() {
  const { quotes } = await getAllQuotes()

  return (
    <div className="max-w-3xl mx-auto p-4">
      <h1 className="text-3xl font-bold mb-8 text-center">
        ``자신이 생각하기에 따라 인생은 달라진다.`` <br />- 마르쿠스
        아우렐리우스
      </h1>

      <AddQuoteForm />

      <div className="my-8 border-b border-gray-300"></div>

      <h2 className="text-2xl font-bold mb-4">명언 목록</h2>
      {quotes && <QuoteList quotes={quotes} />}
    </div>
  )
}
