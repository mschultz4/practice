def next_version(v):
	vList = v.split(".")
	change = True
	vList = map(int, vList)
	for i,n in enumerate(reversed(vList)):
		if n == 9 and change == True and i < (len(vList) -1):
			vList[len(vList) - 1 - i] = 0
		elif change:
			vList[len(vList) - 1 - i] += 1
			change = False
	return ".".join(str(v) for v in vList)
	
	def next_version(version):
    ns = version.split('.')
    i = len(ns) - 1
    while i > 0 and ns[i] == '9':
        ns[i] = '0'
        i -= 1
    ns[i] = str(int(ns[i]) + 1)
    return '.'.join(ns)
	
print (next_version("3.4.3.9"))
