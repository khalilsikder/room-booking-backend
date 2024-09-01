import { Router } from "express";
import { bookingRoutes } from "../modules/booking/booking.route";
import { roomRoutes } from "../modules/room/room.route";
import { userRoutes } from "../modules/user/user.route";
import { slotRoutes } from "../modules/slot/slot.route";
import path from "path";

const router = Router()

const moduleRoutes = [
    {
        path: 'booking',
        route:bookingRoutes,
    },
    {
        path: 'rooms',
        route:roomRoutes,
    },

    {
        path: 'user',
        route:userRoutes,
    },

    {
        path: 'login',
        route:roomRoutes,
    },

    {
        path: 'slots',
        route:slotRoutes,
    },

    {
        path: 'rooms/:id',
        route: roomRoutes,
    },
    {
        path:'signup',
        route: userRoutes
    }
]
moduleRoutes.forEach(route => router.use(route.path,route.route))

export default router;