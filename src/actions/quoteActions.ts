'use server'

import connectMongoDB from '@/libs/mongodb'
import Quote from '@/models/quote'
import { revalidatePath } from 'next/cache'

export async function createQuote(text: string, author: string) {
  try {
    await connectMongoDB()

    const doc = await Quote.create({ text, author })

    const newQuote = {
      _id: doc._id.toString(),
      text: doc.text,
      author: doc.author,
      createdAt: doc.createdAt.toString(),
      updatedAt: doc.updatedAt.toString(),
    }

    revalidatePath('/quotes')

    return { success: true, quote: newQuote }
  } catch (error) {
    throw new Error(`명언 등록 실패: ${error}`)
  }
}

export async function getAllQuotes() {
  try {
    await connectMongoDB()

    const docs = await Quote.find({}).sort({ createdAt: -1 })

    const quotes = docs.map((doc) => {
      const obj = doc.toObject()
      obj._id = obj._id.toString()
      obj.createdAt = obj.createdAt.toString()
      obj.updatedAt = obj.updatedAt.toString()
      return obj
    })

    return { success: true, quotes }
  } catch (error) {
    throw new Error(`명언 조회 실패: ${error}`)
  }
}

export async function updateQuote(id: string, text: string, author: string) {
  try {
    await connectMongoDB()

    const doc = await Quote.findByIdAndUpdate(
      id,
      { text, author },
      { new: true }
    )

    if (!doc) throw new Error('해당 명언을 찾을 수 없습니다.')

    revalidatePath('/quotes')
    return { success: true }
  } catch (error) {
    throw new Error(`명언 수정 실패: ${error}`)
  }
}

export async function deleteQuote(id: string) {
  try {
    await connectMongoDB()
    const doc = await Quote.findByIdAndDelete(id)

    if (!doc) throw new Error('해당 명언을 찾을 수 없습니다.')

    revalidatePath('/quotes')

    return { success: true }
  } catch (error) {
    throw new Error(`명언 삭제 실패: ${error}`)
  }
}

