import { client } from "..";
/*
 * Function should insert a new todo for this user
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function createTodo(userId: number, title: string, description: string) {
    try {
        // Use RETURNING to get the inserted row
        const insertQuery = `
            INSERT INTO todos (user_id, title, description)
            VALUES ($1, $2, $3)
            RETURNING id, title, description, done;
        `;
        const values = [userId, title, description];
        const result = await client.query(insertQuery, values);

        if (result.rows.length > 0) {
            console.log(result.rows[0]);
            return result.rows[0]; // Return the newly inserted todo object
        } else {
            console.log("Todo creation failed");
            return null;
        }
    } catch (err) {
        console.error("There was an error in creating the todo:", err);
        throw err;
    }
}
/*
 * mark done as true for this specific todo.
 * Should return a todo object
 * {
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }
 */
export async function updateTodo(todoId: number) {
    try {
        const updateQuery = `UPDATE todos SET done = true WHERE id = $1;`
        const value = [todoId]
        await client.query(updateQuery, value)
        const getQuery = `SELECT title,description,done,id FROM todos WHERE id = $1;`
        const result = await client.query(getQuery, value)
        if (result.rows.length > 0) {
            console.log(result.rows[0])
            return result.rows[0]
        }
        else {
            console.log("no todo was found with this id")
        }
    }
    catch (err) {
        console.log("no todo was found with this id ", err)
    }
}

/*
 *  Get all the todos of a given user
 * Should return an array of todos
 * [{
 *  title: string,
 *  description: string,
 *  done: boolean,
 *  id: number
 * }]
 */
export async function getTodos(userId: number) {
    try {
        const getQuery = `SELECT title,description,done,id,user_id FROM todos WHERE user_id = $1`
        const value = [userId]
        const res = await client.query(getQuery, value)
        if (res.rows.length > 0) {
            console.log(res.rows)
            return res.rows
        }
        else {
            console.log("there is no todo for user with this userId");
            return [];
        }
    }
    catch (err) {
        console.log("there is no todo for user with this userId ");
        throw err;
    }
}