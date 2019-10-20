var storage={

  set(key,value){
    // console.log(localStorage);
    localStorage.setItem(key, JSON.stringify(value));
  },
  get(key){

    return JSON.parse(localStorage.getItem(key));
  },
  remove(key){
    localStorage.removeItem(key);
  }

}

export default storage;
