class ParkingLot {
  parkingFloors: ParkingFloor[];
  entrances: Entrance[];
  exits: Exit[];

  address: string;

  parkingLotName: string;

  public isParkingSpaceAvailable(vehicle: Vehicle): boolean {}
  public updateParkingAttendant(
    parkingAttendant: ParkingAttendant,
    gateId: number
  ): boolean {}
}

class ParkingFloor {
  floorId: number;
  parkingSpace: ParkingSpace[];
  parkingDisplayBoard: ParkingDisplayBoard;
}

class Gate {
  gateId: number;
  parkingAttendant: ParkingAttendant;
}

class Entrance extends Gate {
  public getParkingTicket(vehicle: Vehicle): ParkingTicket {}
}

class Exit extends Gate {
  public payParkingAmount(
    ParkingTicket: ParkingTicket,
    paymentType: PaymentType
  ): ParkingTicket{}
}

class ParkingSpace {
  spaceId: number;
  floorId: number;
  isOccupied: boolean;
  costPerHr: number;
  vehicle: Vehicle;
  parkingSpaceType: ParkingSpaceType;
}

class ParkingDisplayBoard {
  freeSpotsAvailableMap: Map<ParkingSpaceType, number>;

  public updateFreeSpotsAvailable(parkingSpace: ParkingSpace) {}
}

class ParkingTicket {
  ticketId: number;
  vehicleEntryDateTime: Date;
  vehicleExitDateTime: Date;
  parkingSpaceType: ParkingSpaceType;
  totalCost: number;
  parkingTicketStatus: ParkingTicketStatusType;

  public updateTotalCost(): void {}
  public updateExitTime(): void {}
}

class Vehicle {
  carLicensePlate: string;
  vehicleType: VehicleType;
  parkingSpace: ParkingSpace;
  parkingTicket: ParkingTicket;
}

class Account {
  name: string;
  email: string;
  password: string;
  empId: number;
  address: string;
}

class Admin extends Account {
  public addNewParkingSpace(parkingSpace: ParkingSpace): void {}
  public addNewParkingFloor(parkingFloor: ParkingFloor): void {}
  public addNewParkingDisplayBoard(
    parkingDisplayBoard: ParkingDisplayBoard
  ): void {}
}

class ParkingAttendant extends Account {
  paymentService: Payment;

  public processPayment(
    parkingTicket: ParkingTicket,
    paymentType: PaymentType
  ): void {}
  public processVehicleEntry(vehicle: Vehicle): ParkingTicket {}
}

class Payment {
  public makePayment(parkingTicket: ParkingTicket, paymentType: PaymentType): PaymentStatus{}
}

enum ParkingSpaceType {
  CAR_PARKING,
  BIKE_PARKING,
  TRUCK_PARKING,
}

enum VehicleType {
  CAR,
  BIKE,
  TRUCK,
}

enum PaymentType {
  CASH,
  CARD,
  UPI,
}

enum ParkingTicketStatusType {
  PAID,
  ACTIVE,
}

enum PaymentStatus{
  SUCCESSFUL,
  UNPAID,
  DECLINED,
  PENDING,
  CANCELLED,
  REFUNDED,
  TIMED_OUT
}