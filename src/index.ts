import { Hono } from 'hono'
import { userApp } from './user'

/**
 * En este fichero dejamos la instancia principal de Hono que llamaremos 
 * mainApp, a esta solo le asociaremos las rutas de las otras instacias que vamos a crear.
 */
const mainApp = new Hono().basePath('/api/')

mainApp.get('/', (c) => {
  return c.text('Hello Bitch Hono!')
})

mainApp.route('/user/', userApp)

export default mainApp
