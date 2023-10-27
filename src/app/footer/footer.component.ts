import { Component, OnInit, ViewChild } from '@angular/core';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {
  location:string='';
  policesModalOpen:boolean=false;
  termModalOpen:boolean=false;
  helpModalOpen:boolean=false;
  faqModalOpen: boolean = false;
  locationModalOpen: boolean = false;
  
  constructor() { }

  ngOnInit(): void {
  }


  @ViewChild(MapInfoWindow) infoWindow: MapInfoWindow | undefined;
  center: google.maps.LatLngLiteral = {
      lat:28.7041,
      lng:77.1025
  };
  markerPositions: google.maps.LatLngLiteral[] = [];
  zoom = 4;
  addMarker(event: google.maps.MapMouseEvent) {
      if (event.latLng != null) this.markerPositions.push(event.latLng.toJSON());
  }
  openInfoWindow(marker: MapMarker) {
      if (this.infoWindow != undefined) this.infoWindow.open(marker);
  }


  openPolicesModal(){
    this.policesModalOpen=true;
  }
  closePolicesModal(){
    this.policesModalOpen=false;
  }

  openTermModal(){
    this.termModalOpen=true;
  }
  closeTermModal(){
    this.termModalOpen=false;
  }

  openContactModal(){
    this.helpModalOpen = true;
  }
  closeContactModal(){
    this.helpModalOpen = false;
  }

  openFaqModal(){
    this.faqModalOpen = true;
  }
  closeFaqModal() {
    this.faqModalOpen = false;
  }

  openLocationModal() {
    this.location='108 Richmond Road, Delhi, Delhi-121078'; 
    this.locationModalOpen = true;
  }
  closeLocationModal(){
    this.locationModalOpen = false;
  }

}
