interface IQuestionDTO {
  id: string
  user_id: string
  question: string
  created_at: Date
  updated_at?: Date
  deleted_at?: Date
}

export type { IQuestionDTO }
