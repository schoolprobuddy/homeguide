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

// QR code demo — encodes an invoice lookup
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
          { type: 'normal', text: 'Check the accessory bag for: inlet hose, transit bolt caps (to cover the holes), instruction manual, and spanner.' }
        ]
      },
      install: {
        video_id: 'rcovizMf6QI',
        video_title: 'LG Washer — Shipping Materials & Installation Guide',
        steps: [
          { type: 'normal', text: 'Choose a firm, level floor. Avoid hollow tiles — vibration will amplify on unsupported surfaces.' },
          { type: 'normal', text: 'Adjust all four levelling feet until the machine is completely stable and doesn\'t rock. Turn feet clockwise to lower, anti-clockwise to raise. Lock each foot with its locking nut.' },
          { type: 'normal', text: 'Connect the blue cold water inlet hose to a cold water tap (3/4" thread). Hand-tighten, then give it a half-turn with pliers. <strong>Do not over-tighten.</strong>' },
          { type: 'normal', text: 'Place the drain hose into a standpipe or laundry tub. The hose must reach at least 60cm high to prevent siphoning. <strong>Do not seal it airtight</strong> — it needs an air gap.' },
          { type: 'warn', text: '<span class="warn-text">Run a rinse-only cycle with no laundry first</span> to flush the system and check for leaks before doing any washing.' }
        ]
      },
      troubleshoot: [
        {
          symptom: '🔴 Machine vibrating violently or "walking" across the floor',
          fixes: ['<strong>First check: Are the 4 transit bolts still in the back?</strong> This is the #1 cause of shaking in new machines.', 'Check all 4 levelling feet are firm on the floor — none should wobble.', 'Make sure the load isn\'t too small (under 1kg can cause imbalance) or unevenly packed.', 'Error code UE means Unbalanced — open and redistribute clothes manually.']
        },
        {
          symptom: '🔴 Machine not draining or UE/LE error code',
          fixes: ['Check the pump filter at the bottom front — open the small door, unscrew the cap and clean monthly.', 'Make sure the drain hose isn\'t kinked or blocked.', 'Check the drain hose height — it must be between 60cm and 100cm high.']
        },
        {
          symptom: '🔴 Door won\'t open after cycle',
          fixes: ['Wait 3 minutes after the cycle ends — the door lock releases automatically.', 'Check there\'s no water remaining in the drum (the machine won\'t open if water level is high).', 'If still locked, turn the machine off at the power point, wait 5 minutes, then turn back on.']
        },
        {
          symptom: '🟡 Mould smell from the drum',
          fixes: ['Run a hot wash (60°C+) with no laundry once a month.', 'Always leave the door and detergent drawer slightly open after each wash.', 'Use a dedicated washing machine cleaner every 3 months (e.g. Dettol or Brew Booster).']
        }
      ],
      warranty: {
        coverage: '2 years parts & labour',
        includes: ['Manufacturing defects', 'Motor (10 year additional warranty)', 'Internal components'],
        excludes: ['Damage from transit bolts not being removed', 'Incorrect installation', 'Consumer misuse', 'Cosmetic damage after delivery'],
        repairs: [
          { date: 'No repairs logged yet', description: '', status: '' }
        ]
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
    image: 'https://www.mitsubishi-electric.co.nz/images/products/heatpumps/MSZ-AP-Series/MSZ-AP35VGD.png',
    specs: '3.5kW · Hyper Heat · Wall unit',
    warranty_months: 60,
    requires_pro_install: true,
    pro_install_reason: 'Heat pumps contain refrigerant gases (R32) and must be installed by a registered refrigeration/heat pump technician under NZ Building Code clause G14. An uncertified installation will void the manufacturer warranty and may be illegal.',
    pro_install_trades: [
      { name: 'Thermokool Heat Pumps', type: 'Registered refrigeration technician · Auckland', icon: '🔧' },
      { name: 'CoolAir NZ', type: 'Heat pump specialist · NZ-wide installation', icon: '❄️' }
    ],
    purchase_date: '2024-09-14',
    guides: {
      unbox: {
        video_id: 'aNJTqiSe8s4',
        video_title: 'Mitsubishi Electric Heat Pump — How it works & what to expect',
        steps: [
          { type: 'danger', text: '<span class="danger-text">⚠ Do not attempt to install this heat pump yourself.</span> NZ law requires a registered refrigeration technician. Book a certified installer before unboxing.' },
          { type: 'normal', text: 'Check the box contains: indoor wall unit, remote control, batteries (x2 AAA), installation manual, and mounting plate. The outdoor unit is in a separate box.' },
          { type: 'normal', text: 'Do not discard any packaging until the installer has confirmed everything is present and undamaged.' },
          { type: 'normal', text: 'Store both units indoors and away from moisture until the installer arrives.' }
        ]
      },
      install: {
        video_id: 'aNJTqiSe8s4',
        video_title: 'Heat pump installation overview (by certified technician)',
        steps: [
          { type: 'danger', text: '<span class="danger-text">Licensed installer required.</span> The following is an overview of what your technician will do — not a DIY guide.' },
          { type: 'normal', text: 'Indoor unit is mounted on a wall bracket, typically 180–220cm from the floor, away from direct sunlight and heat sources.' },
          { type: 'normal', text: 'The technician drills through the wall for refrigerant lines, power cable, and condensate drain.' },
          { type: 'normal', text: 'Outdoor unit is placed on a flat surface or wall bracket with at least 30cm clearance on all sides for airflow.' },
          { type: 'normal', text: 'Refrigerant lines are connected, pressure tested, and vacuumed before refrigerant is added. This step requires licensed certification.' },
          { type: 'warn', text: '<span class="warn-text">After installation:</span> The technician will run a test cycle and show you how to use the remote and set your preferred temperature zones.' }
        ]
      },
      troubleshoot: [
        {
          symptom: '🔴 Heat pump not heating or cooling',
          fixes: ['Check the remote control has batteries and is set to the correct mode (HEAT or COOL).', 'Check the air filters — dirty filters are the #1 cause of reduced performance. Clean every 2–3 months.', 'Make sure windows and doors are closed in the room.', 'Check outdoor unit is not blocked by leaves, ice, or garden furniture.']
        },
        {
          symptom: '🟡 Unusual noise or dripping sound',
          fixes: ['A light dripping from the outdoor unit is normal (condensation).', 'Clicking or cracking sounds when starting up are normal expansion noises.', 'Loud rattling may indicate the outdoor unit base isn\'t level — check with your installer.']
        },
        {
          symptom: '🟡 How to clean the air filters',
          fixes: ['Open the front panel of the indoor unit by lifting from the bottom.', 'Slide out the mesh filters (usually two).', 'Wash with warm soapy water, rinse well, and allow to dry completely before reinserting.', 'Clean every 2–3 months or when the CLEAN FILTER light appears on the display.']
        }
      ],
      warranty: {
        coverage: '5 years parts & labour (Mitsubishi Electric NZ)',
        includes: ['All manufacturing defects', 'Refrigerant system', 'Compressor (additional 5-year coverage)'],
        excludes: ['Installation not carried out by a registered technician', 'Damage from restricted airflow (blocked filters)', 'Normal wear and filter cleaning'],
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
    image: 'https://media3.bosch-home.com/Images/9999999999999/2018/11/1/7ca48aad06d947c8a87826b7e7fa9d74/SMS4HVI33E_def.png',
    specs: '60cm · 14 place settings · A-rated',
    warranty_months: 24,
    requires_pro_install: false,
    purchase_date: '2024-09-14',
    guides: {
      unbox: {
        video_id: 'CL0jMLuRjKU',
        video_title: 'Bosch Dishwasher — Unboxing & First Use Guide',
        steps: [
          { type: 'normal', text: 'Keep the machine upright during unboxing. Do not tilt more than 45°.' },
          { type: 'normal', text: 'Remove all packaging including the foam blocks inside the drum, protective film on the door, and the cardboard tray under the machine.' },
          { type: 'normal', text: 'Check accessories: inlet hose, drain hose, inlet hose with aquastop (red connector), mounting screws, and installation guide.' },
          { type: 'warn', text: '<span class="warn-text">Before first use:</span> Add dishwasher salt to the softener unit (located at the bottom of the drum), and fill the rinse aid dispenser on the door. Without salt, your dishes won\'t come out clean and the machine will work harder.' }
        ]
      },
      install: {
        video_id: 'yhQvnqk7_Hg',
        video_title: 'How to install a freestanding dishwasher — step by step',
        steps: [
          { type: 'normal', text: 'Position close to your sink to keep hose runs short (max 1.5m inlet hose, max 1.5m drain hose extension).' },
          { type: 'normal', text: 'Connect the inlet hose (with Aquastop safety valve — the red end) to a cold water tap. Do not remove the red Aquastop connector.' },
          { type: 'normal', text: 'The drain hose must be elevated to at least 50cm before going down to the drain or trap. This prevents backflow.' },
          { type: 'warn', text: '<span class="warn-text">If you\'re connecting to new plumbing</span> (adding a water connection, not using an existing tap), we recommend using a licensed plumber. Connecting to an existing tap is a DIY job most homeowners can manage.' },
          { type: 'normal', text: 'Adjust the four feet to level the machine. Turn on the water supply and run a short program to check for leaks before loading dishes.' }
        ]
      },
      troubleshoot: [
        {
          symptom: '🔴 Dishes not coming out clean',
          fixes: ['Check the dishwasher salt level — the indicator light on the door will show when empty.', 'Clean the spray arms — remove and rinse under the tap, clearing any blocked holes with a toothpick.', 'Make sure dishes aren\'t blocking the spray arms from spinning.', 'Clean the filter at the base of the drum monthly.']
        },
        {
          symptom: '🔴 Water left in the bottom after a cycle',
          fixes: ['Check the drain hose is elevated to at least 50cm before descending to the drain.', 'Clean the drain filter (at the base of the drum).', 'Check the drain hose for kinks or blockages.']
        },
        {
          symptom: '🟡 White residue or cloudy glasses',
          fixes: ['Top up the rinse aid dispenser — this is the most common cause of cloudy glasses.', 'Check your water hardness setting and add salt accordingly. NZ water varies significantly by region — Auckland is soft, Christchurch is harder.']
        }
      ],
      warranty: {
        coverage: '2 years parts & labour',
        includes: ['Manufacturing defects', 'Electronic control failures', 'Internal pump and motor'],
        excludes: ['Damage from incorrect installation', 'Blocked filters from food residue', 'Using incorrect detergent types'],
        repairs: []
      }
    }
  }
};
