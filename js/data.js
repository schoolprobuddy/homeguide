// HomeGuide NZ — Demo Data
// In production this comes from your Supabase database

const DEMO_PURCHASES = {
  'demo@homeguide.nz': {
    customer: 'Sarah Thompson',
    invoice: 'INV-2024-07291',
    date: '14 September 2024',
    retailer: 'Folders Appliances',
    retailer_city: 'Auckland',
    appliances: ['washer-lg-wm4200', 'heatpump-mitsubishi-msz', 'dishwasher-bosch-sms4']
  }
};

const QR_LOOKUP = {
  'HG-INV-2024-07291': 'demo@homeguide.nz'
};

const APPLIANCE_CATALOG = {

  'washer-lg-wm4200': {
    id: 'washer-lg-wm4200',
    name: 'LG Front Load Washer',
    brand: 'LG',
    model: 'WM4200HWA',
    category: 'washing-machine',
    icon: '🫧',
    image: 'https://www.lg.com/us/images/washers-dryers/md07561213/gallery/medium01.jpg',
    specs: '10kg · 1400rpm · Inverter Direct Drive',
    warranty_months: 24,
    requires_pro_install: false,
    purchase_date: '2024-09-14',
    guides: {
      unbox: {
        video_id: 'RUSJsgWi0QM',
        video_title: 'LG Washing Machine — How to remove transit bolts (Official)',
        steps: [
          { type: 'normal', text: 'Keep the machine in its box until you reach its permanent location. Never lay it on its side during transport.' },
          { type: 'danger', text: '<span class="danger-text">⚠ Remove all 4 transit bolts from the back panel BEFORE moving or running the machine.</span> These orange-capped bolts lock the drum during shipping. Running with them in will cause violent shaking and void your warranty.', note: 'Use the 17mm spanner included in the accessory bag. Store the bolts safely — you\'ll need them if you ever move house.' },
          { type: 'normal', text: 'Remove the foam packing pieces from inside the drum and the base of the machine.' },
          { type: 'normal', text: 'Peel all protective plastic film from the door glass, top panel, and control panel.' },
          { type: 'normal', text: 'Check the accessory bag for: inlet hose, transit bolt caps, instruction manual, and spanner.' }
        ]
      },
      install: {
        video_id: 'rcovizMf6QI',
        video_title: 'LG Washer — Shipping Materials & Installation Guide',
        steps: [
          { type: 'normal', text: 'Choose a firm, level floor. Avoid hollow tiles — vibration will amplify on unsupported surfaces.' },
          { type: 'normal', text: 'Adjust all four levelling feet until the machine is completely stable and does not rock. Lock each foot with its locking nut.' },
          { type: 'normal', text: 'Connect the blue cold water inlet hose to a cold water tap. Hand-tighten, then give it a half-turn with pliers. <strong>Do not over-tighten.</strong>' },
          { type: 'normal', text: 'Place the drain hose into a standpipe or laundry tub. The hose must reach at least 60cm high to prevent siphoning. <strong>Do not seal it airtight</strong>.' },
          { type: 'warn', text: '<span class="warn-text">Run a rinse-only c
