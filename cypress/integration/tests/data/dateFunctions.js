function pickUpDate() {
    const date = require("dayjs")
    const pickUp = date().format("YYYY-MM-DD")
    return pickUp
}

function dropOffDate() {
    const date = require("dayjs")
    const dropOff = date().add('10', 'days').format("YYYY-MM-DD")
    return dropOff
}

export class DateFunction{
    constructor(){
        this.pickUp = pickUpDate();
        this.dropOff = dropOffDate();
    }

    getpickUpDate = () => {
        return this.pickUp
    }

    dropOffDate = () => {
        return this.dropOff
    }
}