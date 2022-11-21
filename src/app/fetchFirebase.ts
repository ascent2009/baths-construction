import { ref } from "firebase/database";

export const fetchFirebase = (db: any, name: string) => {
  const dbRef = ref(db, name);
  return dbRef;
};
