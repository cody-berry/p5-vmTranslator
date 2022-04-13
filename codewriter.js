
// writes the code for certain instructions
class CodeWriter {
    // all we need to do is to write commands!
    constructor() {
        // we're going to use labels, but hey are the same name, so we need
        // a counter.
        this.labelNumber = 0
    }


    // write an arithmetic command
    writeArithmetic(command) {
        // writes add commands. takes the last two stack positions using
        // StackPointer and adds them.
        if (command === 'add') {
            return ["@0", "A=M", "D=M", "A=A-1", "D=D+M", "M=D", "@0", "M=M-1"]
        }
        // does the same except it subtracts
        if (command === 'sub') {
            return ["@0", "A=M", "D=M", "A=A-1", "D=D-M", "M=D", "@0", "M=M-1"]
        }
        // translates less/greater than or equal to commands
        if (command === 'lt' || command === 'gt' || command === 'eq') {
            this.labelNumber++
            return ["@0", "A=M", "D=M", "A=A-1", "D=D-M",
                "@TRUE" + this.labelNumber, "D;J" + command.toUpperCase(),
                "@0", "M=M-1", "A=M", "M=0", "@STOP" + this.labelNumber,
                "0;JMP", "(TRUE" + this.labelNumber + ")", "M=1",
                "(STOP" + this.labelNumber + ")"]
        }
    }
}

