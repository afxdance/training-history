export interface Attachment {
    url: string
    [x: string]: any
}

export interface PersonPosition {
    // Airtable fields
    id: string
    createdTime: string

    // Custom columns
    picture: Attachment[]
    personIds: string[]
    groupIds: string[]
    positionTitle: string
    sortKey: string
    [x: string]: any
}

export interface Person {
    createdTime: string
    id: string
    name: string
    positionIds: string[]
    "#positionIds": number
}

export interface Team {
    // Airtable fields
    id: string
    createdTime: string

    // Custom columns
    type: string
    name: string
    positionIds: string[] 
    teamPicture: Attachment[] 
    videoUrl?: string 
    teamSemesterId: string[] 
    level: string
}

export interface Board {
    id: string
    createdTime: string
    name: string
    positionIds: string[]
    type: string
    boardSemesterId: string[]
}