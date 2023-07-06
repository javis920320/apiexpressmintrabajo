const { request, response } = require("express");
const Functionarios = require("../models/Funcionario.js");
const Funcionario = require("../models/Funcionario.js");

const GetFuncionarios = async (req = request, res = response) => {
  // listar funcionarios
  const filters = {
    estado: "activo",
  };
  const funcionarios = await Functionarios.find(filters);

  res.json(funcionarios);
};
  const PostFuncionarios=async(req= request, res=response)=>{

   const nuevofuncionario= await Funcionario.create(req.body)
   res.json(nuevofuncionario)
    

  }

  const PutFuncionario=async(req= request, res=response)=>{

  }

module.exports = {GetFuncionarios,PostFuncionarios,PutFuncionario};
