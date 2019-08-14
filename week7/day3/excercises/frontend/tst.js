'use strict';
const yodaWords = ['Arrgh. Uhmm', 'Err..err.err'];

const textSithTransformer = (req, res) => {
    let respObj = {}
    if (req.body.text === undefined) {
        respObj = {
            "error": "Feed me some text you have to, padawan young you are. Hmmm."
        }
    } else {
        let sentences = req.body.text.split('. ');
        sentences.forEach((element, index) => sentences[index] = element.charAt(0).toLowerCase() + element.slice(1));
        let mixedSentences = sentences.map(element => {
            let words = element.split(' ');
            let swappedWords = words.map((element, index) => {
                if (index % 2 === 0 && index < words.length - 1) {
                    return words[index + 1];
                } else if (index % 2 === 1) {
                    return words[index - 1];
                } else {
                    return words[index];
                }
            })
            return swappedWords.join(' ');
        })
        mixedSentences.forEach((element, index) => mixedSentences[index] = element.charAt(0).toUpperCase() + element.slice(1));
        let yodaCounter = 0;
        for (let i = 0; i < mixedSentences.length; i++) {
            if (i % 2 == 0) {
                mixedSentences.splice(i + 1, 0, yodaWords[yodaCounter % yodaWords.length]);
                yodaCounter++;
            }
        }
        let responseText = mixedSentences.join('. ') + '.';
        respObj['sith_text'] = responseText;
    }
    res.send(respObj);
}

module.exports = textSithTransformer;