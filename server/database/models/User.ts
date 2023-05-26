import { ModelUUID, type ModelUUIDData } from '@michealpearce/typeorm-models'
import { Column, CreateDateColumn, Entity } from 'typeorm'

export interface UserData extends ModelUUIDData {
	firstName: string
	LastName: string
	password: string
	email: string
}

@Entity()
export class User extends ModelUUID<UserData> implements UserData {
	@Column('varchar')
	declare firstName: string

	@Column('varchar')
	declare LastName: string

	@Column({ select: false })
	declare password: string

	@Column({ unique: true, type: 'varchar' })
	declare email: string
}
