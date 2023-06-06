export interface ExerciseEntryDto{
    name: String;
    description: String;
}

export interface ExerciseDto extends ExerciseEntryDto {
    id: String;
} 