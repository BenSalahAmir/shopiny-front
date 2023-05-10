export class Discount {
    idDiscount: number;
    amount: number;
    discountCode: string;
    expiryDate: Date;
    percentage: boolean;
    discountStatus: string;
    userId: any; // Replace with the appropriate User model
    cartId: any; // Replace with the appropriate Cart model
    constructor(idDiscount: number,discountCode: string,expiryDate: Date,amount: number,percentage: boolean,discountStatus: string,usedBy: any,cart: any) {
        this.idDiscount=idDiscount;
        this.discountCode=discountCode;
        this.expiryDate=expiryDate;
        this.amount=amount;
        this.percentage=percentage;
        this.discountStatus=discountStatus;
        this.userId=usedBy;
        this.cartId=cart;
    }
  }
  