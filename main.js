/*1. Create a constructor function called Tree. It should take 4 arguments that correspond to attributes on the objects it creates. Two attributes should be 'name' and 'leaf shape'. Pick the other two. 

2. Create 4 tree objects using your Tree function.

3. Put those objects into an array called tree_array. 

4. for each tree in tree_array, add a block element to the tree-holder div that displays the tree's attributes*/


var Tree = function(name, ["leaf shape"], region, ["flower color"]) {
	this.name = name;
	this.leaf_shape = ["leaf shape"];
	this.region = region;
	this.flowerColor = ["flower color"];
}

var magnolia = new Tree("Magnolia", "oval", "south-east", "white");
var apple = new Tree("Apple", "round", "all", "white");
var cherry = new Tree("Cherry Blossom", "round", "south-east", "pink");
var evergreen = new Tree("Evergreen", "cylindar", "north", "pine cone");

var tree_array = [];
tree_array.push(magnolia, apple, cherry, evergreen);

var treeDOM = document.getElementById("tree-holder");
treeDom.innerHTML = JSON.stringify(treeDOM, null, 2);