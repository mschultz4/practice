# Fizzbuzz.py
import sys

with open(sys.argv[1], 'r') as file:
    for line in file:
        nums = line.split()
        i = int(nums[2])
        n = 1
        output = ""
        while n <= i:
            if  n % int(nums[0]) == 0 and n % int(nums[1]) == 0:
                output += "FB "
            elif n % int(nums[0]) == 0:
                output += "F "
            elif n % int(nums[1]) == 0:
                output += "B "
            else: 
                output += (str(n) + " ")
            n += 1
        print(output.rstrip())