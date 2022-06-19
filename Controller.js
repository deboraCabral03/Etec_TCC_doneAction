const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require("./models");

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let User=models.User;
let token=models.token;

app.post('/login',async (req,res)=>{
    let response=await User.findOne({
        where:{email:req.body.email, senha: req.body.senha}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
        
    }else{
        res.send(response);
        console.log(response)
    }
});

app.post('/cadastro',async (req,res)=>{
    let response = await user.create({
            email: req.body.email,
            nome: req.body.name,
            senha: req.body.senha,
            
        });

    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
        console.log(response)
    }
});

//Grava o token no banco
app.post('/token',async(req,res)=>{
    let response=await token.findOne({
        where:{token:req.body.token}
    });
    if(response == null){
        token.create({
            token: req.body.token,
            createdAt: new Date(),
            updatedAt: new Date()
        });
    }
});

let port=process.env.PORT || 3000;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});