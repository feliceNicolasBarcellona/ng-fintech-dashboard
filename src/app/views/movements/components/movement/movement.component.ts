import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-movement',
  templateUrl: './movement.component.html',
  styleUrls: ['./movement.component.scss']
})
export class MovementComponent {
  @Input() timestamp: number | undefined
  @Input() type: string | undefined
  @Input() amount: number | undefined
  @Input() title: string | undefined
  @Input() description!: string

  panelOpenState: boolean = false;
}
