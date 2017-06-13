var Resource = (function () {
    // Function that's run when objects are created to give initial values 
    function Resource(resourceName) {
        this.name = resourceName;
        this.amount = 0;
        var table = $("#resourceTable");
        table.append($("<tr id=\"row" + this.name + "\">\n                        <td>" + this.name + "</td>\n                        <td id=\"amount" + this.name + "\">0</td>\n                        </tr>"));
        this.tableCell = $("#amount" + this.name);
        this.tableRow = $("#row" + this.name);
        this.tableRow.hide();
    }
    // Function to set how much of a resource one has and convert it to string
    Resource.prototype.setAmount = function (value) {
        this.amount = value;
        this.tableCell.text(value.toString());
        this.tableRow.show();
    };
    // Used to make "amount" usable outside of "Resource" class
    Resource.prototype.getAmount = function () {
        return this.amount;
    };
    return Resource;
}());
// Creating the resource var's
var wood, stone, copper, tin, iron, coal, steel;
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
/// <reference path="jquery.d.ts"/>
$(function () {
    var askForName = false;
    var townName = askForName ? prompt("Enter your town's name", "Town Name") : null;
    if (townName == null) {
        townName = "Quarry Clicker";
    }
    $("#townName").text("==| " + townName + " |==");
});
var woodPower = 1;
var stonePower = 1;
/*



// Default wood/stone per click


// Making a variable to check if you already have it
var upgrade1 = false;
var upgrade2 = false;

// Upgrading to stone axe
function upgradeStoneAxe(){
    if(upgrade1){shopNotification("You've already bought this")}

    else if(wood.getAmount() >= 10 && stone.getAmount() >= 15){
        woodPower = woodPower * 3;
        wood.setAmount(wood.getAmount() - 10);
        stone.setAmount(stone.getAmount() - 15);

    
    }else{
        shopNotification("Sorry, you don't have enough resources");
    }
}

function upgradeStonePickaxe(){
    if(upgrade2){shopNotification("You've already bought this")}

    else if(wood.getAmount() >= 10 && stone.getAmount() >= 15){
        stonePower = stonePower * 3;
        wood.setAmount(wood.getAmount() - 10);
        stone.setAmount(stone.getAmount() - 15);
        shopNotification("Stone Pickaxe bought!");

        upgrade2 = true;
        disableButton("upgradeStonePickaxe");
    
    }else{
        shopNotification("Sorry, you don't have enough resources");
    }
}

*/
var Upgrade = (function () {
    function Upgrade(name, displayName, description) {
        this.owned = false;
        this.name = name;
        var parent = $("#upgrades");
        this.displayName = displayName;
        parent.append($("<button id=\"upgrade" + name + "\">\n                        <u>" + displayName + "</u><br/>" + description + "</button>"));
        this.button = $("#upgrade" + name);
        var self = this;
        this.button.click(function () { self.tryPurchase(); });
    }
    Upgrade.prototype.canAfford = function () {
        return true;
    };
    Upgrade.prototype.tryPurchase = function () {
        if (this.owned) {
            shopNotification("You already own this");
            return;
        }
        if (this.canAfford()) {
            shopNotification(this.displayName + " bought!");
            this.owned = true;
            this.button.attr("disabled", "disabled");
        }
        shopNotification("You don't have enough resources");
    };
    return Upgrade;
}());
var stoneAxe;
var stonePickaxe;
var woodenHut;
$(function () {
    stoneAxe = new Upgrade("stoneAxe", "Stone Axe", "Chop wood faster");
    stonePickaxe = new Upgrade("stonePickaxe", "Stone Pickaxe", "Mine stone faster");
    woodenHut = new Upgrade("woodenHut", "Wooden Hut", "Have someone move in");
});
function shopNotification(message) {
    $("#shopNotification").text(message);
}
//# sourceMappingURL=scripts.js.map