import Quiz from "../models/quiz";

const database: Array<Quiz> = [
    {
        "category": "Entertainment: Board Games",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The board game &quot;Monopoly&quot; is a variation of what board game?",
        "correct_answer": "The Landlord&#039;s Game",
        "incorrect_answers": [
            "Territorial Dispute",
            "Property Feud",
            "The Monopolist&#039;s Game"
        ]
    },
    {
        "category": "History",
        "type": "multiple",
        "difficulty": "medium",
        "question": "Which of the following is NOT classified as a Semetic language?",
        "correct_answer": "Sumerian",
        "incorrect_answers": [
            "Maltese",
            "Akkadian",
            "Mandaic"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How many times do you fight the Imprisoned in The Legend of Zelda: Skyward Sword?",
        "correct_answer": "3",
        "incorrect_answers": [
            "2",
            "4",
            "5"
        ]
    },
    {
        "category": "Sports",
        "type": "multiple",
        "difficulty": "medium",
        "question": "What is the exact length of one non-curved part in Lane 1 of an Olympic Track?",
        "correct_answer": "84.39m",
        "incorrect_answers": [
            "100m",
            "100yd",
            "109.36yd"
        ]
    },
    {
        "category": "Entertainment: Video Games",
        "type": "multiple",
        "difficulty": "medium",
        "question": "In Terraria, which of these items is NOT crafted at a Mythril Anvil?",
        "correct_answer": "Ankh Charm",
        "incorrect_answers": [
            "Venom Staff",
            "Sky Fracture",
            "Orichalcum Tools"
        ]
    },
    {
        "category": "Entertainment: Television",
        "type": "boolean",
        "difficulty": "easy",
        "question": "In &quot;Star Trek&quot;, Klingons are aliens.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "Celebrities",
        "type": "boolean",
        "difficulty": "hard",
        "question": "Lady Gaga&#039;s real name is Stefani Joanne Angelina Germanotta.",
        "correct_answer": "True",
        "incorrect_answers": [
            "False"
        ]
    },
    {
        "category": "Entertainment: Music",
        "type": "multiple",
        "difficulty": "hard",
        "question": "The heavy metal band Black Sabbath hail from which English city?",
        "correct_answer": "Birmingham",
        "incorrect_answers": [
            "Manchester",
            "London",
            "Newcastle-Upon-Tyne"
        ]
    },
    {
        "category": "Entertainment: Japanese Anime & Manga",
        "type": "multiple",
        "difficulty": "medium",
        "question": "How does the character Dragowizard, Qinus Axia&#039;s from the anime &quot;Buddyfight&quot; differ between the Japanese and English dubs?",
        "correct_answer": "Different Gender",
        "incorrect_answers": [
            "Different Body Proportions",
            "Different Backstory",
            "Different Appearance"
        ]
    },
    {
        "category": "Entertainment: Musicals & Theatres",
        "type": "multiple",
        "difficulty": "medium",
        "question": "The World Chess Championship in Chess, Act 1 is set in which Italian city?",
        "correct_answer": "Merano",
        "incorrect_answers": [
            "Venice",
            "Milan",
            "Rome"
        ]
    }
];

export function fetchDatabase(): Promise<Array<Quiz>> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(database);
        }, 2000)
    })
}

