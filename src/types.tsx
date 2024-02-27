export interface Props  {
    children: React.ReactNode
}

export interface Character  {
    id:number;
    name:string;
    status:string;
    gender: string;
    species: string;
    type: string;
    image: string;
}

export interface FlexProps {
    direction?: string;
    justify?: string;
    align?: string;
    margin?: string;
    wrap?: string;
    gap?: string;
    children: React.ReactNode;
}