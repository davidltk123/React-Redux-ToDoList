import api from "./api";    

export const getLabelList = () => {
    return api.get("/labels");
};

export const addNewLabel = (label) => {
    return api.post("/labels", label);
};

export const deleteLabel = (id) => {
    return api.delete("/labels/"+ id);
};

export const updateLabel = (id, label) => {
    return api.put("/labels/"+ id, label);
};