import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatefrontComponent } from './FrontOffice/templatefront/templatefront.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { LoginComponent } from './FrontOffice/user/login/login.component';
import { AboutpageComponent } from './FrontOffice/aboutpage/aboutpage.component';
import { ProductsComponent } from './FrontOffice/Shop/products/products.component';
import { ClaimfrontComponent } from './FrontOffice/claimfront/claimfront.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { ListuserComponent } from './backOffice/user/listuser/listuser.component';
import { UpdateuserComponent } from './FrontOffice/user/updateuser/updateuser.component';
import { ErrornotfontComponent } from './FrontOffice/errornotfont/errornotfont.component';
import { DetailsproductComponent } from './FrontOffice/Shop/detailsproduct/detailsproduct.component';
import { ListeFavorisComponent } from './FrontOffice/Shop/liste-favoris/liste-favoris.component';
import { AddproductComponent } from './backOffice/shopAdmin/addproduct/addproduct.component';
import { ModifyproductComponent } from './backOffice/shopAdmin/modifyproduct/modifyproduct.component';
import { ListproductsComponent } from './backOffice/shopAdmin/listproducts/listproducts.component';
import { AddDeliveryComponent } from './backOffice/Delivery-admin/add-deliveryMen/add-delivery.component';
import { DeliverysmenComponent } from './backOffice/Delivery-admin/deliverysmen/deliverysmen.component';
import { DeliverysComponent } from './backOffice/Delivery-admin/deliverys/deliverys.component';
import { ModifDeliveryComponent } from './backOffice/Delivery-admin/modif-delivery/modif-delivery.component';

const routes: Routes = [
  
{
  path:'',
  component:TemplatefrontComponent, pathMatch: 'full'
 
},
  
  {
  path:'front',
  component:TemplatefrontComponent,
  children:[
    {
      path:'about',
      component:AboutpageComponent
    },
    {
      path:'home',
      component:HomepagefrontComponent
    },
    {
      path:'login',
      component:LoginComponent
    }
    ,
    {
      path:'shop',
      component:ProductsComponent
    }
    ,
    {
      path:'detailproduct/:id',
      component:DetailsproductComponent
    }
    ,
    {
      path:'favorisproducts',
      component:ListeFavorisComponent
    },
    {
      path:'claim',
      component:ClaimfrontComponent
    },
    {
      path:'profile',
      component:UpdateuserComponent
    },
    {
      path:'error',
      component:ErrornotfontComponent
    }
  ]

},
{
  path:'admin',
  component:AllTemplateAdminComponent,
  children:[
    {
      path:'listeusers',
      component:ListuserComponent
    },
      
    {
      path:'addproduct',
      component:AddproductComponent
    },
    {
      path:'modifyproduct/:id',
      component:ModifyproductComponent
    },
    {
      path:'listproducts',
      component:ListproductsComponent
    },
    {
      path:'adddelivery',
      component:AddDeliveryComponent
    },
    {
      path:'deliverysmen',
      component:DeliverysmenComponent
    },
    {
      path:'deliverys',
      component:DeliverysComponent
    },
    {
      path:'modifDelivery/:id',
      component:ModifDeliveryComponent
    }
    


  ]

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
