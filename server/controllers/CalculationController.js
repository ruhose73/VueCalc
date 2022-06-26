const ApiStatus = require("../handler/apiStatus");
const {validationResult} = require("express-validator");
const OutputService = require("../services/outputService");

class CalculationController {

    async CalcAll(req,res,next) {

    }

    async OutputCalc(req, res, next) {
        try {

            const errors = validationResult(req);
            if(!errors.isEmpty()) {
                return next(ApiStatus.badRequest("Неверные значения"));
            }
            const  {userId, SV, CHSS, PPT} = req.body
            if(!(SV > 0.1) || !(SV < 20)) {
                return next(ApiStatus.badRequest("Неверные значения СВ"));
            }
            if(!(CHSS > 0) || !(CHSS < 300)) {
                return next(ApiStatus.badRequest("Неверные значения ЧСС"));
            }
            const outputCalc = await OutputService.OutputCalc(userId, SV, CHSS, PPT)
            return res.json(outputCalc);
        } catch (e) {
            next(e);
        }
    }

    async PostLoadCalc(req, res, next) {
        const  {email, password} = req.body

    }

    async PreLoadCacl(req, res, next) {
        const  {email, password} = req.body

    }

    async ContractilityCalc(req, res, next) {
        const  {email, password} = req.body
    }
}

module.exports = new CalculationController