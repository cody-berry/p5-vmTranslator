
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
            return ["@0", "AM=M-1", "D=M", "A=A-1", "D=D+M", "M=D"]
        }
        // does the same except it subtracts
        if (command === 'sub') {
            return ["@0", "AM=M-1", "D=M", "A=A-1", "D=M-D", "M=D"]
        }
        // translates less/greater than or equal to commands
        if (command === 'lt') {
            this.labelNumber++
            return ["@0", "AM=M-1", "D=M", "A=A-1", "D=D-M",
                "@TRUE" + this.labelNumber, "D;JGT",
                "@0", "A=M-1", "M=0", "@STOP" + this.labelNumber,
                "0;JMP", "(TRUE" + this.labelNumber + ")", "@0", "A=M-1", "M=-1",
                "(STOP" + this.labelNumber + ")"]
        } if (command === 'gt') {
            this.labelNumber++
            return ["@0", "AM=M-1", "D=M", "A=A-1", "D=D-M",
                "@TRUE" + this.labelNumber, "D;JLT",
                "@0", "A=M-1", "M=0", "@STOP" + this.labelNumber,
                "0;JMP", "(TRUE" + this.labelNumber + ")", "@0", "A=M-1", "M=-1",
                "(STOP" + this.labelNumber + ")"]
        } if (command === 'eq') {
            this.labelNumber++
            return ["@0", "AM=M-1", "D=M", "A=A-1", "D=D-M",
                "@TRUE" + this.labelNumber, "D;JEQ",
                "@0", "A=M-1", "M=0", "@STOP" + this.labelNumber,
                "0;JMP", "(TRUE" + this.labelNumber + ")", "@0", "A=M-1", "M=-1",
                "(STOP" + this.labelNumber + ")"]
        }
        // translates 'and' commands
        if (command === 'and') {
            return ["@0", "AM=M-1", "D=M", "A=A-1", "M=D&M"]
        }
        // translates 'or' commands
        if (command === 'or') {
            return ["@0", "AM=M-1", "D=M", "A=A-1", "M=D|M"]
        }
        // translates 'not' commands
        if (command === 'not') {
            this.labelNumber++
            return ["@0", "A=M", "M=!M"]
        }
        // translates 'neg' commands
        if (command === 'neg') {
            return ['@0', 'A=M', 'M=-M']
        }
    }


    // write a push or pop command
    writePushPop(pushOrPop, segment, index) {
        let result;
        // write a push command
        if (pushOrPop === 'push') {
            if (segment === 'constant') { // push constant i
                result = ["@" + index, "D=A"] // D=i
            } if (segment === 'local') { // push local i
                result = ["@" + index, "D=A", "@LCL", "A=D+A", "D=M"] // D=RAM[LCL+i]
            } if (segment === 'argument') { // push argument i
                result = ["@" + index, "D=A", "@ARG", "A=D+A", "D=M"] // D=RAM[ARG+i]
            } if (segment === 'this') { // push this i
                result = ["@" + index, "D=A", "@THIS", "A=D+A", "D=M"] // D=RAM[THIS+i]
            } if (segment === 'that') { // push that i
                result = ["@" + index, "D=A", "@THAT", "A=D+A", "D=M"] // D=RAM[THAT+i]
            } if (segment === 'pointer') { // push pointer i
                result = ["@" + (3+index), "D=M"] // D=THIS/THAT
            } if (segment === 'temp') { // push temp i
                result = ["@" + (5+index), "D=M"] // D=RAM[5+i]
            } if (segment === 'static') { // push static i
                result = ["@" + index + "A", "D=M"] // D={variable at static i}
            }
            result.push("@0")
            result.push("M=M+1")
            result.push("A=M-1")
            result.push("M=D")
        }
        if (pushOrPop === 'pop') {

        }
        return result
    }
}

