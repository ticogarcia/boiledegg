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
    MatFormFieldModule, MatInputModule
} from '@angular/material';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
    imports: [
        MatIconModule,
        MatButtonModule,
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
        MatFormFieldModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule
    ],
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
        FormsModule,
        MatInputModule
    ]
})
export class MaterialModule {
}
