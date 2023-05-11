import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsersServiceService } from 'src/app/service/Users/users-service.service';

@Component({
  selector: 'app-add-post-front',
  templateUrl: './add-post-front.component.html',
  styleUrls: ['./add-post-front.component.css']
})
export class AddPostFrontComponent {
  
  constructor(private fb: FormBuilder,private http: HttpClient,private router: Router ,private service: UsersServiceService) { }
 
  ngForm!: FormGroup;
  categories = [
    {id: 1, name: 'Category 1'},
    {id: 2, name: 'Category 2'},
    {id: 3, name: 'Category 3'}
  ];

 
  imagePost!: File;
  userIdamir:any= this.service.getUserIdFromToken();
  userId!: string;
  categoryId!: number;
  topic!: string;
  description!: string;



  onFileSelected(event:any) {
    this.imagePost = event.target.files[0];
  }

  ngOnInit(): void {
    this.ngForm = this.fb.group({
      userId: [this.userIdamir, Validators.required],
      categoryId: ['', Validators.required],
      description: ['', Validators.required],
      topic: ['', Validators.required]
    });
  }

 

  onsubmit() {
    const formValue = this.ngForm.value;
    const userId = formValue['userId'];
    const categoryId = formValue['categoryId'];
    const description = formValue['description'];
    const topic = formValue['topic'];

    const formData = new FormData();
    formData.append('userId', userId);
    formData.append('categoryId', categoryId.toString());
    formData.append('description', description);
    formData.append('topic', topic);
    formData.append('file', this.imagePost);

    const httpOptions = {
      headers: new HttpHeaders({
        'Accept': 'multipart/form-data'
      })
    };

    this.http.post<any>("http://localhost:9001/forum/post/add", formData, httpOptions)
      .subscribe(data => {
        console.log(data);
        console.error;
      });
      this.router.navigate(['/front/listforum']);
  }

}
