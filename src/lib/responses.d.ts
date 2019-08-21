import { AxiosResponse } from 'axios'

declare interface QuerySubjectIDResponse extends AxiosResponse {
  data: {
    subject_id: number,
  }
}

declare interface SubjectResponse extends AxiosResponse {
  data: {
    rating: {
      score: number,
    },
    name_cn: string,
    name: string,
  }
}

declare interface AuthResponse {
  access_token: string
  expires_in: number
  token_type: string
  scope?: string
  user_id: number
  refresh_token: string
  auth_time: string
}

declare interface BaseResponse<T> extends AxiosResponse {
  data: T
}
