var imagenes = []
imagenes["Cauchin"] = "vaca.png";
imagenes["Pokacho"] = "pollo.png";
imagenes["Tocinauro"] = "cerdo.png";



class Pakiman
{
    constructor (n, v, a,t)
    {
        this.imagen = new Image();
        this.nombre = n;
        this.vida = v;
        this.ataque =  a;
        this.tipo = t;

        this.imagen.src = imagenes[this.nombre];
    }
    hablar()
    {
        alert(this.nombre);
    }
    mostrar()
    {
        document.body.appendChild(this.imagen);
        document.write("<br /><strong>" + this.nombre + "</strong><br />")
        document.write("Tipo: " + this.tipo + "</strong><br />")
        document.write("Vida: " + this.vida + "</strong><br />")
        document.write("Ataque: " + this.ataque + "</strong><hr />")
    }
}

var coleccion = [];
coleccion.push(new Pakiman ("Cauchin", 100, 30, "tierra"));
coleccion.push(new Pakiman ("Pokacho", 80, 50, "fuego"));
coleccion.push(new Pakiman ("Tocinauro", 120, 40, "profesional"));

console.log(coleccion);

for (var p of coleccion)
{
    p.mostrar();
}