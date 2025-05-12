"use client"

import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, ChevronLeft, ChevronRight, Eye, Trash } from "lucide-react"
import { words, type Word } from "@/lib/data"
import { useMemorizedWords, usePracticeMode } from "@/lib/storage"

export default function MemorizedPage() {
  const router = useRouter()
  const { memorizedWords, removeWord } = useMemorizedWords()
  const { practiceMode, updatePracticeMode } = usePracticeMode()

  const [memorizedWordsList, setMemorizedWordsList] = useState<Word[]>([])
  const [currentIndex, setCurrentIndex] = useState(0)
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    const filteredWords = words.filter((word) => memorizedWords.includes(word.id))
    setMemorizedWordsList(filteredWords)
    setCurrentIndex(0)
    setShowAnswer(false)
  }, [memorizedWords])

  const currentWord = memorizedWordsList[currentIndex]

  const handleNext = () => {
    if (currentIndex < memorizedWordsList.length - 1) {
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

  const handleRemove = () => {
    if (!currentWord) return

    removeWord(currentWord.id)

    if (memorizedWordsList.length <= 1) {
      router.push("/")
    } else if (currentIndex === memorizedWordsList.length - 1) {
      setCurrentIndex(currentIndex - 1)
    }
  }

  const togglePracticeMode = () => {
    updatePracticeMode(practiceMode === "en-to-tr" ? "tr-to-en" : "en-to-tr")
  }

  if (memorizedWordsList.length === 0) {
    return (
      <div className="container mx-auto py-10 px-4 text-center">
        <h1 className="text-3xl font-bold mb-4">No Memorized Words</h1>
        <p className="mb-8">You haven't memorized any words yet. Practice some words and mark them as memorized.</p>
        <Button onClick={() => router.push("/practice")}>Go to Practice</Button>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Memorized Words</h1>
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
              {currentWord.level}
            </Badge>
            <Badge variant="secondary">{currentWord.category}</Badge>
          </div>
          <div className="text-sm text-muted-foreground">
            {currentIndex + 1} of {memorizedWordsList.length}
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

            <Button variant="destructive" size="sm" onClick={handleRemove} className="flex items-center gap-1">
              <Trash className="h-4 w-4" />
              Remove from Memorized
            </Button>

            <Button
              variant="outline"
              size="sm"
              onClick={handleNext}
              disabled={currentIndex === memorizedWordsList.length - 1}
            >
              Next <ChevronRight className="h-4 w-4 ml-1" />
            </Button>
          </CardFooter>
        </Card>

        <div className="flex justify-center">
          <Button variant="ghost" onClick={() => router.push("/practice")} className="flex items-center gap-2">
            <ArrowRight className="h-4 w-4" />
            Back to Practice
          </Button>
        </div>
      </div>
    </div>
  )
}
