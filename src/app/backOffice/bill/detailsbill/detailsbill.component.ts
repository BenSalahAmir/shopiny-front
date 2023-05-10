import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BillserviceService } from 'src/app/Service/Bill/billservice.service';
import { bill } from '../Model/bill';

@Component({
  selector: 'app-detailsbill',
  templateUrl: './detailsbill.component.html',
  styleUrls: ['./detailsbill.component.css']
})
export class DetailsbillComponent {
  billId!: number;
  bill1!: bill;



  constructor(private route: ActivatedRoute, private service: BillserviceService) { }

  ngOnInit(): void {
    this.billId = this.route.snapshot.params['id'];
    this.getFactureById(this.billId);
  }

  getFactureById(billId: number): void {
    this.service.getFactureById(billId)
      .subscribe(
        (data) => {
          this.bill1 = data;
        },
        (error) => {
          console.log(error);
        }
      );
  }

}
