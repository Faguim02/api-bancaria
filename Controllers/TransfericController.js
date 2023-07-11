import { TransfercService } from "../Services/TransfericService.js"

class TransfercController{
    async handle(req, res){
        const { account_codigo, value } = req.body
        const id = req.user_id

        let transf = await new TransfercService().execute(id, account_codigo, value)

        res.json(transf)
    }
}
export { TransfercController }