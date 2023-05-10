import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplatefrontComponent } from './FrontOffice/templatefront/templatefront.component';
import { FooterComponent } from './FrontOffice/footer/footer.component';
import { HeaderComponent } from './FrontOffice/header/header.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { LoginComponent } from './FrontOffice/user/login/login.component';
import { AboutpageComponent } from './FrontOffice/aboutpage/aboutpage.component';
import { ProductsComponent } from './FrontOffice/Shop/products/products.component';
import { ClaimfrontComponent } from './FrontOffice/claimfront/claimfront.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderAdminComponent } from './backOffice/header-admin/header-admin.component';
import { FooterAdminComponent } from './backOffice/footer-admin/footer-admin.component';
import { SideAdminComponent } from './backOffice/side-admin/side-admin.component';
import { BodyAdminComponent } from './backOffice/body-admin/body-admin.component';
import { AllTemplateAdminComponent } from './backOffice/all-template-admin/all-template-admin.component';
import { ListuserComponent } from './backOffice/user/listuser/listuser.component';
import { UpdateuserComponent } from './FrontOffice/user/updateuser/updateuser.component';
import { ErrornotfontComponent } from './FrontOffice/errornotfont/errornotfont.component';
import { DetailsproductComponent } from './FrontOffice/Shop/detailsproduct/detailsproduct.component';
import { RecommandedproductsComponent } from './FrontOffice/Shop/recommandedproducts/recommandedproducts.component';
import { QrCodeServiceComponent } from './FrontOffice/Shop/qr-code-service/qr-code-service.component';
import { ListeFavorisComponent } from './FrontOffice/Shop/liste-favoris/liste-favoris.component';
import { AddproductComponent } from './backOffice/shopAdmin/addproduct/addproduct.component';
import { ModifyproductComponent } from './backOffice/shopAdmin/modifyproduct/modifyproduct.component';
import { ListproductsComponent } from './backOffice/shopAdmin/listproducts/listproducts.component';
import { AddDeliveryComponent } from './backOffice/Delivery-admin/add-deliveryMen/add-delivery.component';
import { DeliverysmenComponent } from './backOffice/Delivery-admin/deliverysmen/deliverysmen.component';
import { DeliverysComponent } from './backOffice/Delivery-admin/deliverys/deliverys.component';
import { ModifDeliveryComponent } from './backOffice/Delivery-admin/modif-delivery/modif-delivery.component';
import { DashbordComponent } from './backOffice/Delivery-admin/dashbord/dashbord.component';
import { ToastrModule } from 'ngx-toastr';
import { ListebillComponent } from './backOffice/bill/listebill/listebill.component';
import { AddbillComponent } from './backOffice/bill/addbill/addbill.component';
import { UpdatebillComponent } from './backOffice/bill/updatebill/updatebill.component';
import { DetailsbillComponent } from './backOffice/bill/detailsbill/detailsbill.component';
import { AddClaimComponent } from './backOffice/Claim/add-claim/add-claim.component';
import { ListClaimComponent } from './backOffice/Claim/list-claim/list-claim.component';
import { DetailclaimComponent } from './backOffice/Claim/detailclaim/detailclaim.component';
import { DeleteClaimComponent } from './backOffice/Claim/delete-claim/delete-claim.component';
import { UpdatefactureamComponent } from './updatefactuream/updatefactuream.component';
import { AddPostFrontComponent } from './FrontOffice/forum/add-post-front/add-post-front.component';
import { ListForumFrontComponent } from './FrontOffice/forum/list-forum-front/list-forum-front.component';
import { PostDetailsComponent } from './FrontOffice/forum/post-details/post-details.component';
import { UpdatePostComponent } from './FrontOffice/forum/update-post/update-post.component';
import { FilterComponent } from './FrontOffice/forum/filter/filter.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderAdminComponent,
    FooterAdminComponent,
    SideAdminComponent,
    BodyAdminComponent,
    AllTemplateAdminComponent,
    TemplatefrontComponent,
    FooterComponent,
    HeaderComponent,
    HomepagefrontComponent,
    LoginComponent,
    AboutpageComponent,
    ProductsComponent,
    ClaimfrontComponent,
    ListuserComponent,
    UpdateuserComponent,
    ErrornotfontComponent,



    DetailsproductComponent,
    RecommandedproductsComponent,
    QrCodeServiceComponent,
    ListeFavorisComponent,
    AddproductComponent,
    ModifyproductComponent,
    ListproductsComponent,


    AddDeliveryComponent,
    DeliverysmenComponent,
    DeliverysComponent,
    ModifDeliveryComponent,
    DashbordComponent,


    ListebillComponent,
    AddbillComponent,
    UpdatebillComponent,
    DetailsbillComponent,


    
    AddClaimComponent,
    ListClaimComponent,
    DetailclaimComponent,
    DeleteClaimComponent,
    UpdatefactureamComponent,



    

    AddPostFrontComponent,
    ListForumFrontComponent,
    PostDetailsComponent,
    UpdatePostComponent,
    FilterComponent,



    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ToastrModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
