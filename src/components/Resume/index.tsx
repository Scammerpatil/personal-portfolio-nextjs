import React from "react";
import jsPDF from "jspdf";
import "katex/dist/katex.min.css";

const Resume = (props: any) => {
  const generatePDF = () => {
    const doc = new jsPDF();

    const latexContent = `
    \\documentclass[letterpaper,10pt]{article}
    \\usepackage{latexsym}
    \\usepackage[empty]{fullpage}
    \\usepackage{titlesec}
    \\usepackage{marvosym}
    \\usepackage{multicol}
    \\usepackage[usenames,dvipsnames]{color}
    \\usepackage{verbatim}
    \\usepackage{enumitem}
    \\usepackage[hidelinks]{hyperref}
    \\usepackage{fancyhdr}
    \\usepackage[english]{babel}
    \\usepackage{tabularx}
    \\input{glyphtounicode}
    \\pagestyle{fancy}
    \\fancyhf{}
    \\fancyfoot{}
    \\renewcommand{\\headrulewidth}{0pt}
    \\renewcommand{\\footrulewidth}{0pt}

    \\begin{document}
    \\begin{center}
    \\Huge \\textbf{Saurav Patil}\\\\
    \\small Gat No. 1513/1, Pimple Road, Amalner, Jalgaon 425401\\\\
    \\href{mailto:sauravpatil.rcpit@gmail.com}{sauravpatil.rcpit@gmail.com}
    \\end{center}
    \\section{Education}
    \\begin{itemize}
    \\item \\textbf{R.C. Patel Institute of Technology}, B.Tech in Computer Engineering, CGPA: 7.45/10
    \\end{itemize}
    \\end{document}
    `;

    // Adding text
    doc.text("Saurav Patil | Java Developer", 10, 10);
    doc.text(props.contactInformation.name, 10, 20);
    doc.text("Here's my LaTeX content:", 10, 30);

    // Save the PDF
    doc.save("resume.pdf");
  };

  return (
    <div>
      <h1>{props.contactInformation.name}</h1>
      <button onClick={generatePDF}>Download PDF</button>
    </div>
  );
};

export default Resume;
