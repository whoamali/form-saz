import axios, { AxiosInstance } from "axios"

export default (token: string): AxiosInstance => {
  return axios.create({
    baseURL: "http://localhost:3000/api",
    headers: { "x-access-token": token },
  })
}
