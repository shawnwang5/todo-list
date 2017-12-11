import { NgModule } from '@angular/core'
import { MatTabsModule } from '@angular/material/tabs'
import { MatButtonModule } from '@angular/material/button'
import { MatInputModule } from '@angular/material/input'
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatCheckboxModule } from '@angular/material/checkbox'
import { MatExpansionModule } from '@angular/material/expansion'
import { MatDialogModule } from '@angular/material/dialog'

@NgModule({
    imports: [
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule
    ],
    declarations: [],
    exports: [
        MatTabsModule,
        MatInputModule,
        MatFormFieldModule,
        MatExpansionModule,
        MatDialogModule,
        MatCheckboxModule,
        MatButtonModule
    ]
})
export class MyMaterialModule {
}
