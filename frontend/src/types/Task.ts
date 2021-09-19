export type taskList = [
    {
        id: number,
        title: string,
        description?: string,
        status: status,
    }
]

export enum status {
    PENDENTE = 'PENDENTE',
    FINALIZADO = 'FINALIZADO',
}