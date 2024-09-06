
let itemlist = ['Apple', 'Water', 'Milk', 'Orange', 'Grapes'];
/*
    Arrayname[index]=Element

    example;
        itemlist[0]=Apple
        itemlist[1]=Water
        itemlist[2]=Milk
        itemlist[3]=Mango
        itemlist[4]=Orange
        itemlist[5]=Grapes

        */
console.log(itemlist[0]);
console.log(itemlist[itemlist.length - 1]);
console.log("------------print all element using array--------");
for (let i = 0; i < itemlist.length; i++) {
    console.log(itemlist[i]);
}
let booklist = new Array('html', 'css', 'js', 'react', 'nodejs');

for (let i = 0; i < itemlist.length; i++) {
    console.log(booklist[i]);
}

