import express from 'express'

import textsRoutes from './routes/texts'

const app = express()
const PORT: string = '3000'

app.locals.storageText = []

app.use(express.json())

app.use('/add-text', textsRoutes)

app.listen(PORT, () => { })

export default app
