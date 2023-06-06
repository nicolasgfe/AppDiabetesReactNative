import Realm from "realm";

class NutritionEntry extends Realm.Object<NutritionEntry> {
    id!: Realm.BSON.UUID;
    title!: string;
    description!: string;

    static schemaName = 'NutritionEntry'

    static schema = {
        name: NutritionEntry.schemaName,
        properties: {
            id: 'uuid',
            title: 'string',
            description: 'string',
        },
        primaryKey: 'id',
    };
}

export default NutritionEntry;