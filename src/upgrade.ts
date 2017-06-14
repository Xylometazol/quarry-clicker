class Upgrade{
    private owned: boolean;
    private name: string;
    private button: JQuery;
    private displayName: string;
    private description: string;
    private priceList: Price[];

    constructor(name: string, displayName: string, description: string,priceList: any){
        this.owned = false;
        this.name = name;
        var parent: JQuery = $("#upgrades");
        this.displayName = displayName;

        
        for(var name in priceList){
            if(!priceList.hasOwnProperty(name)){
                continue;
            }
            let doc: any = document;
            this.priceList.push(new Price(priceList[name], doc[name]));
        }


        parent.append($(`<button id="upgrade${name}">
                        <u>${displayName}</u><br/>${description}</button>`));
        this.button = $(`#upgrade${name}`);
        let self = this;
        this.button.click(function() {self.tryPurchase();})
        
    }


    private canAfford(): boolean{
        return true;

    }

    public tryPurchase(): void{
        if(this.owned){
            shopNotification("You already own this");
            return;
        }
        if(this.canAfford()){
            shopNotification(this.displayName+" bought!");
 
            this.owned = true;
            this.button.attr("disabled", "disabled");
        }

        shopNotification("You don't have enough resources");
        
    }


    
}


var stoneAxe: Upgrade;
var stonePickaxe: Upgrade;
var woodenHut: Upgrade;





$(function(){
    stoneAxe = new Upgrade("stoneAxe", "Stone Axe", "Chop wood faster", {wood:10,stone:10});
    

    stonePickaxe = new Upgrade("stonePickaxe", "Stone Pickaxe", "Mine stone faster");
    woodenHut = new Upgrade("woodenHut", "Wooden Hut", "Have someone move in");
})



function shopNotification(message:string):void{
    $("#shopNotification").text(message);
}


