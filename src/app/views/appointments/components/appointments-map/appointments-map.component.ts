import {
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-appointments-map',
  templateUrl: './appointments-map.component.html',
  styleUrls: ['./appointments-map.component.scss'],
})
export class AppointmentsMapComponent implements OnChanges {
  @ViewChild('host', { static: true }) host:
    | ElementRef<HTMLDivElement>
    | undefined;

  @Input() coords: number[] | null = null;
  @Input() zoom: number = 0;

  map!: L.Map;
  marker!: L.Marker;

  ngOnChanges(changes: SimpleChanges) {
    if (changes['coords'] && changes['coords'].firstChange) {
      const coords: L.LatLngExpression = this.coords as L.LatLngExpression;
      this.map = L.map(this.host!.nativeElement).setView(coords, this.zoom);

      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png').addTo(
        this.map
      );

      this.marker = L.marker(coords)
        .addTo(this.map)
        .openPopup();
    }

    if (changes['coords'] && !changes['coords'].firstChange) {
      const coords: L.LatLngExpression = this.coords as L.LatLngExpression;
      this.map.setView(coords);
      this.marker.setLatLng(coords);
    }

    if (changes['zoom']) {
      this.map.setZoom(changes['zoom'].currentValue);
    }
  }
}
