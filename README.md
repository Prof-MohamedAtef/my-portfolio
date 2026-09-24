# Mohamed Atef — Portfolio Landing Page

Responsive single-page PHP portfolio. No database or framework is required.

## Run locally

### XAMPP / Apache
1. Copy the `mohamed-atef-portfolio` folder into `C:\xampp\htdocs\`.
2. Start **Apache** from XAMPP Control Panel.
3. Open `http://localhost/mohamed-atef-portfolio/`.

### PHP built-in server
From the project folder:
```bash
php -S localhost:8000
```
Then open `http://localhost:8000`.

## Deploy
Upload the whole folder to any PHP-capable shared hosting (`public_html`, `www`, or equivalent). `index.php` is the entry point.

## Before publishing
- Replace `contact@example.com` in `index.php` with the public email you want to expose, or remove the Contact button.
- Review certificate images before publishing. Identity documents were intentionally excluded.
- Salary figures are static snapshots from Glassdoor observed in September 2026. Re-check them periodically.

## Structure
- `index.php` — page content and PHP arrays for certificates/videos
- `style.css` — responsive design
- `script.js` — mobile navigation + certificate lightbox
- `assets/images/` — profile image
- `assets/certificates/` — deduplicated public certificate images
