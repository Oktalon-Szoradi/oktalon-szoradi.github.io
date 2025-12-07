# Nifty Commands

```bash
sudo apt install ghostscript
gs -dBATCH -dNOPAUSE -sDEVICE=png16m -r300 -dUseCropBox -sOutputFile=item-%03d.png somePortableDocumentFormat.pdf
```

```bash
sudo apt install webp
cwebp Input.png -q 93 -resize 1920 0 -o Output.webp
```

or `-size 524288` to keep it under 512 KiB (524’288 bytes)
