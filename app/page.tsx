import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"
import { BookOpen, BookText, CheckCircle } from "lucide-react"

export default function Home() {
  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold text-center mb-8">Word Memorization 1</h1>
      <p className="text-center text-muted-foreground mb-10">Practice vocabulary between Turkish and English</p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookOpen className="h-5 w-5" />
              Practice Words
            </CardTitle>
            <CardDescription>Start practicing with word lists</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/practice">
              <Button className="w-full">Start Practice</Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <BookText className="h-5 w-5" />
              Word Lists
            </CardTitle>
            <CardDescription>Browse and select word lists</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/lists">
              <Button className="w-full" variant="outline">
                View Lists
              </Button>
            </Link>
          </CardContent>
        </Card>

        <Card className="hover:shadow-md transition-shadow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <CheckCircle className="h-5 w-5" />
              Memorized Words
            </CardTitle>
            <CardDescription>Practice words you've memorized</CardDescription>
          </CardHeader>
          <CardContent>
            <Link href="/memorized">
              <Button className="w-full" variant="outline">
                View Memorized
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
