
const repository = require('./base-repository');
const TYPE = 'ALUNOS';

const buscarTodos = (req,res) =>{
  const alunos = repository.buscarTodos(TYPE);
  res.json(alunos);
};

const buscarPorId = (req,res)=>{
  const {id} = req.params;
  const aluno =repository.buscarPorId(TYPE,id);
  if(aluno){
    res.json(aluno);
  }else{
    res.sentStatus(404);
  }
};

const inserir = (req, res)=>{
  const {nome,cpf,telefone,pai,mae} = req.body;
  const aluno = {nome,cpf,telefone,pai,mae};
  repository.inserir(TYPE,aluno);
  res.status(201).json({id: aluno.id});
};



const atualizar = (req,res)=>{
  const {id} = req.params;
  const aluno = Object.assign(loadUpdateField(req),{id});
  repository.atualizar(TYPE,aluno);
  res.sendStatus(204);
};

const remover = (req,res)=>{
  const {id} = req.params;
  repository.remover(TYPE,id)
  res.sendStatus(204);
};

function loadUpdateField(req){
   const record = ['nome','cpf','telefone','pai', 'mae'].reduce((result,current)=> {
    if(req.body[current]){
      result[current] = req.body[current]
    }
    return result;
   },{})
   return record;
}

const build =(app)=>{
  app.get('/api/alunos',buscarTodos);
  app.get('/api/alunos/:id',buscarPorId);
  app.post('/api/alunos',inserir);
  app.put('/api/alunos/:id',atualizar);
  app.delete('/api/alunos/:id',remover);
}




module.exports = {
  build
}