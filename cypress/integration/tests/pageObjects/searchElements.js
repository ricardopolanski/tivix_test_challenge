function searchPagelements() {
        const countryField = '[id="country"]';
        const cityField = '[id="city"]';
        const modelField = '[id="model"]';
        const pickUpDate = '[id="pickup"]';
        const dropOffDate = '[id="dropoff"]';
        const btnSearch = '[class="btn btn-primary"]';
        const alertBox = '[class="alert alert-danger"]'

        return {
                countryField,
                cityField,
                modelField,
                pickUpDate,
                dropOffDate,
                btnSearch,
                alertBox
        }
}

module.exports = {searchPagelements}



