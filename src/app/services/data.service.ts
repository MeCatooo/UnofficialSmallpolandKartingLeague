import { Injectable } from '@angular/core';
import {
  DocumentReference,
  Firestore,
  PartialWithFieldValue,
  QueryDocumentSnapshot,
  addDoc,
  collection,
  doc,
  getDocs,
  query,
} from '@angular/fire/firestore';
import { Driver } from '../models/Driver';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(public firestore: Firestore) {}

  async writeData(driver: Driver) {
    const collectionRef = collection(this.firestore, 'robots');
    addDoc(collectionRef, <Driver> driver).then((documentReference: DocumentReference) => {
      console.log("Created document with id: ", documentReference.id)
  });

  }
}
