import { Component } from '@angular/core';
import { ClaimService } from 'src/app/Service/claim/claim.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-list-claim',
  templateUrl: './list-claim.component.html',
  styleUrls: ['./list-claim.component.css']
})
export class ListClaimComponent {
  claim!:any[]

  constructor(private service:ClaimService,private route: ActivatedRoute,
    private router: Router,private toastr: ToastrService ){}

    ngOnInit(): void {
      // this.service.getclaim().subscribe(res => {
      //   console.log(res)
      //   this.claim=res})
      this.getUclaim();
  }

  getUclaim(): void {
    this.service.getclaim().subscribe(claim => {
      console.log(claim);
      this.claim = claim;
    });
  }


  onDeleteClaim(idClaim: number) {
    this.service.deleteclaim(idClaim).subscribe(
      res => {
        console.log(res);
        // Find the index of the claim to be deleted
        const index = this.claim.findIndex(claim => claim.idClaim === idClaim);
        // Remove the claim from the array
        if (index > -1) {
          this.claim.splice(index, 1);
        }
        this.toastr.success('Claim deleted successfully.', 'Success', {
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
        this.toastr.error('Failed to delete claim.', 'Error', {
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





}
