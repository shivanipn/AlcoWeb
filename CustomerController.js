class CustomerController{
    static Home = async(req,res)=>{
        try{
            res.render('Home')

        }catch(err){
            console.log(err);
        }
    }
    static Header = async(req,res)=>{
        try{
            res.render('Header')

        }catch(err){
            console.log(err);
        }
    }
    static Slider = async(req,res)=>{
        try{
            res.render('Sliders')

        }catch(err){
            console.log(err);
        }
    }
    static Our_Brand = async(req,res)=>{
        try{
            res.render('OurBrands')

        }catch(err){
            console.log(err)

        }
        
    }
    static Login = async(req,res)=>{
        try{
            res.render('Login')

        }catch(err){
            console.log(err)

        }
        
    }
    static More = async(req,res)=>{
        try{
            res.render('More')

        }catch(err){
            console.log(err)

        }
        
    }
    
}


module.exports = CustomerController