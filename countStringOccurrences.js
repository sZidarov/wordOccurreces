function countStringOccurrences (text, inputWord){
    let wordsFromText = text.split(" ");
    let counter = 0;
    for (const word of wordsFromText) {
        if(word === inputWord){
            counter++
        }
    }
    console.log(counter);
}
countStringOccurrences('This is a word and it also is a sentence','is');