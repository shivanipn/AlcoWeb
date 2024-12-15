const express = require('express')
const CustomerController = require('../Controllers/CustomerController')
const ActionController = require('../Controllers/ActionController')
const router = express.Router()


    //    CustomerController
router.get('/',CustomerController.Home)
router.get('/',CustomerController.Header)
router.get('/',CustomerController.Slider)
router.get('/our_brand',CustomerController.Our_Brand)
router.get('/login',CustomerController.Login)
router.get('/more',CustomerController.More)


        //  ActionController

router.get('/register',ActionController.Register)
router.post('/con_page',ActionController.Register_Page)
router.get('/confirm',ActionController.Confirmation)
router.post('/confirm_page',ActionController.Confirm_Page)
router.get('/display',ActionController.Display)
 router.get('/delete/:id',ActionController.Delete_Data)
 router.get('/viewdata/:id',ActionController.View_Data)
 router.get('/editdata/:id',ActionController.Edit_Data)
 router.post('/edit_page/:id',ActionController.Upadate_Data)
 router.get('/logout',ActionController.Logout)


    //    LoginController

    router.post('/post_log',ActionController.post_log)



module.exports = router