const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const { send } = require("express/lib/response");
var a = 0;

//Configuracion
app.use(bodyParser.urlencoded({ extended: true }));

//Rutas
app.get("/", (req, res) => {
    res.sendFile(__dirname + "/index.html")
})
app.post("/alquiler", function (req, res) {
    a++;
    var fecha = new Date();
    var hoy = fecha.getDate() + "/" + (fecha.getMonth() + 1) + "/" + fecha.getFullYear();
    res.send("<tr id='" + a + "'>" +
        "<td>" + hoy + "</td>" +
        "<td><input style='width: 300px; border: none;' value='" + req.body.marca + "'disabled></input></td>" +
        "<td><input style='width: 300px; border: none;' value='" + req.body.modelo + "'disabled></input></td>" +
        "<td><input style='width: 300px; border: none;' value='" + req.body.color + "'disabled></input></td>" +
        "<td>$<input type='number' style='width: 300px; border: none;' value='" + req.body.valor + "'disabled></input></td>" +
        "<td><input type='number' style='width: 300px; border: none;' value='" + req.body.cantidadh + "'disabled></input></td>" +
        "<td>$" + (req.body.cantidadh * req.body.valor) + "</td>" +
        "<td><img width='300px' src='" + req.body.imagen + "'></td>" +
        "<td><button type='submit' class='eliminar' value='" + a + "'>Eliminar</button><br><br><button type='submit' value='" + a + "' class='actualizar'>Actualizar</button></td></tr>"
    );
})

//Botones
app.post("/eliminar", (req, res) => {
    res.send("Se ha eliminado correctamente");
})

app.post("/actualizar", (req, res) => {
    console.log("Se está modificando un carro");
    res.send("se esta modificando un carro")
})


app.listen(3000);