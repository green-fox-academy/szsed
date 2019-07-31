'use strict';

import readContent from './readContent';
import familyFriendlify from './familyFriendlify'

const fileName: string = 'content.txt';
const wordList: string[] = ['fuck', 'bloody', 'cock', 'shit', 'fucker', 'fuckstick', 'asshole', 'dick', 'piss', 'cunt'];
const content: string = readContent(fileName);

console.log(familyFriendlify(content, wordList));
