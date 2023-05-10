import { Component } from '@angular/core';
import { BillserviceService } from 'src/app/Service/Bill/billservice.service';
import { ActivatedRoute, Router } from '@angular/router';
import { bill } from '../Model/bill';

@Component({
  selector: 'app-updatebill',
  templateUrl: './updatebill.component.html',
  styleUrls: ['./updatebill.component.css']
})
export class UpdatebillComponent {

  bill1!:bill;
  constructor( private service:BillserviceService ,private route: ActivatedRoute,
    private router: Router){}




    ngOnInit(): void {
      const id = this.route.snapshot.params['id'];
      this.service.getFactureById(id)
        .subscribe(bill1 => this.bill1 = bill1);
    }


    updateBill(): void {
      this.service.updateFacture(this.bill1)
        .subscribe(
          () => console.log('bill updated successfully'),
          error => console.log(error)
        );
        this.router.navigate(['/admin/listbill']);

    }




}
