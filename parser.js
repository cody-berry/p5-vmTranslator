


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
            this.currentLine = this.file[this.lineNumber]
        }
    }
}


