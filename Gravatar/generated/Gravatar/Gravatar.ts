// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";

export class NewGravatar extends ethereum.Event {
  get params(): NewGravatar__Params {
    return new NewGravatar__Params(this);
  }
}

export class NewGravatar__Params {
  _event: NewGravatar;

  constructor(event: NewGravatar) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get displayName(): string {
    return this._event.parameters[2].value.toString();
  }

  get imageUrl(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class UpdatedGravatar extends ethereum.Event {
  get params(): UpdatedGravatar__Params {
    return new UpdatedGravatar__Params(this);
  }
}

export class UpdatedGravatar__Params {
  _event: UpdatedGravatar;

  constructor(event: UpdatedGravatar) {
    this._event = event;
  }

  get id(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get owner(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get displayName(): string {
    return this._event.parameters[2].value.toString();
  }

  get imageUrl(): string {
    return this._event.parameters[3].value.toString();
  }
}

export class Gravatar__getGravatarResult {
  value0: string;
  value1: string;

  constructor(value0: string, value1: string) {
    this.value0 = value0;
    this.value1 = value1;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromString(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    return map;
  }
}

export class Gravatar__gravatarsResult {
  value0: Address;
  value1: string;
  value2: string;

  constructor(value0: Address, value1: string, value2: string) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromAddress(this.value0));
    map.set("value1", ethereum.Value.fromString(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    return map;
  }
}

export class Gravatar extends ethereum.SmartContract {
  static bind(address: Address): Gravatar {
    return new Gravatar("Gravatar", address);
  }

  getGravatar(owner: Address): Gravatar__getGravatarResult {
    let result = super.call(
      "getGravatar",
      "getGravatar(address):(string,string)",
      [ethereum.Value.fromAddress(owner)]
    );

    return new Gravatar__getGravatarResult(
      result[0].toString(),
      result[1].toString()
    );
  }

  try_getGravatar(
    owner: Address
  ): ethereum.CallResult<Gravatar__getGravatarResult> {
    let result = super.tryCall(
      "getGravatar",
      "getGravatar(address):(string,string)",
      [ethereum.Value.fromAddress(owner)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Gravatar__getGravatarResult(value[0].toString(), value[1].toString())
    );
  }

  gravatarToOwner(param0: BigInt): Address {
    let result = super.call(
      "gravatarToOwner",
      "gravatarToOwner(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return result[0].toAddress();
  }

  try_gravatarToOwner(param0: BigInt): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "gravatarToOwner",
      "gravatarToOwner(uint256):(address)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  ownerToGravatar(param0: Address): BigInt {
    let result = super.call(
      "ownerToGravatar",
      "ownerToGravatar(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );

    return result[0].toBigInt();
  }

  try_ownerToGravatar(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall(
      "ownerToGravatar",
      "ownerToGravatar(address):(uint256)",
      [ethereum.Value.fromAddress(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  gravatars(param0: BigInt): Gravatar__gravatarsResult {
    let result = super.call(
      "gravatars",
      "gravatars(uint256):(address,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );

    return new Gravatar__gravatarsResult(
      result[0].toAddress(),
      result[1].toString(),
      result[2].toString()
    );
  }

  try_gravatars(
    param0: BigInt
  ): ethereum.CallResult<Gravatar__gravatarsResult> {
    let result = super.tryCall(
      "gravatars",
      "gravatars(uint256):(address,string,string)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Gravatar__gravatarsResult(
        value[0].toAddress(),
        value[1].toString(),
        value[2].toString()
      )
    );
  }
}

export class UpdateGravatarImageCall extends ethereum.Call {
  get inputs(): UpdateGravatarImageCall__Inputs {
    return new UpdateGravatarImageCall__Inputs(this);
  }

  get outputs(): UpdateGravatarImageCall__Outputs {
    return new UpdateGravatarImageCall__Outputs(this);
  }
}

export class UpdateGravatarImageCall__Inputs {
  _call: UpdateGravatarImageCall;

  constructor(call: UpdateGravatarImageCall) {
    this._call = call;
  }

  get _imageUrl(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class UpdateGravatarImageCall__Outputs {
  _call: UpdateGravatarImageCall;

  constructor(call: UpdateGravatarImageCall) {
    this._call = call;
  }
}

export class SetMythicalGravatarCall extends ethereum.Call {
  get inputs(): SetMythicalGravatarCall__Inputs {
    return new SetMythicalGravatarCall__Inputs(this);
  }

  get outputs(): SetMythicalGravatarCall__Outputs {
    return new SetMythicalGravatarCall__Outputs(this);
  }
}

export class SetMythicalGravatarCall__Inputs {
  _call: SetMythicalGravatarCall;

  constructor(call: SetMythicalGravatarCall) {
    this._call = call;
  }
}

export class SetMythicalGravatarCall__Outputs {
  _call: SetMythicalGravatarCall;

  constructor(call: SetMythicalGravatarCall) {
    this._call = call;
  }
}

export class UpdateGravatarNameCall extends ethereum.Call {
  get inputs(): UpdateGravatarNameCall__Inputs {
    return new UpdateGravatarNameCall__Inputs(this);
  }

  get outputs(): UpdateGravatarNameCall__Outputs {
    return new UpdateGravatarNameCall__Outputs(this);
  }
}

export class UpdateGravatarNameCall__Inputs {
  _call: UpdateGravatarNameCall;

  constructor(call: UpdateGravatarNameCall) {
    this._call = call;
  }

  get _displayName(): string {
    return this._call.inputValues[0].value.toString();
  }
}

export class UpdateGravatarNameCall__Outputs {
  _call: UpdateGravatarNameCall;

  constructor(call: UpdateGravatarNameCall) {
    this._call = call;
  }
}

export class CreateGravatarCall extends ethereum.Call {
  get inputs(): CreateGravatarCall__Inputs {
    return new CreateGravatarCall__Inputs(this);
  }

  get outputs(): CreateGravatarCall__Outputs {
    return new CreateGravatarCall__Outputs(this);
  }
}

export class CreateGravatarCall__Inputs {
  _call: CreateGravatarCall;

  constructor(call: CreateGravatarCall) {
    this._call = call;
  }

  get _displayName(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _imageUrl(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class CreateGravatarCall__Outputs {
  _call: CreateGravatarCall;

  constructor(call: CreateGravatarCall) {
    this._call = call;
  }
}
