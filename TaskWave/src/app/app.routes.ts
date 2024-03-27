import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ProjectComponent } from './Components/project/project.component';
import { WrapperComponent } from './Components/wrapper/wrapper.component';
import { WrapperListComponent } from './Components/wrapper-list/wrapper-list.component';
import { ProjectListComponent } from './Components/project-list/project-list.component';
import { PageNotFoundComponent } from './Components/page-not-found/page-not-found.component';

export const routes: Routes = [
    { path: '', component: AppComponent },
    { path: 'project-component', component: ProjectComponent },
    { path: 'project-list', component: ProjectListComponent },
    { path: 'wrapper-component', component: WrapperComponent },
    { path: 'tab/:id', component: WrapperListComponent },
    // { path: '',   redirectTo: '/', pathMatch: 'full' },
    { path: '**', component: PageNotFoundComponent },
];
