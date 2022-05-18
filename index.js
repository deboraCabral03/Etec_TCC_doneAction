//index.js
(async () => {
    const database = require('./src/Model/db');
    const Amigos = require('./src/Model/amigos');

    try {
        const resultado = await database.sync();
        //console.log(resultado);

        const amigos = await Amigos.create({
            nome: 'ANA',
            email: 'asdhashasduas@gmail.com',
            senha: 'ana'
        })
        
    
        
    } catch (error) {
        console.log(error);
    }
})();
