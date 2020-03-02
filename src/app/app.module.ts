import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ListComponent } from './list/list.component';
import { IdeaService } from './@shared/idea.service';
import { AddIdeaComponent } from './add-idea/add-idea.component';
import { LikeDislikeComponent } from './like-dislike/like-dislike.component';
import { SearchComponent } from './search/search.component';
import { PrintTitleComponent } from './print-title/print-title.component';
import { PrintDescriptionComponent } from './print-description/print-description.component';
import { PrintTagsComponent } from './print-tags/print-tags.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavigationComponent } from './navigation/navigation.component';
import { LoginService } from './@shared/login.service';

const appRoutes: Routes = [
  { path: 'list', component: ListComponent},
  { path: 'add-idea', component: AddIdeaComponent},
  { path: 'search', component: SearchComponent},
  { path: 'home', component: HomeComponent},
  { path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'}

]

@NgModule({
  imports:      [ BrowserModule, FormsModule, NgbModule,     RouterModule.forRoot(
      appRoutes) ],
  declarations: [ AppComponent, ListComponent, AddIdeaComponent, 
  LikeDislikeComponent, SearchComponent, PrintDescriptionComponent, PrintTitleComponent, PrintTagsComponent, HomeComponent, LoginComponent, NavigationComponent],
  bootstrap:    [ AppComponent ],
  providers: [IdeaService, LoginService]
})
export class AppModule { }
