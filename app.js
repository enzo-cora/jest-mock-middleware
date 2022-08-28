
import express  from 'express'

import indexRouter from './routes.js'

const app = express();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use('/', indexRouter);

console.log('WELCOME TO MY APP')

export default app
