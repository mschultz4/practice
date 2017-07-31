'''
Fibonnacci sequence
@param {number} n Value of sequence to return
Assumptions
1. Series starts at 1
2. n a positive integer
'''

def fib(n):
    a, b = (1, 1)
    
    # start sequence at 3 
    i = 3
    
    # process sequence
    while(i <= n):
        a, b = (b, a + b)
        i += 1
    return b

print(fib(5))
