import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { ProductsComponent } from './products/products.component';
import { ProductListComponent } from './products/product-list/product-list.component';
import { ProductModelComponent } from './products/product-model/product-model.component';
import { ProductEditorComponent } from './products/product-editor/product-editor.component';

const routes:Routes=[
  { path: '', redirectTo: '/Dashboard', pathMatch: 'full' },
  { path: 'Dashboard', component: AppComponent },
  { path: 'Products', component: ProductListComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ProductsComponent,
    ProductListComponent,
    ProductModelComponent,
    ProductEditorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  exports:[RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
