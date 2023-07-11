import { CreateAccountService } from "../Services/CreateAccountService.js"

class CreateAccountController{
    async handle(req, res){

        const {
            full_name,
            date_nasciment,
            cpf,
            email,
            password,
            ceep,
            complemento,
            endress_number
        } = req.body

        if(full_name &&  date_nasciment && cpf && email && password && ceep && complemento){

            const created = await new CreateAccountService().execute(full_name, date_nasciment, cpf, email, password, ceep, endress_number)

            res.json(created)

        }else{
            res.json({message : "Preencha todos os campos"})
        }        
    }
}

export { CreateAccountController }