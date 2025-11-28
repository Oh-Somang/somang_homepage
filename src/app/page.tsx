import React from 'react'
import Link from 'next/link'

export default function HomePage() {
  return (
    <>
      <h1 className="text-2xl mb-4 font-bold">
        소망의 홈페이지에 오신 것을 환영합니다!
      </h1>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <p className="mb-2">
          안녕하세요. :)
          <br />
          저는 중부대학교 고양창의캠퍼스에서 정보보호학을 전공하고 있는 23학번
          3학년 오소망입니다.
          <br />
          이곳은 저에 대한 정보, 진로, 취미, 프로젝트 등에 대해 알아갈 수 있는
          공간입니다.
        </p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link href="dashboard-c" className="text-xl text-blue-900 font-bold">
          Info-c
        </Link>
        <p>
          Info 페이지에는 저에 대한 간략한 소개가 적혀 있습니다.
          <br />
          -c는 use client 지시자를 사용하고, 브라우저에서 useUser() 함수를
          이용하는 client side 페이지를 의미합니다.
        </p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link href="/dashboard-s" className="text-xl text-blue-900 font-bold">
          Info-s
        </Link>
        <p>
          Info 페이지에는 저에 대한 간략한 소개가 적혀 있습니다.
          <br />
          -s는 서버측에서 auth, currentUser 함수를 이용하는, server side
          페이지를 의미합니다.
        </p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link href="/dream" className="text-xl text-blue-900 font-bold">
          Dream
        </Link>
        <p>
          Dream 페이지에서는 저의 진로인 디지털 포렌식에 대해 알 수 있습니다.
        </p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link href="/hobby" className="text-xl text-blue-900 font-bold">
          Hobby
        </Link>
        <p>
          Hobby 페이지에서는 저의 취미인 순간 수집, 작품 감상과 관련된 것들을 볼
          수 있습니다.
        </p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link href="/project" className="text-xl text-blue-900 font-bold">
          Project
        </Link>
        <p>
          Project 페이지에서는 저의 GitHub 링크와 웹서버보안프로그래밍 강의 수업
          시간에 함께 개발하고 있는 예제 서비스들, 그리고 팀 프로젝트와 팀원들
          정보가 있습니다.
        </p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
      <div className="mb-4 bg-gray-100 p-4 m-4 rounded-lg">
        <Link href="/quotes" className="text-xl text-blue-900 font-bold">
          Quotes
        </Link>
        <p>
          Quotes 페이지에서는 행복, 지혜, 희망, 에너지 등을 얻어갈 수 있는 여러
          명언들이 적혀 있습니다.
          <br />
          직접 명언을 등록, 수정, 삭제할 수 있습니다.
        </p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
    </>
  )
}
