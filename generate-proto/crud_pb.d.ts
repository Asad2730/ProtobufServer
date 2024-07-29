// package: crud
// file: proto/crud.proto

import * as jspb from "google-protobuf";

export class CreateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CreateRequest): CreateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateRequest;
  static deserializeBinaryFromReader(message: CreateRequest, reader: jspb.BinaryReader): CreateRequest;
}

export namespace CreateRequest {
  export type AsObject = {
    id: string,
    data: string,
  }
}

export class CreateResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CreateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CreateResponse): CreateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CreateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CreateResponse;
  static deserializeBinaryFromReader(message: CreateResponse, reader: jspb.BinaryReader): CreateResponse;
}

export namespace CreateResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class ReadRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadRequest.AsObject;
  static toObject(includeInstance: boolean, msg: ReadRequest): ReadRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadRequest;
  static deserializeBinaryFromReader(message: ReadRequest, reader: jspb.BinaryReader): ReadRequest;
}

export namespace ReadRequest {
  export type AsObject = {
    id: string,
  }
}

export class ReadResponse extends jspb.Message {
  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ReadResponse.AsObject;
  static toObject(includeInstance: boolean, msg: ReadResponse): ReadResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ReadResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ReadResponse;
  static deserializeBinaryFromReader(message: ReadResponse, reader: jspb.BinaryReader): ReadResponse;
}

export namespace ReadResponse {
  export type AsObject = {
    data: string,
  }
}

export class UpdateRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  getData(): string;
  setData(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateRequest.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateRequest): UpdateRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateRequest;
  static deserializeBinaryFromReader(message: UpdateRequest, reader: jspb.BinaryReader): UpdateRequest;
}

export namespace UpdateRequest {
  export type AsObject = {
    id: string,
    data: string,
  }
}

export class UpdateResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): UpdateResponse.AsObject;
  static toObject(includeInstance: boolean, msg: UpdateResponse): UpdateResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: UpdateResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): UpdateResponse;
  static deserializeBinaryFromReader(message: UpdateResponse, reader: jspb.BinaryReader): UpdateResponse;
}

export namespace UpdateResponse {
  export type AsObject = {
    success: boolean,
  }
}

export class DeleteRequest extends jspb.Message {
  getId(): string;
  setId(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteRequest.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteRequest): DeleteRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteRequest;
  static deserializeBinaryFromReader(message: DeleteRequest, reader: jspb.BinaryReader): DeleteRequest;
}

export namespace DeleteRequest {
  export type AsObject = {
    id: string,
  }
}

export class DeleteResponse extends jspb.Message {
  getSuccess(): boolean;
  setSuccess(value: boolean): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): DeleteResponse.AsObject;
  static toObject(includeInstance: boolean, msg: DeleteResponse): DeleteResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: DeleteResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): DeleteResponse;
  static deserializeBinaryFromReader(message: DeleteResponse, reader: jspb.BinaryReader): DeleteResponse;
}

export namespace DeleteResponse {
  export type AsObject = {
    success: boolean,
  }
}

