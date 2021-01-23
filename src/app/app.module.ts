import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FuseComponent } from './components/fuse/fuse.component';
import { FuseBoxComponent } from './components/fuse-box/fuse-box.component';
import { fuseBoxReducer } from './state/fuse-box.reducer';
import { FuseBoxListComponent } from './components/fuse-box-list/fuse-box-list.component';
import { FuseBoxEffects } from './effects/fuse-box.effect';
import { FuseBoxService } from './services/fuse-box.service';

@NgModule({
  declarations: [
    AppComponent,
    FuseComponent,
    FuseBoxComponent,
    FuseBoxListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({fuseBoxes: fuseBoxReducer}, {}),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production }),
    EffectsModule.forRoot([FuseBoxEffects]),
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  providers: [FuseBoxService],
  bootstrap: [AppComponent]
})
export class AppModule { }
