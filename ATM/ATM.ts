class ATM {
  atmId: number;
  address: string;
  displayScreen: DisplayScreen;
  keypad: Keypad;
  cashDispenser: CashDispenser;
  cardReader: CardReader;
  cashDeposit: CashDeposit;
  chequeDeposit: ChequeDeposit;
  bankService: BankService;
}

class Keypad {
  public getInput(): string {}
}

class CardReader {
  public fetchCardDetails(): CardInfo {}
}

class DisplayScreen {
  public display(message: string): void {}
}

class CardInfo {
  cardNumber: number;
  cvv: number;
  cardHolderName: string;
  expiryDate: Date;
  cardType: CardType;
  BankName: Bank;
}

class Bank {
  name: string;
  atmList: ATM[];
  address: string;
}

class CashDispenser {
  cashDenominationMap: Map<CashType, number>;
}

interface BankService {
  public getCustomerDetails(cardInfo: CardInfo): Customer;
  public isValidUser(card: CardInfo, pin: number): boolean;
  public transactionDetails(
    transactionInfo: Transaction,
    customer: Customer
  ): TransactionDetails;
}

class Transaction {
  transactionId: number;
  sourceAccountNumber: number;
  transactionDate: Date;
}

class Deposit extends Transaction {
  amount: number;
}

class CashDeposit extends Deposit {
  public getCash(): Cash[] {}
}

class ChequeDeposit extends Deposit {
  public getCheque(): Cheque {}
}

class Customer {
  customerName: string;
  accountNumber: number;
  cardInfo: CardInfo;
  customerStatus: CustomerStatus;
}

class Cheque {
  chequeNumber: number;
  accountHolderName: string;
  payeeName: string;
}

class Cash {
  cashType: CashType;
  serialNumber: number;
}

class Transfer extends Transaction {
	
	destinationAccountNumber:number;
	amount:number;

}

class TransactionDetail {

	 transactionStatus:TransactionStatus;
	 sourceAccountNumber:string;
	 transactionDate:Date;
	transactionType:TransactionType;

	transactionId:number;
}

enum TransactionStatus {

	PENDING, CANCELLED, SUCCESS, ERROR
}

enum TransactionType {

	WITHDRAW, DEPOSIT, TRANSFER
}

enum CashType {
  HUNDRED,
  TWO_HUNDRED,
  FIVE_HUNDRED,
  TWO_THOUSAND,
}

enum CardType {
  CREDIT,
  DEBIT,
}

enum CustomerStatus {
  ACTIVE,
  INACTIVE,
  BLOCKED,
}
