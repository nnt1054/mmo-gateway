const { Sequelize, DataTypes, Model } = require('sequelize');

class Account extends Model {

  static name() {
    return 'Account';
  }

  static fields() {
    return {
      accountId: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false
      },
      username: DataTypes.STRING,
      coins: {
        type: DataTypes.INTEGER,
        allowNull: false
      }
    }
  }

  static init(sequelize) {
    return super.init(this.fields(), {
      sequelize,
      modelName: this.name()
    });
  }

  static associate(models) {
    // User.belongsTo(models.Company, {foreignKey: 'companyId', as: 'company'})
  }

}

export default Account