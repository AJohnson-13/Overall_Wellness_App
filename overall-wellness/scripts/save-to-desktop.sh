#!/usr/bin/env sh
set -eu

SOURCE_DIR="$(CDPATH= cd -- "$(dirname -- "$0")/.." && pwd)"
DESKTOP_DIR="${DESKTOP_DIR:-$HOME/Desktop}"
TARGET_DIR="${TARGET_DIR:-$DESKTOP_DIR/summer projects/overall wellness}"

mkdir -p "$TARGET_DIR"

# Copy app files while keeping local dependency folders and logs out of the desktop export.
tar \
  --exclude='./node_modules' \
  --exclude='./npm-debug.log' \
  --exclude='./.git' \
  -C "$SOURCE_DIR" \
  -cf - . | tar -C "$TARGET_DIR" -xf -

printf 'Saved Overall Wellness app to: %s\n' "$TARGET_DIR"
printf 'Note: in a hosted workspace, this is the container/workspace desktop, not your local computer desktop.\n'
