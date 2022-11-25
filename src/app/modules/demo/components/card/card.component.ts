import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnInit,
  Output,
} from "@angular/core";

@Component({
  selector: "app-card",
  templateUrl: "./card.component.html",
  styleUrls: ["./card.component.scss"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardComponent {
  @Input() img: string = "";
  @Input() text: string = "asdasdasd";
  @Input() userName: string = "asdasdasd";

  @Output() onSend: EventEmitter<void> = new EventEmitter();
  @Output() onChat: EventEmitter<void> = new EventEmitter();
  @Output() onLike: EventEmitter<void> = new EventEmitter();
  constructor() {}

  public send(): void {
    this.onSend.emit();
  }
  public chat(): void {
    this.onChat.emit();
  }
  public like(): void {
    this.onLike.emit();
  }
}
