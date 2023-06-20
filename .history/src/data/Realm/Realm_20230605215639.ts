import DiabetesEntry from "../model/DiabetesEntry";
import ExerciseEntry from "../model/ExerciseEntry";

const realm = new Realm({
  schema: [DiabetesEntry, ExerciseEntry],
})