import React from 'react'
import PhotoCarousel from '@/components/PhotoCarousel'
import BookTable from '@/components/BookTable'

export default function HobbyPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">순간 수집</h1>
      <div className="mb-5">
        <p>
          `순간 수집`은 어딘가에 저장해두었다가 이따금씩 꺼내 보고 싶은 순간의
          장면을 사진으로 남겨, 기억을 수집하는 것입니다.
        </p>
        <p>
          순간 수집을 하면, 시간이 흘러 그 순간의 기억을 잊어버려도, 그때의
          장면을 사진으로 남겨놓았기 때문에, 다시 그 순간에 대한 기억과 감정을
          떠올리거나, 사진을 바라보며 그 순간에 느꼈을 생각과 감상을 되살려볼 수
          있습니다.
        </p>
        <p>아래는 제가 수집한 순간들 중 일부입니다.</p>
        <PhotoCarousel />
      </div>
      <h1 className="text-2xl font-bold mb-5">작품 감상</h1>
      <div className="mb-5">
        <p>
          `작품 감상`은 음악, 책, 영화, 드라마, 그림 등의 작품을 오래도록 깊이
          감상하며 즐기는 것입니다.
        </p>
        <p>
          오래도록 깊이 작품을 감상하는 것의 좋은 점은, 모든 작품들은 저마다의
          배울 점, 생각할거리가 있기 때문에, 자기 자신을 더 나은 사람으로
          성장시킬 수 있는 기회를 얻을 수 있다는 것입니다.
        </p>
        <p>저는 종종 작품 안으로 잠수하여, 공상 속에 표류하곤 합니다.</p>
        <p>아래는 제가 감상한 작품들 중 일부입니다.</p>
        <BookTable />
      </div>
    </div>
  )
}
