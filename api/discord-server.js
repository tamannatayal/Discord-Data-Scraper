export default async function newHandler(req, res) {
    const { invite } = req.query;

    const r = await fetch(`https://discord.com/api/v10/invites/${invite}?with_counts=true&with_expiration=true`, {
        headers: {
            Authorization: `Bot ${process.env.VITE_DISCORD_APP_TOKEN}`
        }
    })
    const data = await r.json();
    res.status(200).json(data);
}