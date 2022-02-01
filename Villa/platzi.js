var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");

var vaca = {
    url: "vaca.png",
    cargaOk: false
}

var fondo = {
    url: "tile.png",
    cargaOk: false
}



fondo.imagen = new Image();
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVacas);


function cargarFondo()
{
    fondo.cargaOk = true;
    dibujar();
}

function cargarVacas()
{
    vaca.cargaOk = true;
    dibujar(); 
}

function dibujar()
{
    if(fondo.cargaOk == true)
    {
        papel.drawImage(fondo.imagen,0,0);
    }
    
    if(vaca.cargaOk == true)
    {
        var cantidad = aleatorio(0,100000);
        console.log(cantidad)
        for(var v=0; v<cantidad; v++) 
        {
            var x = aleatorio(0,7);
            var y = aleatorio (0,7);
            x = x*60
            y = y*60
            papel.drawImage(vaca.imagen,x,y);
        }

    }
}

function aleatorio(min,maxi)
{
    var resultado;
    resultado = (Math.floor(Math.random() * (maxi - min + 1))) + min;
    return(resultado);
}

