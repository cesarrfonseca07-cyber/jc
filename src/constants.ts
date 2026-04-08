export const PRODUCT_NAME = "Mascarilla Termal Botanic Ritual";

export const PRICES = {
  free: {
    usd: 0,
    label: "Prueba Gratuita",
    description: "Descubre la textura y el poder del lodo sin compromiso."
  },
  single: {
    usd: 3,
    label: "Aplicación Suelta",
    description: "Servicio presencial o guiado a domicilio."
  },
  jar: {
    usd: 50,
    label: "Frasco Completo (120g)",
    description: "Ideal para uso continuo en casa. Rinde para 50 aplicaciones."
  }
};

export const STEPS = [
  {
    id: 1,
    title: "PASO 1: Preparación",
    description: "Lava tu cara con agua fría (nada de agua caliente).",
    icon: "Droplets",
    color: "bg-blue-100 text-blue-600"
  },
  {
    id: 2,
    title: "PASO 2: Aplicación",
    description: "Aplica el producto con la cara aún mojada. Deja actuar de 5 a 10 minutos.",
    icon: "Sparkles",
    color: "bg-emerald-100 text-emerald-600"
  },
  {
    id: 3,
    title: "PASO 3: Limpieza",
    description: "Lava nuevamente tu cara con agua fría.",
    icon: "Waves",
    color: "bg-cyan-100 text-cyan-600"
  },
  {
    id: 4,
    title: "PASO 4: Cierre Térmico",
    description: "Introduce tu cara en un recipiente con agua y hielo (unos segundos). Esto cierra los poros, ilumina la piel y reduce la picazón.",
    icon: "IceCream", // Using IceCream as a proxy for ice if needed, or Snowflake
    color: "bg-sky-100 text-sky-600"
  }
];

export const BENEFITS = [
  {
    title: "Reduce Grasa",
    description: "Piel más mate y equilibrada.",
    icon: "Zap"
  },
  {
    title: "Combate Espinillas",
    description: "Menos imperfecciones y barros.",
    icon: "ShieldCheck"
  },
  {
    title: "Reduce Arrugas",
    description: "Suaviza líneas de expresión.",
    icon: "Sparkles"
  },
  {
    title: "Atenúa Manchas",
    description: "Uniformiza el tono de la piel.",
    icon: "Eye"
  },
  {
    title: "Renovación Celular",
    description: "Piel más joven y luminosa.",
    icon: "Waves"
  },
  {
    title: "Minerales Termales",
    description: "Nutrición profunda y natural.",
    icon: "Mountain"
  }
];
