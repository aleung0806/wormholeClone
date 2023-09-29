import axios from 'axios'

const api  = axios.create()

export const uploadFile = async (formData) => {
  console.log('uploading file')
  const response = await api.post('/upload', formData)
  return response.data
}

export const fetchFileInfo = async (key) => {
  console.log('fetching fileInfo')
  const response = await api.get(`/info/${key}`)
  return response.data
}

export const downloadFile = async (key) => {
  console.log('downloading file')
  const response = await api.get(`/file/${key}`, {responseType: 'blob'})
  return response.data
}