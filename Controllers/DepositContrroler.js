import { DepositService } from "../Services/DepositService.js"

class DepositController{
    async handle(req, res){
        const {value} = req.body
        const id = req.user_id

        if(value){
            let deposit = await new DepositService().execute(value, id)

            res.json(deposit)
        }else{
            res.json({message : "Insira o valor"})
        }
    }
}

export { DepositController }