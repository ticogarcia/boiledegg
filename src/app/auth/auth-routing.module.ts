import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {SignupComponent} from './signup/signup.component';
import {SignupOptionsComponent} from "./signup-options/signup-options.component";
import {EditComponent} from './user-profile/edit/edit.component';

const routes: Routes = [
    {
        path: 'signup',
        component: SignupComponent,
    },
    {
        path: 'signup-options',
        component: SignupOptionsComponent
    },
    {
        path: 'edit-profile',
        component: EditComponent
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AuthRoutingModule {
}
