import  express from "express"
const app = express()
const port = 3000

app.get('/',(req,res) =>{
    res.send("ola,mundo")
})

class Pessoa  {
    constructor(nome,email,idade,hobbies){
        this.nome=nome
        this.email=email
        this.idade=idade
        this.hobbies=hobbies
    }
    
}

const pessoa1 = new Pessoa("everton","everton@.br.com","20",["jogar","fazer bolo"])
const pessoa2 = new Pessoa("mayara","mayara@.br.com","29",["lutar","comer bolo"])
const pessoa3 = new Pessoa("ze","ze@.br.com","55",["caminhar"])


app.get('/pessoa',(req,res)=>{
   
    res.send(pessoa1)
})

app.get('/pessoas',(req,res)=>{
    
    res.send(JSON.stringify([pessoa1,pessoa2,pessoa3]))
}
)

app.listen(port, () =>{
    console.log('app executando na porta '+ port)
})