export const loadState = ()=>{
  try {
    const serializedState = localStorage.getItem('Cart')
    if(!serializedState)
    {
      return undefined

    }
  return JSON.parse(serializedState)
    
  } catch (err) {
    console.warn('failer', err);
    return undefined
    
  }
};


export const saveState = ()=>{
  try {


    localStorage.setItem('Cart', JSON.stringify()) //Browsers only store strings in localStorage.
    
  } catch (err) {
    console.warn('failed', err)
    return undefined
    
  }

};