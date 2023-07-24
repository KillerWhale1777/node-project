const fs = require('fs')
const path = require('path')


const p = path.join(path.dirname(process.mainModule.filename),'data','products.json');

const getProductFromFile = cb =>{
    fs.readFile(p,(err,fileContent)=>{
        if(err){
            cb([]);
        }
        cb(JSON.parse(fileContent));
    });
};
module.exports = class Products {
    constructor(t){
        this.title = t
    }


    save(){
    getProductFromFile(products =>{
        products.push(this);
        fs.writeFile(p,JSON.stringify(products) ,(err)=>{
            console.log(err);
        })   
    })
    }

    static fetchProduct(cb){
        getProductFromFile(cb);
    }
}