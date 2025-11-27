'use server'

import connectMongoDB from '@/libs/mongodb'
import Quote from '@/models/quote'
import { revalidatePath } from 'next/cache'

function convertDocToObj(doc: any) {
  doc._id = doc._id.toString()
  return doc
}

export async function createQuote(text: string, author: string) {
  try {
    await connectMongoDB()
    const doc = await Quote.create({ text, author })
    revalidatePath('/quotes')
    return { success: true, quote: convertDocToObj(doc) }
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
