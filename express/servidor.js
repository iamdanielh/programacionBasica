var express = require("express");
var aplicacion = express();

aplicacion.get("/", inicio);
aplicacion.get("/cursos", cursos);

function inicio(peticion, resultado)
{
resultado.send("este es el home");
}

function cursos(peticion, resultado)
{
resultado.send("este es el curso");
}

aplicacion.listen(8989);