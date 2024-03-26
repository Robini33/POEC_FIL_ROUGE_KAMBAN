export interface ProjectDTO {
    id: number;
    title: string;
    description: string;
    background: string;
    userIds: number[];
    wrappersIds: number[];
    // createdAt: Date;
}