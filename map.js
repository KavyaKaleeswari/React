let itemlist = ['Apple', 'Water', 'Milk', 'Orange', 'Grapes'];
itemlist.map(temp => {
    console.log(temp)
});
console.log("Map with index");
itemlist.map((temp, index) => {
    console.log(index, temp)
})

console.log("Map with index");
itemlist.map(function(temp, index) {
    console.log(index, temp)
})