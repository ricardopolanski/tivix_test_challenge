function searchPagelements() {
        const countryField = '[id="country"]';
        const cityField = '[id="city"]';
        const modelField = '[id="model"]';
        const pickUpDate = '[id="pickup"]';
        const dropOffDate = '[id="dropoff"]';
        const alertBox = '[class="alert alert-danger"]';
        const searchResults = '[id="search-results"]';
        return {
                countryField,
                cityField,
                modelField,
                pickUpDate,
                dropOffDate,
                alertBox,
                searchResults
        }
}

export default {searchPagelements}



