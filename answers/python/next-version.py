def next_version(v):
	vList = v.split(".")
	change = True
	vList = map(int, vList)
	for i,n in enumerate(reversed(vList)):
		if n == 9 and change == True:
			vList[len(vList) - 1 - i] = 0
		elif change:
			vList[len(vList) - 1 - i] += 1
			change = False
	return ".".join(str(v) for v in vList)
	
print (next_version("3.4.3.9"))
