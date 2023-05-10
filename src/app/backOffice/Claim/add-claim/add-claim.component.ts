import { Component } from '@angular/core';
import { ClaimService } from 'src/app/Service/claim/claim.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-add-claim',
  templateUrl: './add-claim.component.html',
  styleUrls: ['./add-claim.component.css']
})
export class AddClaimComponent {

  constructor(private service:ClaimService,private route: ActivatedRoute,
    private router: Router){}


    idClaim!:number;
    descriptionClaim!:String;

    dateCreationClaim!:any ;

    categoryClaim!:String;

     statusClaim!:String;
     referencefacture!:String;
    ngOnInit(): void {
    }

    Submit(form:any){
        let body={
          "idClaim":this.idClaim,
          "descriptionClaim": this.descriptionClaim,
          "dateCreationClaim": this.dateCreationClaim,
          "categoryClaim": this.categoryClaim,
          "statusClaim": this.statusClaim,
          "referencefacture":this.referencefacture,

        }
        console.log(body)
        let data=JSON.stringify(form.value)
        this.service.addclaim(body).subscribe(res => console.log(res))
        this.router.navigate(['/admin/listclaim/']);

      }
}
