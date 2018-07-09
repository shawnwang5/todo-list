import { Routes } from '@angular/router'

import { LayoutComponent } from '../layout/layout.component'
import { LayoutChildGuardService } from '../layout/layout-child-guard.service'

export const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        canActivateChild: [
            LayoutChildGuardService
        ],
        children: [
            { path: 'todoList', loadChildren: './todo-list/index.module#TodoListModule' },
            { path: 'about', loadChildren: './about/index.module#AboutModule' },
            { path: 'others', loadChildren: './others/index.module#OthersModule' },
            { path: '', redirectTo: '/todoList', pathMatch: 'full' }
        ]
    },
    { path: '**', redirectTo: '/todoList' }
]
