'use client'

import { updateQuote, deleteQuote } from '@/actions/quoteActions'
import { useState } from 'react'

interface Quote {
  _id: string
  text: string
  author: string
  createdAt: string
}

export default function QuoteList({ quotes }: { quotes: Quote[] }) {
  const [editingId, setEditingId] = useState<string | null>(null)

  const [editText, setEditText] = useState('')
  const [editAuthor, setEditAuthor] = useState('')

  const handleEditClick = (quote: Quote) => {
    setEditingId(quote._id)
    setEditText(quote.text)
    setEditAuthor(quote.author)
  }

  const handleCancel = () => {
    setEditingId(null)
    setEditText('')
    setEditAuthor('')
  }

  const handleSave = async (id: string) => {
    if (!editText || !editAuthor) return alert('내용을 입력해주세요.')

    try {
      await updateQuote(id, editText, editAuthor)
      setEditingId(null)
      alert('수정되었습니다!')
    } catch (error) {
      console.error(error)
      alert('수정 중 오류가 발생했습니다.')
    }
  }

  const handleDelete = async (id: string) => {
    const confirmed = confirm('정말 이 명언을 삭제하시겠습니까?')
    if (!confirmed) return

    try {
      await deleteQuote(id)
      alert('삭제되었습니다.')
    } catch (error) {
      console.error(error)
      alert('삭제 중 오류가 발생했습니다.')
    }
  }

  return (
    <div className="grid gap-4">
      {quotes.map((quote) => (
        <div
          key={quote._id}
          className="p-4 border border-slate-300 rounded-lg shadow-sm bg-white"
        >
          {editingId === quote._id ? (
            <div className="flex flex-col gap-2">
              <textarea
                className="border p-2 rounded h-24 resize-none whitespace-pre-wrap"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
              />

              <input
                type="text"
                className="border p-2 rounded text-sm"
                value={editAuthor}
                onChange={(e) => setEditAuthor(e.target.value)}
              />
              <div className="flex gap-2 justify-end mt-2">
                <button
                  onClick={() => handleSave(quote._id)}
                  className="bg-blue-600 text-white px-3 py-1 rounded text-sm hover:bg-blue-700"
                >
                  저장
                </button>
                <button
                  onClick={handleCancel}
                  className="bg-gray-400 text-white px-3 py-1 rounded text-sm hover:bg-gray-500"
                >
                  취소
                </button>
              </div>
            </div>
          ) : (
            <>
              <blockquote className="text-xl font-semibold italic mb-2 whitespace-pre-wrap leading-relaxed">
                &quot;{quote.text}&quot;
              </blockquote>

              <div className="text-right text-gray-600">- {quote.author}</div>
              <div className="flex justify-between items-end mt-2">
                <span className="text-xs text-gray-400">
                  {new Date(quote.createdAt).toLocaleDateString()}
                </span>

                <div className="flex gap-2">
                  <button
                    onClick={() => handleEditClick(quote)}
                    className="text-sm text-green-500 hover:text-green-700 underline font-medium"
                  >
                    수정
                  </button>

                  <button
                    onClick={() => handleDelete(quote._id)}
                    className="text-sm text-red-500 hover:text-red-700 underline font-medium"
                  >
                    삭제
                  </button>
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  )
}

