# PDF → Imagens (png) - Atualização 2025

Script para converter páginas de um PDF em imagens PNG sequenciais.

## Requisitos

- Python 3.9+
- PyMuPDF

Instale:

```
pip install PyMuPDF
```

## Uso

```
python scripts/gerar_imagens_pdf.py --pdf "C:/Users/SeuUsuario/Downloads/CATALOGO_2025.pdf"
```

Opções:

- `--out` pasta de saída (default: `public/pdf_atualizado_2025`)
- `--dpi` resolução em DPI (default: 200)
- `--start` página inicial (1-based)
- `--end` página final (1-based)
- `--prefix` prefixo opcional para os nomes dos arquivos

### Exemplos

1. Todas as páginas, 200 dpi, saída padrão:

```
python scripts/gerar_imagens_pdf.py --pdf "C:/.../CATALOGO_2025.pdf"
```

2. Apenas páginas 13 a 61, com prefixo:

```
python scripts/gerar_imagens_pdf.py --pdf "C:/.../CATALOGO_2025.pdf" --start 13 --end 61 --prefix "parte2_"
```

3. Saída customizada e DPI 300:

```
python scripts/gerar_imagens_pdf.py --pdf "C:/.../CATALOGO_2025.pdf" --out "public/pdf_atualizado_2025" --dpi 300
```

As imagens serão geradas como `image{N}.png` (ou `prefixoimage{N}.png`) na pasta de saída.

