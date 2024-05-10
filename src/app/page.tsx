"use client"

import { Button } from "@/components/ui/button"
import { SignInButton, SignOutButton, SignedIn, SignedOut } from "@clerk/nextjs"
import { useMutation, useQuery } from "convex/react"
import { api } from "../../convex/_generated/api"

export default function Home() {
  const files = useQuery(api.files.getFile)
  const createFile = useMutation(api.files.createFile)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <SignedOut>
        <SignInButton mode="modal">
          <Button>Sign in</Button>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <SignOutButton>
          <Button>Sign out</Button>
        </SignOutButton>
      </SignedIn>

      {files?.map((file) => <p key={file._id}>{file.name}</p>)}

      <button
        onClick={() => {
          createFile({
            name: "Hello world",
          })
        }}
      >
        Create file
      </button>
    </main>
  )
}
