// Function to refresh the report
function refreshReport(iframeId) {
  const iframe = document.getElementById(iframeId);
  if (iframe) {
    // Store the current src
    const currentSrc = iframe.src;
    // Add a timestamp to force refresh
    iframe.src = currentSrc.split('?')[0] + '?' + new Date().getTime();
    // Restore the original src after a brief moment
    setTimeout(() => {
      iframe.src = currentSrc;
    }, 1000);
  }
}

// Function to export the report
function exportReport(iframeId) {
  const iframe = document.getElementById(iframeId);
  if (iframe) {
    // Get the Power BI report
    const report = window.PowerBI.get(iframe);
    if (report) {
      // Export the report as PDF
      report.exportData()
        .then(function (data) {
          // Create a blob from the export data
          const blob = new Blob([data], { type: 'application/pdf' });
          // Create a temporary link to download the file
          const url = window.URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.style.display = 'none';
          a.href = url;
          a.download = 'report_export.pdf';
          document.body.appendChild(a);
          a.click();
          window.URL.revokeObjectURL(url);
        })
        .catch(function (error) {
          console.error('Error exporting report:', error);
          alert('Failed to export report. Please try again.');
        });
    }
  }
}

// Initialize Power BI report
window.addEventListener('load', function() {
  const iframe = document.getElementById('rapport');
  if (iframe) {
    // Initialize Power BI JavaScript API
    const powerbi = new window.PowerBI({
      accessToken: iframe.src.split('autoAuth=')[1].split('&')[0]
    });
    
    // Get the report instance
    powerbi.embed(iframe);
  }
}); 