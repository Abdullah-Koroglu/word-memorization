export interface Word {
  id: string
  english: string
  turkish: string
  category: string
  level: string
}

export interface WordList {
  id: string
  name: string
  description: string
  level: string
  category: string
}

export const wordLists: WordList[] = [
  {
    id: "a1-verbs",
    name: "A1 Verbs",
    description: "Basic verbs for beginners",
    level: "A1",
    category: "Verbs",
  },
  {
    id: "a1-nouns",
    name: "A1 Nouns",
    description: "Basic nouns for beginners",
    level: "A1",
    category: "Nouns",
  },
  {
    id: "a2-verbs",
    name: "A2 Verbs",
    description: "Elementary verbs",
    level: "A2",
    category: "Verbs",
  },
  {
    id: "b1-expressions",
    name: "B1 Expressions",
    description: "Intermediate expressions and phrases",
    level: "B1",
    category: "Expressions",
  },
  {
    id: "b2-words",
    name: "B2 Words",
    description: "Upper intermediate vocabulary",
    level: "B2",
    category: "Mixed",
  },
]

export const words: Word[] = [
  // A1 Verbs
  { id: "1", english: "to go", turkish: "gitmek", category: "Verbs", level: "A1" },
  { id: "2", english: "to come", turkish: "gelmek", category: "Verbs", level: "A1" },
  { id: "3", english: "to eat", turkish: "yemek", category: "Verbs", level: "A1" },
  { id: "4", english: "to drink", turkish: "içmek", category: "Verbs", level: "A1" },
  { id: "5", english: "to sleep", turkish: "uyumak", category: "Verbs", level: "A1" },
  { id: "6", english: "to read", turkish: "okumak", category: "Verbs", level: "A1" },
  { id: "7", english: "to write", turkish: "yazmak", category: "Verbs", level: "A1" },
  { id: "8", english: "to speak", turkish: "konuşmak", category: "Verbs", level: "A1" },
  { id: "9", english: "to listen", turkish: "dinlemek", category: "Verbs", level: "A1" },
  { id: "10", english: "to watch", turkish: "izlemek", category: "Verbs", level: "A1" },

  // A1 Nouns
  { id: "11", english: "house", turkish: "ev", category: "Nouns", level: "A1" },
  { id: "12", english: "water", turkish: "su", category: "Nouns", level: "A1" },
  { id: "13", english: "food", turkish: "yemek", category: "Nouns", level: "A1" },
  { id: "14", english: "book", turkish: "kitap", category: "Nouns", level: "A1" },
  { id: "15", english: "friend", turkish: "arkadaş", category: "Nouns", level: "A1" },
  { id: "16", english: "family", turkish: "aile", category: "Nouns", level: "A1" },
  { id: "17", english: "school", turkish: "okul", category: "Nouns", level: "A1" },
  { id: "18", english: "teacher", turkish: "öğretmen", category: "Nouns", level: "A1" },
  { id: "19", english: "student", turkish: "öğrenci", category: "Nouns", level: "A1" },
  { id: "20", english: "car", turkish: "araba", category: "Nouns", level: "A1" },

  // A2 Verbs
  { id: "21", english: "to work", turkish: "çalışmak", category: "Verbs", level: "A2" },
  { id: "22", english: "to play", turkish: "oynamak", category: "Verbs", level: "A2" },
  { id: "23", english: "to help", turkish: "yardım etmek", category: "Verbs", level: "A2" },
  { id: "24", english: "to buy", turkish: "satın almak", category: "Verbs", level: "A2" },
  { id: "25", english: "to sell", turkish: "satmak", category: "Verbs", level: "A2" },
  { id: "26", english: "to learn", turkish: "öğrenmek", category: "Verbs", level: "A2" },
  { id: "27", english: "to teach", turkish: "öğretmek", category: "Verbs", level: "A2" },
  { id: "28", english: "to travel", turkish: "seyahat etmek", category: "Verbs", level: "A2" },
  { id: "29", english: "to cook", turkish: "pişirmek", category: "Verbs", level: "A2" },
  { id: "30", english: "to clean", turkish: "temizlemek", category: "Verbs", level: "A2" },

  // B1 Expressions
  { id: "31", english: "in my opinion", turkish: "bence", category: "Expressions", level: "B1" },
  {
    id: "32",
    english: "as soon as possible",
    turkish: "mümkün olan en kısa sürede",
    category: "Expressions",
    level: "B1",
  },
  { id: "33", english: "to make a decision", turkish: "karar vermek", category: "Expressions", level: "B1" },
  { id: "34", english: "to take a risk", turkish: "risk almak", category: "Expressions", level: "B1" },
  { id: "35", english: "to keep in touch", turkish: "iletişimde kalmak", category: "Expressions", level: "B1" },
  { id: "36", english: "to make progress", turkish: "ilerleme kaydetmek", category: "Expressions", level: "B1" },
  { id: "37", english: "to pay attention", turkish: "dikkat etmek", category: "Expressions", level: "B1" },
  { id: "38", english: "to take place", turkish: "gerçekleşmek", category: "Expressions", level: "B1" },
  { id: "39", english: "to look forward to", turkish: "dört gözle beklemek", category: "Expressions", level: "B1" },
  { id: "40", english: "to run out of", turkish: "tükenmek", category: "Expressions", level: "B1" },

  // B2 Words
  { id: "41", english: "achievement", turkish: "başarı", category: "Mixed", level: "B2" },
  { id: "42", english: "opportunity", turkish: "fırsat", category: "Mixed", level: "B2" },
  { id: "43", english: "responsibility", turkish: "sorumluluk", category: "Mixed", level: "B2" },
  { id: "44", english: "environment", turkish: "çevre", category: "Mixed", level: "B2" },
  { id: "45", english: "development", turkish: "gelişim", category: "Mixed", level: "B2" },
  { id: "46", english: "to accomplish", turkish: "başarmak", category: "Mixed", level: "B2" },
  { id: "47", english: "to consider", turkish: "düşünmek", category: "Mixed", level: "B2" },
  { id: "48", english: "to investigate", turkish: "araştırmak", category: "Mixed", level: "B2" },
  { id: "49", english: "to recommend", turkish: "tavsiye etmek", category: "Mixed", level: "B2" },
  { id: "50", english: "to negotiate", turkish: "müzakere etmek", category: "Mixed", level: "B2" },
]

export function getWordsByList(listId: string): Word[] {
  const list = wordLists.find((list) => list.id === listId)
  if (!list) return []

  return words.filter((word) => word.level === list.level && word.category === list.category)
}

export function getWordById(id: string): Word | undefined {
  return words.find((word) => word.id === id)
}
