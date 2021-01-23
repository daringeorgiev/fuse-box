import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FuseBoxListComponent } from './components/fuse-box-list/fuse-box-list.component';

const routes: Routes = [
  { path: '**', component: FuseBoxListComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
