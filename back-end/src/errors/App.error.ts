//o arquivo está com a letra (a) maiuscula por se tratar de uma classe
export default class AppError extends Error {
    constructor(public message: string, public statusCode: number = 400) {
      super(message)
    }
  }