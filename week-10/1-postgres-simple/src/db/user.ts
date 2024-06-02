import { client } from "..";

/*
 * Should insert into the users table
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function createUser(username: string, password: string, name: string) {
    try {
        const insertQuery = `INSERT INTO users (username, name, password) VALUES ($1,$2,$3);`
        const values = [username, name, password]
        await client.query(insertQuery, values)

        const getQuery = `SELECT username,password,name FROM users WHERE username = $1`
        const value = [username]
        const result = await client.query(getQuery, value)
        if (result.rows.length > 0) {
            console.log(result.rows[0])
            return result.rows[0];
        }
    }
    catch (err) {
        console.log("user not found", err)
    }
}

/*
 * Should return the User object
 * {
 *   username: string,
 *   password: string,
 *   name: string
 * }
 */
export async function getUser(userId: number) {
    try {
        const getQuery = `SELECT id,username,name FROM users WHERE id = $1`
        const values = [userId]
        const res = await client.query(getQuery, values)
        if (res.rows.length > 0) {
            console.log(res.rows)
            return res.rows[0]
        }
        else {
            console.log("user not found")
        }
    }
    catch (errr) {
        console.log("user not found", errr)
    }
}
