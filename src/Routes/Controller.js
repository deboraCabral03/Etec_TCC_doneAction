const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('../../models');


const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;
let doacao=models.Doacao;

//função verifica se existe esse email e senha
app.post('/login',async (req,res)=>{
    let response=await users.findOne({
        where:{email:req.body.email, senha: req.body.senha}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
        console.log(response)
    }
});

//função cria cadastro novo
app.get('/create',async (req,res)=>{
    let create = await user.create({
        nome: "Teste Etec",
        email: "etec@etec.com",
        user: "etec",
        senha: "etec",
        aniversario: "01/01/2000",
        createdAt: new Date(),
        updatedAt: new Date()
            
    });

    res.send('Bem vindo, você agora faz parte do nosso time DoneAction!')
});
let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
}
);
