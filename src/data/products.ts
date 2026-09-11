import type { ProductItem, ColorVariant, PackagingOption } from '../types';

export const PRODUCTS: ProductItem[] = [
  {
    id: "industrial-insulating-varnish",
    name: "Industrial Insulating Varnish (Amber Golden)",
    subtitle: "Synthetic Resin Formulation",
    tagline: "Manufactured for electrical insulation, winding protection, and environmental resistance.",
    description: "Our flagship amber golden insulating varnish manufactured at our Vijayawada facility. Specially formulated for electrical windings, coils, and industrial machinery components requiring durable moisture and insulation barriers.",
    image: "/images/products/amber-bottle.webp",
    imageAlt: "Sri Durga Matha Varnish 1 Litre Amber Golden Bottle",
    badge: "Core Offering",
    applications: [
      "Electrical motor rewinding & assembly",
      "Transformer coil impregnation",
      "Stator & rotor winding coating",
      "Industrial electrical coils & relays",
      "General electrical equipment maintenance"
    ],
    colours: [
      { name: "Amber Golden", hex: "#d97706", description: "Standard industrial amber finish" },
      { name: "Ruby Red", hex: "#b91c1c", description: "High-contrast visual inspection finish" },
      { name: "Industrial Orange", hex: "#ea580c", description: "Vibrant high-visibility protective tone" },
      { name: "Clear / Transparent", hex: "#38bdf8", description: "Natural transparent resin coating" },
      { name: "Custom Shades", hex: "#ca8a04", description: "Batch formulated on customer request" }
    ],
    packagingOptions: [
      "1 Litre Container",
      "5 Litre Canister",
      "200 Litre Industrial Drum",
      "Custom Box Packaging"
    ],
    technicalInfo: "Class F / Class H rated resin base. High dielectric strength, thermal endurance, and moisture resistance.",
    recommendedFor: "Motor manufacturers, rewinding shops, transformer makers"
  },
  {
    id: "colored-insulating-varnish",
    name: "Ruby Red Insulating Varnish",
    subtitle: "Visual Differentiation & High Adhesion",
    tagline: "Distinguish phases, components, and inspection stages with verified color tones.",
    description: "Insulating varnish enriched with specialized ruby red pigments for industrial distinction. Facilitates quality control inspections while offering solid dielectric coverage and a smooth, glossy protective surface coat.",
    image: "/images/products/ruby-red-bottle.webp",
    imageAlt: "Sri Durga Matha Varnish 1 Litre Ruby Red Bottle",
    badge: "High Visibility",
    applications: [
      "Phase identification in motor winding",
      "Inspection verification coatings",
      "Reconditioning of electrical stators",
      "Coil sealing & tamper-evident coats"
    ],
    colours: [
      { name: "Ruby Red", hex: "#b91c1c" },
      { name: "Amber Brown", hex: "#92400e" },
      { name: "Industrial Orange", hex: "#ea580c" },
      { name: "Deep Gold", hex: "#ca8a04" }
    ],
    packagingOptions: [
      "1 Litre Plastic Bottles",
      "5 Litre Metal / Plastic Cans",
      "Custom Packed Master Cartons"
    ],
    technicalInfo: "Excellent adhesion to enameled copper wire. Distinctive coloration assists optical inspection and quality auditing.",
    recommendedFor: "OEM electrical assemblers, component repair workshops"
  },
  {
    id: "orange-insulating-varnish",
    name: "Industrial Orange Insulating Varnish",
    subtitle: "High-Visibility Protective Tone",
    tagline: "Superior flow properties and distinctive high-visibility coating for heavy-duty motors.",
    description: "Vibrant industrial orange insulating varnish formulation engineered for superior penetration into winding interstices. Provides exceptional surface tracking resistance and clear visual demarcation of coated assemblies.",
    image: "/images/products/orange-bottle.webp",
    imageAlt: "Sri Durga Matha Varnish 1 Litre Industrial Orange Bottle",
    badge: "Popular Option",
    applications: [
      "Heavy industrial motor rewinding",
      "High-vibration coil encapsulation",
      "Armature winding protection",
      "Submersible pump motor sealing"
    ],
    colours: [
      { name: "Industrial Orange", hex: "#ea580c" },
      { name: "Golden Amber", hex: "#d97706" },
      { name: "Ruby Red", hex: "#b91c1c" }
    ],
    packagingOptions: [
      "1 Litre Easy-Grip Bottle",
      "5 Litre Workshop Canister",
      "200 Litre Bulk Drum"
    ],
    technicalInfo: "Rapid curing profile, high thermal degradation resistance, and strong chemical barrier.",
    recommendedFor: "Submersible pump makers, heavy motor rewinders, industrial maintenance"
  },
  {
    id: "clear-insulating-varnish",
    name: "Clear Transparent Insulating Varnish",
    subtitle: "Natural Copper & Winding Inspection",
    tagline: "Crystal-clear protective coat preserving the true appearance of underlying wire and core.",
    description: "Transparent insulating varnish formulated for applications where optical clarity of copper winding, insulating tape, and connection tags must remain fully visible after curing.",
    image: "/images/products/clear-bottle.webp",
    imageAlt: "Sri Durga Matha Varnish 1 Litre Clear Bottle",
    badge: "True Tone",
    applications: [
      "Precision electrical coils",
      "Transformer copper winding protection",
      "Clear visual inspection assemblies",
      "Electronic sub-assembly moisture sealing"
    ],
    colours: [
      { name: "Clear Transparent", hex: "#38bdf8" },
      { name: "Amber Golden", hex: "#d97706" }
    ],
    packagingOptions: [
      "1 Litre Bottle",
      "5 Litre Can",
      "Custom Packaging"
    ],
    technicalInfo: "Non-yellowing clear resin, high dielectric resistance, excellent oil and moisture repellency.",
    recommendedFor: "Precision instrument makers, transformer manufacturers, laboratory setups"
  },
  {
    id: "bulk-drum-varnish",
    name: "Bulk Varnish Supply (5L Cans & 200L Drums)",
    subtitle: "Industrial Batch & OEM Factory Volume",
    tagline: "Direct plant-to-plant supply in heavy-duty 5L containers and 200L steel drums.",
    description: "Engineered for high-throughput electrical factories and regional distribution hubs requiring bulk varnish supplies. Delivered in heavy-duty factory containers with quality seal integrity.",
    image: "/images/packaging/pkg-can-5l.webp",
    imageAlt: "Sri Durga Matha Varnish 5L Canister and Drum Supply",
    badge: "Factory Bulk",
    applications: [
      "Automated motor dipping & impregnation vats",
      "Transformer manufacturing production lines",
      "Regional distributor stock replenishment",
      "OEM bulk electrical component processing"
    ],
    colours: [
      { name: "Amber Golden", hex: "#d97706" },
      { name: "Ruby Red", hex: "#b91c1c" },
      { name: "Industrial Orange", hex: "#ea580c" },
      { name: "Clear Transparent", hex: "#38bdf8" }
    ],
    packagingOptions: [
      "5 Litre Heavy Canister with Pour Handle",
      "25 kg / 200 Litre Industrial Steel Drum",
      "Custom Pallet & Bulk Consignments"
    ],
    technicalInfo: "Consistent batch viscosity, certified batch quality test reports, and secure industrial transit sealing.",
    recommendedFor: "OEM manufacturers, transformer plants, industrial distributors"
  },
  {
    id: "custom-batch-varnish",
    name: "Custom Packaging & Corrugated Outer Boxes",
    subtitle: "Bespoke Pack Sizes & Stitched Cartons",
    tagline: "Custom sizes, custom pack counts, and private box packaging direct from manufacturer.",
    description: "Sri Durga Matha Varnish And Colors provides end-to-end packaging flexibility. Using our in-house box cutting, scoring, and stitching machinery, we manufacture custom heavy-duty corrugated cartons tailored to your logistics requirements.",
    image: "/images/packaging/pkg-custom-box.webp",
    imageAlt: "Custom Corrugated Packaging Box Manufacturing",
    badge: "In-House Packaging",
    applications: [
      "Wholesale distributors requiring tailored carton quantities",
      "Maintenance units requiring single-use compact packaging",
      "Regional dealers requiring heavy-duty transit protection",
      "Private branding and custom master shipper cartons"
    ],
    colours: [
      { name: "Amber", hex: "#d97706" },
      { name: "Red", hex: "#b91c1c" },
      { name: "Orange", hex: "#ea580c" },
      { name: "Custom", hex: "#64748b" }
    ],
    packagingOptions: [
      "Custom carton dimensions",
      "Heavy-gauge stitched corrugated boxes",
      "Custom printed master shippers",
      "Safe shock-absorbing partitions"
    ],
    technicalInfo: "In-house corrugated box cutting, scoring, and heavy stitching for superior transit durability.",
    recommendedFor: "Distributors, dealers, and bulk industrial buyers"
  }
];

export const COLOR_VARIANTS: ColorVariant[] = [
  {
    id: "amber-golden",
    name: "Amber Golden",
    hex: "#d97706",
    liquidColor: "#b45309",
    glowColor: "rgba(217, 119, 6, 0.4)",
    description: "The traditional industrial amber varnish. Provides high gloss sheen, smooth penetration, and clear visibility of winding wire underneath.",
    image: "/images/products/amber-bottle.webp",
    badge: "Industry Standard",
    popularUse: "Motor rewinders & general industrial transformers"
  },
  {
    id: "ruby-red",
    name: "Ruby Red",
    hex: "#b91c1c",
    liquidColor: "#991b1b",
    glowColor: "rgba(185, 28, 28, 0.4)",
    description: "Deep, saturated ruby red varnish. Widely chosen for high-visibility quality inspection, sealing joints, and distinguished coil wraps.",
    image: "/images/products/ruby-red-bottle.webp",
    badge: "High Visibility",
    popularUse: "Stator end-turns, visual inspection coats"
  },
  {
    id: "industrial-orange",
    name: "Industrial Orange",
    hex: "#ea580c",
    liquidColor: "#c2410c",
    glowColor: "rgba(234, 88, 12, 0.4)",
    description: "Vibrant industrial orange hue providing distinct visual separation. Excellent flow properties for uniform dip or brush application.",
    image: "/images/products/orange-bottle.webp",
    badge: "Popular Option",
    popularUse: "Coil insulation and heavy motor components"
  },
  {
    id: "clear-amber",
    name: "Clear Transparent",
    hex: "#38bdf8",
    liquidColor: "#0284c7",
    glowColor: "rgba(56, 189, 248, 0.35)",
    description: "Clean transparent varnish maintaining true visual appearance of bare copper, insulation tape, and winding substrates.",
    image: "/images/products/clear-bottle.webp",
    badge: "True Tone",
    popularUse: "Precision coils & transparent protective coats"
  },
  {
    id: "custom-shade",
    name: "Complete Lineup & Custom Formulations",
    hex: "#8b5cf6",
    liquidColor: "#6d28d9",
    glowColor: "rgba(139, 92, 246, 0.4)",
    description: "Have a specific project or client requirement? We accommodate custom colour formulations and supply across 1L, 5L, and 200L formats.",
    image: "/images/products/hero-lineup.webp",
    badge: "Full Lineup",
    popularUse: "Tailored manufacturing & proprietary industrial supply"
  }
];

export const PACKAGING_OPTIONS: PackagingOption[] = [
  {
    id: "bottle-1l",
    title: "1 Litre Easy-Grip Bottle",
    capacity: "1 Litre (1000 ml)",
    category: "bottle",
    material: "High-density polymer with tamper-resistant screw cap",
    description: "Compact, ergonomic container ideal for daily motor winding, localized coil repair, and workshop workstations.",
    image: "/images/packaging/pkg-bottle-1l.webp",
    secondaryImage: "/images/products/amber-bottle.webp",
    dimensions: "Standard cylindrical workshop format",
    suitableFor: "Rewinding shops, electrical service centers, repair technicians",
    badge: "Most Popular"
  },
  {
    id: "can-5l",
    title: "5 Litre Workshop Canister",
    capacity: "5 Litres",
    category: "can",
    material: "Reinforced industrial container with integrated handle and pour spout",
    description: "Optimized for medium-scale electrical manufacturing units requiring frequent dipping and brush applications.",
    image: "/images/packaging/pkg-can-5l.webp",
    secondaryImage: "/images/packaging/pkg-5l-inventory.webp",
    dimensions: "Square-profile canister with double yellow carry loop",
    suitableFor: "Medium manufacturers, assembly lines, motor repair yards",
    badge: "Workshop Choice"
  },
  {
    id: "drum-20l",
    title: "200L Industrial Bulk Drum",
    capacity: "25kg / 200 Litres Bulk",
    category: "drum",
    material: "Heavy-duty industrial grade steel drum with secure bung seal",
    description: "High-capacity supply for industrial dipping tanks, continuous impregnation processes, and high-volume transformer plants.",
    image: "/images/packaging/pkg-drum-200l.webp",
    secondaryImage: "/images/facility/facility-bulk-drums.webp",
    dimensions: "Heavy-gauge industrial drum packaging",
    suitableFor: "Transformer manufacturers, OEM motor lines, bulk contractors",
    badge: "Bulk Value"
  },
  {
    id: "custom-box",
    title: "Custom Outer Packaging Boxes",
    capacity: "Custom Unit Packings",
    category: "box",
    material: "In-house scored, slotted & stitched corrugated cartons",
    description: "We design and fabricate customized corrugated packaging boxes and master shipper cartons using our in-house stitching and scoring machinery.",
    image: "/images/packaging/pkg-custom-box.webp",
    secondaryImage: "/images/packaging/pkg-carton-stacks.webp",
    dimensions: "Customizable box dimensions & counts",
    suitableFor: "Distributors, brand resellers, bulk transport logistics",
    badge: "In-House Made"
  }
];
