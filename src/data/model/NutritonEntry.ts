import Realm from 'realm';

class NutritonEntry extends Realm.Object<NutritonEntry> {
  id!: Realm.BSON.UUID;
  title!: string;
  description!: string;

  static schemaName = "NutritonEntry"

  static schema = {
    name: NutritonEntry.schemaName,
    properties: {
      id: 'int',
      title: 'string',
      description: 'string',
    },
    primaryKey: 'id',
  };
}

export default NutritonEntry;
