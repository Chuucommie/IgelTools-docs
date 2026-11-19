# IgelTools Docs

Documentation for the IgelTools suite and its Model Context Protocol servers.
This repository contains **documentation only** — no app source and no marketing
copy.

Live site: <https://chuucommie.github.io/IgelTools-docs/>

Marketing lives in [`igeltools-web`](https://github.com/Chuucommie/igeltools-web)
and does not carry protocols, file paths, security details or MCP schemas.

## What is here

```
index.html               suite overview, status and quick links
architecture.html        shared storage, security, releases and MCP rules
apps/igeltvremote.html   functional + technical + MCP contract
apps/igelnotes.html      functional + technical + MCP contract
apps/igelserver.html     functional + technical + MCP tools
apps/igellauncher.html   functional + technical + MCP tools
mcp/index.html           MCP overview, registration and troubleshooting
assets/css/style.css     palette and base styles (copied from the marketing site)
assets/css/docs.css      documentation layout
assets/js/docs.js        active sidebar link and footer year
assets/icons/            suite and app icons
404.html                 GitHub Pages 404 (uses <base href="/IgelTools-docs/">)
```

## Preview

No build step. Serve the folder:

```sh
python3 -m http.server 8000
```

Then open <http://localhost:8000>.

## Edit rules

1. **Only documentation.** Behaviour, protocols, storage, security, limitations,
   build steps and MCP schemas. No marketing copy, no download pitches.
2. **Status must be true.** A server is listed as available only when its binary
   exists and is documented. Everything else is a contract or a roadmap item.
3. **No secrets.** Never paste tokens, passwords, keys or real hostnames in
   examples.
4. **MCP is normative.** The conventions on the architecture page apply to every
   server: stdio, JSON-RPC 2.0, newline-delimited, text content blocks,
   `isError`, annotations, no secrets in results, logs on stderr.
5. **Keep the marketing site out.** If a sentence belongs on the marketing site,
   it belongs in `igeltools-web` instead.

## Deploy

GitHub Pages serves `main` from the repository root; `.nojekyll` keeps Jekyll out.
The project path is `/IgelTools-docs/`, which is why `404.html` uses
`<base href="/IgelTools-docs/">`. Change that one line if the repository is
renamed or moved to a custom domain.

## Related repositories

| Repository | Contents |
| --- | --- |
| `igeltools-web` | Marketing site |
| `IgelTVRemote` | TV remote source and tests |
| `IgelNotes` | Notes source |
| `ServerManager` | IgelServer source, plus `mcp/` with `igelserver-mcp` |
| `igellauncher` | Launcher source, including the `mcp` module |
