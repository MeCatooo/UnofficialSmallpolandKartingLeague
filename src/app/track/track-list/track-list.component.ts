import { Component, OnInit } from '@angular/core';
import { addDoc, collection, collectionData, DocumentReference, Firestore } from '@angular/fire/firestore';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs';
import { Track } from 'src/app/models/Track';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css']
})
export class TrackListComponent implements OnInit {
  trackForm = new FormGroup({
    Name: new FormControl(''),
    Description: new FormControl('')
  })
  tracks: Observable<Track[]> | null = null
  constructor(public firestore: Firestore) { }

  ngOnInit() {
    this.tracks = this.getTracks()
  }

  addTrack(){
    console.log('tre');
    const collectionRef = collection(this.firestore, 'tracks');
    console.log(collectionRef)
      addDoc(collectionRef, <Track> {Name: this.trackForm.get('Name')?.value,
        Description: this.trackForm.get('Description')?.value})
        .then((documentReference: DocumentReference) => {
        console.log("Created document with id: ", documentReference.id)
    });
  }

  getTracks(){
    const collectionRef = collection(this.firestore, 'tracks');
    return collectionData(collectionRef) as Observable<Track[]>
  }

}
