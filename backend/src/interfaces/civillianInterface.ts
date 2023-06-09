import User from './userInterface'

interface Civilian extends User {
  id: string
  username: string
  email: string
  password: string
  createdAt: Date
  role: string
}

export default Civilian
