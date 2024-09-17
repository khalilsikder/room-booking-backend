import { Router } from "express";
import { bookingRoutes } from "../modules/booking/booking.route";
import { roomRoutes } from "../modules/room/room.route";
import { userRoutes } from "../modules/user/user.route";
import { slotRoutes } from "../modules/slot/slot.route";
const router = Router()

const moduleRoutes = [ 
    {
        path:'signup',
        route: userRoutes
    },
    {
        path: 'login',
        route:roomRoutes,
    },
    {
        path: '/rooms',
        route:roomRoutes,
    },
    {
        path:'/rooms/:id',
        route:roomRoutes,
    },
    {
        path: '/slots',
        route:slotRoutes,
    },
    {
        path: '/slots/availablity',
        route:slotRoutes,
    },
    {
        path: '/bookings',
        route:bookingRoutes,
    },
    {
        path: '/my-bookings',
        route:bookingRoutes,
    },
]
moduleRoutes.forEach(route => router.use(route.path,route.route))

export default router;