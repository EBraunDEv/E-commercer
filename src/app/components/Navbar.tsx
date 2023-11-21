import Link from "next/link";
import { SignedIn, SignedOut } from '@clerk/nextjs/app-beta/client'
import { SignInButton, UserButton } from "@clerk/nextjs"; 

function Navbar() {
  return (
    <nav className='fixed top-0 w-full flex items-center py-2 px-8 justify-between z-50 bg-slate-800 text-gray-300'>
          <Link className='uppercas font-bold text-md h-12 flex items-center' href={''}>
            Braun Store
          </Link>

          <div className="felx items-center gap-8">
            <SignedIn>
              <UserButton />
            </SignedIn>
            <SignedOut>
             <SignInButton mode='modal' >
             <button className="border rounded-md border-gray-400 px-3 py-2">
                  Fazer login
              </button>
             </SignInButton>
            </SignedOut>

          </div>

        </nav>
  )
}

export default Navbar