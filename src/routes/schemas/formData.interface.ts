export interface IFormData {
  id: string
  question: string
  answer: string
  title: string
  description: string
  createdAt: string
  updatedAt: string
  status: string
}

export interface ICountedFormData {
  total: number
  formData: IFormData[]
}
