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

var wood,stone,copper,tin,iron,coal,steel;

// Function being called by index.html for button to add one wood
function addWood(): void {
    wood.setAmount(wood.getAmount() + 1);
}function addStone(): void {
    stone.setAmount(stone.getAmount() + 1);
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



