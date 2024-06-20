export interface Rider {
    id: number;
    name: string;
    birthDate: string;
    mountainPoints: number;
    sprintPoints: number;
    totalTime: number;
    teamId: number;
}

export interface Team {
    id: number;
    name: string;
    riders: Rider[];
}
