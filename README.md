# DMG db

Game Boy DMG cart collection app for iPhone. Runs entirely on the phone and works offline.

## Modules
- **Home**: completion ring, every game as one square (green = owned), recently added carts.
- **Catalog**: all games A → Z with your cart photos, search by title or code, All / Owned / Missing / Multi. A pencil marks games you edited or added; the last tile adds a new cart.
- **Game**: regional variants and which ones you own; Edit game changes the name, year and codes, or deletes the game. "Add new cart" (last tile in Catalog) adds a game that is missing.
- **Cart scanner** (the round + button): photograph a cart, straighten it, read the label code (DMG-XX-YYY) and save the photo with the game details in its metadata. Picking several saved photos at once adds them all to the collection.
- **Backup** (save icon on the Home lens): Export puts your collection, photos and game-list changes in one .zip (Save to Files); Import restores it on this or a new phone. The screen keeps a history of exports and imports. A reminder bubble shows when the collection is empty or a week has passed since your last change without a backup.

Your collection and cart photos stay on your phone only.

## Install on iPhone
1. Open the GitHub Pages link in Safari.
2. Tap Share → **Add to Home Screen**.
3. Open it once while online; after that it works in flight mode.

Fonts (Jost, Inter) are under the SIL Open Font License; see `fonts/`.
