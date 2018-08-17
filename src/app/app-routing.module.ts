import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FinderComponent } from './finder/finder.component';

const appRoutes: Routes = [
{
  path: 'finder/:id',
  component: FinderComponent
}
]

@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(appRoutes) ]
})
export class AppRoutingModule { }
