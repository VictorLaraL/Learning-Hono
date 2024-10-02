import { Hono } from "hono";
import { zUserValidator } from "./validator";

/**
 * En este modulo crearemos los endpoints necesarios para el modelo de usuarios.
 */
const userApp = new Hono()

//Crearemos una estructura list para resguardar los datos.
let userList: { [x: string]: string | File }[] = []

userApp
    .get('/', async (c) =>{
        //Retornamos la lista de usuarios registrados
        return c.json({
            'data':userList
       })
   })
   .post('/', zUserValidator, async (c) =>{

    // Con este metodo parsebody le asignamos el contenido de la peticion
    // a body.
    const body = await c.req.parseBody()

    // Agregamos el contenido del rquest a la lista
    userList.push(body)

    return c.json({
        'data' : userList
    })
   })
   

export { userApp }