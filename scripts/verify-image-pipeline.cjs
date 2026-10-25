const assert = require("node:assert/strict");
const fs = require("node:fs");
const path = require("node:path");
const { createRequire } = require("node:module");

const sharp = createRequire(require.resolve("gatsby-plugin-sharp"))("sharp");

async function main() {
  for (const name of ["gatsby-plugin-manifest", "gatsby-transformer-sharp", "gatsby-sharp"]) {
    const dependencySharp = createRequire(require.resolve(name))("sharp");
    assert.equal(dependencySharp.versions.sharp, "0.35.5", name);
    assert.equal(dependencySharp.versions.rsvg, "2.63.2", name);
  }

  const input = await sharp({ create: { width: 32, height: 24, channels: 4, background: "#446688" } }).png().toBuffer();
  for (const format of ["png", "jpeg", "webp", "avif"]) {
    const output = await sharp(input).resize(16, 12).toFormat(format).toBuffer();
    const metadata = await sharp(output).metadata();
    assert.equal(metadata.format, format === "avif" ? "heif" : format);
    if (format === "avif") assert.equal(metadata.compression, "av1");
    assert.equal(metadata.width, 16);
    assert.equal(metadata.height, 12);
  }
  const svg = Buffer.from('<svg xmlns="http://www.w3.org/2000/svg" width="12" height="8"><rect width="12" height="8" fill="blue"/></svg>');
  const svgPng = await sharp(svg).png().toBuffer();
  assert.equal((await sharp(svgPng).metadata()).width, 12);

  // Check the real Gatsby output as well as standalone codec compatibility.
  const images = fs.readdirSync("public/static", { recursive: true }).filter(file => /\.(png|jpe?g|webp|avif)$/.test(file));
  for (const extension of ["png", "webp"]) {
    const image = images.find(file => file.endsWith("." + extension));
    assert.ok(image, "Gatsby must generate " + extension + " images");
    const metadata = await sharp(path.join("public/static", image)).metadata();
    assert.ok(metadata.width > 0 && metadata.height > 0);
  }
  assert.ok(fs.existsSync("public/manifest.webmanifest"));
  console.log(`Verified sharp ${sharp.versions.sharp}, librsvg ${sharp.versions.rsvg}, four raster codecs, SVG and ${images.length} Gatsby images.`);
}

main().catch(error => { console.error(error); process.exitCode = 1; });
