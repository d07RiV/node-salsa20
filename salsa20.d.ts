declare module 'node-salsa20' {
  type SalsaOptions =
    | {
        rounds: number
      }
    | {
        doubleRounds: number
      }
  type InputBuffer = Uint8Array | ArrayBuffer

  class Salsa20 {
    constructor(options: SalsaOptions)
    key(key: InputBuffer): Salsa20
    nonce(nonce: InputBuffer): Salsa20
    encrypt(data: InputBuffer): ArrayBuffer
    decrypt(data: InputBuffer): ArrayBuffer
    seek(low: number, high: number): void
  }

  export = Salsa20
}
