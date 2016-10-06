# How to Approach a Problem

Source: CCI 6th ed.

## Flowchart

1. Take note of any **unique** information
- sorted array
2. Draw an **example** that is specific, sufficiently large, not a special case
3. State a **Brute Force**
4. **Optimize**
- **BUD**, **DIY**, etc. (see techniques below)
- Any unused information?
- Use a fresh example
- Make `time vs. space` tradeooff
- Precompute information
- `Hash` it out!
- What is the **Best Conceivable Runtime** (BCR)?
5. Walk through the optimal algorithm
- may use pseudocode
6. Implement: Write Beautiful Code!
- Modularize code
- Error checks
- Use other classes where appropriate
- Good variable names
- Make your code flexible, robust, maintainable, readable, simple
7. Test
- Start with conceptually walking through your code
- Double check weird looking code (`x = length - 2`)
- Hot spots (base cases in recursive code, null nodes, start and end of a linked list)
- Use **small** test cases
- Special cases

## Optimizing Techniques

1. Look for **BUD**
- Bottlenecks
- Unneccessary work
- Duplicated work

2. **DIY** (Do it yourself)
- try solving the problem **intuitively** with an actual example or real-life situation

3. Simplify and Generalize
- start with a simplified version of the problem

4. Base Case and Build
- often leads to recursive algos

5. Data Structure Brainstorm
- Linked List? Array? Object? Binary tree? Heap?
