import { VendingMachine } from "../VendingMachine";
import { VendingMachineState } from "./VendingMachineState";

export class DispenseState implements VendingMachineState{
  vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }
  insertCoin(amount: number): void {
    throw new Error("Dispense in Progress");
  }
  pressButton(aisleNumber: number): void {
    throw new Error("Dispense in Progress");
  }
  dispense(aisleNumber: number): void {
    // dispense and set state to noCoinInsertedState
    this.vendingMachine.setState(this.vendingMachine.noCoinInsertedState);
  }
  
}