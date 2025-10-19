import React from 'react'
import Link from 'next/link'

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">GitHub</h1>
      <div className="mb-5">
        <Link
          href="https://github.com/Oh-Somang"
          className="text-xl text-blue-900 font-bold"
        >
          Oh-Somang`s GitHub
        </Link>
        <p>저의 GitHub 링크입니다.</p>
        <p>
          프로필에서는 저의 자기 소개, 레지스토리에서는 제가 제작한 프로젝트 및
          참여한 팀 프로젝트를 보실 수 있습니다.
        </p>
      </div>
      <h1 className="text-2xl font-bold mb-5">Projects</h1>
      <div className="mb-5">
        <p>
          웹서버보안프로그래밍 강의 수업 시간에 함께 개발하고 있는 예제
          서비스들을 배포한 주소입니다.
        </p>
        <Link
          href="https://test-chi-olive-31.vercel.app/"
          className="text-xl text-blue-900 font-bold"
        >
          test
        </Link>
      </div>
      <div className="mb-5">
        <Link
          href="https://clerk-app-theta.vercel.app/"
          className="text-xl text-blue-900 font-bold"
        >
          clerk-app
        </Link>
      </div>
      <div className="mb-5">
        <Link
          href="https://crud-olive-six.vercel.app/"
          className="text-xl text-blue-900 font-bold"
        >
          crud
        </Link>
      </div>
    </div>
  )
}
