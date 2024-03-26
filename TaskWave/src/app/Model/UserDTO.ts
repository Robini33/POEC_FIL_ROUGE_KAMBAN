export interface UserDTO {
    id: number;
    email: string;
    firstname: string;
    lastname: string;
    password: string;
    projectsIDs: number[];
    // taskIDs: number[];
    // picture: string;
}