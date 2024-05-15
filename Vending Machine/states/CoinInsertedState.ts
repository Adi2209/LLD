import { VendingMachine } from "../VendingMachine";
import { VendingMachineState } from "./VendingMachineState";

export class CoinInsertedState implements VendingMachineState {
  vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  insertCoin(amount: number): void {
    this.vendingMachine.hasSufficientAmount(this.vendingMachine.getAmount()+amount);
  }
  pressButton(aisleNumber: number): void {
    // check for sufficent amount and  stock
    this.vendingMachine.setState(this.vendingMachine.dispenseState);
  }
  dispense(aisleNumber: number): void {
    throw new Error("Method not implemented.");
  }
}
