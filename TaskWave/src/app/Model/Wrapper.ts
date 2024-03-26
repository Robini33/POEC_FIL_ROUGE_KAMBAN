import { TaskCard } from "./TaskCard"

export interface Wrapper {
    id: number;
    title: string;
    projectId: number;
    cards: TaskCard[];
}