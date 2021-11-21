import './database.js'
import cors from 'cors'
import morgan from 'morgan'
import express from 'express'
import busboy from 'connect-busboy'
import bodyParser from 'body-parser'
import swaggerJsDoc from 'swagger-jsdoc'
import swaggerUi from 'swagger-ui-express'
import busboyBodyParser from 'busboy-body-parser'
import appRoutes from './src/routes/app.routes.js'
import defaultRoutes from './src/routes/default.routes.js'
import admRoutes from './src/routes/adm.routes.js'
import userRoutes from './src/routes/user.routes.js'
import promoterRoutes from './src/routes/promoter.routes.js'
import {options} from './swaggerDoc.js'

const app = express();

const specs = swaggerJsDoc(options)


//ROTAS
app.use(morgan('dev'));
app.use(express.json());
app.use(cors())
app.use(busboy())
app.use(busboyBodyParser())
app.use('/user', userRoutes)
app.use('/promoter', promoterRoutes)
app.use('/private/admin', admRoutes)
app.use('/default', defaultRoutes)
app.use('/app', appRoutes)
app.use('/api-docs', swaggerUi.serve,swaggerUi.setup(specs))
app.get('/', (req, res) =>{
    return res.json({message:"server on "})
})

app.listen(3333)