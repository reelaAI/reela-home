import { html } from 'hono/html';
import type { HtmlEscapedString } from 'hono/utils/html';
import Header from './header';
import Footer from './footer';
import css from '../styles/style.css';

export default function layout({
  children,
  avatarUrl,
}: {
  children: HtmlEscapedString | Promise<HtmlEscapedString>;
  avatarUrl?: string;
}) {
  const gtagId = process.env.GTAG_ID;
  const Gtag = gtagId
    ? html`
        <script async src="https://www.googletagmanager.com/gtag/js?id=${gtagId}"></script>
        <script>
          window.dataLayer = window.dataLayer || [];
          function gtag() {
            window.dataLayer.push(arguments);
          }
          gtag('js', new Date());
          gtag('config', '${gtagId}', {
            page_path: window.location.pathname,
          });
        </script>
      `
    : html``;

  const Tailwind = html`
    <style type="text/tailwindcss">
      @theme {
        --color-brand: #ff0058;
      }
    </style>
  `;

  return (
    <html lang='en'>
      <head>
        <meta charset='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <title>
          Reela - AI Video Creation Platform for Avatars, Remixes &amp; Multimodal Scenes
        </title>
        <meta
          name='description'
          content='Reela is your all-in-one AI Video Agent that auto-generates videos of any kind, with human-like avatars, dubbing, and repurposing for YouTube, TikTok, stories, ads, and courses.'
        />
        <meta
          name='keywords'
          content='AI video creation,video generator,AI avatar,text to video,video editing,AI video maker,content creation,video marketing,social media videos,video automation'
        />
        <link rel='icon' type='image/x-icon' href='/favicon.ico' />
        <link rel='icon' type='image/png' sizes='32x32' href='/favicon-32x32.png' />
        <link rel='icon' type='image/png' sizes='16x16' href='/favicon-16x16.png' />
        <link rel='apple-touch-icon' sizes='180x180' href='/apple-touch-icon.png' />
        {/* <!-- tailwindcss --> */}
        <link href='/ref/daisyui.css' rel='stylesheet' type='text/css' />
        <script src='/ref/tailwindcss'></script>
        {/* <!-- google fonts --> */}
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin='anonymous' />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap'
          rel='stylesheet'
        />
        <style type='text/css'>{css}</style>
        {Gtag}
        {Tailwind}
      </head>
      <body style="font-family: 'Inter', sans-serif;">
        <div class='min-h-screen bg-[#05030d]/95 text-slate-100'>
          <Header avatarUrl={avatarUrl} />
          {children}
          <Footer />
        </div>
        <script src='/ref/client.js'></script>
      </body>
    </html>
  );
}
