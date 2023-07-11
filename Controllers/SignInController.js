import { SignInService } from "../Services/SignInService.js"

class SignInController{
    async handle(req, res){
        const {email, password} = req.body

        if(email && password){
            const login = await new SignInService().execute(email, password)

            res.json(login)
        }else{
            res.json({message : "Preencha todos os campos"})
        }

    }
}

export { SignInController }