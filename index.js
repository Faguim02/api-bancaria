import express from 'express'
import cors from 'cors'
import { router } from './router/router.js'

const server = express()

server.use(express.json())
server.use(cors())

server.use(router)

server.listen(3100, () => console.log("Servidor rodando em http://localhost:3100"))