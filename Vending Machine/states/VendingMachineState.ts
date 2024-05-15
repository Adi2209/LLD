export interface VendingMachineState {
  insertCoin(amount: number): void;
  pressButton(aisleNumber: number): void;
  dispense(aisleNumber: number): void;
}
