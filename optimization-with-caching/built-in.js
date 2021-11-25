var arr = [
    { id: 1, name: "php" }, { id: 2, name: "mysql" }, { id: 3, name: "laravel" },
    { id: 4, name: "codeigniter" }, { id: 5, name: "wordpress" }, { id: 6, name: "sql" },
    { id: 7, name: "jquery" }, { id: 8, name: "javascript" }, { id: 9, name: "python" },
    { id: 10, name: "django" }, { id: 11, name: "joomla" }, { id: 12, name: "laravel" },
    { id: 13, name: "php" }, { id: 14, name: "codeigniter" }, { id: 15, name: "angular" },
    { id: 16, name: "react" }, { id: 17, name: "ruby" }, { id: 18, name: "mysql" },
];

// reduce
var uniqueArray = arr.reduce((filter, current) => {
    var dk = filter.find(item => item.name === current.name);
    if (!dk) {
        return filter.concat([current]);
    } else {
        return filter;
    }
}, []); 
console.log("reduce")
console.log(uniqueArray);


// filter
function removeDuplicateObjectFromArray(array, key) {
    return array.filter((obj, index, self) =>
        index === self.findIndex((el) => (
            el[key] === obj[key]
        ))
    )
}
console.log("filter");
console.log(removeDuplicateObjectFromArray(arr, 'name'))
