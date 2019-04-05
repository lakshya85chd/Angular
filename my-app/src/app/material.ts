import {MatButtonModule, MatCardModule, MatCheckboxModule} from '@angular/material';
import {NgModule} from '@angular/core';
@NgModule({

    imports: [
      MatButtonModule,
      MatCardModule, 
      MatCheckboxModule
    ],
    exports: [
        MatButtonModule, 
        MatCardModule,
        MatCheckboxModule
      ],
})
  export class MaterialModule { }