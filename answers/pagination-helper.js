"use strict";

function PaginationHelper(values, limit) {
	this.values = values;
	this.limit = limit;
}

PaginationHelper.prototype.pageCount = pageCount;
PaginationHelper.prototype.itemCount = itemCount;
PaginationHelper.prototype.pageItemCount = pageItemCount;
PaginationHelper.prototype.pageIndex = pageIndex;

function pageCount() {
	return Math.ceil(this.itemCount() / this.limit);
}

function itemCount() {
	return this.values.length;
}

function pageItemCount(page) {
	if (page < 0 || page >= this.pageCount()) {
    	return -1
	} else if (page === this.pageCount() - 1) {
    	return this.itemCount() % this.limit;
	} else {
    	return this.limit;
	}

}

function pageIndex(index) {
	if (index < 0 || index >= this.itemCount()) {
    	return -1;
	} else {
    	return Math.floor((index + 1) / this.limit);
	}
}

var helper = new PaginationHelper(['a', 'b', 'c', 'd', 'e', 'f'], 4);

console.log(helper.pageCount());
console.log(helper.pageItemCount(0));
console.log(helper.pageItemCount(1));
console.log(helper.pageItemCount(2));
console.log(helper.pageIndex(5)); //should == 1 (zero based index)
console.log(helper.pageIndex(2)); //should == 0
console.log(helper.pageIndex(20)); //should == -1
console.log(helper.pageIndex(-10)); //should == -1