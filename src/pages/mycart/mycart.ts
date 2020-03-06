import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, Events } from 'ionic-angular';
import { ToastProvider } from '../../providers/services/toast';
import { ServicesProvider } from '../../providers/services/services';
import { DataHandler } from '../../Datahandler/datahandler';
import { LoaderService } from '../../providers/services/loader';
import { AlertService } from '../../providers/services/alert_service';

@IonicPage()
@Component({
  selector: 'page-mycart',
  templateUrl: 'mycart.html',
})
export class MycartPage {
  viewcart: any = [];
  mobile: any;
  total: number;
  pattern: boolean;
  isProduct: boolean = false;
  viewcartlength: any;
  cartCount: any;
  orderId: any;
  constructor(public navCtrl: NavController,public events: Events, public alert : AlertService, public loader:LoaderService, public toast : ToastProvider,public serviceHandler : ServicesProvider,
    public alertCtrl: AlertController, public navParams: NavParams,public dataHandler :DataHandler) {
      this.dataHandler.storage.get("mobile").then(mobile => {
        this.mobile = mobile;
        this.viewCart();
      })
  }

  ionViewDidLoad() {

  }
  calculateTotalAmount() {
    this.total = 0;
    this.viewcart.forEach(product => {
    this.total += parseFloat(product.price) * parseFloat(product.qty); 
  });
}


  getqty(product) {
    var numpattern = new RegExp("^[1-9][0-9]*$");
    this.pattern = numpattern.test(product.qty);
   if(this.pattern != false){
    let data = {
      userId:product.sku,
      sku:product.sku,
      mobile: this.mobile,
      name:product.name,
      qty:product.qty,
      price:product.price,
      image:product.image,
      wholesaler: product.wholesaler
  }
    this.serviceHandler.Add_To_Cart(data).then(val =>{
      this.loader.show();
      this.viewCart();
      this.calculateTotalAmount();
      this.loader.hide();
    })
   }else{
    this.toast.show('Please enter valid quantity ')
   }
}  

  removecart(cart){
    this.alert.showConfirm("Confirm Remove","Are you sure you want to remove this item from cart?","No","Yes")
    .then(status => {
      if (status) {
        this.serviceHandler.Remove_Cart(cart._id).then(val =>{
          // if(val['result'] != 402){
            this.toast.show('Product is removed from your cart')
            this.viewCart();
            this.calculateTotalAmount();
          // }
        })
      }
    });
    this.viewCart();
  }

  viewCart(){
    this.serviceHandler.View_Cart(this.mobile).then(value =>{
      if(value['code'] == 200){
        this.viewcart = value['message'];
        this.viewcartlength =  value['message'].length;
        this.cartCount = this.viewcartlength;
        this.events.publish("productCount:addCount", this.cartCount, true);  
        this.calculateTotalAmount();
        this.isProduct = true;
      }else{
        if(value['code'] == 402){
          this.cartCount = 0;
          this.viewcart = []
          this.events.publish("productCount:addCount", this.cartCount, true);
          this.isProduct = false;
        }else{

        }
       
      }
    })
  }
  proceedCheckout(){
    //adding grand total - bug - 4022 - Mythreyi
    let data = {
      userId:this.mobile,
      mobile:this.mobile,
      grandTotal:this.total,
      order: this.viewcart
    }
    
    this.serviceHandler.Place_Order(data).then(val =>{
      if(val['code']== 200){
        this.orderId = val['orderId'];
        this.navCtrl.push('ThankyouPage',{orderID : this.orderId })
      }else{

      }
    })
    
  }
}
