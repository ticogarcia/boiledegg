import {NgModule} from '@angular/core';
import {
    MatIcon,
    MatButton,
    MatRippleModule,
    MatSidenavModule,
    MatListModule,
    MatCardModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatDividerModule,
    MatStepperModule,
    MatFormFieldModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    exports: [
        MatSidenavModule,
        MatIcon,
        MatButton,
        MatRippleModule,
        MatListModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatDividerModule,
        MatStepperModule,
        MatFormFieldModule,
        ReactiveFormsModule,
        FormsModule
    ]
})
export class MaterialModule {
}
