import { ProfileService } from "../Services/ProfileService.js"

class ProfileController{
    async handle(req, res){
        
        const id = req.user_id

        let profile = await new ProfileService().execute(id)

        return res.json(profile)

    }
}
export { ProfileController }