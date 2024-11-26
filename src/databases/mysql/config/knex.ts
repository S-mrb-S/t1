import knex from 'knex';

import { config } from '#config/env_get';

export type DatabaseConfig = {
  readonly client: string;
  readonly connection: {
    readonly host: string;
    readonly user: string;
    readonly password: string;
  } & ( { readonly database: string } | { readonly database?: undefined } );
};

const knexConfig: DatabaseConfig = {
    client: 'mysql2',
    connection: {
      host: config.mysql_sv,
      user: config.mysql_user,
      password: config.mysql_password,
    },
};

const knexConfigUse: DatabaseConfig = {
  client: 'mysql2',
  connection: {
    host: config.mysql_sv,
    user: config.mysql_user,
    password: config.mysql_password,
    database: config.database_name
  },
};

/**
 * Mysql connection
 */
export let mdb = knex(knexConfig);

export function initializeMdb() { // config: knex.Knex.Config
  mdb = knex(knexConfigUse);
}

export default knexConfig;
