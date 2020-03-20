const getRestOfWord = (completeWord)=>{
    return completeWord.substring(1, completeWord.length)
}

const firstLetterAtWord = () =>{}

const wordTranslator = (word) => {
    let suffix ='ay'
    let firstLetter = word.charAt(0)
    let restOfWord = getRestOfWord(word)
    if(firstLetter.toUpperCase() === firstLetter){
        firstLetter = firstLetter.toLowerCase()
        restOfWord = restOfWord.charAt(0).toUpperCase() + getRestOfWord(restOfWord)
    }
    if((/[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(word))){
        suffix = suffix.concat(restOfWord.charAt(restOfWord.length - 1))
        restOfWord = restOfWord.substring(0, restOfWord.length - 1)
    }

    const nWord =  restOfWord + firstLetter + suffix
    return nWord
}

const translator = string =>{
    const words = string.split(' ')
    const translatedWord = words.map(wordTranslator)
    
    return translatedWord.join(' ')
}
module.exports = translator