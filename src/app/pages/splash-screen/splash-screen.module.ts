import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SplashScreenComponent } from './splash-screen.component';
import { SplashScreenRoutingModule } from './splash-screen-routing.module';
import { PipePipeModule } from 'src/app/pipes/pipe.module';

@NgModule({
  declarations: [
    SplashScreenComponent
  ],
  imports: [
    CommonModule,
    SplashScreenRoutingModule,
    PipePipeModule
  ]
})
export class SplashScreenModule { }
