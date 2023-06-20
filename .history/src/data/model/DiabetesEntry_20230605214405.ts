import Realm from 'realm';

class DiabetesEntry extends Realm.Object<DiabetesEntry> {
  id!: Realm.BSON.UUID;
  level!: number;
  date!: Date;
}

static schemaName = "DiabetesEntry"



static schema = {
  name: DiabetesEntry.s
  properties: {
    id: 'int',
    level: 'int',
    date: 'date',
  },
  primaryKey: 'id',
};

const realm = new Realm({ schema: [GlucoseSchema] });

export default realm;
