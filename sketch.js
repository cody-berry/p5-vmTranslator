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


function preload() {
    font = loadFont('data/consola.ttf')
    file = loadStrings('MemoryAccess/BasicTest/BasicTest.vm')
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
    let parser = new Parser(file)

    console.log(parser)


    for (let line of file) {
        parser.advance()
        console.log(parser.currentLine)
    }
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