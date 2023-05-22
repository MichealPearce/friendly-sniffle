import { ModelUUID, type ModelUUIDData } from '@michealpearce/typeorm-models'
import { Column, Entity } from 'typeorm'

export interface UserData extends ModelUUIDData {
	name: string
}

@Entity()
export class User extends ModelUUID<UserData> implements UserData {
	@Column('varchar')
	declare name: string
}
