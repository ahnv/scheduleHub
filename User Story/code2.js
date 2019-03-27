
/**
 *   7 Segment Display Character
 *   Ref : https://en.wikipedia.org/wiki/Seven-segment_display
 * 
 *          ___
 *        /  a  \
 *      / \ ___ / \
 *      | |     | |
 *      |f|     |b| 
 *      | | ___ | |
 *      \ /  g  \ /
 *      / \ ___ / \
 *      | |     | |
 *      |e|     |c| 
 *      | | ___ | |
 *      \ /  d  \ /
 *        \ ___ /
 * 
 *      Digit   abcdefg	    a	b	c	d	e	f	g
 *      0       0x7E	    0	0	0	0	0	0	1
 *      1       0x30	    1	0	0	1	1	1	1
 *      2       0x6D	    0	0	1	0	0	1	0
 *      3       0x79	    0	0	0	0	1	1	0
 *      4       0x33	    1	0	0	1	1	0	0
 *      5       0x5B	    0	1	0	0	1	0	0
 *      6       0x5F	    0	1	0	0	0	0	0
 *      7       0x70	    0	0	0	1	1	1	1
 *      8       0x7F	    0	0	0	0	0	0	0
 *      9       0x7B	    0	0	0	0	1	0	0
 * 
 */

class ASCIIParser{

    constructor(dataFile){
        if (dataFile){
            this.loadData(dataFile);
            this.runParser();
            return this.predicted;
        }
    }

    loadData(filePath){
        let fs = require('fs');
        let file = fs.readFileSync(filePath, 'utf8');
        this.data = file.split("\n\n").map(el => { return el.split("\n") })
    }
    
    splitAsciiCharacter(asciiString){
        let asciiCharacters = [];
        for (let i = 0; i < asciiString[0].length; i = i + 3) {
            asciiCharacters.push(
                [
                    asciiString[0][i] + asciiString[0][i + 1] + asciiString[0][i + 2],
                    asciiString[1][i] + asciiString[1][i + 1] + asciiString[1][i + 2],
                    asciiString[2][i] + asciiString[2][i + 1] + asciiString[2][i + 2]
                ]
            )
        }
        return asciiCharacters;
    }
    
    asciiCharacterToNumber(character){

        let hexArray = ['7e', '30', '6d', '79', '33', '5b', '5f', '70', '7f', '7b'];

        let a = (character[0][1] == "_") ? 1 : 0,
            b = (character[1][2] == "|") ? 1 : 0,
            c = (character[2][2] == "|") ? 1 : 0,
            d = (character[2][1] == "_") ? 1 : 0,
            e = (character[2][0] == "|") ? 1 : 0,
            f = (character[1][0] == "|") ? 1 : 0,
            g = (character[1][1] == "_") ? 1 : 0;
    
        let hex = parseInt("" + a + b + c + d + e + f + g, 2).toString(16);
    
        if (hexArray.indexOf(hex) != -1)
            return hexArray.indexOf(hex);
        return '?';
    }
    
    AsciiStringToNumber(datum){
        let number = "";
        this.splitAsciiCharacter(datum).forEach((character) => {
            number += this.asciiCharacterToNumber(character);
        })
        return number;
    }

    runParser(){
        this.predicted = [];
        this.data.forEach(el => {
            let e = this.AsciiStringToNumber(el);
            if (e.indexOf('?') > -1) e += " ILLEGAL"
            this.predicted.push(e);
        });
    }

}

let data = new ASCIIParser('./input_user_story_1.txt');

// let asciiParser = new ASCIIParser();
// asciiParser.loadData('./input_user_story_1.txt');
// asciiParser.runParser();
// data = asciiParser.predicted;

let fs = require('fs');
fs.writeFileSync("output.txt", data.toString().replace(/\,/g, "\n")+"\n");