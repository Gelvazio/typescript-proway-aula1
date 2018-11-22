
const repository = require('./base-repository');
const TYPE = 'CONTATOS';

const buscarTodos = (req,res) =>{
  const contatos = repository.buscarTodos(TYPE);
  res.json(contatos);
};

const buscarPorId = (req,res)=>{
  const {id} = req.params;
  const contato =repository.buscarPorId(TYPE,id);
  if(contato){
    res.json(contato);
  }else{
    res.sentStatus(404);
  }
};

const inserir = (req, res)=>{
  const {nome,email,telefone,tipo} = req.body;
  const contato = {nome,email,telefone,tipo};
  repository.inserir(TYPE,contato);
  res.status(201).json({id: contato.id});
};



const atualizar = (req,res)=>{
  const {id} = req.params;
  const contato = Object.assign(loadUpdateField(req),{id});
  repository.atualizar(TYPE,contato);
  res.sendStatus(204);
};

const remover = (req,res)=>{
  const {id} = req.params;
  repository.remover(TYPE,id)
  res.sendStatus(204);
};

function loadUpdateField(req){
   const record = ['nome','email','telefone','tipo'].reduce((result,current)=> {
    if(req.body[current]){
      result[current] = req.body[current]
    }
    return result;
   },{})
   return record;
}

const build =(app)=>{
  app.get('/api/contatos',buscarTodos);
  app.get('/api/contatos/:id',buscarPorId);
  app.post('/api/contatos',inserir);
  app.put('/api/contatos/:id',atualizar);
  app.delete('/api/contatos/:id',remover);
}




module.exports = {
  build
}