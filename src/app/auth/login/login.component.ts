import { CommonModule, formatPercent } from '@angular/common';
import { Component } from '@angular/core';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  userForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });
  
  constructor(
    // private router : Router,
    // private dataService : DataService
  ){}

  ngOnInit(): void {
    
  }

    onSubmit(){
      console.log(this.userForm.value);
    // this.login(this.userForm.value);
  }

  // login(user: any) {
  //   this.dataService.login(user).subscribe((data: any) => {
  //     console.log(data);
  //     if (data?.data?.authenticateUserWithPassword?.sessionToken) {
  //       if (!data?.data?.authenticateUserWithPassword?.item?.actif) {
  //         console.log('Existe mais est bloque')
  //       }
  //       else {
  //         if (data?.data?.authenticateUserWithPassword?.item?.roles.includes('DISTRIBUTEUR')){
  //           this.dataService.setToken(data?.data?.authenticateUserWithPassword?.sessionToken);
  //           this.dataService.setUser(data?.data?.authenticateUserWithPassword?.item);
  //           this.router.navigate(['/home'])
  //           console.log('Welcome')
  //         }else {
  //           console.log('Oups , vous etes pas distributeur')
  //         }
  //       }
  //     }
  //     else {
  //       // this.message.info('Non');
  //       console.log('Email ou mot de passe incorrect');
  //     }
  //   }, 
  //   error => {
  //     console.log(`Error : ${error}`);
  //   })
  // }


}
