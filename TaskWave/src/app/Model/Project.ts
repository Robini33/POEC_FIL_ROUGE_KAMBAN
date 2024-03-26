import { Wrapper } from './Wrapper';
import { User } from './User';
export interface Project {
    id: number | null | undefined;
    title: string | null | undefined;
    description: string | null | undefined;
    background: string | null | undefined;
    wrappers: Wrapper[] | null | undefined;
    users: User[] | null | undefined;
}