export const loadState = ()=>{
  try {
    const serializedState = JSON.parse(localStorage.getItem('Cart'))
    if(!serializedState)
    {
      return undefined

    }
  
    
  } catch (err) {
    console.warn('failer', err);
    return undefined
    
  }
};


export const saveState = (state)=>{
  try {


    localStorage.setItem('Cart', JSON.stringify(state)) //Browsers only store strings in localStorage.
    
  } catch (err) {
    console.warn('failed', err)
    
  }

};