import * as Yup from 'yup'

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string()
      .email()
      .required(),
    password: Yup.string()
      .min(8)
      .required(),
  })

  if (!(await schema.isValid(req.body))) {
    return res.status(400).json({
      message: 'Validation failed, there are missing or wrong parameters.',
      userMessage:
        'Parece que você não forneceu todos os dados necessários corretamente.',
      code: 'ERROR_BAD_REQUEST',
    })
  }

  return next()
}
