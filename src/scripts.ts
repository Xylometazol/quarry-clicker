/// <reference path="jquery.d.ts"/>

$(function(){
    var askForName = false;

    var townName = askForName ? prompt("Enter your town's name", "Town Name") : null;
    if(townName == null){
        townName = "Quarry Clicker";
    }
    $("#townName").text("==| "+townName+" |==");
});


/*



function disableButton(buttonID:string):void{
    $(`#${buttonID}`).attr("disabled", "disabled");
}



// Default wood/stone per click
var woodPower = 1;
var stonePower = 1;

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
