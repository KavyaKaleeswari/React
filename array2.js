
let user = {
    fullname: "Kavya",
    mobile: "4567886544",
    age: "22 years",
    gender: "Female"
}

console.log(user.fullname);
console.log(user.mobile);
console.log(user.age);
console.log(user.gender);

let userlist = [

    { fullname: "Kavya", mobile: "4567886544", age: "22 years", gender: "Female", edu: "CA" },
    { fullname: "Ram", mobile: "4567886044", age: "29 years", gender: "Male", edu: "MBA " },
    { fullname: "Nabi", mobile: "4567886540", age: "24 years", gender: "Female", edu: "CA" },
    { fullname: "Nagila", mobile: "4560886544", age: "23 years", gender: "Female", edu: "BE" }


];

console.log("Tota User : ", userlist.length);

userlist.map((oneUser, index) => {
    console.log(index, oneUser.fullname, oneUser.mobile, oneUser.age, oneUser.gender, oneUser.edu);
    console.log("------------------------------------------------------------------------------")
})
