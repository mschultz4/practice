import math

def binarySearch(items, value):
	left = 0
	right = len(items) - 1 
	middle = int(math.floor(right/ 2)) 

	while (items[middle] != 4 and left < right):
		if (value > items[middle]):
			left = middle + 1
		elif (value < items[middle]):
			right = middle - 1
		middle = int(math.floor((right + left) / 2))

	if int(items[middle]) == int(value):
		return middle
	else:
	    return -1	

print binarySearch([1,2,3,4,5], 4)
