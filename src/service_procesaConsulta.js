    var express = require("express"),
    app = express(),
    bodyParser  = require("body-parser"),
    methodOverride = require("method-override");
    http     = require("http"),
    port = 3000,
    url = require("url"),
    date = new Date();

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    var router = express.Router();

    router.get('/consultar', function(req, res) {

     var params = url.parse(req.url, true).query,
     inputN1 = params.factura,
     inputN2 = params.canal,
     operador,
     valor_pagar = new Number(Math.random() * 100000).toFixed(0);


     if (inputN1.slice(0,2)=="77") {operador = "ETB"} else if (inputN1.slice(0,2)=="11") {operador = "CLARO"} else if (inputN1.slice(0,2)=="22") {operador = "AVANTEL"} else {operador = "NO_IDENTIFICADO"}
        if (inputN1.slice(2,3)=="1") {servicio = "GAS"} else if (inputN1.slice(2,3)=="2") {servicio = "AGUA"} else if (inputN1.slice(2,3)=="3") {servicio = "TELEFONIA"} else {servicio = "NO_IDENTIFICADO"}


        res.json({ Operador:operador , Servicio:servicio , Factura:inputN1,  Consecutivo:inputN1.slice(2),  Canal:inputN2, Valor_pagar:valor_pagar})
        console.log(date+" Operador: "+operador+" Servicio: "+servicio+" Factura: "+inputN1+" Consecutivo: "+inputN1.slice(2)+"  Canal: "+inputN2 +"  Valor_pagar: "+valor_pagar);
        res.end();

    });


    
    router.get('/pagarfac', function(req, res) {

     var  params = url.parse(req.url, true).query,
     inputN1 = params.factura1,
     inputN2 = params.medio,
     inputN3 = params.valor,
     inputN4 = params.canal,
     operador,
     servicio;

     if (inputN1.slice(0,2)=="77") {operador = "ETB"} else if (inputN1.slice(0,2)=="11") {operador = "CLARO"} else if (inputN1.slice(0,2)=="22") {operador = "AVANTEL"} else {operador = "-- OPERADOR_NO_IDENTIFICADO --"}
       if (inputN1.slice(2,3)=="1") {servicio = "GAS"} else if (inputN1.slice(2,3)=="2") {servicio = "AGUA"} else if (inputN1.slice(2,3)=="3") {servicio = "TELEFONIA"} else {servicio = "-- OPERADOR_NO_IDENTIFICADO --"}

     //   res.send("Operador: "+operador+"<br> Servicio: "+servicio+" <br> Factura: "+inputN1+" <br> Consecutivo: "+inputN1.slice(2)+" <br> medio: "+inputN2+"<br> valor: "+inputN3+" <br> Canal: "+inputN2);

     res.json({ Operador:operador , Servicio:servicio , Factura:inputN1,  Consecutivo:inputN1.slice(2), medio:inputN2, valor:inputN3,  Canal:inputN4 })
     console.log(date+" Operador: "+operador+" Servicio: "+servicio+" Factura: "+inputN1+" Consecutivo: "+inputN1.slice(2)+" medio: "+inputN2+" valor: "+inputN3+" Canal: "+inputN2);
     res.end();

 });


    router.post('/pagarfacPost', function(req, res) {

     var params = url.parse(req.url, true).query;
     var inputN1 = params.factura1;
     res.json({ Factura:inputN1 });
     res.end();

 });


    router.delete('/pagarfacPost', function(req, res) {

     var params = url.parse(req.url, true).query;
     var inputN1 = params.factura1;
     res.json({ Factura_Eliminada:inputN1 });
     res.end();

 });


    app.use(router);

    app.listen(port, function() {
      console.log("Node server running ...");
  });



