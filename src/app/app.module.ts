import { ShoperList } from './../root/Header/Shopper_list/shopper_list.component';
import { RootComponent } from './../root/root.component';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {Header} from '../root/Header/header.component';
import { AppComponent } from './app.component';
import { RecipeComponent } from '../root/Header/recipe/recipe.component';

@NgModule({
  declarations: [
    AppComponent,
    RootComponent,
    Header,
    ShoperList,
    RecipeComponent

  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
