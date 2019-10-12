let resumeDocxDownloader = document.getElementById('resumeDocxDownloader');
let resumePdfOpener = document.getElementById('resumePdfOpener');

let pdfUrl = "https://cdn.arakilian0.com/pdf/1/resume-v2.pdf";
let docxUrl = "https://cdn.arakilian0.com/docx/1/resume-v2.docx";

resumePdfOpener.addEventListener('click', function() {
	var win = window.open(pdfUrl, '_blank');
	win.focus();
});

resumeDocxDownloader.addEventListener('click', function() {
	var win = window.open(docxUrl, '_self');
});
