const getStoredCartList = () => {
    const storedListStr = localStorage.getItem('cart-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const getStoredwishtList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const getStoredCarttotalcost = () => {
    const storedListStr = localStorage.getItem('cost-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addTocartcost = (id,price) => {
    const storedList = getStoredCarttotalcost();
    const storedcartList = getStoredCartList()
    if (storedcartList.includes(id)) {
        alert("Already exist in the list");
    }
    else {
        storedList.push(price);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cost-list', storedListStr);
        totalcostcount();
    }
    
}

const totalcostcount = () => {

    const storedList = getStoredCarttotalcost();

    const sum = storedList.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

    return sum ;
}



const addTocartlist = (id,price) => {
    const storedList = getStoredCartList();
    const storedcostList = getStoredCarttotalcost();
    if (storedList.includes(id)) {
        alert("Already exist in the list");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('cart-list', storedListStr);
        storedcostList.push(price);
        const storedcostListStr = JSON.stringify(storedcostList);
        localStorage.setItem('cost-list', storedcostListStr)
    }
}

const getStoredwishList = () => {
    const storedListStr = localStorage.getItem('wish-list');
    if (storedListStr) {
        const storedList = JSON.parse(storedListStr);
        return storedList;
    }
    else {
        return [];
    }
}

const addTowishlist = (id) => {
    const storedList = getStoredwishList();
    if (storedList.includes(id)) {
        alert("Already exist in the list");
    }
    else {
        storedList.push(id);
        const storedListStr = JSON.stringify(storedList);
        localStorage.setItem('wish-list', storedListStr)
    }
}

const removefromcartlist = (itemIdToRemove,price) => {

    let items = JSON.parse(localStorage.getItem('cart-list')) || [];
    let costitems = JSON.parse(localStorage.getItem('cost-list')) || [];

    items.pop(itemIdToRemove);
    costitems.pop(price);

    const storedListStr = JSON.stringify(items);
    const storedcostListStr = JSON.stringify(costitems);
    
    location.reload();

    localStorage.setItem('cart-list', storedListStr);
    localStorage.setItem('cost-list', storedcostListStr);
    totalcostcount();

    location.reload();
}

const removefromwishlist = (itemIdToRemove) => {

    let items = JSON.parse(localStorage.getItem('wish-list')) || [];

    items.pop(itemIdToRemove);

    const storedListStr = JSON.stringify(items);
    
    location.reload();

    localStorage.setItem('wish-list', storedListStr)

    location.reload();
}

const removearry = () =>{
    
    localStorage.removeItem('cart-list');
    localStorage.removeItem('cost-list');
    totalcostcount();
    
}





export { addTocartlist, addTowishlist, getStoredCartList, getStoredwishList, removefromcartlist,getStoredwishtList,removefromwishlist , addTocartcost , totalcostcount,removearry}