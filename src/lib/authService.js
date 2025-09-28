import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { analytics } from "./firebase";

export const signup = async (email, password) => {
  return await createUserWithEmailAndPassword(analytics, email, password);
};

export const login = async (email, password) => {
  return await signInWithEmailAndPassword(analytics, email, password);
};
