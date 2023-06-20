import Realm from 'realm';

class DiabetesEntry extends Realm.Object<DiabetesEntry> {
  id!: Realm
}



const GlucoseSchema = {
  name: 'Glucose',
  properties: {
    id: 'int',
    level: 'int',
    date: 'date',
  },
  primaryKey: 'id',
};

const realm = new Realm({ schema: [GlucoseSchema] });

export default realm;