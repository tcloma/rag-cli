import { program } from "commander";
import { talk } from "./gemini";

program.name("my-cli").description("A simple CLI tool").version("1.0.0");

program
	.command("greet <name>")
	.description("Greet a user by name")
	.action((name) => {
		console.log(`Hello, ${name}!`);
	});

program
	.command("read")
	.description("Read a file")
	.argument("<filePath>", "File to read")
	.action(async (filePath: string) => {
		const file = Bun.file(filePath);
		console.log(await file.text());
	});

program
	.command("talk <query>")
	.description("Talk to the AI with a query")
	.action(handleTalk);

async function handleTalk(query: string) {
	const res = await talk(query);
	console.log(res);
}

program.parse(process.argv);
