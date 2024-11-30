import Product from "../models/product.js"

export function getProduct(req,res){

    Product.find().then(
        (productList)=>{
            res.json({
                list: productList
            })
                    
        }).catch(
            (err)=>{
                res.json({
                    message: "Error"
                })
            }
        )
    }

export function createProduct(req,res){

    const product = new Product(req.body)

    product.save().then(
        ()=>{
            res.json({
                message: "Product Created"
            })
        }
    ).catch(()=>{
        res.json ({
            message: "Student Not Created"
        })
    })
}   

export function deleteProduct(req,res){
    Product.deleteOne({name: req.params.name}).then(
        ()=>{
            res.json({
                message: "Product deleted successfully"
        })
        }
    )
}

export function getProductByName(req,res){
    const name = req.params.name;

    Product.find({name : name}).then(
        (productList)=>{

            if(productList.length== 0){
                res.json ({
                    message: "Product not found"
                })
            }else{
            res.json({
                list : productList
            })
        }
    }
    ).catch(()=>{
        res.json({
            message: "Error"
        })
        }
    )
}

        
