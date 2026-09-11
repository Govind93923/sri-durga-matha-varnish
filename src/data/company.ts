export const COMPANY_INFO = {
  name: "Sri Durga Matha Varnish And Colors",
  shortName: "Sri Durga Matha",
  businessType: "Proprietorship",
  establishedDate: "23 August 2018",
  gstNumber: "37CMNPS8210B1ZY",
  annualTurnover: "0 - 40 L",
  proprietor: "Chetan Surakasi",
  phone: "+919059349103",
  phoneFormatted: "+91 90593 49103",
  phoneIntl: "+919059349103",
  whatsappNumber: "919059349103",
  
  address: {
    line1: "26-111/1 Ramarajya Nagar",
    line2: "Rural Krishna, V D Puram",
    city: "Vijayawada",
    district: "NTR",
    state: "Andhra Pradesh",
    pincode: "520012",
    country: "India",
    full: "26-111/1 Ramarajya Nagar, Rural Krishna, V D Puram, Vijayawada, NTR, Andhra Pradesh – 520012, India",
  },

  googleMapsUrl: "https://www.google.com/maps/search/?api=1&query=Sri+Durga+Matha+Varnish+And+Colors+26-111%2F1+Ramarajya+Nagar+V+D+Puram+Vijayawada+Andhra+Pradesh+520012",
  googleMapsEmbedUrl: "https://www.google.com/maps?q=26-111/1+Ramarajya+Nagar,+V+D+Puram,+Vijayawada,+Andhra+Pradesh+520012&output=embed",

  keyOfferings: [
    "Insulating Varnish Manufacturing",
    "Multiple Colour Options (Amber, Red, Orange, Clear, Custom)",
    "Custom Packaging Sizes",
    "Custom Packaging Boxes",
    "Direct Bulk Industrial Supply"
  ],

  whatsappTemplates: {
    general: "Hello Sri Durga Matha Varnish And Colors, I would like to know more about your company and products.",
    hero: "Hello Sri Durga Matha Varnish And Colors, I would like to know more about your insulating varnish products.",
    product: (productName: string) => `Hello, I am interested in ${productName} insulating varnish. Please share product details and available packaging options.`,
    color: (colorName: string) => `Hello, I am interested in insulating varnish in ${colorName} colour. Please share availability and minimum order quantities.`,
    customPackaging: "Hello, I am interested in custom packaging for insulating varnish. Please share the available options.",
    bulk: "Hello, I have a bulk requirement for insulating varnish. Please contact me with details.",
    formSubmission: (data: {
      name: string;
      companyName?: string;
      phone: string;
      product: string;
      colour: string;
      packaging: string;
      quantity: string;
      message?: string;
    }) => `*New Varnish Enquiry - Sri Durga Matha Website*
• *Name*: ${data.name}
• *Company*: ${data.companyName || 'Not specified'}
• *Phone*: ${data.phone}
• *Product*: ${data.product}
• *Colour*: ${data.colour}
• *Packaging*: ${data.packaging}
• *Quantity*: ${data.quantity}
• *Notes*: ${data.message || 'None'}`
  }
};

export const createWhatsAppLink = (message: string) => {
  return `https://wa.me/${COMPANY_INFO.whatsappNumber}?text=${encodeURIComponent(message)}`;
};
