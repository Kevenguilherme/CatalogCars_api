export class AppError extends Error {
 constructor(public messege: string, public status: number = 400) {
   super(messege)
 }
}