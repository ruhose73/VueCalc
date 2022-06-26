const ApiStatus = require("../handler/apiStatus");
const User = require("../models/User")

class PostloadServiceService {

    async PostCalc() {
        try {

        } catch (e) {
            throw ApiStatus.internal(e);
        }
    }
}

module.exports = new PostloadServiceService
