import { VendingMachine } from "../VendingMachine";
import { VendingMachineState } from "./VendingMachineState";

export class NoCoinInsertedState implements VendingMachineState{
  vendingMachine: VendingMachine;

  constructor(vendingMachine: VendingMachine) {
    this.vendingMachine = vendingMachine;
  }

  public insertCoin(amount: number): void {
    // set state to coin inserted
    this.vendingMachine.setState(this.vendingMachine.coinInsertedState);
  }
  public pressButton(aisleNumber: number): void {
    throw new Error("First Insert Coin");
  }
  public dispense(aisleNumber: number): void {
    throw new Error("First Insert Coin");
  }

}