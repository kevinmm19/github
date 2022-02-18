import express from 'express'
import serveStatic from 'serve-static'
import { join } from 'path'
const port = process.env.PORT || 80

app = express()
app.use(serveStatic(join(__dirname, 'dist')))
app.listen(port)
