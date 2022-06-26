const ApiStatus = require("../handler/apiStatus");
const User = require("../models/User")

class ContractilityService {

    async ContractilityCalc() {
        try {

        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new ContractilityService
