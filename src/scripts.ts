class Resource {
    private tableCellID: string;
    private amount: number;

    constructor(tableCellID:string){
        this.tableCellID = tableCellID;
        this.amount = 0;
    }

    setAmount(value:number):void{
        this.amount = 0;
        document.getElementById(this.tableCellID).innerHTML = value.toString();
    }

    getAmount(): number {
        return this.amount;
    }
}

let wood = new Resource("amountWood");

window.onload = function() {
    wood.setAmount(1);
}

function addWood(): void {
    wood.setAmount(wood.getAmount() + 1);
}