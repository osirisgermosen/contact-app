import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './components/list/list.component';
import { AddComponent } from './components/add/add.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    ListComponent,
    AddComponent,
    HomePageComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ]
  , exports: [
    HomePageComponent
  ]
})
export class ContactsModule { }
