/// <reference path="jquery.d.ts"/>
var Resource = (function () {
    // Function that's run when objects are created to give initial values 
    function Resource(resourceName) {
        this.tableCell = null;
        this.name = resourceName;
        this.amount = 0;
    }
    // Function to set how much of a resource one has and convert it to string
    Resource.prototype.setAmount = function (value) {
        var table = $("#resourceTable");
        if (this.tableCell == null) {
            table.append($("<tr>\n                            <td>" + this.name + "</td>\n                            <td id=\"amount" + this.name + "\">0</td>\n                            </tr>"));
            this.tableCell = $("#amount" + this.name);
        }
        this.amount = value;
        this.tableCell.text(value.toString());
    };
    // Used to make "amount" usable outside of "Resource" class
    Resource.prototype.getAmount = function () {
        return this.amount;
    };
    return Resource;
}());
// Default wood/stone per click
var woodPower = 1;
var stonePower = 1;
// Making a variable to check if you already have it
var upgrade1 = 0;
var upgrade2 = 0;
// Upgrading to stone hatchet
function upgradeStoneHatchet() {
    if (upgrade1 === 1) {
        alert("You've already bought this");
    }
    else if (wood.amount >= 10 && stone.amount >= 15) {
        woodPower = woodPower * 3;
        wood.amount = wood.amount - 10;
        stone.amount = stone.amount - 15;
        alert("Stone Hatchet bought!");
        upgrade1 = 1;
        update();
    }
    else {
        alert("Sorry, you don't have enough resources");
    }
}
function upgradeStonePickaxe() {
    if (upgrade2 === 1) {
        alert("You've already bought this");
    }
    else if (wood.amount >= 10 && stone.amount >= 15) {
        stonePower = stonePower * 3;
        wood.amount = wood.amount - 10;
        stone.amount = stone.amount - 15;
        alert("Stone Pickaxe bought!");
        upgrade2 = 1;
        update();
    }
    else {
        alert("Sorry, you don't have enough resources");
    }
}
// Creating the resource var's
var wood, stone, copper, tin, iron, coal, steel;
// Function for updating after buying upgrade
function update() {
    wood.setAmount(wood.getAmount());
    stone.setAmount(stone.getAmount());
}
// Function being called by index.html for button to add one wood
function addWood() {
    wood.setAmount(wood.getAmount() + woodPower);
}
function addStone() {
    stone.setAmount(stone.getAmount() + stonePower);
}
$(function () {
    var resources = [
        wood = new Resource("Wood"),
        stone = new Resource("Stone"),
        copper = new Resource("Copper"),
        tin = new Resource("Tin"),
        iron = new Resource("Iron"),
        coal = new Resource("Coal"),
        steel = new Resource("Steel")
    ];
});
//# sourceMappingURL=scripts.js.map