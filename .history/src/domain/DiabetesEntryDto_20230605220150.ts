export interface RegisterDiabetesEntryDto {
  level: number;
  date: Date;
}

export interface DiabetesEntryDto extends RegisterDiabetesEntryDto{
  id
}