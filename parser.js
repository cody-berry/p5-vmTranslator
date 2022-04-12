


// this parser reads a VM command and parses the command into its
// components. It ignores all whitespace and comments.
class Parser {
    constructor(fileStrings) {
        this.file = fileStrings
        this.lineNumber = 'start'
        this.currentLine = ' '
    }


    // does our parser have any more commands to parse? (helper function)
    hasMoreCommands() {
        if (this.lineNumber === 'start') {
            return true
        }
        return this.lineNumber < this.file.length
    }


    // let's advance our line and parse our line!
    advance() {
        if (this.hasMoreCommands()) {
            if (this.lineNumber !== 'start') {
                this.lineNumber++
            } else {
                this.lineNumber = 0
            }
            this.currentLine = trim(this.file[this.lineNumber])
            let comment = this.currentLine.indexOf('//')
            if (comment !== -1) {
                this.currentLine = this.currentLine.substring(0, comment)
            }
            // only execute the command if this is not whitespace.
            if (this.currentLine.length > 1) {
                let words = this.currentLine.split(' ')
                return words
            }
        } else {
            this.lineNumber = 'end'
        }
    }
}


