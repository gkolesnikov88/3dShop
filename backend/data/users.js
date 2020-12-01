import bcrypt from 'bcryptjs';

const users = [
  {
    name: 'Admin User',
    email: 'admin@mail.com',
    password: await bcrypt.hash('123456', 10),
    isAdmin: true
  },
  {
    name: 'John Doe',
    email: 'john@mail.com',
    password: await bcrypt.hash('123456', 10),
  },
  {
    name: 'Jane Doe',
    email: 'jane@mail.com',
    password: await bcrypt.hash('123456', 10),
  }
]

export default users;
