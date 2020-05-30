import { Request, Response } from 'express'
import EmailService from '../services/EmailService'

const users = [
    { name: "Diego", email: 'diegomagasouza@gmail.com' },

]

export default {
    async index(request: Request, response: Response) {
        return response.json(users)
    },

    async create(request: Request, response: Response) {
        const emailService = new EmailService();
        emailService.sendMail({
            to: { name: 'Diego Souza', email: 'diegomagaouza@gmail.com' },
            message: { subject: 'Bem vindo ao TypeScript!', content: 'Learning Typescript' }
        });
        return response.send();
    }
};