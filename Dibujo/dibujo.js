var texto = document.getElementById("textoLineas")
var boton = document.getElementById("botonLineas")
boton.addEventListener("click", dibujoPorClick );

var d = document.getElementById("dibujito");
var ancho = d.width;
var lienzo = d.getContext("2d");

dibujarLinea(generateRandomColor(), 1,1,1,299)
dibujarLinea(generateRandomColor(), 1,299,299,299)

function dibujarLinea(color, xInicial, yInicial, xFinal, yFinal)
{
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xInicial,yInicial);
    lienzo.lineTo(xFinal,yFinal);
    lienzo.stroke();
    lienzo.closePath();
}

function dibujoPorClick()
{
    var contenidoCajaLineas = parseInt(texto.value);
    var lineas = contenidoCajaLineas;
    var l = 0;
    let yI, xF;
    var espacio = ancho / lineas

    for(l = 0; l < lineas; l++)
    {
        let colorcito = generateRandomColor()
        yI = l * espacio;
        xF = (l + 1) * espacio; 
        
        dibujarLinea(colorcito, 0, yI, xF, 300);
        dibujarLinea(colorcito, 300, yI, xF, 0);

        function generateRandomColor()
        {
            var maxVal = 0xFFFFFF; // 16777215
            var randomNumber = Math.random() * maxVal; 
            randomNumber = Math.floor(randomNumber);
            randomNumber = randomNumber.toString(16);
            var randColor = randomNumber.padStart(6, 0);   
            return `#${randColor.toUpperCase()}`
        }
        console.log(generateRandomColor()); 
    }

}
