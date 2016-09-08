import math

def fortune(f0, p, c0, n, i):
    balance = f0
    withdrawl = c0
    year = 0

    while(year < n):
        balance = math.floor(balance * (1 + (p * .01))) - withdrawl
        withdrawl = math.floor(withdrawl * (1 + (i * .01)))

        if(balance <=0 ):
            return False
        
        year += 1

    return True
        
# Tests
print(fortune(100000, 1, 2000, 15, 1)) 
# fortune(100000, 1, 10000, 10, 1) 
# fortune(100000, 1, 9185, 12, 1) 