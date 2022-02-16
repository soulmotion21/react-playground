export type LoadingStatus = 'idle' | 'pending' | 'resolved' | 'rejected'

export interface IMyLocation {
  from: {
    pathname: string
    search: string
    state: {
      from: string
    }
  }
}

export interface ILoginForm {
  id: string
  password: string
}

export interface IRegisterForm extends ILoginForm {
  email?: string
  name: string
}
