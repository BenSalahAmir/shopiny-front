import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersServiceService } from 'src/app/service/Users/users-service.service';

@Component({
  selector: 'app-updateuser',
  templateUrl: './updateuser.component.html',
  styleUrls: ['./updateuser.component.css']
})
export class UpdateuserComponent {
  userId:any= this.service.getUserIdFromToken();
  username!:String;
  firstname!:String;
  lastname!:String;
  email!:String;
  password!:String;
  phonenumber!:String;
  errorMessage!: string;

 
 user: any = {};

 constructor(private service: UsersServiceService , private ac:ActivatedRoute,private router :Router ) { }
 ngOnInit() {


   const userId = this.service.getUserIdFromToken();
   console.log('User id:', userId);

 //   this.userId = this.ac.snapshot.params['id'];

 // this.service.getUserById(this.userId).subscribe(
 //   (user: any) => {
 //     this.username = user.username;
 //     this.firstname = user.firstname;
 //     this.lastname = user.lastname;
 //     this.email = user.email;
 //     this.password = user.password;
 //     this.phonenumber = user.phonenumber;
 //   },
 //   error => {
 //     console.log(`Error getting user by ID: ${error}`);
 //     // Handle errors here
 //   }
 // );
 }

 onSubmit(): void {
   console.log(this.firstname)
   const user = {
     username: this.username,
     firstname: this.firstname,
     lastname: this.lastname,
     email: this.email,
     password: this.password,
     phonenumber: this.phonenumber
   };

   console.log(user)
   this.service.updateUser(this.userId, user).subscribe(
     () => {
       this.router.navigate(['/front']); // Redirect to the "front" page

       console.log('User updated successfully');
     },
     error => {
       console.log(`Error updating user: ${error}`);
       this.errorMessage = 'Error updating. Please try again.';

     }
   );
 }

 
}
