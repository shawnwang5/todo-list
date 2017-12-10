import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'

import { LayoutComponent } from './layout.component'
import { HeaderComponent } from './header/header.component'
import { FooterComponent } from './footer/footer.component'
import { SharedModule } from '../shared/shared.module'
import { LayoutChildGuardService } from './layout-child-guard.service'
import { MyMaterialModule } from '../material/index.module'

@NgModule({
    imports: [
        SharedModule,
        RouterModule,
        MyMaterialModule,
        CommonModule
    ],
    declarations: [
        LayoutComponent,
        HeaderComponent,
        FooterComponent
    ],
    providers: [
        LayoutChildGuardService
    ],
    exports: [
        LayoutComponent
    ]
})
export class LayoutModule {
}
