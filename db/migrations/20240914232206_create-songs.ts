import type { Knex } from 'knex'

export async function up(knex: Knex): Promise<void> {
  await knex.schema.createTable('songs', (table) => {
    table.uuid('id').primary()
    table.string('title').notNullable()
    table.string('artist').notNullable()
  })
}

export async function down(knex: Knex): Promise<void> {
  await knex.schema.dropTable('songs')
}
