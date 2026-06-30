/**
 * Tratamento dos logos ORVIA para uso no site:
 *  - remove o fundo branco (deixa transparente) e apara as bordas
 *  - gera o logo horizontal tratado (claro) e uma variante dark
 *    (azul-marinho -> off-white, preservando o laranja da marca)
 *  - gera o ícone hexagonal tratado + conjunto de favicons
 *
 * Uso: node tools/process-assets.mjs
 */
import sharp from 'sharp';
import { mkdir } from 'node:fs/promises';

const LOGOS = 'public/logos';
const SRC_LOGO = `${LOGOS}/logo_orvia.png`;
const SRC_ICON = `${LOGOS}/logo_orvia_icon.png`;

// Off-white quente usado como cor do wordmark no tema escuro
const OFF_WHITE = [237, 233, 224];

const isNearWhite = (r, g, b) => r > 232 && g > 230 && b > 222;
const isOrange = (r, g, b) => r > 170 && g >= 70 && g <= 190 && b < 125;

/** Lê PNG -> RGBA cru, remove fundo branco. Retorna { data, info }. */
async function toCleanRaw(src) {
  const { data, info } = await sharp(src)
    .ensureAlpha()
    .raw()
    .toBuffer({ resolveWithObject: true });

  for (let i = 0; i < data.length; i += 4) {
    const r = data[i], g = data[i + 1], b = data[i + 2];
    if (data[i + 3] > 0 && isNearWhite(r, g, b)) {
      data[i + 3] = 0; // fundo branco -> transparente
    }
  }
  return { data, info };
}

function rawToSharp({ data, info }) {
  return sharp(data, {
    raw: { width: info.width, height: info.height, channels: 4 },
  }).png();
}

/** Gera uma cópia com o azul-marinho recolorido para off-white (tema escuro). */
function recolorDark({ data, info }) {
  const out = Buffer.from(data);
  for (let i = 0; i < out.length; i += 4) {
    const r = out[i], g = out[i + 1], b = out[i + 2], a = out[i + 3];
    if (a === 0) continue;
    if (isOrange(r, g, b)) continue; // mantém o laranja
    out[i] = OFF_WHITE[0];
    out[i + 1] = OFF_WHITE[1];
    out[i + 2] = OFF_WHITE[2];
  }
  return { data: out, info };
}

async function run() {
  await mkdir(LOGOS, { recursive: true });

  // ---- Logo horizontal ----
  const logoRaw = await toCleanRaw(SRC_LOGO);

  await rawToSharp(logoRaw)
    .trim()
    .toFile(`${LOGOS}/orvia-logo.png`);

  await rawToSharp(recolorDark(logoRaw))
    .trim()
    .toFile(`${LOGOS}/orvia-logo-dark.png`);

  // ---- Ícone hexagonal (transparente, aparado) ----
  const iconRaw = await toCleanRaw(SRC_ICON);
  const iconTrimmed = await rawToSharp(iconRaw).trim().toBuffer();

  await sharp(iconTrimmed).resize(128, 128, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .toFile(`${LOGOS}/orvia-icon.png`);

  // ---- Favicons (a partir do ícone aparado) ----
  const faviconSizes = [
    [16, 'favicon-16.png'],
    [32, 'favicon-32.png'],
    [180, 'apple-touch-icon.png'],
    [192, 'icon-192.png'],
    [512, 'icon-512.png'],
  ];
  for (const [size, name] of faviconSizes) {
    await sharp(iconTrimmed)
      .resize(size, size, { fit: 'contain', background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .toFile(`${LOGOS}/${name}`);
  }

  console.log('Assets tratados com sucesso.');
}

run().catch((err) => {
  console.error(err);
  process.exit(1);
});
