"use client"

import { useState, useEffect } from "react"

// Function to get memorized words from localStorage
export function getMemorizedWords(): string[] {
  if (typeof window === "undefined") return []

  const stored = localStorage.getItem("memorizedWords")
  return stored ? JSON.parse(stored) : []
}

// Function to add a word to memorized words
export function addMemorizedWord(wordId: string): void {
  const memorized = getMemorizedWords()
  if (!memorized.includes(wordId)) {
    const updated = [...memorized, wordId]
    localStorage.setItem("memorizedWords", JSON.stringify(updated))
  }
}

// Function to remove a word from memorized words
export function removeMemorizedWord(wordId: string): void {
  const memorized = getMemorizedWords()
  const updated = memorized.filter((id) => id !== wordId)
  localStorage.setItem("memorizedWords", JSON.stringify(updated))
}

// Function to check if a word is memorized
export function isWordMemorized(wordId: string): boolean {
  const memorized = getMemorizedWords()
  return memorized.includes(wordId)
}

// Custom hook to manage memorized words
export function useMemorizedWords() {
  const [memorizedWords, setMemorizedWords] = useState<string[]>([])

  useEffect(() => {
    setMemorizedWords(getMemorizedWords())
  }, [])

  const addWord = (wordId: string) => {
    addMemorizedWord(wordId)
    setMemorizedWords(getMemorizedWords())
  }

  const removeWord = (wordId: string) => {
    removeMemorizedWord(wordId)
    setMemorizedWords(getMemorizedWords())
  }

  const isMemorized = (wordId: string) => {
    return memorizedWords.includes(wordId)
  }

  return { memorizedWords, addWord, removeWord, isMemorized }
}

// Function to get selected list from localStorage
export function getSelectedList(): string {
  if (typeof window === "undefined") return "a1-verbs"

  const stored = localStorage.getItem("selectedList")
  return stored || "a1-verbs"
}

// Function to set selected list in localStorage
export function setSelectedList(listId: string): void {
  localStorage.setItem("selectedList", listId)
}

// Custom hook to manage selected list
export function useSelectedList() {
  const [selectedList, setSelectedListState] = useState<string>("a1-verbs")

  useEffect(() => {
    setSelectedListState(getSelectedList())
  }, [])

  const updateSelectedList = (listId: string) => {
    setSelectedList(listId)
    setSelectedListState(listId)
  }

  return { selectedList, updateSelectedList }
}

// Function to get practice mode from localStorage
export function getPracticeMode(): "en-to-tr" | "tr-to-en" {
  if (typeof window === "undefined") return "en-to-tr"

  const stored = localStorage.getItem("practiceMode")
  return (stored as "en-to-tr" | "tr-to-en") || "en-to-tr"
}

// Function to set practice mode in localStorage
export function setPracticeMode(mode: "en-to-tr" | "tr-to-en"): void {
  localStorage.setItem("practiceMode", mode)
}

// Custom hook to manage practice mode
export function usePracticeMode() {
  const [practiceMode, setPracticeModeState] = useState<"en-to-tr" | "tr-to-en">("en-to-tr")

  useEffect(() => {
    setPracticeModeState(getPracticeMode())
  }, [])

  const updatePracticeMode = (mode: "en-to-tr" | "tr-to-en") => {
    setPracticeMode(mode)
    setPracticeModeState(mode)
  }

  return { practiceMode, updatePracticeMode }
}
