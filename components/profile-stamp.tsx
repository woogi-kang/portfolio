"use client"

import Image from "next/image"
import { useState } from "react"

type ProfileStampProps = {
  src: string
  name: string
}

export function ProfileStamp({ src, name }: ProfileStampProps) {
  const [state, setState] = useState<"loading" | "loaded" | "error">("loading")

  return (
    <div
      className="relative aspect-square size-28 overflow-hidden rounded-lg border bg-surface-muted sm:size-36"
      role="img"
      aria-label={`Product Engineer ${name}`}
      data-image-state={state}
    >
      <span
        className="absolute inset-0 flex items-center justify-center font-mono text-xl font-bold text-ink-muted"
        aria-hidden="true"
      >
        KT
      </span>
      {state !== "error" ? (
        <Image
          src={src}
          alt=""
          fill
          priority
          sizes="(min-width: 640px) 144px, 112px"
          className={`object-cover transition-opacity duration-150 ${state === "loaded" ? "opacity-100" : "opacity-0"}`}
          onLoad={() => setState("loaded")}
          onError={() => setState("error")}
        />
      ) : null}
    </div>
  )
}
