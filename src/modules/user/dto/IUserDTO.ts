interface IUserDTO {
  id?: string
  name: string
  email: string
  password: string
}

interface IUserUpdateDTO {
  id: string
  name?: string
  email?: string
  password?: string
}
interface IUserUpdatePasswordDTO {
  id: string
  password: string
  newPassword: string
}

export type { IUserDTO, IUserUpdateDTO, IUserUpdatePasswordDTO }
