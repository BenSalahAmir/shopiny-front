import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TemplatefrontComponent } from './FrontOffice/templatefront/templatefront.component';
import { HomepagefrontComponent } from './FrontOffice/homepagefront/homepagefront.component';
import { LoginComponent } from './FrontOffice/user/login/login.component';
import { AboutpageComponent } from './FrontOffice/aboutpage/aboutpage.component';
import { ProductsComponent } from './FrontOffice/Shop/products/products.component';
import { ClaimfrontComponent } from './FrontOffice/claimfront/claimfront.component';

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
      path:'claim',
      component:ClaimfrontComponent
    }
  ]

}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})




export class AppRoutingModule { }
