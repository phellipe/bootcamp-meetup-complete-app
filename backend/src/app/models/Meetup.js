import Sequelize, { Model } from 'sequelize'

class Meetup extends Model {
  static init(sequelize) {
    super.init(
      {
        title: Sequelize.STRING,
        description: Sequelize.STRING,
        location: Sequelize.STRING,
        date_time: Sequelize.DATE,
        banner_id: Sequelize.INTEGER,
        user_id: Sequelize.INTEGER,
      },
      {
        sequelize,
      }
    )

    return this
  }

  static associate(models) {
    this.belongsTo(models.File, { foreignKey: 'banner_id', as: 'banner' })
    this.belongsTo(models.User, { foreignKey: 'user_id', as: 'owner' })
  }
}

export default Meetup
