import { NgModule } from '@angular/core'
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox'

@NgModule({
    imports: [
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatButtonModule
    ],
    declarations: [],
    exports: [
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatButtonModule
    ]
})
export class MyMaterialModule {
}
