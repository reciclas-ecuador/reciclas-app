/* eslint-disable no-use-before-define */
// Api de prueba
export interface Data {
    albumId: number;
    id: number;
    title: string;
    url: string;
    thumbnailUrl: string;
}

// General
export interface Error {
    statusCode: number;
    error: string;
    message: string;
}

// User
export interface UserBody {
    email: string;
    ci: string;
    name: string;
    lastName: string;
    phone: string;
    status: string;
    province: string;
    city: string;
    address: string;
    createdAt: string;
    updatedAt: string;
}

export interface User {
    error: Error;
    body: UserBody;
}

// Collection Center
export interface CollectionCenterBody {
    address: string;
    name: string;
    hash: string;
    locationId: number;
    managerEmail: string;
}

export interface CollectionCenter {
    error: Error;
    body: CollectionCenterBody[];
}

// Graphql News

export interface NewsData {
    data: Datos;
    extensions: Extensions;
}

export interface Datos {
    eventos: Eventos;
}

export interface Eventos {
    edges: Edge[];
}

export interface Edge {
    node: EdgeNode;
}

export interface EdgeNode {
    id: string;
    nombre: string;
    descripcion: string;
    fechaInicio: string;
    fechaFin: string;
    imagen: Imagen;
    modalidad: string;
    lugar: string;
    author: Author;
}

export interface Author {
    node: AuthorNode;
}

export interface AuthorNode {
    name: string;
}

export interface Imagen {
    node: ImagenNode;
}

export interface ImagenNode {
    mediaItemUrl: string;
}

export interface Extensions {
    debug: Debug[];
}

export interface Debug {
    type: string;
    message: string;
}
