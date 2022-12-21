import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../../types/types';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-news-letter',
  templateUrl: './news-letter.component.html',
  styleUrls: ['./news-letter.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NewsLetterComponent {
  @Input() user$: Observable<User>;
  @Input() user: User;

  @Output() subscribe = new EventEmitter();

  subscribeToNewsletter(email: string) {
    this.subscribe.emit(email);
  }
}
