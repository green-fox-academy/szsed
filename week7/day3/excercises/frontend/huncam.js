'use strict';

const vowels = {
    hu: 'aáeéiíoóöőuúüű',
    en: 'aeiou'
};

const toGibberish = (req, res) => {
    let respObj = {}
    if (req.body.text === undefined || req.body.lang === undefined) {
        respObj = {
            "error": "I can't translate that!"
        }
    } else if (req.body.lang === "hu") {
        respObj.translated = ''
        respObj.lang = 'teve';
        let characters = req.body.text.split('');
        for (let i = 0; i < characters.length; i++) {
            if (vowels.hu.indexOf(characters[i].toLowerCase()) >= 0) {
                respObj.translated += characters[i] + 'v' + characters[i].toLowerCase();
            } else {
                respObj.translated += characters[i];
            }
        }
    } else if (req.body.lang === "en") {
        respObj.translated = ''
        respObj.lang = 'gibberish';
        let characters = req.body.text.split('');
        for (let i = 0; i < characters.length; i++) {
            if (vowels.en.indexOf(characters[i].toLowerCase()) >= 0) {
                if (respObj.translated === '') {
                    respObj.translated += 'Idig' + characters[i].toLowerCase();
                } else {
                    respObj.translated += 'idig' + characters[i];
                }
            } else {
                respObj.translated += characters[i];
            }
        }
    } else {
        respObj = {
            "error": "unsupported language!"
        }
    }
    res.send(respObj);
}

module.exports = toGibberish;