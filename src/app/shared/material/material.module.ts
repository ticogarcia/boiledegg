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
    MatStepperModule
} from '@angular/material';

@NgModule({
    imports: [
        MatRippleModule,
        MatSidenavModule,
        MatListModule,
        MatCardModule,
        MatToolbarModule,
        MatIconModule,
        MatButtonModule,
        MatGridListModule,
        MatDividerModule,
        MatStepperModule
    ],
    declarations: [],
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
        MatStepperModule
    ]
})
export class MaterialModule {
}
