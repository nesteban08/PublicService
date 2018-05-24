# Proyectos relacionados para el taller 1 de Modelado y validacion de Arquitectura para la Especializacion en Arquitectura Empresarial de Software de la Pontificia Universidad Javeriana

# PublicService
Servicio REST creado con NodeJS que retornan, segmentan y conservan el estado de una consulta de factura y un pago de factura.

Servicios expuestos:

consultar:
   Servicio que recibe numero de factura, 
   Retorna Factura, id_operador, id_servicio, consecutivo y valor a pagar
pagarfac:	
   Servicio que recibe numero de factura, medio de pago, valor y canal, 
   Retorna operador, servicio, factura, consecutivomedio, valor, mensajeOK y canal


