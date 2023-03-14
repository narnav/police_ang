import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BagaComponent } from './components/baga/baga.component';
import { ContactComponent } from './components/contact/contact.component';
import { WagaComponent } from './components/waga/waga.component';

const routes: Routes = [
  {path:"about",component:AboutComponent},
  {path:"contact",component:ContactComponent,children:[
    {path:"waga",component:WagaComponent},
    {path:"baga",component:BagaComponent},
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
