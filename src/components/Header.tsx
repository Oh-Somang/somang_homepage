import {
  SignedIn,
  SignedOut,
  SignInButton,
  SignOutButton,
  SignUpButton,
  UserButton,
} from '@clerk/nextjs'
import React from 'react'
import Link from 'next/link'

export default function Header() {
  return (
    <div>
      <nav className="bg-blue-900 py-4 px-8">
        <div className="flex items-center justify-between container">
          <div className="flex items-center font-bold">
            <Link href="/">
              <div className="text-lg text-white">Somang Homepage</div>
            </Link>
          </div>
          <div className="flex items-center justify-between font-bold">
            <SignedOut>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignInButton />
              </div>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignUpButton />
              </div>
            </SignedOut>
            <SignedIn>
              <Link
                href="dashboard-c"
                className="text-gray-300 hover:text-white mr-4"
              >
                Info-c
              </Link>
              <Link
                href="/dashboard-s"
                className="text-gray-300 hover:text-white mr-4"
              >
                Info-s
              </Link>
              <Link
                href="/dream"
                className="text-gray-300 hover:text-white mr-4"
              >
                Dream
              </Link>
              <Link
                href="/hobby"
                className="text-gray-300 hover:text-white mr-4"
              >
                Hobby
              </Link>
              <Link
                href="/project"
                className="text-gray-300 hover:text-white mr-4"
              >
                Project
              </Link>
              <div className="text-gray-300 hover:text-white mr-4">
                <UserButton />
              </div>
              <div className="text-gray-300 hover:text-white mr-4">
                <SignOutButton />
              </div>
            </SignedIn>
          </div>
        </div>
      </nav>
    </div>
  )
}
