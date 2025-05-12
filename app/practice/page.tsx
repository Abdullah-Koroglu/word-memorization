"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Check, ChevronLeft, ChevronRight, Eye } from "lucide-react"
import { getWordsByList, wordLists, type Word } from "@/lib/data"
import { useSelectedList, usePracticeMode, useMemorizedWords } from "@/lib/storage"

export default function PracticePage() {
  const router = useRouter()
  const { selectedList } = useSelectedList()
  const { practiceMode, updatePracticeMode } = usePracticeMode()
  const { memorizedWords, addWord, removeWord, isMemorized } = useMemorizedWords()

  const [words, setWords] = useState<Word[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    const wordsFromList = getWordsByList(selectedList)
    if (wordsFromList.length === 0) {
      router.push("/lists")
    } else {
      setWords(wordsFromList)
      setCurrentIndex(0)
      setShowAnswer(false)
    }
  }, [selectedList, router])

  const currentWord = words[currentIndex]
  const listInfo = wordLists.find((list) => list.id === selectedList)

  const handleNext = () => {
    if (currentIndex < words.length - 1) {
      setCurrentIndex(currentIndex + 1)
      setShowAnswer(false)
    }
  }

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1)
      setShowAnswer(false)
    }
  }

  const toggleMemorized = () => {
    if (!currentWord) return

    if (isMemorized(currentWord.id)) {
      removeWord(currentWord.id)
    } else {
      addWord(currentWord.id)
    }
  }

  const togglePracticeMode = () => {
    updatePracticeMode(practiceMode === "en-to-tr" ? "tr-to-en" : "en-to-tr")
  }

  if (!currentWord || !listInfo) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">No words available</h1>
        <p className="mb-8">Please select a word list to practice</p>
        <Button onClick={() => router.push("/lists")}>Select List</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Practice Words</h1>
          <div className="flex items-center gap-2">
            <Label htmlFor="practice-mode" className="text-sm">
              {practiceMode === "en-to-tr" ? "English → Turkish" : "Turkish → English"}
            </Label>
            <Switch id="practice-mode" checked={practiceMode === "tr-to-en"} onCheckedChange={togglePracticeMode} />
          </div>
        </div>

        <div className="flex items-center justify-between mb-4">
          <div>
            <Badge variant="outline" className="mr-2">
              {listInfo.level}
            </Badge>
            <Badge variant="secondary">{listInfo.name}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            {currentIndex + 1} of {words.length}
          </div>
        </div>

        <Card className="mb-6">
          <CardHeader>
            <CardTitle className="text-center text-2xl">
              {practiceMode === "en-to-tr" ? currentWord.english : currentWord.turkish}
            </CardTitle>
          </CardHeader>
          <CardContent className="text-center">
            {showAnswer ? (
              <div className="text-xl font-medium py-8">
                {practiceMode === "en-to-tr" ? currentWord.turkish : currentWord.english}
              </div>
            ) : (
              <div className="flex justify-center py-8">
                <Button onClick={() => setShowAnswer(true)} variant="outline" className="flex items-center gap-2">
                  <Eye className="h-4 w-4" />
                  Show Answer
                </Button>
              </div>
            )}
          </CardContent>
          <CardFooter className="flex justify-between">
            <Button variant="outline" size="sm" onClick={handlePrevious} disabled={currentIndex === 0}>
              <ChevronLeft className="h-4 w-4 mr-1" /> Previous
            </Button>

            <Button
              variant={isMemorized(currentWord.id) ? "default" : "outline"}
              size="sm"
              onClick={toggleMemorized}
              className="flex items-center gap-1"
            >
              <Check className="h-4 w-4" />
              {isMemorized(currentWord.id) ? "Memorized" : "Mark as Memorized"}
            </Button>

            <Button variant="outline" size="sm" onClick={handleNext} disabled={currentIndex === words.length - 1}>
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardFooter>
        </Card>

        <div className="flex justify-center">
          <Button variant="ghost" onClick={() => router.push("/lists")} className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            Change List
          </Button>
        </div>
      </div>
    </div>
  )
}
