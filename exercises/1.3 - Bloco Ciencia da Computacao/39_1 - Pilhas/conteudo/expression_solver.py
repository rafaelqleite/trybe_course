from stack import Stack


# expressao para resolver expressões pós-fixa
def solve_expression(expr):
    stack = Stack()
    tokens_list = expr.split(' ')
    # eis o tokens_list apos o split: ['5', '10', '+', '3', '*']
    print(f"eis o tokens_list apos o split: {tokens_list}")

    for token in tokens_list:
        if token == '+':
            # Sum operation
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == '*':
            # multiply operation
            result = stack.pop() * stack.pop()
            stack.push(result)
        else:
            # add the number operation
            stack.push(int(token))

    return stack.pop()


print(solve_expression("5 10 + 3 *"))

# expressao acima eh o mesmo que (5 + 10) * 3 - escrita do tipo infixa
# e (5 10 + 3 *) escrita do tipo posfixa
