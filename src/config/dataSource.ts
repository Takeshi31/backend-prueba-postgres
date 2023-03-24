import { DataSource } from 'typeorm'
import Text from './entities/text'

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres',
  database: 'postgres',
  synchronize: true,
  logging: true,
  entities: [Text]
})
