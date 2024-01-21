import { Routes } from '@angular/router';
import { MainContentComponent } from './main-content/main-content.component';
import { ImprintComponent } from './imprint/imprint.component';
import { SendMailComponent } from './send-mail/send-mail.component';

export const routes: Routes = [
    { path: '', component: MainContentComponent},
    { path: 'imprint', component: ImprintComponent},
    { path: 'send-mail', component: SendMailComponent}
];
