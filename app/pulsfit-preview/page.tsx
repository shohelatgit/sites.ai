'use client';

export default function PulseFitPreview() {
  return (
    <div style={{ width: '100%', height: '100vh', margin: 0, padding: 0, border: 'none' }}>
      <iframe
        src="/pulsfit-original.html"
        style={{
          width: '100%',
          height: '100%',
          border: 'none',
          margin: 0,
          padding: 0,
        }}
        title="PulseFit Gym"
        sandbox="allow-same-origin allow-scripts allow-forms"
      />
    </div>
  );
}
