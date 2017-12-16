import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { AppComponent } from './app.component'
import { RoutesModule } from './routes/routes.module'
import { LayoutModule } from './layout/layout.module'
import { StoreModule } from '@ngrx/store'
import { appReducer } from './store/app/reducer'
import { MyStoreModule } from './store/index.module'
import { StoreDevtoolsModule } from '@ngrx/store-devtools'

@NgModule({
    imports: [
        RoutesModule,
        LayoutModule,
        MyStoreModule,
        BrowserAnimationsModule,
        StoreModule.forRoot({
            app: appReducer
        }),
        StoreDevtoolsModule.instrument(),
        BrowserModule
    ],
    declarations: [
        AppComponent
    ],
    providers: [],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}
