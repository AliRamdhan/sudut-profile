"use client"

import React from "react"
import { useTransitionContext } from "@/context/transition-context"
import type { LinkProps } from "next/link"
import type { AnchorHTMLAttributes, ReactNode } from "react"
import { usePathname } from "next/navigation"
import { gsap } from "gsap"

type TransitionLinkProps = LinkProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    children: ReactNode
  }

export default function TransitionLink({
  href,
  children,
  target,
  ...props
}: TransitionLinkProps) {
  const { playTransition } = useTransitionContext()
  const pathname = usePathname()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const hrefStr = href.toString()

    // If target is _blank, let the browser handle it normally
    if (target === "_blank") return

    const targetPath = hrefStr.split("#")[0]
    const targetHash = hrefStr.split("#")[1]

    // In-page hash link
    if ((targetPath === "" || targetPath === pathname) && targetHash) {
      e.preventDefault()
      const targetElement = document.getElementById(targetHash)
      if (targetElement) {
        gsap.to(window, {
          duration: 1.2,
          scrollTo: { y: targetElement, offsetY: 100 },
          ease: "power3.inOut",
        })
      }
      return
    }

    // Normal internal route transition
    if (hrefStr !== pathname) {
      e.preventDefault()
      playTransition(hrefStr)
    }
  }

  return (
    <a
      href={href.toString()}
      onClick={handleClick}
      target={target}
      rel={target === "_blank" ? "noopener noreferrer" : undefined}
      {...props}
    >
      {children}
    </a>
  )
}

export { TransitionLink }
