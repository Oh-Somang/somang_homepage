'use client'

import { createQuote } from '@/actions/quoteActions'
import { useState } from 'react'

export default function AddQuoteForm() {
  const [text, setText] = useState('')
  const [author, setAuthor] = useState('')

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!text || !author) {
      alert('명언과 말한 이를 모두 입력해주세요.')
      return
    }

    try {
      await createQuote(text, author)
      setText('')
      setAuthor('')
      alert('명언이 등록되었습니다!')
    } catch (error) {
      console.error(error)
      alert('등록 중 오류가 발생했습니다.')
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 mb-8 p-4 bg-gray-100 rounded-lg"
    >
      <h2 className="text-xl font-bold mb-2">명언을 등록해주세요. :)</h2>

      <textarea
        className="border border-slate-500 p-2 rounded h-24 resize-none whitespace-pre-wrap"
        placeholder="명언 (엔터로 줄바꿈 가능)"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />

      <input
        className="border border-slate-500 p-2 rounded"
        type="text"
        placeholder="말한 이"
        value={author}
        onChange={(e) => setAuthor(e.target.value)}
      />
      <button className="bg-blue-800 text-white font-bold px-6 py-2 rounded-md w-fit hover:bg-blue-900">
        등록
      </button>
    </form>
  )
}
