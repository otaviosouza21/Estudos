export type Curso = {
    id: number;
    slug: string;
    nome:string;
    descricao: string;
    total_aulas: number;
    total_horas: number;
    error?: boolean
}

export type CursoTypes = Pick<Curso, 'id' | 'nome' | 'slug' | 'descricao'>

export type Aula = CursoTypes & {
    curdo_id: number;
    tempo: number;
    ordem: number;
}

export async function getCursos() {
    const response = await fetch('https://api.origamid.online/cursos')
    const data = await response.json() as Curso[]
    return data
}

export async function getCurso(curso: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}`)
    const data = await response.json() as Curso & {aulas: Aula[]}
    return data
}

export async function getAula(curso: string,aula: string) {
    const response = await fetch(`https://api.origamid.online/cursos/${curso}/${aula}`)
    const data = await response.json() as Aula
    return data
}