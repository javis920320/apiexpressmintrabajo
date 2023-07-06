const { Router, request, response } = require("express");
const {GetFuncionarios, PostFuncionarios, PutFuncionario} = require("../controllers/funcionarioController");
const { check, query, body } = require("express-validator");
const { validacionDatos } = require("../middleware/validacion");
const Funcionario = require("../models/Funcionario");

const router=Router();
router.get("/",GetFuncionarios)

router.post("/",
[
    check("nombre","nombre requerido").trim().notEmpty().toUpperCase(),
    check("apellidos","apellidos requerido").trim().notEmpty().toUpperCase(),
    check("identificacion","Identificacion es  requerida").trim().notEmpty(),
    check("identificacion").trim().custom(async(identificacion)=>{
        const isnotunique= await Funcionario.find({identificacion:identificacion})
        if(isnotunique){
         throw new Error("La identificacion ya esta registrada")
        }
     }),//validar que la identificacion no este duplicada
    check("cargo","Agrega el cargo").trim().notEmpty().toUpperCase(),
    check("email","email es requerido").trim().notEmpty(),
    check("email","email es requerido").trim().custom(async(email)=>{
       const isnotunique= await Funcionario.find({email:email})
       if(isnotunique){
        throw new Error("Email ya esta registrado")
       }
    }),
    check("email","email no valido").trim().isEmail(),
    check("extension","La ext es obligatoria").trim().notEmpty()
    


,validacionDatos],PostFuncionarios)

router.put("/",[
    check("nombre","Nombre requerido").notEmpty().toUpperCase(),
    check("apellidos","Ingresa apellido").notEmpty().toUpperCase(),
    //check("cargo","Ingresa apellido").notEmpty().toUpperCase(),
    //check("apellidos","Ingresa apellido").notEmpty().toUpperCase(),
    //check("apellidos","Ingresa apellido").notEmpty().toUpperCase(),
    validacionDatos],PutFuncionario) 

module.exports= router;