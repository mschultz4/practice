import math

class PaginationHelper:
	def __init__(self, values, limit):
    	self.values = values
    	self.limit = limit

	def page_count(self):
    	return int(math.ceil(self.item_count() / float(self.limit));

	def item_count(self):
    	return len(self.values)

    def page_item_count(self, page):
   	 if page < 0 or page >= self.page_count():
   		 return -1
   	 elif page == self.page_count() - 1:
   		 return self.item_count() % self.limit
   	 else:
   		 return self.limit

    def page_index(self, index):
   	 if index < 0 or index >= self.item_count():
   		 return -1
   	 else:
   		 return int(math.floor((index + 1) / float(self.limit)))
    
helper = PaginationHelper(['a','b','c','d','e','f'], 4)
print(helper.values)
print(helper.page_count())
print(helper.item_count())