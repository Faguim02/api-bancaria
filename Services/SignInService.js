import bcryptjs from 'bcryptjs'
import jsonwebtoken from 'jsonwebtoken'
import { postgreSQL } from '../postgre/postgre.js'

class SignInService{
    async execute(email, password){
        try{
            let profile = await postgreSQL.query(`select * from usuario where email = '${email}'`)

            if(profile.rows.length !== 0){
                let passwordHas = profile.rows[0].password

                let passwordCompare = await bcryptjs.compare(password, passwordHas)

                if(passwordCompare == true){

                    const token = jsonwebtoken.sign(
                        {
                            email : email
                        },
                        "c8837b23ff8aaa8a2dde915473ce0991",
                        {
                            subject : String(profile.rows[0].id),
                            expiresIn : "30d"
                        }
                    )

                    return {
                        email : email,
                        token : token
                    }


                }else{
                    return {message : "Não existe nenhum usuario com esse email"}
                }
            }else{
                return { message : "Não existe nenhum usuario com esse email"}
            }

        }catch(err){
            return {
                message : "erro ao tentar logar: "+err
            }
        }
    }
}

export { SignInService }