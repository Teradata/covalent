#!/usr/bin/env python3
"""
Generates Figma Code Connect files for Material Symbols icons.

Fetches all icon components from the Material Symbols Figma library and generates
a .figma.ts file that maps each icon to its name string, enabling figma.instance()
to resolve icon names in parent components like cv-button.

Usage:
  FIGMA_ACCESS_TOKEN=<token> python3 libs/components/generate-icon-code-connect.py
"""

import json
import os
import sys

import urllib.request

FIGMA_FILE_KEY = "5y0VXufoAsspMzd8G0bl0i"
FIGMA_TOKEN = os.environ.get("FIGMA_ACCESS_TOKEN")

# Page IDs in the Material Symbols file
PAGES = {
    "outlined_filled": "502:2",
    "outlined": "273:12",
}

OUTPUT_DIR = os.path.join(os.path.dirname(__file__), "src", "icon")


def fetch_icons(page_id: str) -> list[dict]:
    """Fetch all COMPONENT nodes from a Figma page."""
    url = f"https://api.figma.com/v1/files/{FIGMA_FILE_KEY}/nodes?ids={page_id}&depth=1"
    req = urllib.request.Request(url, headers={"X-Figma-Token": FIGMA_TOKEN})
    with urllib.request.urlopen(req) as resp:
        data = json.loads(resp.read())
    node = data["nodes"][page_id]["document"]
    return [
        {"name": child["name"], "id": child["id"]}
        for child in node.get("children", [])
        if child["type"] == "COMPONENT"
    ]


def generate_figma_ts(icons: list[dict], output_path: str):
    """Generate a .figma.ts file with Code Connect entries for each icon."""
    lines = [
        'import figma from "@figma/code-connect/html"',
        "",
    ]

    for icon in sorted(icons, key=lambda i: i["name"]):
        node_id = icon["id"].replace(":", "-")
        url = f"https://www.figma.com/design/{FIGMA_FILE_KEY}/Material-Symbols?node-id={node_id}"
        lines.append(f'figma.connect("{url}", {{')
        lines.append(f'  example: () => "{icon["name"]}",')
        lines.append(f"}})")
        lines.append("")

    with open(output_path, "w") as f:
        f.write("\n".join(lines))

    print(f"Generated {len(icons)} icon connections in {output_path}")


def main():
    if not FIGMA_TOKEN:
        print("Error: FIGMA_ACCESS_TOKEN environment variable is required")
        sys.exit(1)

    # Fetch icons from both pages
    print("Fetching outlined filled icons...")
    filled_icons = fetch_icons(PAGES["outlined_filled"])
    print(f"  Found {len(filled_icons)} icons")

    print("Fetching outlined icons...")
    outlined_icons = fetch_icons(PAGES["outlined"])
    print(f"  Found {len(outlined_icons)} icons")

    # Generate separate files for each style
    os.makedirs(OUTPUT_DIR, exist_ok=True)

    generate_figma_ts(
        filled_icons,
        os.path.join(OUTPUT_DIR, "icons-filled.figma.ts"),
    )
    generate_figma_ts(
        outlined_icons,
        os.path.join(OUTPUT_DIR, "icons-outlined.figma.ts"),
    )


if __name__ == "__main__":
    main()
