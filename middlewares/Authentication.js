import jwt from 'jsonwebtoken'

export function Authentication(req, res, next){

    const authToken = req.headers.authorization;
    
    if(!authToken){
        return res.status(401).end();
    }

    const [, token] = authToken.split(" ");

    try{
        const { sub } = jwt.verify(
            token,
            "c8837b23ff8aaa8a2dde915473ce0991"
        )

        req.user_id = sub;

        return next();

    }catch(err){
        return res.status(401).end();
    }
}