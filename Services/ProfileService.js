import { postgreSQL } from "../postgre/postgre.js"

class ProfileService{
    async execute(id){

        try{
            let profile = await postgreSQL.query(`select * from usuario where id = ${id}`)

            return profile.rows
        }catch(err){
            return {message : "Erro ao acessar o banco: "+err}
        }

    }
}

export { ProfileService }