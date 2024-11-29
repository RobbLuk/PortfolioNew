# TL;DR

## 🛠 Installation & Set Up

1. Install the Gatsby CLI

   ```sh
   npm install -g gatsby-cli
   ```

2. Install and use the correct version of Node using [NVM](https://github.com/nvm-sh/nvm)

   ```sh
   nvm install
   ```

3. Install dependencies

   ```sh
   yarn
   ```

4. Start the development server

   ```sh
   npm start
   ```

## 🚀 Building and Running for Production

1. Generate a full static production build

   ```sh
   npm run build
   ```

1. Preview the site as it will appear once deployed

   ```sh
   npm run serve
   ```

## 🎨 Color Reference

| Color          | Hex                                                                |
| -------------- | ------------------------------------------------------------------ |
| Navy           | ![#0a192f](https://via.placeholder.com/10/0a192f?text=+) `#0a192f` |
| Light Navy     | ![#172a45](https://via.placeholder.com/10/0a192f?text=+) `#172a45` |
| Lightest Navy  | ![#303C55](https://via.placeholder.com/10/303C55?text=+) `#303C55` |
| Slate          | ![#8892b0](https://via.placeholder.com/10/8892b0?text=+) `#8892b0` |
| Light Slate    | ![#a8b2d1](https://via.placeholder.com/10/a8b2d1?text=+) `#a8b2d1` |
| Lightest Slate | ![#ccd6f6](https://via.placeholder.com/10/ccd6f6?text=+) `#ccd6f6` |
| White          | ![#e6f1ff](https://via.placeholder.com/10/e6f1ff?text=+) `#e6f1ff` |
| Green          | ![#64ffda](https://via.placeholder.com/10/64ffda?text=+) `#64ffda` |

## -----------------------------------------------------------------------------------

Palette 1: Classic and Clean

Background: #FFFFFF (White)
Primary Text: #333333 (Dark Grey)
Secondary Text: #555555 (Medium Grey)
Accent: #5C80BC (Soft Blue)
Buttons/Hover: #B1A296 (Warm Beige)

Palette 2: Modern Minimalist

Background: #F9F9F9 (Off-White)
Primary Text: #2E2E2E (Charcoal Grey)
Secondary Text: #707070 (Slate Grey)
Accent: #DAA49A (Salmon Pink)
Buttons/Hover: #C5E0DC (Mint Green)
Palette 3: Professional and Polished

Background: #E8E8E8 (Light Grey)
Primary Text: #1C1C1C (Jet Black)
Secondary Text: #4A4A4A (Dark Grey)
Accent: #A9BCD0 (Steel Blue)
Buttons/Hover: #ACC7B4 (Sage Green)
Palette 4: Warm and Welcoming

Background: #FFF8E8 (Ivory)
Primary Text: #303030 (Dark Grey)
Secondary Text: #626262 (Medium Grey)
Accent: #F4A261 (Sandy Brown)
Buttons/Hover: #2A9D8F (Teal)
Palette 5: Cool and Creative

Background: #F4F7FA (Alabaster)
Primary Text: #2F4858 (Gunmetal Blue)
Secondary Text: #78909C (Blue Grey)
Accent: #FF6B6B (Bittersweet)
Buttons/Hover: #FFE66D (Mustard)
Palette 6: Bold and Energetic

Background: #FAFAFA (White Smoke)
Primary Text: #272727 (Off Black)
Secondary Text: #484848 (Asphalt)
Accent: #FF9F1C (Vivid Orange)
Buttons/Hover: #E71D36 (Red Orange)
Palette 7: Fresh and Natural

Background: #F7FFF7 (Mint Cream)
Primary Text: #334E68 (Indigo Dye)
Secondary Text: #2C6975 (Sea Green)
Accent: #FFD166 (Yellow Orange)
Buttons/Hover: #06D6A0 (Aquamarine)
Palette 8: Sophisticated and Luxurious

Background: #FBF5F3 (Baby Pink)
Primary Text: #493843 (Eggplant)
Secondary Text: #736372 (Old Lavender)
Accent: #E4A687 (Dusty Pink)
Buttons/Hover: #9D8189 (Old Rose)
Palette 9: Earthy and Organic

Background: #FAF4F2 (Linen)
Primary Text: #505A5B (Cadet)
Secondary Text: #688B8A (Feldgrau)
Accent: #A3C4BC (Morning Blue)
Buttons/Hover: #D0C9C0 (Silver Pink)
Palette 10: Dynamic and Digital

Background: #EFEFEF (White Smoke)
Primary Text: #262626 (Raisin Black)
Secondary Text: #6E6E6E (Granite Gray)
Accent: #4ECDC4 (Medium Turquoise)
Buttons/Hover: #FF6B6B (Soft Red)

After Changing files. Build and new version for production (My personal informations to prevent errors)

Generate a full static production build for GitHub pages

Change the folder "docs" to "public"

```sh

$env:NODE_OPTIONS="--openssl-legacy-provider"

npm install -g gatsby-cli

npm install

npm run build

```

Check the folder inside "public" to have "index.html"

Change the folder back from "public" to "docs"

```sh

git add .

git commit -m "updated files ..." --no-verify

git push

```
