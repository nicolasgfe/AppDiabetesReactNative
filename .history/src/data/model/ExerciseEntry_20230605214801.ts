import Realm from 'realm';

class ExerciseEntry extends Realm.Object<ExerciseEntry> {
  id!: Realm.BSON.UUID;
  title!: string;
  description!: string;

  static schemaName = "ExerciseEntry"

  static schema = {
    name: ExerciseEntry.schemaName,
    properties: {
      id: 'int',
      level: 'int',
      date: 'date',
    },
    primaryKey: 'id',
  };
}



export default DiabetesEntry;
