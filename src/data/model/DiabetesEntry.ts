import Realm from 'realm';

class DiabetesEntry extends Realm.Object<DiabetesEntry> {
  id!: Realm.BSON.UUID;
  level!: number;
  date!: Date;

  static schemaName = "DiabetesEntry"

  static schema = {
    name: DiabetesEntry.schemaName,
    properties: {
      id: 'int',
      level: 'int',
      date: 'date',
    },
    primaryKey: 'id',
  };
}



export default DiabetesEntry;
