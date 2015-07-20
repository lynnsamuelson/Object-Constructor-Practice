/*1. Create a constructor function called Tree. It should take 4 arguments that correspond to attributes on the objects it creates. Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes*/


var Tree = function(name, leafShape, region, flower_color) {
	this.name = name;
	this.leafShape = leafShape;
	this.region = region;
	this.flowerColor = flower_color;
}
// console.log(Tree);

var magnolia = new Tree("Magnolia", "oval", "south-east", "white");
var apple = new Tree("Apple", "round", "all", "white");
var cherry = new Tree("Cherry Blossom", "round", "south-east", "pink");
var evergreen = new Tree("Evergreen", "cylindar", "north", "pine cone");

// console.log(magnolia);

var tree_array = [];
tree_array.push(magnolia, apple, cherry, evergreen);

console.log([tree_array]);

var outPut = "";

for (var i = 0; i < tree_array.length; i++) {
	outPut += "<p>" + JSON.stringify(tree_array[i], null, 2) + "</p>";
}


var treeDOM = document.getElementById("tree-holder");
treeDOM.innerHTML = outPut; 

// document.getElementById('magnolia').innerHTML = JSON.stringify("magnolia", null, 2);

// document.getElementById('apple').innerHTML = JSON.stringify("apple", null, 2);

