import { DateFunction } from '../data/dateFunctions';
const dateFunction = new DateFunction

function searchInfo() {
    const country = "France";
    const city = "Paris";
    const model = "Toyota Aygo";
    const pickUpDate = dateFunction.getpickUpDate();
    const dropOffDate = dateFunction.dropOffDate();

    return {
            country,
            city,
            model,
            pickUpDate,
            dropOffDate
    }
}

export default {searchInfo}
