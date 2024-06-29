import UserModel from './../models/userModel.js'

export const getUsers = async (req, res) => {
    try {
        const users = await UserModel.find()
        res.status(200).json(users)
    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

export const getUserById = async (req, res) => {
    try {
        const user = await UserModel.findById(req.params.id)
        res.status(200).json(user)
    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

export const createUser = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        const isUserExist = await UserModel.findOne({ email })
        if (isUserExist) {
            res.status(400).json({ message: "User Already Exists" })
        }
        else {
            const user = await UserModel.create({
                name, email, password, phone, address
            })
            res.status(201).json(user)
        }

    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}


export const updateUser = async (req, res) => {
    try {
        const { name, email, password, phone, address } = req.body
        const user = await UserModel.findById(req.params.id)

        if (user) {
            user.name = name;
            user.email = email;
            user.password = password;
            user.phone = phone;
            user.address = address;
            const updateduser = await user.save()
            res.status(200).json(updateduser)
        }

    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

export const Login = async (req, res) => {
    try {
        const { email, password } = req.body
        const user = await UserModel.findOne({ email })
        if (user) {
            if (user.password == password) {
                res.status(200).json(user)
            }
            else {
                res.status(500).json({ message: "wrong password" })
            }
        }
        else {
            res.status(500).json({ message: "user not found!" })
        }
    } catch (e) {
        res.status(500).json({ Error: e.message })
    }
}

