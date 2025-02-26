import { Routes } from '@angular/router';
import { ProductsComponent } from './components/page-area/products/products.component';
import { ContactComponent } from './components/page-area/contact/contact.component';
import { HomeComponent } from './components/page-area/home/home.component';
import { Page404Component } from './components/page-area/page404/page404.component';
import { ProductDetailsComponent } from './components/product-area/product-details/product-details.component';
import { AddProductComponent } from './components/product-area/add-product/add-product.component';
import { EmployeeListComponent } from './components/employee-area/employee-list/employee-list.component';
import { EmployeeDetailsComponent } from './components/employee-area/employee-details/employee-details.component';

export const routes: Routes = [
    {path: "", redirectTo: "home", pathMatch: "full"},
    {path: "home", component: HomeComponent},
    {path: "products", component: ProductsComponent},
    {path: "products/new", component: AddProductComponent},
    {path: "product-details/:id", component: ProductDetailsComponent},
    {path: "employees", component: EmployeeListComponent},
    {path: "employee-details/:id", component: EmployeeDetailsComponent},
    {path: "contact", component: ContactComponent},
    {path: "**", component: Page404Component}
];
