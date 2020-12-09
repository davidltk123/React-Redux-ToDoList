import api from "./api";

export const getToDoList = () => {
    return api.get("/todos");
};

export const addNewToDo = (content) => {
    return api.post("/todos", { content });
};