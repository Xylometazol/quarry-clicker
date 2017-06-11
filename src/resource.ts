class Resource {
    // Private creates a variable in this scope (Resource)
    private tableCell: JQuery;
    private amount: number;
    private name: string;
    private tableRow: JQuery;

    // Function that's run when objects are created to give initial values 
    constructor(resourceName:string){
        this.name = resourceName;
        this.amount = 0;
        
        var table: JQuery = $("#resourceTable");
        
        table.append($(`<tr id="row${this.name}">
                        <td>${this.name}</td>
                        <td id="amount${this.name}">0</td>
                        </tr>`));

        this.tableCell = $(`#amount${this.name}`);
        this.tableRow = $(`#row${this.name}`);
        this.tableRow.hide();

    }

    // Function to set how much of a resource one has and convert it to string
    setAmount(value:number):void{
        this.amount = value;
        this.tableCell.text(value.toString());
        this.tableRow.show();
    }

    // Used to make "amount" usable outside of "Resource" class
    getAmount(): number {
        return this.amount;
    }
}




// Creating the resource var's
var wood: Resource,stone: Resource,copper: Resource,tin: Resource,iron: Resource,coal: Resource,steel: Resource;




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
