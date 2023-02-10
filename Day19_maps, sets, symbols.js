//MAPS

const maps = new Map([
    ["item1",
        [["id", 1],
        ["descr", "adsds"],
        [123, "dummytext"]]
    ],
    ["item2",
        [["id", 2],
        ["descr", "ghgjg"],
        [123, "dummytext"]]
    ],
    ["item3",
        [["id", 3],
        ["descr", "bnbnb"],
        [123, "dummytext"]]
    ]
]);
console.log(maps.get("item1"));
maps.set("true", "false");
console.log(maps);
console.log(maps.size);

maps.forEach(map => {
    console.log(map);
});


//SETS
console.log("");
const anArray = [2,4,6,8,0,4,1,2,6];
let set = new Set([1,2,3,4,2,1,2,9]);
set.add(101);
console.log(set);
set.delete(101);
console.log(set.has(101));
set.clear();
function getUniqueArray(array) {
    // set = new Set(array);
    // array = [];
    // set.forEach(value => {
    //     array.push(value);
    // })
    // return array;

    //however, the best way is:
    return [...new Set(array)];
}
console.log(getUniqueArray(anArray));


//SYMBOLS
const sym1 = Symbol("name");
const sym2 = Symbol("name");
console.log(sym1 == sym2);
const obj = {
    sym1: "nigga",
    location: "earth"
}
console.log(obj);
Object.entries(obj).forEach(([key, value]) => {
    console.log(key, value);
})