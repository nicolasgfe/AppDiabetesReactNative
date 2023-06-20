import Realm from 'realm';

class DiabetesEntry extends Realm.Object<DiabetesEntry> {
  id!: Realm.BSON.UUID;
  level!: number;
  date!: Date;
}



export default realm;
