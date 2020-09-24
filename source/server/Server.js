import Express from 'express'

export class Server {
    app = Express();

    startup() {
        this.setupRoutes();
        this.app.listen(3000, () => console.log( "Listening..."));
    }

    setupRoutes() {
        this.app.get("/", (req, res) => {
            res.send("Funciona !!!")
        });
    }
}