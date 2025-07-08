#!/usr/bin/env node

import { Command } from "commander";

async function main() {
  const program = new Command()
    .name("kronos-create")
    .description("Kronos starter template CLI tool.")
    .arguments("[project-name]")
    .action((args: string) =>  {
        console.log(args)
    })
    .version("0.0.2");
  program.parse(process.argv);
}

main().catch((error) => {
  console.error("An unexpected error occurred:", error);
});