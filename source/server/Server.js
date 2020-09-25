import Express from 'express'
import bodyParser from 'body-parser'
import config from '../config'
import routes from './routes'

export class Server {
    app = Express();
    port = config.PORT;

    startup() {
        // bodyparser
        this.app.use(bodyParser.urlencoded({extended:false}));
        this.app.use(bodyParser.json());

        this.setupRoutes();
        this.app.listen(this.port, () => console.log( `Listening to ${this.port}`));
    }

    setupRoutes() {
        this.app.get("/", (req, res) => {
            res.send("Funciona !!!")
        });

        this.app.use(routes)
    }
}
