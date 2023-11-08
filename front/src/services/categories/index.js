
//Cambiar por el back
export const getAllCategories = async ()=>{
  const data = localStorage.getItem("categories");
  const categories = data ? JSON.parse(data) : null;
  return categories;
};
//Cambiar por el back

export const getCategoryById = async (id) =>{
  const categories = await getAllCategories();
  return categories.find(category => category.id === parseInt(id));
};

