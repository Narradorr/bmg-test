function getTasks() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(
                [
                    {
                        id: 1,
                        selected: true,
                        name: "What Are Articles?",
                        description: `Articles are words that define a noun as specific or unspecific. Consider the following examples:
                        After the long day, the cup of tea tasted particularly good.
                        By using the article the, we’ve shown that it was one specific day that was long and one specific cup of tea that tasted good.`
                    },
                    {
                        id: 2,
                        name: "The Definite Article",
                        description: `The definite article is the word the. It limits the meaning of a noun to one particular thing. For example, your friend might ask, “Are you going to the party this weekend?” The definite article tells you that your friend is referring to a specific party that both of you know about.`
                    },
                    {
                        id: 3,
                        name: "The Indefinite Article",
                        description: `The indefinite article takes two forms. It’s the word a when it precedes a word that begins with a consonant. It’s the word an when it precedes a word that begins with a vowel. The indefinite article indicates that a noun refers to a general idea rather than a particular thing.`
                    },
                ]
            );
        }, 3000);
    })
}

export default {
    getTasks
}