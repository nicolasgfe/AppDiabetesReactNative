import { RegisterDiabetesEntryDto } from "../../domain"
import { realm } from "../Realm"
import DiabetesEntry from "../model/DiabetesEntry"

export const save = (entry: RegisterDiabetesEntryDto) => {
  realm.write(() => {
    realm.create(
      DiabetesEntry.schemaName,
      {
        id: new Realm.BSON.UUID(),
        ...entry
      }
    )
  })
}

export const findAll = (): RegisterDiabetesEntryDto[] => {
  const entries = realm.objects<DiabetesEntry>(DiabetesEntry.schemaName)
  return entries.map(entry => ({
    id: entry.id.toHexString(),
    level: 
  }))
}