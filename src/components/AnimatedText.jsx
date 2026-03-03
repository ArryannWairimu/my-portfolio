import React, { useState, useEffect } from 'react'

export default function AnimatedText({ text, className = '', staggerDelay = 0.08 }) {
  const [displayedText, setDisplayedText] = useState('')
  const [index, setIndex] = useState(0)
  const [isComplete, setIsComplete] = useState(false)

  useEffect(() => {
    if (index < text.length) {
      const timer = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(index + 1)
      }, staggerDelay * 30)
      return () => clearTimeout(timer)
    } else if (index === text.length && !isComplete) {
      setIsComplete(true)
    }
  }, [index, text, staggerDelay, isComplete])

  return (
    <span className={className}>
      <span className="inline-block">{displayedText}</span>
      {!isComplete && <span className="inline-block ml-1 w-1 h-[1.2em] bg-blue-400 animate-pulse"></span>}
    </span>
  )
}
