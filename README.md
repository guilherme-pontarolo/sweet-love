# Sweet Love - Visual Novel

This is an interactive visual novel project developed in React with TypeScript. The project uses internationalization (i18n) to support multiple languages and allows the creation of branched stories with dialogues and choices.

## Features

- Interactive stories with dialogues and choices that affect the plot
- Internationalization support (Portuguese and English)
- Audio system for background music and sound effects
- Customizable character sprites and backgrounds
- Responsive interface with Tailwind CSS

## Installation

1. Clone the repository:
   ```bash
   git clone guilherme-pontarolo/sweet-love
   cd sweet-love
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Run the project in development mode:
   ```bash
   npm run dev
   ```

4. Open the browser at `http://localhost:5173` (or the indicated port).

## How to Customize the Project

### 1. Adjusting the Chapters

The story chapters are located in `src/story/`. Each chapter is an array of `Scene` objects, where each scene contains:

- `id`: Unique scene identifier
- `dialogue`: i18n key for the dialogue (e.g., "chapter1__start")
- `choices`: Array of options, each with `text` (i18n key), `nextScene`, and optionally `effects`

To adjust dialogues and mapping:

- Edit the `chapter1.ts` and `chapter2.ts` files
- Add new scenes or modify existing ones
- Ensure that `nextScene` points to valid IDs

### 2. Adding Texts to i18n

Texts are organized in `src/locales/pt/` and `src/locales/en/`.

- To add new texts, edit `translation.json` in both folders
- Use descriptive keys for easier maintenance

### 3. Using i18n Keys in Chapters

In the `chapter1.ts` and `chapter2.ts` files, use the following key conventions:

- **Dialogues**: `chapter{id}__{scene_id}` (e.g., `chapter1__start`, `chapter2__19`)
- **Options**: `chapter{id}_{scene_id}_option{number}` (e.g., `chapter1_start_option1`, `chapter2_19_option2`)

Example:
```typescript
{
  id: "start",
  dialogue: "chapter1__start",
  choices: [
    { text: "chapter1_start_option1", nextScene: "1" },
    { text: "chapter1_start_option2", nextScene: "2" }
  ]
}
```

Add the corresponding translations in the locale files.

### 4. Updating Sprites

- **Backgrounds**: Add images to `src/assets/images/wallPapers/` and import them in the chapter
- **Characters**: Add sprites to `src/assets/images/character/man/` or `woman/`
- Update the `backgroundImage`, `manMood`, and `womanMood` properties in the scenes

## How to Deploy the Project

1. Run the production build:
   ```bash
   npm run build
   ```

2. The optimized files will be generated in the `dist/` folder.

3. To preview locally:
   ```bash
   npm run preview
   ```

4. For deployment:
   - Upload the `dist/` folder to a static web server (e.g., Netlify, Vercel, GitHub Pages)
   - Or configure a server to serve the static files

## Project Structure

```
src/
├── components/     # React components
├── contexts/       # Contexts (e.g., AudioPlayer)
├── engine/         # Story engine logic
├── hooks/          # Custom hooks
├── locales/        # Translation files
├── story/          # Story chapters
└── assets/         # Images and audios
```

## Technologies Used

- React 19
- TypeScript
- Vite
- Tailwind CSS
- i18next
- React Player

## Contributing

We welcome contributions! If you'd like to contribute to this project, please follow these steps:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Make your changes and commit them (`git commit -m 'Add some feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure your code follows the project's coding standards and includes appropriate tests if applicable.
