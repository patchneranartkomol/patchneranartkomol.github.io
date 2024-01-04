+++
title = 'LSP in Neovim for Curious Dummies | Part 1'
date = 2024-01-04T12:46:31-08:00
draft = true
+++

In 2016, Microsoft announced the [Language Server Protocol (LSP)](https://microsoft.github.io/language-server-protocol/), enabling any editor that implements LSP to interoperate with language tooling that speaks the protocol. Since then, LSP has gained traction across many editors and language tools. End users have come to expect a consistent IDE-like experience in any editor, for any language. With that popularity, there is no shortage of asks about how LSP works and how to configure it.

In this series of articles, we'll explore some computing concepts that enable LSP — such as process scheduling, inter-process communication, and incremental parsing. We'll take a tour of Neovim's LSP client implementation and the implementation of 2 popular language servers - [gopls](https://pkg.go.dev/golang.org/x/tools/gopls) and [python-lsp-server](https://github.com/python-lsp/python-lsp-server).

I assume, you, the curious reader, have already nailed down your LSP configuration, if you use Neovim. If you're looking for a Neovim LSP setup guide, refer to [`:help lsp-quickstart`](https://neovim.io/doc/user/lsp.html#lsp-quickstart) and [kickstart.nvim](https://github.com/nvim-lua/kickstart.nvim).
