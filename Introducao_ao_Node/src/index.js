/**
 * Métodos HTTP
 * GET: buscar informações do back-end
 * POST: criar informações do back-end
 * PUT/PATCH: alterar informações do back-end
 * DELETE: deletar informações do back-end
 */

 /**
  * Tipos de parâmetros:
  * Query Params: Filtros e paginação
  * Route Params: Identificar recursos( atualizar / deletar)
  * Request Body: Conteudo na hora criar ou editar um recurso (JSON).
  */

/**
 * Middleware:
 * Interceptador de requisições que pode interromper totalmente a requisição ou alterar dados da requisição.
 */

const { request, response } = require('express');
const express = require('express');

const {uuid, isUuid} = require('uuidv4');

const app = express();

app.use(express.json())

const projects = [];

function logRequests(request, response, next){
  const { method, url} = request;

  const logLabel = `[${method.toUpperCase()}] ${url}`;

  console.log(logLabel)

  return next();
};

function validateProjectId(request, response, next){
  const {id} = request.params;

  if(!isUuid(id)){
    return response.status(400).json({error: 'Invalid project ID'});
  }

  return next();
};

app.use(logRequests);
app.use('/projects/:id',validateProjectId);

// ROTAS
app.get('/projects', (request, response) => {
  const {title} = request.query;

  const results = title? projects.filter(project => project.title.includes(title))
  :projects;

  // console.log(title);
  // console.log(owner);

  return response.json(results);
});

app.post('/projects', (request, response)=>{
  const {title, owner} = request.body;

  const project = {id:uuid() ,title, owner};

  projects.push(project);

  return response.json(project);
});

app.put('/projects/:id', (request, response)=>{
  const {id} = request.params;
  const {title, owner} = request.body;

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0){
    return response.status(400).json({error: "Project NOT FOUND!"})
  }
  
  const project = {
    id,
    title,
    owner,
  }

  projects[projectIndex] = project;
  
  return response.json(project);
});

app.delete('/projects/:id', (request, response)=>{
  const {id} = request.params

  const projectIndex = projects.findIndex(project => project.id === id);

  if(projectIndex < 0){
    return response.status(400).json({error: "Project NOT FOUND!"})
  }

  projects.splice(projectIndex, 1)
  return response.status(204).send();
});

// Escolhendo a porta do node.
app.listen(3333,() => {
  console.log("🚀🚀🚀 Back-end started!")
}); 