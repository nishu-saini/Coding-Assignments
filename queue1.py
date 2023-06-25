from collections import deque

class Queue:
    def __init__(self) -> None:
        self.que = deque()
    
    # stack functions such as push, pop, isEmpty, peek..
    def enqueue(self, data):
        
        self.que.append(data)
        return
    
    def dequeue(self):

        return self.que.popleft()
    
    def isEmpty(self):

        return len(self.que) == 0
    
    def peek(self):

        return self.que[0]
    

# driver code
if __name__ == "__main__":
    queue = Queue()

    queue.enqueue(2)
    queue.enqueue(5)
    queue.enqueue(10)

    print(queue.que)
    print(queue.peek())
