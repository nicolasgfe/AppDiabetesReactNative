// Modelo falso para teste

// Quando o banco ficar pronto, deletar esse modelo
// Usar um modelo realm apropriado

class ExerciseHintEntry {
    private id: number;
    private title: string;
    private description: string;

    constructor(id: number, title: string, description: string) {
        this.id = id;
        this.title = title;
        this.description = description;
    }

    get Id(): number {
        return this.id;
    }

    get Title(): string {
        return this.title;
    }

    get Description(): string {
        return this.description;
    }
}

export default ExerciseHintEntry;
