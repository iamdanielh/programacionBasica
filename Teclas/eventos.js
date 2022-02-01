var teclas = {
UP:38,
DOWN:40,
LEFT:37,
RIGHT:39
};

console.log(teclas);

var cuadrito = document.getElementById("area_de_dibujo");
var papel = cuadrito.getContext("2d");

var boton = document.getElementById("boton_inicial")
boton.addEventListener("click", arrancarDibujo );

var contenidoCajaX = document.getElementById("inicio_X")
var contenidoCajaY = document.getElementById("inicio_Y")

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal, lienzo)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function arrancarDibujo ()
{
    document.addEventListener("keydown", dibujarTeclado);

    function dibujarTeclado(evento)
    {
        var x0 = parseInt(contenidoCajaX.value);
        var y0 = parseInt(contenidoCajaY.value);
        var x = x0;
        var y = y0;
    
        colorcito = generateRandomColor();
    
        var movimiento = 5;

        dibujarLinea(colorcito,x-1,y-1,x+1,y+1, papel);

        switch(evento.keyCode)
        {

            case teclas.UP:
                colorcito = generateRandomColor()
                dibujarLinea(colorcito, x, y, x, y - movimiento, papel)
                y = y - movimiento
            break;
            case teclas.DOWN:
                colorcito = generateRandomColor()
                dibujarLinea(colorcito, x, y, x, y + movimiento, papel)
                y = y + movimiento
            break;
            case teclas.LEFT:
                colorcito = generateRandomColor()
                dibujarLinea(colorcito, x, y, x - movimiento, y, papel)
                x = x - movimiento
            break;
            case teclas.RIGHT:
                colorcito = generateRandomColor()
                dibujarLinea(colorcito, x, y, x + movimiento, y, papel)
                x = x + movimiento
            break;
        }
    }
}

function generateRandomColor(){
    var maxVal = 0xFFFFFF; // 16777215
    var randomNumber = Math.random() * maxVal; 
    randomNumber = Math.floor(randomNumber);
    randomNumber = randomNumber.toString(16);
    var randColor = randomNumber.padStart(6, 0);   
    return `#${randColor.toUpperCase()}`
}