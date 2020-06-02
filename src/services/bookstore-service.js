
export default class BookstoreService {
    
    data = [
        { 
            id: 1,
            title: 'Production-ready Microservices',
            author: 'Susan J. Fowler',
            price: 30,
            coverImage: 'https://cv02.twirpx.net/2111/2111167.jpg?t=20161219031735'
        },
        { 
            id: 2,
            title: 'Release It!',
            author: 'Michael T. Nygard',
            price: 45,
            coverImage: 'https://images-na.ssl-images-amazon.com/images/I/81c+o9-DetL.jpg'
        }
    ]
    getBooks() {
        return new Promise( (resolve, reject) => {
            setTimeout( () => {
                if (Math.random() > 0.95){
                 reject(new Error('Blya'))   
                } else{
                  resolve(this.data);    
                }          
                          
            }, 700)
        })
    }
}