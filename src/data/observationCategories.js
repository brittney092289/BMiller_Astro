import solar from "../images/observations/categories/third-positive-color.jpg";
import lunar from "../images/observations/categories/mineral_moon.jpg";
import planetary from "../images/observations/categories/Saturn_IR_91923.jpg";
import galaxy from "../images/observations/categories/m77.jpg";
import nebula from "../images/observations/categories/horsehead_nebula.jpg";
import clusters from "../images/observations/categories/hercules.jpeg";
import doubles from "../images/observations/categories/m77.jpg";
import comet from "../images/observations/categories/C_2025_A6_Lemmon_Mansfield_B4_102425_4.png";

export const observationCategories = [
  {
    slug: "solar",
    label: "Solar",
    description: "Sunspots, prominences, eclipses, and solar imaging.",
    image: solar,
  },
  {
    slug: "lunar",
    label: "Lunar",
    description: "Lunar landscapes, craters, maria, and transient lighting.",
    image: lunar,
  },
  {
    slug: "planetary",
    label: "Planetary",
    description: "Observations and imaging of planets and their moons.",
    image: planetary,
  },
  {
    slug: "galaxy",
    label: "Galaxies",
    description: "Observations of galaxies beyond the Milky Way.",
    image: galaxy,
  },
  {
    slug: "nebula",
    label: "Nebulae",
    description: "Emission, reflection, planetary, and dark nebulae.",
    image: nebula,
  },
  {
    slug: "star-cluster",
    label: "Star Clusters",
    description: "Open and globular star clusters.",
    image: clusters,
  },
  {
    slug: "double-star",
    label: "Double Stars",
    description: "Visual and imaging observations of multiple-star systems.",
    image: doubles,
  },
  {
    slug: "comet",
    label: "Comets",
    description: "Comet observations, imaging, and motion over time.",
    image: comet,
  },
];