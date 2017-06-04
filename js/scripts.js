var Resource = (function () {
    function Resource(tableCellID) {
        this.tableCellID = tableCellID;
        this.amount = 0;
    }
    Resource.prototype.setAmount = function (value) {
        this.amount = 0;
        document.getElementById(this.tableCellID).innerHTML = value.toString();
    };
    Resource.prototype.getAmount = function () {
        return this.amount;
    };
    return Resource;
}());
var wood = new Resource("amountWood");
window.onload = function () {
    wood.setAmount(1);
};
function addWood() {
    wood.setAmount(wood.getAmount() + 1);
}
//# sourceMappingURL=scripts.js.map