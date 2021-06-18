import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminTemplateComponent } from './admin-template/admin-template.component';
import { HomeTemplateModule } from './home-template/home-template.module';
// import { HomeTemplateComponent } from './home-template/home-template.component';
// import { HomeComponent } from './home-template/home/home.component';
// import { AboutComponent } from './home-template/about/about.component';
// import { ListMovieComponent } from './home-template/list-movie/list-movie.component';

const routes: Routes = [
  //localhost:4200
  {
    path: '',
    loadChildren: () => HomeTemplateModule,
  },

  //localhost:4200/admin
  {
    path: 'admin',
    component: AdminTemplateComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
