import axios, { AxiosInstance } from "axios"

export default (token: string): AxiosInstance => {
  return axios.create({
    baseURL: "http://localhost:3000",
    headers: { "x-access-token": `Bearer ${token}` },
  })
}
