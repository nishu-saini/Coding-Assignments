class Stack:
    def __init__(self) -> None:
        self.stk = []
    
    # stack functions such as push, pop, isEmpty, peek..
    def push(self, data):
        
        self.stk.append(data)
        return
    
    def pop(self):

        return self.stk.pop()
    
    def isEmpty(self):

        return len(self.stk) == 0
    
    def peek(self):

        return self.stk[-1]
    

# driver code
if __name__ == "__main__":
    stack = Stack()

    stack.push(2)
    stack.push(5)
    stack.push(10)

    print(stack.stk)
    print(stack.peek())