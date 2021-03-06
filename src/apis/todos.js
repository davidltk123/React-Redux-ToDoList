import api from "./api";

export const getToDoList = () => {
    return api.get("/todos");
};

export const addNewToDo = (content) => {
    return api.post("/todos", { content });
};

export const deleteTodo = (id) => {
    return api.delete("/todos/"+ id);
};

export const updateToDo = (id, todo) => {
    return api.put("/todos/"+ id, todo);
};



