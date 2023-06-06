export interface BloodSugarLevelDto {
    value: Number;
    date: Date;
}

export interface BloodSugarDto extends BloodSugarLevelDto {
    id: String;
}