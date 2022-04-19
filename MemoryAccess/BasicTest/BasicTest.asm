// push constant 10
@10
D=A
@0
M=M+1
A=M-1
M=D
// pop local 0
@0
D=A
@LCL
A=D+M
D=A
@adlocal0
M=D
@0
AM=M-1
D=M
@adlocal0
A=M
M=D
// push constant 21
@21
D=A
@0
M=M+1
A=M-1
M=D
// push constant 22
@22
D=A
@0
M=M+1
A=M-1
M=D
// pop argument 2
@2
D=A
@ARG
A=D+M
D=A
@adarg2
M=D
@0
AM=M-1
D=M
@adarg2
A=M
M=D
// pop argument 1
@1
D=A
@ARG
A=D+M
D=A
@adarg1
M=D
@0
AM=M-1
D=M
@adarg1
A=M
M=D
// push constant 36
@36
D=A
@0
M=M+1
A=M-1
M=D
// pop this 6
@6
D=A
@THIS
A=D+M
D=A
@adthis6
M=D
@0
AM=M-1
D=M
@adthis6
A=M
M=D
// push constant 42
@42
D=A
@0
M=M+1
A=M-1
M=D
// push constant 45
@45
D=A
@0
M=M+1
A=M-1
M=D
// pop that 5
@5
D=A
@THAT
A=D+M
D=A
@adthat5
M=D
@0
AM=M-1
D=M
@adthat5
A=M
M=D
// pop that 2
@2
D=A
@THAT
A=D+M
D=A
@adthat2
M=D
@0
AM=M-1
D=M
@adthat2
A=M
M=D
// push constant 510
@510
D=A
@0
M=M+1
A=M-1
M=D
// pop temp 6
@0
A=M
D=M
@11
M=D
// push local 0
@0
D=A
@LCL
A=D+A
D=M
@0
M=M+1
A=M-1
M=D
// push that 5
@5
D=A
@THAT
A=D+A
D=M
@0
M=M+1
A=M-1
M=D
// add
@0
AM=M-1
D=M
A=A-1
D=D+M
M=D
// push argument 1
@1
D=A
@ARG
A=D+A
D=M
@0
M=M+1
A=M-1
M=D
// sub
@0
AM=M-1
D=M
A=A-1
D=M-D
M=D
// push this 6
@6
D=A
@THIS
A=D+A
D=M
@0
M=M+1
A=M-1
M=D
// push this 6
@6
D=A
@THIS
A=D+A
D=M
@0
M=M+1
A=M-1
M=D
// add
@0
AM=M-1
D=M
A=A-1
D=D+M
M=D
// sub
@0
AM=M-1
D=M
A=A-1
D=M-D
M=D
// push temp 6
@11
D=M
@0
M=M+1
A=M-1
M=D
// add
@0
AM=M-1
D=M
A=A-1
D=D+M
M=D