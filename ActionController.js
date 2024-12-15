const cloudinary = require("cloudinary").v2;
const ActionModel = require("../Model/ActionModel");
const LoginModel = require("../Model/LoginModel")

cloudinary.config({
  cloud_name: "dn7dkceoz",
  api_key: "227587214662395",
  api_secret: "lGVPmZScYl0KZGED9cJ4nhkqVyw",
});

class ActionController {
  static Register = async (req, res) => {
    try {
      res.render("Register");
    } catch (err) {
      console.log(err);
    }
  };

static Register_Page = async(req,res)=>{
    const imagefile = req.files.image
    const image_upload = await cloudinary.uploader.upload(imagefile.tempFilePath,{
        folder: "AlcoWeb",
        width:400,
    })
    try{
        // const { name,email,password,date,image} = req.body;
        // console.log(req.body)
        const data = new ActionModel({
            Name:req.body.name,
            Email:req.body.email,
            Password:req.body.password,
            Date:req.body.date,
            image: {
                public_id: image_upload.public_id,
                url:image_upload.secure_url,
            },
        })
        await  data.save()
        return res.redirect('/display')

    }catch(err){
        console.log(err)
    }
}
static post_log = async(req,res)=>{
  try{
    console.log(req.body)
    const result = await LoginModel({
      Contact:req.body.mobile
    })
    await result.save()
    res.render('Login')
  }catch(err){
    console.log(err)
  }
  
}
    
  static Confirmation = async (req, res) => {
    try {
      const data11 = await ActionModel.findById(req.params.id)
      res.render('ConfirmPage',{editdata:data11})
    
    } catch (err) {
      console.log(err);
    }
  };
  static Confirm_Page = async (req, res) => {
    // const Avtar = req.files.image;
    // const image_upload = await cloudinary.uploader.upload(Avtar.tempFilePath, {
    //   folder: "AlcoWeb",
    //   width: 400,
    // });

    try {
      const { name, email, password, date } = req.body;
      const result = await ActionModel({
        Name: name,
        Email: email,
        Password: password,
        Date: date,
        // image: {
        //   public_id: image_upload.public_id,
        //   url: image_upload.secure_url,
        // },
      });
      await result.save();
     return res.redirect("/display");
    } catch (err) {
      console.log(err);
    }
  };
  static Display = async (req, res) => {
    try {
        const data = await ActionModel.find()
        console.log(data)
      return res.render("Display",{data1:data});
    } catch (err) {
      console.log(err);
    }
  };
  static Delete_Data = async (req, res) => {
    try {
      const data = await ActionModel.findByIdAndDelete(req.params.id)
        
      return res.redirect("/display");
    } catch (err) {
      console.log(err);
    }
  };
  static View_Data = async (req, res) => {
    try {
      const data = await ActionModel.findById(req.params.id)
        
      return res.render("DataView",{showdata:data});
    } catch (err) {
      console.log(err);
    }
  };
  static Edit_Data = async(req,res)=>{
    try{
      const data11 = await ActionModel.findById(req.params.id)
      res.render('Edit',{editdata:data11})

    }catch(err){
      console.log(err)
    }
  }
  static Upadate_Data = async(req,res)=>{
    const user = await ActionModel.findById(req.params.id)
    const imageId = user.image.public_id
    // console.log(imageId)
    

    try{
      const e_data = await ActionModel.findByIdAndUpdate(req.params.id,{
        Name:req.body.name,
        Email:req.body.email,
        Password:req.body.password,
        Date:req.body.date,

      })
     
       await e_data.save()
      res.redirect('/display')

      //   console.log(req.body)
      //  console.log(req.params.id)
    }catch(err){
      console.log(err)
    }
  }
  static Logout = async(req,res)=>{
    try{
      res.clearCookie('token')
      res.redirect('/login')

    }catch(err){
      console.log(err)
    }
  }
}

module.exports = ActionController;
