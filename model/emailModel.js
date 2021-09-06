import {getRepository} from 'typeorm';
import { Request, Response } from 'express';
import {Users} from './usuariosModel';
import * as jwt from 'jsonwebtoken';
import config from '../model/solicitudModel';
import {validate} from 'class-validator';
import { transporter } from "../routes/email";

let verificationLink;
let emailStatus = 'OK';

const userRepository = getRepository(Users);
/* let users: Users; */

try{
    user = await userRepository.findOneOrFail({where: {username}});
    const token = jwt.sing({userId: userid, username: user.username}, config.jwtSecretReset, { expiresIn: '10m'});
    user.resetToken = token;
}catch (error){
    return res.json({message});
}


// send mail with defined transport object
try{
    await transporter.sendMail({
        from: '"Forgot password" <human21talen@gmail.com>', // sender address
        to: user.username , // list of receivers
        subject: "Gestión Talento Humano", // Subject line
        html: "<b>Hello world?</b>", // html body
      });
}catch(error){
    emailStatus = error;
    return res.status(400).json({message: 'Something goes wrong!'});
}