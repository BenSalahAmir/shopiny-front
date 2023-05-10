export class Rating {
    idRaitingProduct!: number;
    nbrEtoilesProduct!: number;
    reviewProduct!: string;
    userRating!: {
      idUser: string;
      firstName: string;
      lastName: string;
    };

}