import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

class App{
    constructor(){
        this.app = express()
        this.port = process.env.PORT || 8000
        this.middleware()
        this.connection()
    }
    middleware(){
        this.app.use(express.json())
        this.app.use(express.static('assets'))
        this.app.use(express.urlencoded({ extended: true }))
        this.app.get('/about', (req, res)=>res.send(`Halo, ini dari halaman about!`))
        this.app.use('*', (req, res)=>res.send(`Halo, ini adalah halaman default!`))
    }
    connection(){
        this.app.listen(this.port, ()=>console.info(`Berhasil Menjalankan Server Pada http://localhost:${this.port}`))   
    }
}

const app = new App().app