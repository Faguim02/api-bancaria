import express from 'express'
import { ConnectionSQL, postgreSQL } from '../postgre/postgre.js'
import { CreateAccountController } from '../Controllers/CreateAccountControler.js'
import { SignInController } from '../Controllers/SignInController.js'
import { DepositController } from '../Controllers/DepositContrroler.js'
import { ProfileController } from '../Controllers/ProfileController.js'
import { TransfercController } from '../Controllers/TransfericController.js'

import { Authentication } from '../middlewares/Authentication.js'

export const router = express.Router()

ConnectionSQL()

async function closeDB(req, res, next){
    next()

    await postgreSQL.end()
}

router.post('/creatAccount', (req, res) => new CreateAccountController().handle(req, res))
router.post('/signIn', (req, res) => new SignInController().handle(req, res))
router.post('/dep', (req, res, next) => Authentication(req, res, next), (req, res) => new DepositController().handle(req, res)) 
router.post('/transf', (req, res, next) => Authentication(req, res, next), (req, res) => new TransfercController().handle(req, res))

router.get('/profile',(req, res, next) => Authentication(req, res, next), (req, res) => new ProfileController().handle(req, res))