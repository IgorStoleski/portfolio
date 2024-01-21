import { Component } from '@angular/core';
import { TranslateModule, TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-send-mail',
  standalone: true,
  imports: [TranslateModule],
  templateUrl: './send-mail.component.html',
  styleUrl: './send-mail.component.scss'
})
export class SendMailComponent {
  constructor(public translate: TranslateService) {}

}
