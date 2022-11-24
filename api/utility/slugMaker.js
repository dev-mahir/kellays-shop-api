



// create slug

export const createSlug = (name) => { 
    const slug = name.toLowerCase().split(" ").join("_");;
    return slug;
}
