import User from '../models/User'
import File from '../models/File'

class UserController {
  async store(req, res) {
    const userExists = await User.findOne({ where: { email: req.body.email } })

    if (userExists) {
      return res.status(400).json({
        message: 'User with that email already exists.',
        userMessage: 'Usuário com este email já está cadastrado.',
        code: 'ERROR_BAD_REQUEST',
      })
    }

    const { id, name, email } = await User.create(req.body)

    return res.json({
      id,
      name,
      email,
    })
  }

  async update(req, res) {
    const { name: oldName, email, oldPassword } = req.body

    const user = await User.findByPk(req.userId)

    if (!email || !oldName) {
      return res.status(400).json({
        message: 'You need to send a name and a email.',
        userMessage: 'Você não pode deixar os campos de nome e email vazios.',
        code: 'ERROR_BAD_REQUEST',
      })
    }

    if (email && email !== user.email) {
      const userExists = await User.findOne({
        where: { email },
      })

      if (userExists) {
        return res.status(400).json({
          message: 'User with that email already exists.',
          userMessage: 'Usuário com este email já está cadastrado.',
          code: 'ERROR_BAD_REQUEST',
        })
      }
    }

    if (oldPassword && !(await user.checkPassword(oldPassword))) {
      return res.status(401).json({
        message: 'Old password does not match.',
        userMessage: 'A senha sua senha antiga parece estar incorreta.',
        code: 'ERROR_BAD_REQUEST',
      })
    }

    await user.update(req.body)

    const { id, name, avatar } = await User.findByPk(req.userId, {
      include: [
        {
          model: File,
          as: 'avatar',
          attributes: ['id', 'path', 'url'],
        },
      ],
    })

    return res.json({
      id,
      name,
      email,
      avatar,
    })
  }
}

export default new UserController()
