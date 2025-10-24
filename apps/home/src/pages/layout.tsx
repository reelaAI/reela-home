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
      <body style="font-family: 'Inter', sans-serif;" class='bg-[#050507] text-gray-100'>
        <div class='relative min-h-screen overflow-hidden bg-[#050507]'>
          <div class='pointer-events-none absolute inset-x-0 top-[-20%] h-[420px] bg-[radial-gradient(circle_at_top,_rgba(255,0,88,0.35),_transparent_60%)] blur-3xl opacity-90'></div>
          <div class='pointer-events-none absolute inset-y-0 left-[-40%] hidden h-full w-[520px] bg-[radial-gradient(circle,_rgba(120,98,255,0.25),_transparent_65%)] blur-3xl sm:block'></div>
          <div class='pointer-events-none absolute inset-y-0 right-[-30%] hidden h-full w-[420px] bg-[radial-gradient(circle,_rgba(255,0,88,0.22),_transparent_70%)] blur-3xl lg:block'></div>
          <Header avatarUrl={avatarUrl} />
          {children}
          <Footer />
        </div>
        <script src='/ref/client.js'></script>
      </body>
    </html>
  );
}
