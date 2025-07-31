import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path:"",
        // component:LoginComponent,
        loadComponent:()=>import("./features/auth/pages/login/login.component")
        .then(c=>c.LoginComponent)

    },
    {
        
          path:"register",
        // component:LoginComponent,
        loadComponent:()=>import("./features/auth/pages/register/register.component")
        .then(c=>c.RegisterComponent)
    }
];
