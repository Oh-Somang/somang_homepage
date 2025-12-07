import { auth, currentUser } from '@clerk/nextjs/server'
import React from 'react'

export default async function DashboardPage() {
  const { isAuthenticated } = await auth()

  if (!isAuthenticated) {
    return <div>페이지를 보기 위해서는 로그인이 필요합니다.</div>
  }

  const user = await currentUser()
  console.log(user)

  return (
    <div>
      <h1 className="text-2xl font-bold mb-5">Info-s</h1>
      <div className="mb-5">
        <p>
          안녕하세요 :), {user?.firstName} ( Email:{' '}
          {user?.primaryEmailAddress?.emailAddress} , 사용자 등록일:{' '}
          {user?.createdAt} )
          <br />
          저는 중부대학교 고양창의캠퍼스에서 정보보호학을 전공하고 있는 23학번
          3학년 오소망입니다.
          <br />
          나이는 04년생이며, 혈액형은 A형, 별자리는 천칭자리입니다.
          <br />이 페이지의 이름인 `정보-s`에서, `-s`는 서버측에서 auth,
          currentUser 함수를 이용하는, server side 페이지를 의미합니다.
        </p>
      </div>
    </div>
  )
}

