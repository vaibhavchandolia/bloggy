import User from "../models/user.model.js"
import { Webhook } from "svix"

export const clerkWebhook = async (req, res) => {
    
    const WEBHOOK_SECRET = process.env.CLERK_WEBHOOK_SECRET

    if (!WEBHOOK_SECRET) {
        throw new Error("Webhook Secret Needed!")
    }

    const payload = req.body;
    const headers = req.headers;

    const wh = new Webhook(WEBHOOK_SECRET);
    let evt;
    try {
        evt = wh.verify(payload, headers);
    }   catch (err) {
        res.status(400).json({
            message: "Webhook verification faiiled!"
        });
    }

    console.log(evt.data)

    // if (evt.type === "user.created") {
    //     const newUser = new UserActivation({
 
    //     })
    //     console.log("userId:", evt.data.id)
    // }

};