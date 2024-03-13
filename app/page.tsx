import { Container, Col } from "@citrica/objects";
import Card from "@/components/citrica-ui/card";
import PDFFile from "@/components/citrica-ui/pdf";
import { PDFDownloadLink } from "@react-pdf/renderer"

export default function Home() {
	return (
		<>

			<section className="hero-section">
				<PDFDownloadLink document={<PDFFile />} fileName="FORM">
					{({ loading }) =>
						loading ? (
							<button> Loading Document...</button>
						) : (
							<button>Download</button>
						)
					}
				</PDFDownloadLink>
				<h1 className="display"> DISPLAY TEXT</h1>
				<PDFFile />
			</section>
		</>
	);
}
