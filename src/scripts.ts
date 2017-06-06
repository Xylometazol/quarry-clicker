/// <reference path="jquery.d.ts"/>

class Resource {
    // Private creates a variable in this scope (Resource)
    private tableCell: JQuery;
    private amount: number;
    private name: string;

    // Function that's run when objects are created to give initial values 
    constructor(resourceName:string){
        this.tableCell = null;
        this.name = resourceName;
        this.amount = 0;
    }

    // Function to set how much of a resource one has and convert it to string
    setAmount(value:number):void{
        var table: JQuery = $("#resourceTable");

        if(this.tableCell == null){
            table.append($(`<tr>
                            <td>${this.name}</td>
                            <td id="amount${this.name}">0</td>
                            </tr>`));

            this.tableCell = $("#amount"+this.name);
        }

        this.amount = value;
        this.tableCell.text(value.toString());
    }

    // Used to make "amount" usable outside of "Resource" class
    getAmount(): number {
        return this.amount;
    }
}

// Default wood/stone per click
var woodPower = 1;
var stonePower = 1;

// Making a variable to check if you already have it
var upgraded = 0;

// Upgrading to stone hatchet
function upgradeStoneHatchet(){
    if(upgraded===1){alert("You've already bought this")}

    else if(wood.amount >= 10 && stone.amount >= 15){
        woodPower = woodPower * 3;
        wood.amount = wood.amount - 10;
        stone.amount = stone.amount - 15;
        alert("Stone Hatchet bought!");
        upgraded = 1;
        update();
    
    }else{
        alert("Sorry, you don't have enough resources");
    }
}

// Creating the resource var's
var wood,stone,copper,tin,iron,coal,steel;



// Function for updating after buying upgrade
function update(): void{
    wood.setAmount(wood.getAmount());
    stone.setAmount(stone.getAmount());
}




// Function being called by index.html for button to add one wood
function addWood(): void {
    wood.setAmount(wood.getAmount() + woodPower);
}function addStone(): void {
    stone.setAmount(stone.getAmount() + stonePower);
}

$(function() {

    var resources: Resource[] = [
        wood = new Resource("Wood"),
        stone = new Resource("Stone"),
        copper = new Resource("Copper"),
        tin = new Resource("Tin"),
        iron = new Resource("Iron"),
        coal = new Resource("Coal"),
        steel = new Resource("Steel")
    ];
});



