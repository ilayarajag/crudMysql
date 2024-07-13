const { _, moment, momenTz } = require('../config/common-includes');
const model = require('../models');
const axios = require('axios');
exports.create = async (req, res) => {
      try{
          let reqParams = req.body;
          let email = reqParams.email,
          phoneNo = reqParams.phoneNo,
          firstName = reqParams.firstName;

          if(_.isUndefined(email) || _.isUndefined(phoneNo) || _.isUndefined(firstName)){
              return res.invalidRequest('required parameter missing');
          }
          let [first, tmpphoneNo] = await model.CORESQL.query('SELECT * FROM users WHERE email=?',[email]);
         if(_.isEmpty(first)){
            return res.invalidRequest('user value  missing');
         }
         
          let createFields = {
            email: email,
            phoneNo: phoneNo,
            firstName : firstName
            
          };
          console.log(createFields);
          let [createAsset] = await model.CORESQL.query('INSERT INTO users SET?',[createFields]);

          let to_return = {id:createAsset.insertId,message:'user added successfully'}
          return res.sendOk(to_return);

      }catch(err){
          console.log(err);
          return res.serverError(err.message);
      }
  };


  exports.update = async (req, res) => {
    try{
        let reqParams = req.body;
          let email = reqParams.email,
          phoneNo = reqParams.phoneNo,
          user_id = reqParams.id,
          firstName = reqParams.firstName;


      
          if(_.isUndefined(id) ||_.isUndefined(email) || _.isUndefined(phoneNo) || _.isUndefined(firstName)){
            return res.invalidRequest('required parameter missing');
        }
        let [find,tmpfind] = await model.CORESQL.query('SELECT * FROM users WHERE id=? AND status=1',[user_id]);
        if(_.isEmpty(find)){
            return res.invalidRequest('user not found.');
        }

        let updateField = {
            email: email,
            phoneNo: phoneNo,
            firstName : firstName
            
          };
        let [createAsset] = await model.CORESQL.query('UPDATE users SET? WHERE id=?',[updateField,user_id]);

        let to_return = {id:user_id,message:'user updated successfully'}
        return res.sendOk(to_return);

    }catch(err){
        console.log(err);
        return res.serverError(err.message);
    }
};

exports.userDet = async (req, res) => {
    try{
        let reqParams = req.body;
       
        let user_id = reqParams.id;

        if(_.isUndefined(user_id)){
            return res.invalidRequest('required parameter missing');
        }

        let [first, tmpphoneNo] = await model.CORESQL.query('SELECT * FROM users WHERE id=?',[user_id]);
        if(_.isEmpty(first)){
           return res.invalidRequest('user value  missing');
        }
      let vehicle = first[0];
        let to_return = {
            id : user_id,
            active : vehicle.active,
            email : vehicle.email,
            password : vehicle.password,
            firstName : vehicle.firstName,
            lastName : vehicle.lastName,
            phoneNo : vehicle.phoneNo,
            profileImg : vehicle.profileImg,
            timeZone : vehicle.timeZone

        };

        return res.sendOk(to_return);

    }catch(err){
        console.log(err);
        return res.serverError(err.message);
    }
};

