import { NextApiRequest, NextApiResponse } from "next"


export const sendMail = async (req: NextApiRequest, res: NextApiResponse) => {
    const { name, email, message } = req.body
    console.log(name, email, message)
    res.status(200).json({ status: 'OK' })
}

export default sendMail