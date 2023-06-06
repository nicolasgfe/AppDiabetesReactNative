export interface NutritionEntryDto {
    title: String;
    description: String;
}

export interface NutritionDto extends NutritionEntryDto {
    id: String;
}