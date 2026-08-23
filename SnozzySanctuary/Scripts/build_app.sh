#!/usr/bin/env bash
set -euo pipefail

SCRIPT_DIR="$(cd "$(dirname "$0")" && pwd)"
PROJECT_ROOT="$(cd "$SCRIPT_DIR/.." && pwd)"
CONFIGURATION="${1:-release}"

case "$CONFIGURATION" in
  debug|release) ;;
  *)
    echo "usage: $0 [debug|release]" >&2
    exit 2
    ;;
esac

cd "$PROJECT_ROOT"
"$PROJECT_ROOT/Scripts/verify_assets.py"
swift build -c "$CONFIGURATION" --product SnozzySanctuary
BIN_DIR="$(swift build -c "$CONFIGURATION" --show-bin-path)"

APP_BUNDLE="$PROJECT_ROOT/dist/Snozzy Sanctuary.app"
CONTENTS="$APP_BUNDLE/Contents"
MACOS_DIR="$CONTENTS/MacOS"
RESOURCES_DIR="$CONTENTS/Resources"

rm -rf "$APP_BUNDLE"
mkdir -p "$MACOS_DIR" "$RESOURCES_DIR"
cp "$BIN_DIR/SnozzySanctuary" "$MACOS_DIR/SnozzySanctuary"
cp "$PROJECT_ROOT/Resources/Info.plist" "$CONTENTS/Info.plist"
/usr/bin/ditto "$PROJECT_ROOT/Resources" "$RESOURCES_DIR"

/usr/bin/plutil -lint "$CONTENTS/Info.plist" >/dev/null
/usr/bin/codesign --force --deep --sign - "$APP_BUNDLE" >/dev/null

echo "$APP_BUNDLE"
