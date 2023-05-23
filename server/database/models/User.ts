import { ModelUUID, type ModelUUIDData } from '@michealpearce/typeorm-models'
import { Column, CreateDateColumn, Entity } from 'typeorm'

export interface UserData extends ModelUUIDData {
	firstName: string
	LastName: string
	password: string
	email: string
	accountCreationDate: Date
}

@Entity()
export class User extends ModelUUID<UserData> implements UserData {
	@Column('varchar')
	declare firstName: string

	@Column('varchar')
	declare LastName: string

	@Column('varchar')
	declare password: string

	@Column({ unique: true })
	declare email: string

	@CreateDateColumn()
	declare accountCreationDate: Date
}
