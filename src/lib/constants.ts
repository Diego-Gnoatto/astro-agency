// =============================================
// CLIENT CONFIGURATION - Replace all {{PLACEHOLDER}} values
// =============================================

export const SITE = {
  name: '{{AGENCY_NAME}}',
  shortName: '{{AGENCY_SHORT_NAME}}',
  domain: '{{DOMAIN}}',
  url: 'https://{{DOMAIN}}',
} as const;

export const COMPANY = {
  description: '{{AGENCY_DESCRIPTION}}',
  city: '{{CITY}}',
  state: '{{STATE}}',
} as const;

export const CONTACT = {
  phone: '{{PHONE_FULL}}',
  phoneFormatted: '{{PHONE_FORMATTED}}',
  whatsapp: '{{WHATSAPP_NUMBER}}',
  whatsappLink: 'https://wa.me/{{WHATSAPP_NUMBER}}',
  email: '{{EMAIL}}',
  address: {
    street: '{{STREET}}',
    city: '{{CITY}}',
    state: '{{STATE}}',
    full: '{{FULL_ADDRESS}}',
  },
} as const;

export const SERVICES = [
  { name: '{{SERVICE_1_NAME}}', slug: '{{SERVICE_1_SLUG}}', description: '{{SERVICE_1_DESC}}' },
  { name: '{{SERVICE_2_NAME}}', slug: '{{SERVICE_2_SLUG}}', description: '{{SERVICE_2_DESC}}' },
  { name: '{{SERVICE_3_NAME}}', slug: '{{SERVICE_3_SLUG}}', description: '{{SERVICE_3_DESC}}' },
] as const;

export const PROCESS_STEPS = [
  { step: 1, title: '{{STEP_1_TITLE}}', description: '{{STEP_1_DESC}}' },
  { step: 2, title: '{{STEP_2_TITLE}}', description: '{{STEP_2_DESC}}' },
  { step: 3, title: '{{STEP_3_TITLE}}', description: '{{STEP_3_DESC}}' },
  { step: 4, title: '{{STEP_4_TITLE}}', description: '{{STEP_4_DESC}}' },
] as const;

export const FAQ = [
  { question: '{{FAQ_1_Q}}', answer: '{{FAQ_1_A}}' },
  { question: '{{FAQ_2_Q}}', answer: '{{FAQ_2_A}}' },
  { question: '{{FAQ_3_Q}}', answer: '{{FAQ_3_A}}' },
] as const;
