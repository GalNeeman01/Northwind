import { Routes } from '@angular/router';
import { AddEmployeeComponent } from './components/employee-area/add-employee/add-employee.component';
import { EmployeeDetailsComponent } from './components/employee-area/employee-details/employee-details.component';
import { EmployeeListComponent } from './components/employee-area/employee-list/employee-list.component';
import { ContactComponent } from './components/page-area/contact/contact.component';
import { HomeComponent } from './components/page-area/home/home.component';
import { Page404Component } from './components/page-area/page404/page404.component';
import { ProductsComponent } from './components/page-area/products/products.component';
import { AddProduct2Component } from './components/product-area/add-product2/add-product2.component';
import { EditProductComponent } from './components/product-area/edit-product/edit-product.component';
import { ProductDetailsComponent } from './components/product-area/product-details/product-details.component';
import { TopThreeComponent } from './components/product-area/top-three/top-three.component';
import { authGuard } from './services/auth.guard';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "top-three", component: TopThreeComponent, canActivate: [authGuard]},
    {path: "products/new", component: AddProduct2Component},
    {path: "product-details/:id", component: ProductDetailsComponent},
    {path: "products/edit-product/:id", component: EditProductComponent},
    {path: "employees", component: EmployeeListComponent},
    {path: "employees/new", component: AddEmployeeComponent},
    {path: "employee-details/:id", component: EmployeeDetailsComponent},
    {path: "contact", component: ContactComponent},
    {path: "register", loadComponent: () => import("./components/user-area/register/register.component").then(m => m.RegisterComponent)},
    {path: "login", loadComponent: () => import("./components/user-area/login/login.component").then(m => m.LoginComponent)},
    {path: "**", component: Page404Component}
];
