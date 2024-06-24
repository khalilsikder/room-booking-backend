export type Booking = {
    room:string;
    slots:string[];
    user:string;
    date:string;
    totalAmount:number;
    isConfirmed: 'isConfirmed' | 'unConfirmed' | 'canceled';
    isDeleted:boolean;
}