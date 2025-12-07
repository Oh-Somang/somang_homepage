'use client'

import { useUser } from '@clerk/nextjs'

export default function DashboardPage() {
  const { isSignedIn, user, isLoaded } = useUser()

  if (!isLoaded) {
    return <div>로딩 중...</div>
  }
  if (!isSignedIn) {
    return <div>페이지를 보기 위해서는 로그인이 필요합니다.</div>
  }

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Info-c</h1>
      <div className="mb-5">
        <p>
          안녕하세요 :), {user?.firstName} ( Email:{' '}
          {user?.primaryEmailAddress?.emailAddress} )
        </p>
        <p>
          저는 중부대학교 고양창의캠퍼스에서 정보보호학을 전공하고 있는 23학번
          3학년 오소망입니다.
          <br />
          나이는 04년생이며, 혈액형은 A형, 별자리는 천칭자리입니다.
          <br />이 페이지의 이름인 `Info-c`에서, `-c`는 use client 지시자를
          사용하고, 브라우저에서 useUser() 함수를 이용하는 client side 페이지를
          의미합니다.
        </p>
      </div>
    </div>
  )
}
