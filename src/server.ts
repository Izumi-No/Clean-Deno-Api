import { app } from "./app.ts";

const port = Number(Deno.env.get("PORT")) || 3000;

app.get("*", (req, res) => {
  res.json({ hello: "world!" });
});

app.listen(port, () => {
  console.log(`Listening on: http://localhost:${port}`);
});
