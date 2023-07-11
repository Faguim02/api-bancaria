import { postgreSQL } from "../postgre/postgre.js";
import bcryptjs from 'bcryptjs'

class CreateAccountService{
    async execute(full_name, date_nasciment, cpf, email, password, ceep, complemento, endress_number){
        try{
            
            let verifyEmail = await postgreSQL.query(`select * from usuario where email = '${email}'`)
            
            if(verifyEmail.rows.length != 0 ){
                return {message : "Já existe um usuario com este email"}
            }else{

                //gerar o "account_codigo" o codigo da conta
                let account_codigo = '';
                const caracteres = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
                
                for (let i = 0; i < 10; i++) {
                const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
                    account_codigo += caracteres.charAt(indiceAleatorio);
                }

                //criptografar senha
                let passwordHash = await bcryptjs.hash(password, 8)
                //

                //requisição a API viacep
                let ceep_local
                
                await fetch(`https://viacep.com.br/ws/${ceep}/json/`)
                .then(res => res.json())
                .then(data => ceep_local = `${data.localidade}-${data.uf}`)

                await postgreSQL.query(`insert into usuario (
                    account_codigo, full_name, date_nasciment,
                    cpf, email, password, ceep, complemento,
                    ceep_local, coin
                ) values (
                    '${account_codigo}', '${full_name}',
                    '${date_nasciment}', '${cpf}',
                    '${email}', '${passwordHash}',
                    '${ceep}', '${complemento}',
                    '${ceep_local}','0'
                )`)

                return {
                    message : "Cadastrado com sucesso!"
                }
            }

        }catch(err){
            return{
                message : "Erro no banco de dados: "+ err,
            }
        }
    }
}

export { CreateAccountService }