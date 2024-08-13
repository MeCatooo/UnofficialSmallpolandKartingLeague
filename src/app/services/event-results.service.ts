import { Injectable } from '@angular/core';
import { addDoc, collection, collectionData, DocumentReference, Firestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { Event } from '../models/Event';

@Injectable({
  providedIn: 'root'
})
export class EventResultsService {

  constructor(public firestore: Firestore) { }

    async getEvents() {
      const collectionRef = collection(this.firestore, 'events');
      return collectionData(collectionRef) as Observable<Event[]>
  }

    async createEvent(event: Event){
      const collectionRef = collection(this.firestore, 'events');
      addDoc(collectionRef, <Event> event).then((documentReference: DocumentReference) => {
        console.log("Created document with id: ", documentReference.id)
    });
  }
}
