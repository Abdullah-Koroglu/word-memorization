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
  { id: "1", english: "be", turkish: "olmak", category: "Verbs", level: "A1" },
  { id: "2", english: "have", turkish: "sahip olmak", category: "Verbs", level: "A1" },
  { id: "3", english: "do", turkish: "yapmak", category: "Verbs", level: "A1" },
  { id: "4", english: "say", turkish: "söylemek", category: "Verbs", level: "A1" },
  { id: "5", english: "get", turkish: "almak, edinmek", category: "Verbs", level: "A1" },
  { id: "6", english: "make", turkish: "yapmak, üretmek", category: "Verbs", level: "A1" },
  { id: "7", english: "go", turkish: "gitmek", category: "Verbs", level: "A1" },
  { id: "8", english: "know", turkish: "bilmek", category: "Verbs", level: "A1" },
  { id: "9", english: "take", turkish: "almak", category: "Verbs", level: "A1" },
  { id: "10", english: "see", turkish: "görmek", category: "Verbs", level: "A1" },
  { id: "11", english: "come", turkish: "gelmek", category: "Verbs", level: "A1" },
  { id: "12", english: "think", turkish: "düşünmek", category: "Verbs", level: "A1" },
  { id: "13", english: "look", turkish: "bakmak", category: "Verbs", level: "A1" },
  { id: "14", english: "want", turkish: "istemek", category: "Verbs", level: "A1" },
  { id: "15", english: "give", turkish: "vermek", category: "Verbs", level: "A1" },
  { id: "16", english: "use", turkish: "kullanmak", category: "Verbs", level: "A1" },
  { id: "17", english: "find", turkish: "bulmak", category: "Verbs", level: "A1" },
  { id: "18", english: "tell", turkish: "anlatmak, söylemek", category: "Verbs", level: "A1" },
  { id: "19", english: "ask", turkish: "sormak", category: "Verbs", level: "A1" },
  { id: "20", english: "work", turkish: "çalışmak", category: "Verbs", level: "A1" },
  { id: "21", english: "seem", turkish: "görünmek", category: "Verbs", level: "A1" },
  { id: "22", english: "feel", turkish: "hissetmek", category: "Verbs", level: "A1" },
  { id: "23", english: "try", turkish: "denemek", category: "Verbs", level: "A1" },
  { id: "24", english: "leave", turkish: "ayrılmak, bırakmak", category: "Verbs", level: "A1" },
  { id: "25", english: "call", turkish: "aramak, çağırmak", category: "Verbs", level: "A1" },
  { id: "26", english: "keep", turkish: "tutmak, saklamak", category: "Verbs", level: "A1" },
  { id: "27", english: "help", turkish: "yardım etmek", category: "Verbs", level: "A1" },
  { id: "28", english: "talk", turkish: "konuşmak", category: "Verbs", level: "A1" },
  { id: "29", english: "turn", turkish: "dönmek, çevirmek", category: "Verbs", level: "A1" },
  { id: "30", english: "start", turkish: "başlamak", category: "Verbs", level: "A1" },
  { id: "31", english: "show", turkish: "göstermek", category: "Verbs", level: "A1" },
  { id: "32", english: "hear", turkish: "duymak", category: "Verbs", level: "A1" },
  { id: "33", english: "play", turkish: "oynamak, çalmak", category: "Verbs", level: "A1" },
  { id: "34", english: "run", turkish: "koşmak", category: "Verbs", level: "A1" },
  { id: "35", english: "move", turkish: "hareket etmek", category: "Verbs", level: "A1" },
  { id: "36", english: "like", turkish: "beğenmek, sevmek", category: "Verbs", level: "A1" },
  { id: "37", english: "live", turkish: "yaşamak", category: "Verbs", level: "A1" },
  { id: "38", english: "believe", turkish: "inanmak", category: "Verbs", level: "A1" },
  { id: "39", english: "hold", turkish: "tutmak", category: "Verbs", level: "A1" },
  { id: "40", english: "bring", turkish: "getirmek", category: "Verbs", level: "A1" },
  { id: "41", english: "happen", turkish: "olmak, meydana gelmek", category: "Verbs", level: "A1" },
  { id: "42", english: "write", turkish: "yazmak", category: "Verbs", level: "A1" },
  { id: "43", english: "provide", turkish: "sağlamak", category: "Verbs", level: "A1" },
  { id: "44", english: "sit", turkish: "oturmak", category: "Verbs", level: "A1" },
  { id: "45", english: "stand", turkish: "ayakta durmak", category: "Verbs", level: "A1" },
  { id: "46", english: "lose", turkish: "kaybetmek", category: "Verbs", level: "A1" },
  { id: "47", english: "pay", turkish: "ödemek", category: "Verbs", level: "A1" },
  { id: "48", english: "meet", turkish: "buluşmak, tanışmak", category: "Verbs", level: "A1" },
  { id: "49", english: "include", turkish: "içermek", category: "Verbs", level: "A1" },
  { id: "50", english: "continue", turkish: "devam etmek", category: "Verbs", level: "A1" },
  { id: "51", english: "set", turkish: "ayarlamak, kurmak", category: "Verbs", level: "A1" },
  { id: "52", english: "learn", turkish: "öğrenmek", category: "Verbs", level: "A1" },
  { id: "53", english: "change", turkish: "değiştirmek", category: "Verbs", level: "A1" },
  { id: "54", english: "lead", turkish: "öncülük etmek", category: "Verbs", level: "A1" },
  { id: "55", english: "understand", turkish: "anlamak", category: "Verbs", level: "A1" },
  { id: "56", english: "watch", turkish: "izlemek", category: "Verbs", level: "A1" },
  { id: "57", english: "follow", turkish: "takip etmek", category: "Verbs", level: "A1" },
  { id: "58", english: "stop", turkish: "durmak", category: "Verbs", level: "A1" },
  { id: "59", english: "create", turkish: "yaratmak", category: "Verbs", level: "A1" },
  { id: "60", english: "speak", turkish: "konuşmak", category: "Verbs", level: "A1" },
  { id: "61", english: "read", turkish: "okumak", category: "Verbs", level: "A1" },
  { id: "62", english: "allow", turkish: "izin vermek", category: "Verbs", level: "A1" },
  { id: "63", english: "add", turkish: "eklemek", category: "Verbs", level: "A1" },
  { id: "64", english: "spend", turkish: "harcamak", category: "Verbs", level: "A1" },
  { id: "65", english: "grow", turkish: "büyümek", category: "Verbs", level: "A1" },
  { id: "66", english: "open", turkish: "açmak", category: "Verbs", level: "A1" },
  { id: "67", english: "walk", turkish: "yürümek", category: "Verbs", level: "A1" },
  { id: "68", english: "win", turkish: "kazanmak", category: "Verbs", level: "A1" },
  { id: "69", english: "offer", turkish: "teklif etmek", category: "Verbs", level: "A1" },
  { id: "70", english: "remember", turkish: "hatırlamak", category: "Verbs", level: "A1" },
  { id: "71", english: "love", turkish: "sevmek", category: "Verbs", level: "A1" },
  { id: "72", english: "consider", turkish: "düşünmek, göz önünde bulundurmak", category: "Verbs", level: "A1" },
  { id: "73", english: "appear", turkish: "görünmek", category: "Verbs", level: "A1" },
  { id: "74", english: "buy", turkish: "satın almak", category: "Verbs", level: "A1" },
  { id: "75", english: "wait", turkish: "beklemek", category: "Verbs", level: "A1" },
  { id: "76", english: "serve", turkish: "hizmet etmek", category: "Verbs", level: "A1" },
  { id: "77", english: "die", turkish: "ölmek", category: "Verbs", level: "A1" },
  { id: "78", english: "send", turkish: "göndermek", category: "Verbs", level: "A1" },
  { id: "79", english: "expect", turkish: "ummak, beklemek", category: "Verbs", level: "A1" },
  { id: "80", english: "build", turkish: "inşa etmek", category: "Verbs", level: "A1" },
  { id: "81", english: "stay", turkish: "kalmak", category: "Verbs", level: "A1" },
  { id: "82", english: "fall", turkish: "düşmek", category: "Verbs", level: "A1" },
  { id: "83", english: "cut", turkish: "kesmek", category: "Verbs", level: "A1" },
  { id: "84", english: "reach", turkish: "ulaşmak", category: "Verbs", level: "A1" },
  { id: "85", english: "kill", turkish: "öldürmek", category: "Verbs", level: "A1" },
  { id: "86", english: "remain", turkish: "kalmak (bir durumda/durumda)", category: "Verbs", level: "A1" },
  { id: "87", english: "suggest", turkish: "önermek", category: "Verbs", level: "A1" },
  { id: "88", english: "raise", turkish: "yükseltmek, artırmak", category: "Verbs", level: "A1" },
  { id: "89", english: "pass", turkish: "geçmek", category: "Verbs", level: "A1" },
  { id: "90", english: "sell", turkish: "satmak", category: "Verbs", level: "A1" },
  { id: "91", english: "require", turkish: "gerektirmek", category: "Verbs", level: "A1" },
  { id: "92", english: "report", turkish: "rapor etmek, bildirmek", category: "Verbs", level: "A1" },
  { id: "93", english: "decide", turkish: "karar vermek", category: "Verbs", level: "A1" },
  { id: "94", english: "pull", turkish: "çekmek", category: "Verbs", level: "A1" },
  { id: "95", english: "return", turkish: "dönmek, geri dönmek", category: "Verbs", level: "A1" },
  { id: "96", english: "explain", turkish: "açıklamak", category: "Verbs", level: "A1" },
  { id: "97", english: "hope", turkish: "ummak", category: "Verbs", level: "A1" },
  { id: "98", english: "develop", turkish: "geliştirmek", category: "Verbs", level: "A1" },
  { id: "99", english: "carry", turkish: "taşımak", category: "Verbs", level: "A1" },
  { id: "100", english: "break", turkish: "kırmak", category: "Verbs", level: "A1" },

  // A1 Nouns
  { id: "101", english: "house", turkish: "ev", category: "Nouns", level: "A1" },
  { id: "102", english: "water", turkish: "su", category: "Nouns", level: "A1" },
  { id: "103", english: "food", turkish: "yemek", category: "Nouns", level: "A1" },
  { id: "104", english: "book", turkish: "kitap", category: "Nouns", level: "A1" },
  { id: "105", english: "friend", turkish: "arkadaş", category: "Nouns", level: "A1" },
  { id: "106", english: "family", turkish: "aile", category: "Nouns", level: "A1" },
  { id: "107", english: "school", turkish: "okul", category: "Nouns", level: "A1" },
  { id: "108", english: "teacher", turkish: "öğretmen", category: "Nouns", level: "A1" },
  { id: "109", english: "student", turkish: "öğrenci", category: "Nouns", level: "A1" },
  { id: "110", english: "car", turkish: "araba", category: "Nouns", level: "A1" },

  // A2 Verbs
  { id: "111", english: "to work", turkish: "çalışmak", category: "Verbs", level: "A2" },
  { id: "112", english: "to play", turkish: "oynamak", category: "Verbs", level: "A2" },
  { id: "113", english: "to help", turkish: "yardım etmek", category: "Verbs", level: "A2" },
  { id: "114", english: "to buy", turkish: "satın almak", category: "Verbs", level: "A2" },
  { id: "115", english: "to sell", turkish: "satmak", category: "Verbs", level: "A2" },
  { id: "116", english: "to learn", turkish: "öğrenmek", category: "Verbs", level: "A2" },
  { id: "117", english: "to teach", turkish: "öğretmek", category: "Verbs", level: "A2" },
  { id: "118", english: "to travel", turkish: "seyahat etmek", category: "Verbs", level: "A2" },
  { id: "119", english: "to cook", turkish: "pişirmek", category: "Verbs", level: "A2" },
  { id: "120", english: "to clean", turkish: "temizlemek", category: "Verbs", level: "A2" },

  // B1 Expressions
  { id: "121", english: "in my opinion", turkish: "bence", category: "Expressions", level: "B1" },
  {
    id: "122",
    english: "as soon as possible",
    turkish: "mümkün olan en kısa sürede",
    category: "Expressions",
    level: "B1",
  },
  { id: "123", english: "to make a decision", turkish: "karar vermek", category: "Expressions", level: "B1" },
  { id: "124", english: "to take a risk", turkish: "risk almak", category: "Expressions", level: "B1" },
  { id: "125", english: "to keep in touch", turkish: "iletişimde kalmak", category: "Expressions", level: "B1" },
  { id: "126", english: "to make progress", turkish: "ilerleme kaydetmek", category: "Expressions", level: "B1" },
  { id: "127", english: "to pay attention", turkish: "dikkat etmek", category: "Expressions", level: "B1" },
  { id: "128", english: "to take place", turkish: "gerçekleşmek", category: "Expressions", level: "B1" },
  { id: "129", english: "to look forward to", turkish: "dört gözle beklemek", category: "Expressions", level: "B1" },
  { id: "130", english: "to run out of", turkish: "tükenmek", category: "Expressions", level: "B1" },

  // B2 Words
  { id: "131", english: "achievement", turkish: "başarı", category: "Mixed", level: "B2" },
  { id: "132", english: "opportunity", turkish: "fırsat", category: "Mixed", level: "B2" },
  { id: "133", english: "responsibility", turkish: "sorumluluk", category: "Mixed", level: "B2" },
  { id: "134", english: "environment", turkish: "çevre", category: "Mixed", level: "B2" },
  { id: "135", english: "development", turkish: "gelişim", category: "Mixed", level: "B2" },
  { id: "136", english: "to accomplish", turkish: "başarmak", category: "Mixed", level: "B2" },
  { id: "137", english: "to consider", turkish: "düşünmek", category: "Mixed", level: "B2" },
  { id: "138", english: "to investigate", turkish: "araştırmak", category: "Mixed", level: "B2" },
  { id: "139", english: "to recommend", turkish: "tavsiye etmek", category: "Mixed", level: "B2" },
  { id: "140", english: "to negotiate", turkish: "müzakere etmek", category: "Mixed", level: "B2" },
]

export function getWordsByList(listId: string): Word[] {
  const list = wordLists.find((list) => list.id === listId)
  if (!list) return []

  return words.filter((word) => word.level === list.level && word.category === list.category)
}

export function getWordById(id: string): Word | undefined {
  return words.find((word) => word.id === id)
}
