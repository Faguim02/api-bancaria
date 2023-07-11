import pg from 'pg'

export const postgreSQL = new pg.Client({
    user : 'postgres',
    password : 'BncdD123',
    host : 'localhost',
    database : 'bancario'
})

export async function ConnectionSQL(){
    await postgreSQL.connect()
}