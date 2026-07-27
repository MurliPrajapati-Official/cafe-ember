import { APIProvider, Map, AdvancedMarker, Pin } from '@vis.gl/react-google-maps';
import { motion } from 'motion/react';

const API_KEY =
  process.env.GOOGLE_MAPS_PLATFORM_KEY ||
  (import.meta as any).env?.VITE_GOOGLE_MAPS_PLATFORM_KEY ||
  (globalThis as any).GOOGLE_MAPS_PLATFORM_KEY ||
  '';
const hasValidKey = Boolean(API_KEY) && API_KEY !== 'YOUR_API_KEY';

export function MapLocation() {
  const position = { lat: 59.9207964, lng: 10.7632654 }; // Kuro Oslo coordinates

  return (
    <section className="w-full py-24 px-6 sm:px-12 md:px-24 bg-warm-white">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-stone font-sans text-xs tracking-[0.2em] uppercase mb-8 border-b border-rich-black/20 pb-2 inline-block"
        >
          Find Us
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="font-serif text-3xl sm:text-4xl md:text-5xl font-medium text-rich-black text-center mb-16 tracking-tight"
        >
          Kuro Oslo
        </motion.h2>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="w-full h-[50vh] min-h-[400px] border border-gray-200 shadow-xl overflow-hidden bg-gray-100 relative"
        >
          {!hasValidKey ? (
            <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-8 text-rich-black bg-warm-white">
              <h2 className="font-serif text-2xl font-medium mb-4">Google Maps API Key Required</h2>
              <p className="mb-2"><strong>Step 1:</strong> <a href="https://console.cloud.google.com/google/maps-apis/start?utm_campaign=gmp-code-assist-ais" target="_blank" rel="noopener" className="underline text-coffee">Get an API Key</a></p>
              <p className="mb-2"><strong>Step 2:</strong> Add your key as a secret in AI Studio:</p>
              <ul className="text-left leading-relaxed text-sm">
                <li>Open <strong>Settings</strong> (⚙️ gear icon, <strong>top-right corner</strong>)</li>
                <li>Select <strong>Secrets</strong></li>
                <li>Type <code>GOOGLE_MAPS_PLATFORM_KEY</code> as the secret name, press <strong>Enter</strong></li>
                <li>Paste your API key as the value, press <strong>Enter</strong></li>
              </ul>
              <p className="mt-4 text-stone text-xs italic">The app rebuilds automatically after you add the secret.</p>
            </div>
          ) : (
            <APIProvider apiKey={API_KEY} version="weekly">
              <Map
                defaultCenter={position}
                defaultZoom={17}
                mapId="KURO_OSLO_MAP_ID"
                internalUsageAttributionIds={['gmp_mcp_codeassist_v1_aistudio']}
                style={{ width: '100%', height: '100%' }}
                disableDefaultUI={true}
                zoomControl={true}
              >
                <AdvancedMarker position={position} title="Kuro Oslo">
                  <Pin background="#1a1a1a" borderColor="#f9f7f4" glyphColor="#f9f7f4" />
                </AdvancedMarker>
              </Map>
            </APIProvider>
          )}
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 text-center text-rich-black/70 font-sans font-medium"
        >
          <p>Kuro</p>
          <p>Thorvald Meyers gate 32, 0555 Oslo, Norway</p>
        </motion.div>
      </div>
    </section>
  );
}
