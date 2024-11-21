const login = (req, res) => {
    const {email, senha} = req.body;

    if (email === 'admin@rxemplo.com' && senha === '12345678') {
        return res.status(200).json({message: 'Sucess', toker: 'toker'})
    
    }

return res.status(401).json({message: 'Credenciais Invalidas'})

}

module.exports = {login}