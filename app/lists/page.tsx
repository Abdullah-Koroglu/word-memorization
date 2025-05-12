"use client"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { wordLists } from "@/lib/data"
import { useSelectedList } from "@/lib/storage"

export default function ListsPage() {
  const router = useRouter()
  const { selectedList, updateSelectedList } = useSelectedList()

  const handleSelectList = (listId: string) => {
    updateSelectedList(listId)
    router.push("/practice")
  }

  return (
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-8">Word Lists</h1>
      <p className="text-muted-foreground mb-8">Select a word list to practice</p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        {wordLists.map((list) => (
          <Card
            key={list.id}
            className={`hover:shadow-md transition-shadow ${selectedList === list.id ? "border-primary" : ""}`}
          >
            <CardHeader className="pb-2">
              <div className="flex justify-between items-start">
                <CardTitle className="text-lg md:text-xl">{list.name}</CardTitle>
                <Badge>{list.level}</Badge>
              </div>
              <CardDescription>{list.description}</CardDescription>
            </CardHeader>
            <CardContent className="pb-2">
              <p className="text-sm">Category: {list.category}</p>
            </CardContent>
            <CardFooter>
              <Button
                onClick={() => handleSelectList(list.id)}
                variant={selectedList === list.id ? "default" : "outline"}
                className="w-full"
              >
                {selectedList === list.id ? "Currently Selected" : "Select List"}
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  )
}
