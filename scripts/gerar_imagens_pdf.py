import fitz  # PyMuPDF
import os
import argparse

# ================= Configurações padrão =================
DEFAULT_OUTPUT_DIR = os.path.join('public', 'pdf_atualizado_2025')


def gerar_imagens(pdf_path: str, output_dir: str, dpi: int, start_page: int | None, end_page: int | None, prefixo: str):
	# Cria a pasta de saída se não existir
	os.makedirs(output_dir, exist_ok=True)

	print(f"Convertendo PDF: {pdf_path}")
	print(f"Saída: {output_dir}")
	print(f"DPI: {dpi}")
	if start_page or end_page:
		print(f"Páginas: {start_page or 1} até {end_page or 'fim'}")
	else:
		print("Páginas: todas")

	# Abre o PDF
	doc = fitz.open(pdf_path)
	try:
		# Determinar range de páginas (1-based recebido no CLI → 0-based interno)
		inicio = (start_page - 1) if start_page and start_page > 0 else 0
		fim = (end_page - 1) if end_page and end_page > 0 else (len(doc) - 1)
		if fim >= len(doc):
			fim = len(doc) - 1
		if inicio < 0:
			inicio = 0
		if inicio > fim:
			raise ValueError("Página inicial não pode ser maior que a final.")

		# Fator de zoom aproximado para atingir o DPI desejado
		# Baseado em ~72 dpi padrão → zoom = dpi / 72
		zoom = dpi / 72.0
		mat = fitz.Matrix(zoom, zoom)

		count = 0
		for page_number in range(inicio, fim + 1):
			page = doc.load_page(page_number)
			pix = page.get_pixmap(matrix=mat, alpha=False)

			# Nome sequencial com prefixo opcional
			page_label = page_number + 1
			filename = f"{prefixo}image{page_label}.png" if prefixo else f"image{page_label}.png"
			out_path = os.path.join(output_dir, filename)
			pix.save(out_path)
			count += 1
			print(f"[{count}] Página {page_label} -> {out_path}")

		print(f"Concluído! {count} imagem(ns) gerada(s).")
	finally:
		doc.close()


def main():
	parser = argparse.ArgumentParser(description='Converter páginas de um PDF para PNGs sequenciais (PyMuPDF).')
	parser.add_argument('--pdf', required=True, help='Caminho do PDF (ex.: C:/Users/usuario/Downloads/catalogo.pdf)')
	parser.add_argument('--out', default=DEFAULT_OUTPUT_DIR, help='Pasta de saída (default: public/pdf_atualizado_2025)')
	parser.add_argument('--dpi', type=int, default=200, help='DPI das imagens (default: 200)')
	parser.add_argument('--start', type=int, help='Página inicial (1-based, opcional)')
	parser.add_argument('--end', type=int, help='Página final (1-based, opcional)')
	parser.add_argument('--prefix', default='', help='Prefixo opcional para os nomes dos arquivos (ex.: "parte1_")')

	args = parser.parse_args()

	gerar_imagens(
		pdf_path=args.pdf,
		output_dir=args.out,
		dpi=args.dpi,
		start_page=args.start,
		end_page=args.end,
		prefixo=args.prefix,
	)


if __name__ == '__main__':
	main()

