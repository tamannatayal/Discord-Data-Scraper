export default async function handler(req, res) {

    const { userId } = req.query;

    const r = await fetch(`https://discord.com/api/v10/users/${userId}`, {
        headers: {
            Authorization: `Bot ${process.env.VITE_DISCORD_APP_TOKEN}`
        }
    });

    const data = await r.json();
    res.status(200).json(data);
}