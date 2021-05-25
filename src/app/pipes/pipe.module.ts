import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FactorialPipe } from "./factorial.pipe";

@NgModule({
    declarations: [FactorialPipe],
    imports: [CommonModule],
    exports: [FactorialPipe],
    providers: [],
  })
  export class PipePipeModule { }