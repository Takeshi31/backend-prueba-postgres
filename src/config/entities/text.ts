import {
  BaseEntity,
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn
} from 'typeorm'

@Entity()
class Text extends BaseEntity {
  @PrimaryGeneratedColumn()
    id: number

  @Column()
    text: string

  @Column()
    date: string

  @Column({ default: true })
    active: boolean

  @CreateDateColumn({ default: new Date() })
    createdAt: Date

  @UpdateDateColumn({ default: new Date() })
    updatedAt: Date
}

export default Text
