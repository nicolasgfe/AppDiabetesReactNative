import Realm from 'realm';

class ExerciseEntry extends Realm.Object<ExerciseEntry> {
  id!: Realm.BSON.UUID;
  title!: string;
  description!: Date;

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
