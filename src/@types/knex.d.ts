// eslint-disable-next-line
import { Knex } from "knex"

declare module 'knex/types/tables' {
  export interface Tables {
    users: {
      id: string

      name: string

      email: string

      session_id: string

      created_at: string

      updated_at: string

      password: string
    }
    songs: {
      id: string

      title: string

      artist: string
    }
  }
}
