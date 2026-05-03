// HomeGuide NZ — Demo Data

var DEMO_PURCHASES = {
  'demo@homeguide.nz': {
    customer: 'Sarah Thompson',
    invoice: 'INV-2024-07291',
    date: '14 September 2024',
    retailer: 'Folders Appliances',
    retailer_city: 'Auckland',
    appliances: ['washer-lg-wm4200', 'heatpump-mitsubishi-msz', 'dishwasher-bosch-sms4']
  }
};

var QR_LOOKUP = {
  'HG-INV-2024-07291': 'demo@homeguide.nz'
};

var APPLIANCE_CATALOG = {

  'washer-lg-wm4200': {
    id: 'washer-lg-wm4200',
    name: 'LG Front Load Washer',
    brand: 'LG',
    model: 'WM4200HWA',
    category: 'washing-machine',
    icon: '🫧',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/LG_Front_Load_Washer.jpg/400px-LG_Front_Load_Washer.jpg',
    specs: '10kg · 1400rpm · Inverter Direct Drive',
    warranty_months: 24,
    requires_pro_install: false,
    purchase_date: '2024-09-14',
    guides: {
      unbox: {
        video_id: 'RUSJsgWi0QM',
        video_title: 'LG Washing Machine - How to remove transit bolts',
        steps: [
          { type: 'normal', text: 'Keep the machine in its box until you reach its permanent location. Never lay it on its side.' },
          { type: 'danger', text: 'CRITICAL: Remove all 4 transit bolts from the back panel BEFORE running the machine. Running with them in will cause violent shaking and void your warranty.' },
          { type: 'normal', text: 'Remove foam packing from inside the drum and base.' },
          { type: 'normal', text: 'Peel all protective plastic film from the door glass and panels.' },
          { type: 'normal', text: 'Check the accessory bag for: inlet hose, transit bolt caps, manual, and spanner.' }
        ]
      },
      install: {
        video_id: 'rcovizMf6QI',
        video_title: 'LG Washer - Installation Guide',
        steps: [
          { type: 'normal', text: 'Choose a firm, level floor. Avoid hollow tiles.' },
          { type: 'normal', text: 'Adjust all four levelling feet until the machine does not rock. Lock each foot with its locking nut.' },
          { type: 'normal', text: 'Connect the blue cold water inlet hose to a cold water tap. Hand-tighten then half a turn more.' },
          { type: 'normal', text: 'Place the drain hose into a standpipe or tub at least 60cm high. Do not seal it airtight.' },
          { type: 'warn', text: 'Run a rinse-only cycle with no laundry first to check for leaks.' }
        ]
      },
      troubleshoot: [
        {
          symptom: 'Machine vibrating violently or moving across the floor',
          fixes: [
            'First check: Are the 4 transit bolts still in the back? This is the number one cause.',
            'Check all 4 levelling feet are firm on the floor.',
            'Make sure the load is not too small or unevenly packed.',
            'Error code UE means Unbalanced - redistribute clothes and restart.'
          ]
        },
        {
          symptom: 'Machine not draining',
          fixes: [
            'Check the pump filter at the bottom front - clean it monthly.',
            'Make sure the drain hose is not kinked.',
            'Drain hose must be between 60cm and 100cm high.'
          ]
        },
        {
          symptom: 'Door will not open after cycle',
          fixes: [
            'Wait 3 minutes - the door lock releases automatically.',
            'Check there is no water remaining in the drum.',
            'Turn off at the power point, wait 5 minutes, turn back on.'
          ]
        }
      ],
      warranty: {
        coverage: '2 years parts and labour',
        includes: ['Manufacturing defects', 'Motor (10 year additional warranty)', 'Internal components'],
        excludes: ['Transit bolts not removed', 'Incorrect installation', 'Consumer misuse'],
        repairs: []
      }
    }
  },

  'heatpump-mitsubishi-msz': {
    id: 'heatpump-mitsubishi-msz',
    name: 'Mitsubishi Heat Pump',
    brand: 'Mitsubishi Electric',
    model: 'MSZ-AP35VGD',
    category: 'heat-pump',
    icon: '❄️',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/8a/Air_conditioning_unit-en.svg/400px-Air_conditioning_unit-en.svg.png',
    specs: '3.5kW · Hyper Heat · Wall unit',
    warranty_months: 60,
    requires_pro_install: true,
    pro_install_reason: 'Heat pumps contain refrigerant gases (R32) and must be installed by a registered technician under NZ Building Code. Uncertified installation voids warranty and may be illegal.',
    pro_install_trades: [
      { name: 'Thermokool Heat Pumps', type: 'Registered refrigeration technician - Auckland', icon: '🔧' },
      { name: 'CoolAir NZ', type: 'Heat pump specialist - NZ wide', icon: '❄️' }
    ],
    purchase_date: '2024-09-14',
    guides: {
      unbox: {
        video_id: 'aNJTqiSe8s4',
        video_title: 'Mitsubishi Electric Heat Pump Overview',
        steps: [
          { type: 'danger', text: 'Do NOT attempt to install this heat pump yourself. NZ law requires a registered refrigeration technician.' },
          { type: 'normal', text: 'Check the box contains: indoor wall unit, remote control, 2x AAA batteries, manual, and mounting plate.' },
          { type: 'normal', text: 'Do not discard packaging until installer confirms everything is present.' },
          { type: 'normal', text: 'Store both units indoors and away from moisture until installer arrives.' }
        ]
      },
      install: {
        video_id: 'aNJTqiSe8s4',
        video_title: 'Heat pump installation overview',
        steps: [
          { type: 'danger', text: 'Licensed installer required. The following is an overview only - not a DIY guide.' },
          { type: 'normal', text: 'Indoor unit mounted on wall bracket 180-220cm from floor, away from direct sunlight.' },
          { type: 'normal', text: 'Technician drills through wall for refrigerant lines, power cable, and condensate drain.' },
          { type: 'normal', text: 'Outdoor unit placed with at least 30cm clearance on all sides for airflow.' },
          { type: 'warn', text: 'After installation: technician runs a test cycle and shows you how to use the remote.' }
        ]
      },
      troubleshoot: [
        {
          symptom: 'Heat pump not heating or cooling',
          fixes: [
            'Check remote has batteries and is set to correct mode (HEAT or COOL).',
            'Check air filters - dirty filters are the number one cause of poor performance. Clean every 2-3 months.',
            'Make sure windows and doors are closed.',
            'Check outdoor unit is not blocked by leaves or furniture.'
          ]
        },
        {
          symptom: 'How to clean the air filters',
          fixes: [
            'Open front panel of indoor unit by lifting from the bottom.',
            'Slide out the mesh filters.',
            'Wash with warm soapy water, rinse well, dry completely before reinserting.',
            'Clean every 2-3 months or when CLEAN FILTER light appears.'
          ]
        }
      ],
      warranty: {
        coverage: '5 years parts and labour (Mitsubishi Electric NZ)',
        includes: ['All manufacturing defects', 'Refrigerant system', 'Compressor'],
        excludes: ['Installation not by registered technician', 'Blocked filters', 'Normal wear'],
        repairs: []
      }
    }
  },

  'dishwasher-bosch-sms4': {
    id: 'dishwasher-bosch-sms4',
    name: 'Bosch Dishwasher',
    brand: 'Bosch',
    model: 'SMS4HVW00A',
    category: 'dishwasher',
    icon: '🍽️',
    image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Dishwasher_open.jpg/400px-Dishwasher_open.jpg',
    specs: '60cm · 14 place settings · A-rated',
    warranty_months: 24,
    requires_pro_install: false,
    purchase_date: '2024-09-14',
    guides: {
      unbox: {
        video_id: 'CL0jMLuRjKU',
        video_title: 'Bosch Dishwasher - Unboxing and First Use',
        steps: [
          { type: 'normal', text: 'Keep the machine upright during unboxing. Do not tilt more than 45 degrees.' },
          { type: 'normal', text: 'Remove all packaging including foam blocks, protective film, and cardboard tray under the machine.' },
          { type: 'normal', text: 'Check accessories: inlet hose, drain hose, Aquastop connector (red), mounting screws, manual.' },
          { type: 'warn', text: 'Before first use: add dishwasher salt to the softener unit at the bottom of the drum, and fill the rinse aid dispenser on the door.' }
        ]
      },
      install: {
        video_id: 'yhQvnqk7_Hg',
        video_title: 'How to install a freestanding dishwasher',
        steps: [
          { type: 'normal', text: 'Position close to your sink to keep hose runs short.' },
          { type: 'normal', text: 'Connect the inlet hose with the red Aquastop connector to a cold water tap. Do not remove the red connector.' },
          { type: 'normal', text: 'The drain hose must be elevated to at least 50cm before going down to the drain.' },
          { type: 'warn', text: 'If connecting to new plumbing, use a licensed plumber. Connecting to an existing tap is a DIY job.' },
          { type: 'normal', text: 'Level the machine, turn on water, run a short program to check for leaks before loading dishes.' }
        ]
      },
      troubleshoot: [
        {
          symptom: 'Dishes not coming out clean',
          fixes: [
            'Check dishwasher salt level - indicator light shows when empty.',
            'Clean the spray arms - remove and rinse, clear blocked holes with a toothpick.',
            'Make sure dishes are not blocking spray arms from spinning.',
            'Clean the filter at the base of the drum monthly.'
          ]
        },
        {
          symptom: 'White residue or cloudy glasses',
          fixes: [
            'Top up the rinse aid dispenser - most common cause of cloudy glasses.',
            'Auckland water is soft, Christchurch is harder - adjust salt setting accordingly.'
          ]
        }
      ],
      warranty: {
        coverage: '2 years parts and labour',
        includes: ['Manufacturing defects', 'Electronic control failures', 'Internal pump and motor'],
        excludes: ['Incorrect installation', 'Blocked filters', 'Wrong detergent'],
        repairs: []
      }
    }
  }
};
