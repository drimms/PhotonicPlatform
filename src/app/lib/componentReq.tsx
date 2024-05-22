import { Pool } from "pg";

const sql = new Pool({
    user: 'postgres', 
    host: '127.0.0.1',
    port: 5432,
    database: 'sibsutisdb'
});


export async function getCourse() {
    try {
        const query = 'SELECT * FROM public."Disciplines"';
        const {rows}  = await sql.query(query);
        return rows
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getLabs(course:string) {
    try {
        const query = 'SELECT * FROM public."Labs" WHERE course=$1';
        const {rows}  = await sql.query(query, [course]);
        return rows
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getLabContent(lab: string) {
    try {
        const query = 'SELECT * FROM public."UploadPDFs" WHERE idlabs=$1';
        const {rows}  = await sql.query(query, [lab]);
        return rows
    } catch (e) {
        console.error(e);
        return [];
    }
}

export async function getLabQuestion(lab: string) {
    try {
        const query = 'SELECT * FROM public."Questions" WHERE idlabs=$1';
        const {rows}  = await sql.query(query, ['Пассивные оптические компоненты']);
        return rows
    } catch (e) {
        console.error(e);
        return [];
    }
}