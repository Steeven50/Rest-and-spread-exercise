// Remove a random element from the items array and return a new array without that item.
const removeRandom = items => {
    const idx = Math.floor(Math.random() * items.length);
    return [...items.slice(0, idx), ...items.slice(idx + 1)];
  };
  
  // Return a new array with every item in array1 and array2.
  const extend = (array1, array2) => {
    return [...array1, ...array2];
  };
  
  // Return a new object with all the keys and values from obj and a new key/value pair.
  const addKeyVal = (obj, key, val) => {
    return { ...obj, [key]: val };
  };
  
  // Return a new object with a key removed.
  const removeKey = (obj, key) => {
    const { [key]: omitted, ...rest } = obj;
    return rest;
  };
  
  // Combine two objects and return a new object.
  const combine = (obj1, obj2) => {
    return { ...obj1, ...obj2 };
  };
  
  // Return a new object with a modified key and value.
  const update = (obj, key, val) => {
    return { ...obj, [key]: val };
  };
  