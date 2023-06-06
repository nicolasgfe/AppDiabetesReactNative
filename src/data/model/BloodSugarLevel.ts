import Realm from "realm";

class BloodSugarLevel extends Realm.Object<BloodSugarLevel> {
    id!: Realm.BSON.UUID;
    value!: number;
    date!: Date;

    static Schemaname = 'BloodSugarLevel'

    static schema = {
        name: BloodSugarLevel.Schemaname,
        properties: {
            id: 'uuid',
            value: 'float',
            date: 'date',
        },
        primaryKey: 'id',
    };
}

export default BloodSugarLevel;

