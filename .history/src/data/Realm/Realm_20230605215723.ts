import DiabetesEntry from "../model/DiabetesEntry";
import ExerciseEntry from "../model/ExerciseEntry";
import NutritonEntry from "../model/NutritonEntry";

const realm = new Realm({
  schema: [DiabetesEntry, ExerciseEntry, NutritonEntry],
  schemaVersion: 1,
  
})