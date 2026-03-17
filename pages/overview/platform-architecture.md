---
title: "Platform Architecture"
description: "High-level overview of how the AccessiWay Platform works"
---

# Platform Architecture

AccessiWay Platform is a web application accessible at [platform.accessiway.com](https://platform.accessiway.com). Here's how the main pieces fit together.

## How it works

Every **account** contains one or more **touchpoints** (websites or apps). Each touchpoint goes through an accessibility audit that produces a set of **issues**. Those issues flow through a lifecycle — open, fixed, resolved, or dismissed — and your team tracks everything from the platform dashboard.

![Architecture diagram](/images/placeholder-architecture-diagram.png)
<!-- 📸 CAPTURE NEEDED: High-level architecture diagram showing Account → Touchpoints → Issues → Integrations flow -->

## Key components

| Component              | Role                                                                                             |
| ---------------------- | ------------------------------------------------------------------------------------------------ |
| **Home dashboard**     | Company-level overview with key metrics and highest-impact touchpoints                           |
| **Touchpoint detail**  | Per-touchpoint dashboard with compliance metrics, issue trends, and user-impact breakdown        |
| **Issues engine**      | Full issue list with search, filters, sorting, and detailed side panel                           |
| **Integrations layer** | Jira Cloud sync (Trello coming soon) for pushing issues into your existing workflows             |
| **Expert review**      | On-demand retest by AccessiWay accessibility experts to validate fixes                           |
| **Mitigation widget**  | Temporary accessibility fixes applied automatically while your team works on permanent solutions |

## Navigation structure

The platform uses a left sidebar for navigation:

- **Home** (`/home`) — Company dashboard
- **Touchpoints** (`/touchpoints`) — All touchpoints list
- **Platform guide** (`/platform-guide`) — FAQ and onboarding
- **Settings** — Security and team management (modal overlay)
- **Account** — Organization info and logout
