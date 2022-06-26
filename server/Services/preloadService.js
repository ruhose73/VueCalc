const ApiStatus = require("../handler/apiStatus");
const User = require("../models/User")

class PreloadServiceServiceService {

    async preCalc() {
        try {

        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new PreloadServiceServiceService
