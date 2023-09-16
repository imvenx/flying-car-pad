import { ArcaneBaseEvent } from 'arcanepad-web-sdk'

export class ChangeSpeedEvent extends ArcaneBaseEvent {
  speed: number
  constructor(speed: number) {
    super(GameEvent.ChangeSpeed);
    this.speed = speed
  }
}

export class EnableDriveEvent extends ArcaneBaseEvent { constructor() { super(GameEvent.EnableDrive) } }
export class DisableDriveEvent extends ArcaneBaseEvent { constructor() { super(GameEvent.DisableDrive) } }

export enum GameEvent {
  ChangeSpeed = "ChangeSpeed",
  EnableDrive = "EnableDrive",
  DisableDrive = "DisableDrive",
}
