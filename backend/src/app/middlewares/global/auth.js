import jwt from 'jsonwebtoken'
import { promisify } from 'util'

import authConfig from '../../../config/auth'

export default async (req, res, next) => {
  const authHeader = req.headers.authorization

  if (!authHeader) {
    return res.status(401).json({
      message: 'Token not provided',
      userMessage: 'Token não fornecido.',
      code: 'ERROR_UNAUTHORIZED',
    })
  }

  const [, token] = authHeader.split(' ')

  try {
    const decoded = await promisify(jwt.verify)(token, authConfig.secret)

    req.userId = decoded.id

    return next()
  } catch (err) {
    return res.status(401).json({
      message: 'Invalid token.',
      userMessage: 'Token inválido',
      code: 'ERROR_UNAUTHORIZED',
    })
  }
}
