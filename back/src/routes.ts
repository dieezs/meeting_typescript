import { Router } from 'express'

const routes = Router();

import UserControle from './controllers/UserController'

routes.get('/users', UserControle.index )
routes.post('/users', UserControle.create )

export default routes 