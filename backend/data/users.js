import bcrypt from 'bcryptjs'

const users = [
    {
        name:"Admin User",
        email: "admin@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: true
    },
    {
        name:"Jhon Doe",
        email: "jhon@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    },
    {
        name:"James Dee",
        email: "james@gmail.com",
        password: bcrypt.hashSync('123456', 10),
        isAdmin: false
    }
]

export default users