const PseudoQueue = require('../queue-with-stacks');

test('Should return “Happy Path” - Expected outcome for enqueue', () => {
    let queue = new PseudoQueue()

    queue.enqueue(1);
    queue.enqueue(2);
  
    expect(queue.stack1.arr).toEqual([1,2])
})
test('Should return “Happy Path” - Expected outcome for dequeue', () => {
    let queue = new PseudoQueue()
    
    queue.enqueue(1);
    queue.dequeue();
    
    expect(queue.stack2.arr).toEqual([])
})
test('Should return “Happy Path” - Expected outcome for peek', () => {
    let queue = new PseudoQueue()
    
    queue.enqueue(1);
    queue.enqueue(2);
    queue.dequeue();
    
    expect(queue.peek()).toEqual(2)
})
test('Should return “undefined” - Expected failure for enqueue', () => {
    let queue = new PseudoQueue()

    expect(queue.enqueue()).toBeUndefined()
})
test('Should return “Exception” when dequeue from an empty stack', () => {
    let queue = new PseudoQueue()

    expect(queue.dequeue()).toEqual('Exception')
})
test('Edge Case - Should return “Exception” when peek on an empty stack', () => {
    let queue = new PseudoQueue()

    expect(queue.peek()).toEqual('Exception')
})
