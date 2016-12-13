var Week = function (number, monday, tuesday, wednesday, thursday, friday, saturday, sunday) {
    this.number = number || 0;
    var mon = monday || [];
    var tue = tuesday || [];
    var wed = wednesday || [];
    var thus = thursday || [];
    var fri = friday || [];
    var sat = saturday || [];
    var sun = sunday || [];
    this.days = {
        monday: this.mon,
        tuesday: this.tue,
        wednesday: this.wed,
        thursday: this.thu,
        friday: this.fri,
        saturday: this.sat,
        sunday: this.sun
    }
}
module.exports = Week;