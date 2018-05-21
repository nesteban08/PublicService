    var express = require("express"),
        app = express(),
        bodyParser  = require("body-parser"),
        methodOverride = require("method-override");
        http     = require("http"),
        port = 3000,
        url = require("url");

    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    app.use(methodOverride());

    var router = express.Router();

    router.get('/consultar', function(req, res) {

                                                         var params = url.parse(req.url, true).query;
                                                         var inputN1 = params.factura;
                                                         var inputN2 = params.canal;
                                                         var operador;



                                                           if (inputN1.slice(0,2)=="77")
                                                           {
                                                            console.log("ETB");
                                                            operador = "ETB"
                                                        } 

                                                        else if (inputN1.slice(0,2)=="11")
                                                        {
                                                            console.log("CLARO");
                                                            operador = "CLARO"
                                                        } 

                                                        else if (inputN1.slice(0,2)=="22")
                                                        {
                                                            console.log("AVANTEL");
                                                            operador = "AVANTEL"
                                                        } 

                                                        else {
                                                            operador = "NO_IDENTIFICADO"
                                                        }



                                                        if (inputN1.slice(2,3)=="1")
                                                        {
                                                            console.log("GAS");
                                                            servicio = "GAS"
                                                        }   

                                                        else if (inputN1.slice(2,3)=="2")
                                                        {
                                                            console.log("AGUA");
                                                            servicio = "AGUA"
                                                        }  


                                                        else if (inputN1.slice(2,3)=="3")
                                                        {
                                                            console.log("TELEFONIA");
                                                            servicio = "TELEFONIA"
                                                        } 
                                                        else {
                                                            servicio = "NO_IDENTIFICADO"
                                                        }



                                                        // retornar en formato HTML
                                                         //   res.send("Operador: "+operador+"<br> Servicio: "+servicio+" <br> Factura: "+inputN1+" <br> Consecutivo: "+inputN1.slice(2)+" <br> Canal: "+inputN2);

                                                         // retornar en formato JSON
                                                        res.json({ Operador:operador , Servicio:servicio , Factura:inputN1,  Consecutivo:inputN1.slice(2),  Canal:inputN2})


                                                         res.end();

    });




    
    router.get('/pagarfac', function(req, res) {

                                                         var params = url.parse(req.url, true).query;
                                                         var inputN1 = params.factura1;
                                                         var inputN2 = params.medio;
                                                         var inputN3 = params.valor;
                                                         var inputN4 = params.canal;

                                                           //var numInput1 = new Number(inputN1);
                                                           //var urlOperation =  req.url;
                                                           //var numOutput = new Number(numInput1).toFixed(0);

                                                           var operador;
                                                           var servicio;

                                                           if (inputN1.slice(0,2)=="77")
                                                           {
                                                            console.log("ETB");
                                                            operador = "ETB"
                                                        } 

                                                        else if (inputN1.slice(0,2)=="11")
                                                        {
                                                            console.log("CLARO");
                                                            operador = "CLARO"
                                                        } 

                                                        else if (inputN1.slice(0,2)=="22")
                                                        {
                                                            console.log("AVANTEL");
                                                            operador = "AVANTEL"
                                                        } 
                                                        else {
                                                            operador = "-- OPERADOR_NO_IDENTIFICADO --"
                                                        }





                                                        if (inputN1.slice(2,3)=="1")
                                                        {
                                                            console.log("GAS");
                                                            servicio = "GAS"
                                                        }   
                                                        else if (inputN1.slice(2,3)=="2")
                                                        {
                                                            console.log("AGUA");
                                                            servicio = "AGUA"
                                                        }  
                                                        else if (inputN1.slice(2,3)=="3")
                                                        {
                                                            console.log("TELEFONIA");
                                                            servicio = "TELEFONIA"
                                                        } 
                                                        else {
                                                            servicio = "-- OPERADOR_NO_IDENTIFICADO --"
                                                        }

                                                        // retornar en formato HTML
                                                         //   res.send("Operador: "+operador+"<br> Servicio: "+servicio+" <br> Factura: "+inputN1+" <br> Consecutivo: "+inputN1.slice(2)+" <br> medio: "+inputN2+"<br> valor: "+inputN3+" <br> Canal: "+inputN2);

                                                    
                                                         // retornar en formato JSON
                                                        res.json({ Operador:operador , Servicio:servicio , Factura:inputN1,  Consecutivo:inputN1.slice(2), medio:inputN2, valor:inputN3,  Canal:inputN4 })


                                                         res.end();

    });


     // verb POST
    router.post('/pagarfacPost', function(req, res) {

                                                         var params = url.parse(req.url, true).query;
                                                         var inputN1 = params.factura1;
                                                         res.json({ Factura:inputN1 });


                                                         res.end();

    });


    // verb DELETE
    router.delete('/pagarfacPost', function(req, res) {

                                                         var params = url.parse(req.url, true).query;
                                                         var inputN1 = params.factura1;
                                                          res.json({ Factura_Eliminada:inputN1 });
                                                         res.end();

    });



    app.use(router);

    app.listen(port, function() {
      console.log("Node server running on http://localhost:3000");
    });

    // TOMADO DE https://carlosazaustre.es/como-crear-una-api-rest-usando-node-js/
    // se ejecuta con http://localhost:3000/test


   // http://localhost:3000/consultar/?factura=1131231
   // http://localhost:3000/pagarfac/?factura1=77312312&medio=tarjeta_credito&valor=10000&canal=WEB


