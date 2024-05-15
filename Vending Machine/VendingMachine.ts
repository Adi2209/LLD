import { Inventory } from "./Inventory/Inventory";
import { CoinInsertedState } from "./states/CoinInsertedState";
import { DispenseState } from "./states/DispenseState";
import { NoCoinInsertedState } from "./states/NoCoinInsertedState";
import { VendingMachineState } from "./states/VendingMachineState";

export class VendingMachine {
  public noCoinInsertedState: NoCoinInsertedState;
  public dispenseState: DispenseState;
  public coinInsertedState: CoinInsertedState;
  private state: VendingMachineState;
  private inventory: Inventory;
  private amount: number;

  constructor() {
    this.noCoinInsertedState = new NoCoinInsertedState(this);
    this.dispenseState = new DispenseState(this);
    this.coinInsertedState = new CoinInsertedState(this);
    this.inventory = new Inventory();
    this.amount = 0.0;
    this.state = this.noCoinInsertedState;
  }

  public hasSufficientAmount(expectedAmount: number): boolean {}

  public getAmount(): number {
    return this.amount;
  }

  public setState(
    state: VendingMachineState
  ) {
    this.state = state;
  }
}
