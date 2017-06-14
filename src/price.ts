class Price{
    amount: number;
    resource: Resource;

    constructor(amount: number, resource: Resource){
        this.amount = amount;
        this.resource = resource;
    }

    canAfford():boolean{
        return this.amount > this.resource.getAmount();
    }
}

