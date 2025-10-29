
const outreachImages = import.meta.glob("/src/assets/medicalOutreach/**/*.{jpg,jpeg,png,webp}", { eager: true });

export function loadSlides(folderName) {
  const folderPrefix = `/src/assets/medicalOutreach/${folderName}/`;
  const slides = Object.entries(outreachImages)
    .filter(([path]) => path.startsWith(folderPrefix))
    .map(([, module]) => ({
      image: module.default,
      title: "",
    }));
  return slides;
}





// Import all the images by folder
const diabetesImages = import.meta.glob(
  "/src/assets/unitedNations/diabetes/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const internationalDayImages = import.meta.glob(
  "/src/assets/unitedNations/internationalDay/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const sightImages = import.meta.glob(
  "/src/assets/unitedNations/sight/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const aidsImages = import.meta.glob(
  "/src/assets/unitedNations/aids/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const asthmaImages = import.meta.glob(
  "/src/assets/unitedNations/asthma/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);
const malariaImages = import.meta.glob(
  "/src/assets/unitedNations/malaria/**/*.{jpg,jpeg,png,webp}",
  { eager: true }
);

// Group them into one collection object
const unitedNationCollections = {
  diabetes: diabetesImages,
  internationalDay: internationalDayImages,
  sight: sightImages,
  aids: aidsImages,
  asthma: asthmaImages,
  malaria: malariaImages,
};

// Generic loader function
export function loadUnitedNationSlides(folderName) {
  const images = unitedNationCollections[folderName];
  if (!images) {
    console.warn(`No images found for folder: ${folderName}`);
    return [];
  }

  return Object.values(images).map((img) => ({
    image: img.default,
    title: "",
  }));
}
