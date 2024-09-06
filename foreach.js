let itemlist = ['Apple', 'Water', 'Milk', 'Orange', 'Grapes'];
itemlist.forEach(temp => {
    console.log(temp)
});
console.log("Map with index");
itemlist.forEach((temp, index) => {
    console.log(index, temp)
})

console.log("Map with index");
itemlist.forEach(function (temp, index) {
    console.log(index, temp)
})