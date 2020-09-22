const {DataTypes,Sequelize}=require('sequelize');
const dt=DataTypes;

const qvoteModel = {

    qvote_id: {
        type: dt.UUID,
        defaultValue: Sequelize.UUIDV4
    },
    qvoteContent: {
        type: dt.JSON,
        allowNull:false
    },
    qvoteCode:{
        type:dt.STRING,
        allowNull:false,
    }
};

module.exports=qvoteModel;
