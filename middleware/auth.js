const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    const token = req.header('Authorization'); 
    if (!token) return res.status(401).json({ message: 'Acceso denegado' });

    try {
        const tokenSplit = token.split(" ");
        if (tokenSplit.length !== 2 || tokenSplit[0] !== "Bearer") {
            return res.status(400).json({ message: 'Token inválido' });
        }

        const verified = jwt.verify(tokenSplit[1], process.env.TOKEN_SECRET);
        req.user = verified;
        next();
    } catch (error) {
        res.status(400).json({ message: 'Token inválido' });
    }
};
