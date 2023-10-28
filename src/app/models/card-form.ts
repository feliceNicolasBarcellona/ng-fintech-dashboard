export interface CardForm {
  type: "visa" | "mastercard";
  name: string;
  surname: string;
  number: string;
  cvc: string;
}
