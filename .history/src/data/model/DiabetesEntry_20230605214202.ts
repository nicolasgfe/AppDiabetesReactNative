import Realm from 'realm';

class DiabetesEntry extends Realm.Object<>



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
