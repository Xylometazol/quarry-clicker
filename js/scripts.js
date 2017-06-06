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
var wood, stone, copper, tin, iron, coal, steel;
// Function being called by index.html for button to add one wood
function addWood() {
    wood.setAmount(wood.getAmount() + 1);
}
function addStone() {
    stone.setAmount(stone.getAmount() + 1);
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