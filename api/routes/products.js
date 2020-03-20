const express = require('express');

 const router = express.Router();

router.get('/',(req,res,next)=>{
    res.status(200).json({
        message: "fetching all products"
    })
})


router.post('/',(req,res,next)=>{
    const data = {
        prodcutName: req.body.name,
        productCategory: req.body.category
    }
    res.status(200).json({
        message: "adding new products",
        productDetails: data
    })
})



router.get('/:productId',(req,res,next)=>{
    console.log(req.params.productId);
    const id = req.params.productId;
    if(id == 'special'){
        res.status(200).json({
            message: "special id is passed",
            productId: id
        });
    }else{
        res.status(200).json({
            message: "id passed",
            productId: id
        });

    }
    
})




router.patch('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: "product updtaed",
        productId: id
    })
    
});


router.delete('/:productId',(req,res,next)=>{
    const id = req.params.productId;
    res.status(200).json({
        message: "product deleted",
        productId: id
    })
    
})



module.exports = router;