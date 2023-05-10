import { Component } from '@angular/core';
import { ShopServiceService } from 'src/app/service/shopService/shop-service.service';

@Component({
  selector: 'app-liste-favoris',
  templateUrl: './liste-favoris.component.html',
  styleUrls: ['./liste-favoris.component.css']
})
export class ListeFavorisComponent {
  products!:any[];
  idClient ="a900a796-5fdf-4416-8f25-ac3ea01f9514" ;
  constructor(private service:ShopServiceService){}

  ngOnInit(): void {
    this.service.getProductsFavoris(this.idClient).subscribe(res => {
      console.log(res)
      this.products=res
    })
}
getImage(prod: any): string {
  return 'data:image/jpeg;base64,' + prod.imageProduct; // Replace "jpeg" with the actual image format
}

}
