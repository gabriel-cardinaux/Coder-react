const products = [
    {"id": 1, "name": "Book English Starter", "price": 20000, "category": "English", "img": '', "stock": 10, "description": ""},
    {"id": 2, "name": "Book Englsih Beginner", "price": 30000, "category": "English", "img": '', "stock": 10, "description":""},
    {"id": 3, "name": "Book English Advanced", "price": 35000, "category": "English", "img": '', "stock": 10, "description": ""},
    {"id": 4, "name": "Book French Starter", "price": 15000, "category": "French", "img": '', "stock": 5, "description": ""},
    {"id": 5, "name": "Book French Beginner", "price": 20000, "category": "French", "img": '', "stock": 30, "description": ""},
    {"id": 6, "name": "Book French Advanced", "price": 40000, "category": "French", "img": '', "stock": 20, "description": ""},
    {"id": 7, "name": "Book Portuguese Starter", "price": 10000, "category": "Portuguese", "img": '', "stock": 5, "description": ""},
    {"id": 8, "name": "Book Portuguese Beginner", "price": 15000, "category": "Portuguese", "img": '', "stock": 10, "description": ""},
    {"id": 9, "name": "Book Portuguese Advanced", "price": 30000, "category": "Portuguese", "img": '', "stock": 5, "description": ""}


]

export const getProducts = () => {
    return new Promise((resolve) =>{
        setTimeout(() => {
            resolve(products)
        }, 500)
    })
}

export const getProductByid = (productId) => {
    return new Promise((resolve)=> {
        setTimeout(() => {
            resolve(product.find(prod => prod.id === productId))
        }, 500)
    })
}