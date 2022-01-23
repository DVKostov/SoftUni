function createSortedList () {
    return {
        "list": [],
        "size": 0,
        get (index) {
            if (this.list[index] !== undefined) {
                return this.list[index];
            }
            
        },
        add (element) {
            this.list.push(element);
            this.size = this.list.length;
            this.list = this.list.sort((a, b) => a - b);
        },
        remove (index) {
            if (this.list[index] !== undefined) {
            this.list.splice(index, 1);
            this.size = this.list.length;
            this.list = this.list.sort((a, b) => a - b);
            }
        }
    }
}






let list = createSortedList();
list.add(5);
list.add(6);
list.add(7);
console.log(list.get(1)); 
list.remove(1);
console.log(list.get(1));
