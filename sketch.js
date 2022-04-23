/**
 *  @author Cody
 *  @date 2022.03.11
 *
 *
 */

/** 🧹 shows debugging info using text() 🧹 */
function displayDebugCorner() {
    const LEFT_MARGIN = 10
    const DEBUG_Y_OFFSET = height - 10 /* floor of debug corner */
    const LINE_SPACING = 2
    const LINE_HEIGHT = textAscent() + textDescent() + LINE_SPACING
    fill(0, 0, 100, 100) /* white */
    strokeWeight(0)

    text(`frameCount: ${frameCount}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET - LINE_HEIGHT)
    text(`frameRate: ${frameRate().toFixed(1)}`,
        LEFT_MARGIN, DEBUG_Y_OFFSET)
}


let font
let instructions
let file
let parser
let codewriter


function preload() {
    font = loadFont('data/consola.ttf')
    file = loadStrings('MemoryAccess/StaticTest/StaticTest.vm')
}


function setup() {
    let cnv = createCanvas(600, 300)
    cnv.parent('#canvas')
    colorMode(HSB, 360, 100, 100, 100)
    textFont(font, 14)

    /* initialize instruction div */
    instructions = select('#ins')
    instructions.html(`<pre>
        [1,2,3,4,5] → no function
        z → freeze sketch</pre>`)


    // a parser. we'll need it later.
    parser = new Parser(file)

    // a code writer.
    codewriter = new CodeWriter()


    for (let line of file) {
        // console.log(parser.lineNumber)
        let words = parser.advance()
        // console.log(words)

        if (words.length === 1) {
            console.log("// " + line)
            let arithmetic = codewriter.writeArithmetic(words[0])
            for (let code of arithmetic) {
                console.log(code)
            }
        } if (words.length === 3) {
            console.log("// " + line)
            let pushPop = codewriter.writePushPop(words[0], words[1], int(words[2]))
            if (pushPop) {
                for (let code of pushPop) {
                    console.log(code)
                }
            }
        }
    }

    noLoop()
}


function draw() {
    background(234, 34, 24)

    displayDebugCorner()
}





function keyPressed() {
    /* stop sketch */
    if (key === 'z') {
        noLoop()
        instructions.html(`<pre>
            sketch stopped</pre>`)
    }
}