var vp = document.getElementById("villaplatzi");
var papel = vp.getContext("2d");
document.addEventListener("keydown", moverPollo);

var teclas = 
{
    UP: 38,
    LEFT: 37,
    RIGHT: 39,
    DOWN: 40
};

var vaca = {
    url: "vaca.png",
    cargaOK: false
};

var cerdo = {
    url: "cerdo.png",
    cargaOK: false
};

var pollo = {
    url: "pollo.png",
    cargaOK: false,  
};

var fondo = {
    url: "tile.png",
    cargaOK: false
};

fondo.imagen = new Image(); //creacion de objetos
fondo.imagen.src = fondo.url;
fondo.imagen.addEventListener("load", cargarFondo);

vaca.imagen = new Image();
vaca.imagen.src = vaca.url;
vaca.imagen.addEventListener("load", cargarVaca);

cerdo.imagen = new Image();
cerdo.imagen.src = cerdo.url;
cerdo.imagen.addEventListener("load", cargarCerdo);

pollo.imagen = new Image();
pollo.imagen.src = pollo.url;
pollo.imagen.addEventListener("load", cargarPollo);

function cargarFondo()
{
    fondo.cargaOK = true;
    dibujar();
}

function cargarPollo()
{
    pollo.cargaOK = true;
    dibujar();
}

function cargarVaca()
{
    vaca.cargaOK = true;
    dibujar();
}

function cargarCerdo()
{
    cerdo.cargaOK = true;
    dibujar();
}

var canV = aleatorio(0, 10);
console.log("Cantidad de Vacas: " + canV);
var canC = aleatorio(0, 10);
console.log("Cantidad de Pollos: " + canC);



function dibujar()
{
    if(fondo.cargaOK)
    {
        papel.drawImage(fondo.imagen, 0, 0);
    }
    if(vaca.cargaOK)
    {
        for(var i = 0; i < canV ; i++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(vaca.imagen, x, y);
        }
    }
    if(cerdo.cargaOK)
    {
        for(var i = 0; i < canC ; i++)
        {
            var x = aleatorio(0, 7);
            var y = aleatorio(0, 7);
            x = x * 60;
            y = y * 60;
            papel.drawImage(cerdo.imagen, x, y);
        }
    }
    if(pollo.cargaOK)
    {
        var x = aleatorio(0, 7);
        var y = aleatorio(0, 7);
        x = x * 60;
        y = y * 60;
        papel.drawImage(pollo.imagen, x, y); 
         
    }
}

function moverPollo(evento)
{
    var movimiento = 10;
   
    switch(evento.keyCode)
    {
        case teclas.UP:
            yp = yp - movimiento;
            dibujar();
        break;
        case teclas.DOWN:
            yp = yp + movimiento;
            dibujar();
        break;
        case teclas.LEFT:
            xp = xp - movimiento;
            dibujar();
        break;
        case teclas.RIGHT:
            xp = xp + movimiento;
            dibujar();
        break;
        default:
            console.log("tecla invalida");
    }  
}

function aleatorio(min, max)
{
    var resultado;
    resultado = Math.floor (Math.random() * (max - min + 1)) + min;
    return resultado;
}