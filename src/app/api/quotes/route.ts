import connectMongoDB from '@/libs/mongodb'
import Quote from '@/models/quote'
import { NextRequest, NextResponse } from 'next/server'

export async function GET(request: NextRequest) {
  try {
    await connectMongoDB()

    const id = request.nextUrl.searchParams.get('id')

    if (id) {
      const quote = await Quote.findById(id)

      if (!quote) {
        return NextResponse.json(
          { message: '해당 명언을 찾을 수 없습니다.' },
          { status: 404 }
        )
      }

      return NextResponse.json({ quote })
    } else {
      const quotes = await Quote.find().sort({ createdAt: -1 })
      return NextResponse.json({ quotes })
    }
  } catch (error) {
    return NextResponse.json(
      { message: '명언을 불러오는데 실패했습니다.', error },
      { status: 500 }
    )
  }
}

export async function POST(request: NextRequest) {
  try {
    const { text, author } = await request.json()

    if (!text || !author) {
      return NextResponse.json(
        { message: '명언과 말한 이를 모두 입력해주세요.' },
        { status: 400 }
      )
    }

    await connectMongoDB()
    await Quote.create({ text, author })

    return NextResponse.json(
      { message: '명언이 등록되었습니다.' },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: '등록에 실패했습니다.', error },
      { status: 500 }
    )
  }
}

export async function PUT(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id')

    const { text, author } = await request.json()

    if (!id) {
      return NextResponse.json(
        { message: '수정할 명언의 ID가 필요합니다.' },
        { status: 400 }
      )
    }

    await connectMongoDB()

    const updatedQuote = await Quote.findByIdAndUpdate(
      id,
      { text, author },
      { new: true }
    )

    if (!updatedQuote) {
      return NextResponse.json(
        { message: '해당 명언을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return NextResponse.json(
      { message: '명언이 수정되었습니다.', quote: updatedQuote },
      { status: 200 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: '수정에 실패했습니다.', error },
      { status: 500 }
    )
  }
}

export async function DELETE(request: NextRequest) {
  try {
    const id = request.nextUrl.searchParams.get('id')

    if (!id) {
      return NextResponse.json(
        { message: '삭제할 ID가 필요합니다.' },
        { status: 400 }
      )
    }

    await connectMongoDB()

    const deletedQuote = await Quote.findByIdAndDelete(id)

    if (!deletedQuote) {
      return NextResponse.json(
        { message: '해당 명언을 찾을 수 없습니다.' },
        { status: 404 }
      )
    }

    return NextResponse.json({ message: '삭제되었습니다.' }, { status: 200 })
  } catch (error) {
    return NextResponse.json(
      { message: '삭제에 실패했습니다.', error },
      { status: 500 }
    )
  }
}

