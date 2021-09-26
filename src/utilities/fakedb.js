// use local storage as your db for now
const addToDb = id => {
  const exists = getDb();
  let selection_cart = {};
  if (!exists) {
    selection_cart[id] = 1;
  }
  else {
    selection_cart = JSON.parse(exists);
    if (selection_cart[id]) {
      const newCount = selection_cart[id] + 1;
      selection_cart[id] = newCount;
    }
    else {
      selection_cart[id] = 1;
    }
  }
  updateDb(selection_cart);
}

const getDb = () => localStorage.getItem('selection_cart');
const updateDb = cart => {
  localStorage.setItem('selection_cart', JSON.stringify(cart));
}

const removeFromDb = id => {
  const exists = getDb();
  if (!exists) {

  }
  else {
    const selection_cart = JSON.parse(exists);
    delete selection_cart[id];
    updateDb(selection_cart);
  }
}

const getStoredCart = () => {
  const exists = getDb();
  return exists ? JSON.parse(exists) : {};
}

const clearTheCart = () => {
  localStorage.removeItem('selection_cart');
}

export { addToDb, removeFromDb as deleteFromDb, clearTheCart, getStoredCart }
