import { realm } from "../Realm"
import DiabetesEntry from "../model/DiabetesEntry"

export const save = (entry: RegisterDiabetesEntryDto) => {
  realm.write(() => {
    realm.create(
      DiabetesEntry.sche
    )
  })
}