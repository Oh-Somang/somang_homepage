import React from 'react'
import Link from 'next/link'

export default function ProjectPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">GitHub</h1>
      <div className="mb-5">
        <Link
          href="https://github.com/Oh-Somang"
          className="text-lg text-blue-900 font-bold"
        >
          Oh-Somang`s GitHub
        </Link>
        <p>
          <br />
          저의 GitHub 링크입니다.
          <br />
          프로필에서는 저의 소개, 레지스토리에서는 제가 제작한 프로젝트 및
          참여한 팀 프로젝트를 보실 수 있습니다.
        </p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
      <h1 className="text-2xl font-bold mb-5">Projects</h1>
      <div className="mb-5">
        <p>
          웹서버보안프로그래밍 수업 시간에 함께 개발하고 있는 예제 서비스들을
          배포한 주소입니다.
        </p>
        <br />
        <Link
          href="https://test-chi-olive-31.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          test
        </Link>
        <br />
        <Link
          href="https://clerk-app-theta.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          clerk-app
        </Link>
        <br />
        <Link
          href="https://crud-olive-six.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          crud
        </Link>
        <br />
        <Link
          href="https://crud-action-seven.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          crud-action
        </Link>
        <br />
        <Link
          href="https://ably-mall-psi.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          ably-mall
          <br />
        </Link>
        <br />
        <Link
          href="https://somang-homepage-old.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          somang_homepage_old
        </Link>
        <p>
          somang_homepage_old는 중간고사 기간에 발표했던 개인 홈페이지
          프로젝트입니다.
        </p>
        <br />
        <Link
          href="https://github.com/Oh-Somang/somang_homepage_old"
          className="text-lg text-blue-900 font-bold"
        >
          GitHub repository for somang_homepage_old
        </Link>
        <p>somang_homepage_old의 깃허브 레포지토리입니다.</p>
        <br />
        <Link
          href="https://somang-homepage.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          somang_homepage
        </Link>
        <p>
          somang_homepage는 기말고사 기간에 발표한 개인 홈페이지 프로젝트입니다.
        </p>
        <br />
        <Link
          href="https://github.com/Oh-Somang/somang_homepage"
          className="text-lg text-blue-900 font-bold"
        >
          GitHub repository for somang_homepage
        </Link>
        <p>somang_homepage의 깃허브 레포지토리입니다.</p>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
      <h1 className="text-2xl font-bold mb-5"> Team Project</h1>
      <div className="mb-5">
        <Link
          href="https://score-url.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          score-url
        </Link>
        <p>
          <br />
          웹서버보안프로그래밍 수업의 팀에서 함께 제작한 팀 프로젝트를 배포한
          주소입니다.
          <br />
          아래는 함께한 팀원들의 정보입니다.
        </p>
        <p>
          <br />
          곽남호: 정보보호학전공, 92212697: 팀장, 프론트엔드
        </p>
        <Link
          href="https://github.com/KwakNamHo"
          className="text-lg text-blue-900 font-bold"
        >
          GitHub
        </Link>
        <br />
        <Link
          href="https://api-sandbox-topaz.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          Portfolio Website
        </Link>
        <p>
          <br />
          박성준: 정보보호학전공, 91913440: 백엔드
        </p>
        <Link
          href="https://github.com/cark753"
          className="text-lg text-blue-900 font-bold"
        >
          GitHub
        </Link>
        <br />
        <Link
          href="https://cark753portfolio.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          Portfolio Website
        </Link>
        <p>
          <br />
          김민석: 정보보호학전공, 92113530: 백엔드
        </p>
        <Link
          href="https://github.com/ms020704"
          className="text-lg text-blue-900 font-bold"
        >
          GitHub
        </Link>
        <br />
        <Link
          href="https://next-js-portfolio-cyan-theta.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          Portfolio Website
        </Link>
        <p>
          <br />
          오소망: 정보보호학전공, 92307234: DB
        </p>
        <Link
          href="https://github.com/Oh-Somang"
          className="text-lg text-blue-900 font-bold"
        >
          GitHub
        </Link>
        <br />
        <Link
          href="https://somang-homepage.vercel.app/"
          className="text-lg text-blue-900 font-bold"
        >
          Portfolio Website
        </Link>
      </div>
      <div className="my-8 border-b border-gray-300"></div>
    </div>
  )
}
