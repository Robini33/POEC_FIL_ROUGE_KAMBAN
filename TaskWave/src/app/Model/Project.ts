import { Wrapper } from './Wrapper';
import { UserP } from './UserP';

export interface Project {
    id: number;
    title: string;
    description: string;
    background: string;
    wrappers: Wrapper[];
    users: UserP[];
    // createdAt: Date;
}
