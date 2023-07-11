import { postgreSQL } from "../postgre/postgre.js"

class DepositService{
    async execute(value, id){
        try{

            //criar codigo
            let account_codigo = '';
            const caracteres = '0123456789';
                
            for (let i = 0; i < 4; i++) {
            const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
                account_codigo += caracteres.charAt(indiceAleatorio);
            }

            let valueNUmber = Number(value)
            await postgreSQL.query(`update usuario set coin = coin + ${valueNUmber} where id = ${id}`)

            return {codigo : "DEP"+account_codigo}
        }catch(err){
            return {message : "Erro no banco"}
        }
    }
}

export { DepositService }