# Reactor

## Invite the bot

https://discord.com/api/oauth2/authorize?client_id=838813658225180693&permissions=8&scope=bot
## Defaults

Prefix is "--".

It has admin permissions to skip over permission based errors while we continue to develop the bot.

Channel name for --react is taken from config.json, and we plan to make it customizable, too.

## Commands

--prefix

Changes the prefix. Only takes notice of first argument. Not much control on what the new prefix is for now.

--clear

Uses bulkDelete() of channel object. Only accepts numbers between 2 and 100 as an argument.

--react

Adds reactions to all messages in a channel with a spesific name.

--prep

Adds an announcement channel and makes it read-only for everyone. This is a demo version of the command. Full version will support an overhaul of the server.

