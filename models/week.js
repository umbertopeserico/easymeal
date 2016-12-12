var Week = function (number, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
    this.number = number || 0;
    this.monday = monday || [];
    this.tuesday = tuesday || [];
    this.wednesday = wednesday || [];
    this.thursday = thursday || [];
    this.friday = friday || [];
    this.saturday = saturday || [];
    this.sunday = sunday || [];
}
module.exports = Week;