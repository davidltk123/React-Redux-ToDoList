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

export const setComplete = (id, complete) => {
    return api.put("/todos/"+ id, {complete});
};

export const updateLabel = (id, labels) => {
    return api.put("/todos/"+ id, {labels});
}
