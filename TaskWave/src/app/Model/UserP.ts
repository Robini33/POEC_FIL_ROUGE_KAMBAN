import { Project } from "./Project"

export interface UserP {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    projects: Project[];
    // task: TaskCard[];
    // picture: string;
    
}