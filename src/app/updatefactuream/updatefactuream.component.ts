import { Component } from '@angular/core';
import { BillserviceService } from '../Service/Bill/billservice.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-updatefactuream',
  templateUrl: './updatefactuream.component.html',
  styleUrls: ['./updatefactuream.component.css']
})
export class UpdatefactureamComponent {
  facture: any;

  constructor( private service:BillserviceService ,private router:Router,private route:ActivatedRoute){}




  // ngOnInit() {
  //   const idFacture = this.route.snapshot.paramMap.get('idFacture');
  //   this.service.getFactureById(idFacture).subscribe((facture: any) => {
  //     this.facture = facture;
  //   });
  // }

  onUpdateFacture(facture: any): void {
    this.service.updateFacture(facture).subscribe(updatedFacture => {
      // Navigate to update component with the updated facture
      this.router.navigate(['/admin/update-bill', updatedFacture.idFacture]);
    });
  }
  onSubmit() {
    this.service.updateFacture(this.facture).subscribe(() => {
      // Do something after the update is successful
    });
  }




}
