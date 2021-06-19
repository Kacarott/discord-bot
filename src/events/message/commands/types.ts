import { Message } from "discord.js";
// reexport for convenience
export { Message };

// Argument validation should happen in each command with common helper functions.
// On error, commands can post a help message that's deleted after some time.
/// A command.
export type Command = (
  message: Message,
  args: CommandArg[],
  opts: Record<string, string>
) => Promise<void>;

export type CommandArg = Word | CodeBlock | DiscordObject;

export type Word = {
  type: "word";
  word: string;
};

export type CodeBlock = {
  type: "code";
  info: string;
  code: string;
};

export type DiscordObject = {
  type: "user" | "role" | "channel";
  id: string;
};
