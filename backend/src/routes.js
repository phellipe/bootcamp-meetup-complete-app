import { Router } from 'express'
import multer from 'multer'

import UserController from './app/controllers/UserController'
import SessionController from './app/controllers/SessionController'
import FileController from './app/controllers/FileController'
import MeetupController from './app/controllers/MeetupController'
import SubscriptionController from './app/controllers/SubscriptionController'

import validateSessionStoreFields from './app/middlewares/session/validateStoreFields'
import validateUserStoreFields from './app/middlewares/user/validateStoreFields'
import validateUserUpdateFields from './app/middlewares/user/validateUpdateFields'
import validateMeetUpStoreFields from './app/middlewares/meetup/validateStoreFields'
import authMiddleware from './app/middlewares/global/auth'

import multerConfig from './config/multer'

const routes = new Router()
const upload = multer(multerConfig)

routes.post('/users', validateUserStoreFields, UserController.store)
routes.put(
  '/users',
  authMiddleware,
  validateUserUpdateFields,
  UserController.update
)

routes.get('/meetups', authMiddleware, MeetupController.index)
routes.get('/meetups/date', authMiddleware, MeetupController.listByDate)
routes.post(
  '/meetups',
  authMiddleware,
  validateMeetUpStoreFields,
  MeetupController.store
)
routes.put(
  '/meetups',
  authMiddleware,
  validateMeetUpStoreFields,
  MeetupController.update
)
routes.delete('/meetups/:id', authMiddleware, MeetupController.delete)

routes.post('/subscriptions', authMiddleware, SubscriptionController.store)
routes.get('/subscriptions', authMiddleware, SubscriptionController.index)
routes.delete('/subscriptions', authMiddleware, SubscriptionController.delete)

routes.post('/sessions', validateSessionStoreFields, SessionController.store)

routes.post(
  '/files',
  authMiddleware,
  upload.single('file'),
  FileController.store
)

export default routes
