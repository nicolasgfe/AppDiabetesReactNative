import Realm from "realm";
// import { entidades } from '../model';

const realm = new Realm({
    // schema: [entidades],
    schemaVersion: 1, 
});

export default realm;
