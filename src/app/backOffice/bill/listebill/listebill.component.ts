import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { ActivatedRoute, Router } from '@angular/router';
import { bill } from '../Model/bill';
import { BillserviceService } from 'src/app/Service/Bill/billservice.service';

@Component({
  selector: 'app-listebill',
  templateUrl: './listebill.component.html',
  styleUrls: ['./listebill.component.css']
})
export class ListebillComponent {
  bill!:any[]
  constructor(private service:BillserviceService,private toastr: ToastrService ,private route: ActivatedRoute,
    private router: Router){}

  ngOnInit(): void {
    this.service.getbill().subscribe(res => {
      console.log(res)
      this.bill=res})
}


editBill(bill1: bill) {
  this.router.navigate(['/admin/updatebill', bill1.idFacture]);
}
// onsubmit(): void{
// this.router.navigate(['/admin/addbill']);
// }

// onDeleteFacture(idFacture: number) {
//   this.service.deletebill(idFacture).subscribe(
//     res => {
//       console.log(res);
//       // Find the index of the facture to be deleted
//       const index = this.bill.findIndex(bill => bill.idFacture === idFacture);
//       // Remove the facture from the array
//       if (index > -1) {
//         this.bill.splice(index, 1);
//       }
//       setTimeout(() => {
//         this.toastr.success('Facture deleted successfully.');
//     }, 0);    },
//     error => {
//       console.log(error);
//       setTimeout(() => {
//         this.toastr.error('Failed to delete facture.');
//     },)
//     }
//   );
// }

onDeleteFacture(idFacture: number) {
  this.service.deletebill(idFacture).subscribe(
    res => {
      console.log(res);
      // Find the index of the facture to be deleted
      const index = this.bill.findIndex(bill => bill.idFacture === idFacture);
      // Remove the facture from the array
      if (index > -1) {
        this.bill.splice(index, 1);
      }
      this.toastr.success('Facture deleted successfully.', 'Success', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
        closeButton: true,
        enableHtml: true,
        toastClass: 'toast-message'
      });
    },
    error => {
      console.log(error);
      this.toastr.error('Failed to delete facture.', 'Error', {
        timeOut: 3000,
        progressBar: true,
        progressAnimation: 'increasing',
        closeButton: true,
        enableHtml: true,
        toastClass: 'toast-message'
      });
    }
  );
}


// updateFacture(): void {
//   this.service.updatebill(this.bill)
//     .subscribe((updatebill: any) => {
//       console.log('Facture updated successfully:', updatebill);
//       // update the UI or do other stuff here
//     }, (error: any) => {
//       console.error('Error updating facture:', error);
//     });
// }


navigateToUpdate(factureId: number) {
  this.router.navigate(['/admin/updatebill/', factureId]);
}

navigateTodetails(factureId: number) {
  this.router.navigate(['/admin/detailbill/', factureId]);
}

}
