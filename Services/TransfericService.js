import { postgreSQL } from "../postgre/postgre.js"

class TransfercService{
    async execute(id, account_codigoo, value){
        try{

            //gerar codigo
            let account_codigo = '';
            const caracteres = '0123456789';
                
            for (let i = 0; i < 4; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
                account_codigo += caracteres.charAt(indiceAleatorio);
            }

            let numberValue = Number(value)
            let numberValueAdd = Number(value)
            //transferidor
            await postgreSQL.query(`update usuario set coin = coin - ${numberValue} where id = ${id}`)
            
            //recebidor

            await postgreSQL.query(`update usuario set coin = coin + ${numberValueAdd} where account_codigo = '${account_codigoo}'`)

            return {codigo : "TRANSF"+account_codigo}

        }catch(err){
            return {message : "Erro no banco: "+err}
        }
    }
}

export { TransfercService }