import { opine } from "https://deno.land/x/opine@0.22.2/mod.ts";
import { parse } from "https://deno.land/std/flags/mod.ts";

const { args } = Deno;
const DEFAULT_PORT = 8000;
const argPort = parse(args).port;

const app = opine();

app.get("/", (req, res) => {
  res.send("hello there");
});

app.listen({
  port: argPort ? Number(argPort) : DEFAULT_PORT,
});
