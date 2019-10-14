import * as Yup from 'yup'

export default async (req, res, next) => {
  const schema = Yup.object().shape({
    title: Yup.string().required(),
    description: Yup.string().required(),
    location: Yup.string().required(),
    dateTime: Yup.date().required(),
    bannerId: Yup.number().required(),
  })

  if (!(await schema.isValid(req.body))) {
    return res.json(400).json({
      message: 'There are missing or invalid parameters on the request.',
      userMessage:
        'Parece que você não forneceu todos os dados necessários corretamente.',
      code: 'ERROR_BAD_REQUEST',
    })
  }

  return next()
}
